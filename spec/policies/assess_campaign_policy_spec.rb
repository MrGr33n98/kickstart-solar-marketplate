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