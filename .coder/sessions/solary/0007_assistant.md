For the next improvement, I recommend implementing a robust authorization system using Pundit to ensure proper access control throughout the application. This will enhance security and provide fine-grained permissions management.

### 1. Add Pundit for Authorization

### Gemfile [coder:save]
```ruby
# Add this line to your existing Gemfile
gem 'pundit'
```
[coder:end]

### app/controllers/application_controller.rb [coder:save]
```ruby
class ApplicationController < ActionController::Base
  include ActionController::MimeResponds
  include Pundit::Authorization
  
  before_action :set_paper_trail_whodunnit
  before_action :append_info_to_payload
  
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
  
  protected
  
  def append_info_to_payload(payload = {})
    payload[:host] = request.host
    payload[:remote_ip] = request.remote_ip
    payload[:user_id] = current_user&.id
    payload[:request_id] = request.request_id
  end
  
  def user_for_paper_trail
    current_user&.id
  end
  
  private
  
  def user_not_authorized
    flash[:alert] = "You are not authorized to perform this action."
    
    respond_to do |format|
      format.html { redirect_to(request.referrer || root_path) }
      format.json { render json: { error: "Not authorized" }, status: :forbidden }
    end
  end
end
```
[coder:end]

### app/policies/application_policy.rb [coder:save]
```ruby
class ApplicationPolicy
  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    @record = record
  end

  def index?
    false
  end

  def show?
    false
  end

  def create?
    false
  end

  def new?
    create?
  end

  def update?
    false
  end

  def edit?
    update?
  end

  def destroy?
    false
  end

  class Scope
    def initialize(user, scope)
      @user = user
      @scope = scope
    end

    def resolve
      raise NotImplementedError, "You must define #resolve in #{self.class}"
    end

    private

    attr_reader :user, :scope
  end
  
  private
  
  def admin?
    user&.role == 'admin'
  end
  
  def manager?
    user&.role == 'manager' || admin?
  end
  
  def owner?
    record.respond_to?(:user_id) && record.user_id == user&.id
  end
end
```
[coder:end]

### app/policies/assess_campaign_policy.rb [coder:save]
```ruby
class AssessCampaignPolicy < ApplicationPolicy
  def index?
    true
  end

  def show?
    true
  end

  def create?
    manager?
  end

  def update?
    manager? || owner?
  end

  def destroy?
    admin?
  end
  
  class Scope < Scope
    def resolve
      if user&.role == 'admin'
        scope.all
      elsif user&.role == 'manager'
        scope.all
      else
        scope.where(status: :active)
      end
    end
  end
end
```
[coder:end]

### app/policies/lead_policy.rb [coder:save]
```ruby
class LeadPolicy < ApplicationPolicy
  def index?
    true
  end

  def show?
    manager? || owner?
  end

  def create?
    true
  end

  def update?
    manager? || owner?
  end

  def destroy?
    admin?
  end
  
  def export?
    manager?
  end
  
  class Scope < Scope
    def resolve
      if user&.role == 'admin' || user&.role == 'manager'
        scope.all
      else
        scope.where(user_id: user&.id)
      end
    end
  end
end
```
[coder:end]

### app/controllers/api/v1/assess_campaigns_controller.rb [coder:save]
```ruby
module Api
  module V1
    class AssessCampaignsController < ApplicationController
      before_action :set_assess_campaign, only: [:show, :update, :destroy]
      before_action :authorize_assess_campaign, except: [:index, :create]

      def index
        @assess_campaigns = policy_scope(AssessCampaign)
        render json: @assess_campaigns
      end

      def show
        render json: @assess_campaign
      end

      def create
        authorize AssessCampaign
        
        result = AssessCampaigns::CreateService.call(params: params, user: current_user)
        
        if result[:success]
          render json: result[:campaign], status: :created
        else
          render json: { errors: result[:errors] }, status: :unprocessable_entity
        end
      end

      def update
        if @assess_campaign.update(assess_campaign_params)
          render json: @assess_campaign
        else
          render json: { errors: @assess_campaign.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        @assess_campaign.destroy
        head :no_content
      end

      private

      def set_assess_campaign
        @assess_campaign = AssessCampaign.find(params[:id])
      end
      
      def authorize_assess_campaign
        authorize @assess_campaign
      end

      def assess_campaign_params
        params.require(:assess_campaign).permit(:name, :description, :start_date, :end_date, :status)
      end
    end
  end
end
```
[coder:end]

### app/controllers/api/v1/leads_controller.rb [coder:save]
```ruby
module Api
  module V1
    class LeadsController < ApplicationController
      before_action :set_lead, only: [:show, :update, :destroy]
      before_action :authorize_lead, except: [:index, :create, :export]

      def index
        @leads = policy_scope(Lead)
        render json: @leads
      end

      def show
        render json: @lead
      end

      def create
        authorize Lead
        
        @lead = Lead.new(lead_params)
        @lead.user_id = current_user.id if current_user

        if @lead.save
          render json: @lead, status: :created
        else
          render json: { errors: @lead.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        if @lead.update(lead_params)
          render json: @lead
        else
          render json: { errors: @lead.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        @lead.destroy
        head :no_content
      end
      
      def export
        authorize Lead, :export?
        
        @leads = policy_scope(Lead)
        send_data @leads.to_csv, filename: "leads-#{Date.today}.csv"
      end

      private

      def set_lead
        @lead = Lead.find(params[:id])
      end
      
      def authorize_lead
        authorize @lead
      end

      def lead_params
        params.require(:lead).permit(:name, :email, :phone, :assess_campaign_id, :conversion_state, :notes)
      end
    end
  end
end
```
[coder:end]

### config/routes.rb [coder:save]
```ruby
Rails.application.routes.draw do
  # Health check endpoint
  get '/health', to: 'health#check'
  
  # API routes with versioning
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :assess_campaigns
      resources :categories
      resources :certifications
      resources :companies
      resources :contents
      resources :discussions
      resources :feature_groups
      resources :features
      resources :leads do
        collection do
          get :export
        end
      end
      resources :marketing_campaigns
      resources :pricing_rules
      resources :pricings
      resources :products
      resources :quotes
      resources :replies
      resources :reviews
      resources :saas_leads
      resources :saas_plans
      resources :saas_products
      resources :users, only: [:index, :show]
    end
    
    namespace :v2 do
      resources :assess_campaigns
      resources :leads do
        collection do
          get :export
        end
      end
      resources :products
      # Add other v2 resources as needed
    end
  end
  
  # Rest of your routes...
end
```
[coder:end]

### 2. Add Policy Tests

### spec/policies/assess_campaign_policy_spec.rb [coder:save]
```ruby
require 'rails_helper'

RSpec.describe AssessCampaignPolicy do
  subject { described_class }

  let(:admin) { User.new(role: 'admin') }
  let(:manager) { User.new(role: 'manager') }
  let(:regular_user) { User.new(role: 'user') }
  let(:owner) { User.new(id: 1, role: 'user') }
  let(:assess_campaign) { AssessCampaign.new(user_id: owner.id) }

  permissions :index?, :show? do
    it "grants access to all users" do
      expect(subject).to permit(admin, assess_campaign)
      expect(subject).to permit(manager, assess_campaign)
      expect(subject).to permit(regular_user, assess_campaign)
      expect(subject).to permit(owner, assess_campaign)
    end
  end

  permissions :create? do
    it "grants access to admins and managers" do
      expect(subject).to permit(admin, assess_campaign)
      expect(subject).to permit(manager, assess_campaign)
      expect(subject).not_to permit(regular_user, assess_campaign)
    end
  end

  permissions :update? do
    it "grants access to admins, managers, and owners" do
      expect(subject).to permit(admin, assess_campaign)
      expect(subject).to permit(manager, assess_campaign)
      expect(subject).not_to permit(regular_user, assess_campaign)
      expect(subject).to permit(owner, assess_campaign)
    end
  end

  permissions :destroy? do
    it "grants access only to admins" do
      expect(subject).to permit(admin, assess_campaign)
      expect(subject).not_to permit(manager, assess_campaign)
      expect(subject).not_to permit(regular_user, assess_campaign)
      expect(subject).not_to permit(owner, assess_campaign)
    end
  end

  describe "scope" do
    let(:scope) { Pundit.policy_scope!(user, AssessCampaign) }
    let(:user) { nil }

    context "for an admin" do
      let(:user) { admin }
      it "shows all campaigns" do
        expect(AssessCampaign).to receive(:all)
        scope
      end
    end

    context "for a manager" do
      let(:user) { manager }
      it "shows all campaigns" do
        expect(AssessCampaign).to receive(:all)
        scope
      end
    end

    context "for a regular user" do
      let(:user) { regular_user }
      it "shows only active campaigns" do
        expect(AssessCampaign).to receive(:where).with(status: :active)
        scope
      end
    end
  end
end
```
[coder:end]

This implementation adds a robust authorization system using Pundit, which provides several key benefits:

1. **Fine-grained access control**: Different user roles (admin, manager, regular user) have different permissions.

2. **Policy objects**: Each resource has its own policy that defines what actions are allowed for which users.

3. **Policy scopes**: Control what data users can see based on their role.

4. **Authorization checks**: Controllers now check if users are authorized before performing actions.

5. **Testing**: Policy tests ensure that authorization rules work as expected.

This improvement significantly enhances the security of your application by ensuring that users can only access and modify resources they're authorized to interact with. It also makes the authorization logic explicit and testable, rather than scattered throughout controllers.

The next steps after implementing this authorization system could include:

1. Adding more granular roles and permissions
2. Implementing row-level security for multi-tenant scenarios
3. Adding an audit trail for authorization decisions
4. Creating an admin interface for managing roles and permissions