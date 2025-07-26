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