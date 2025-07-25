module AssessCampaigns
  class CreateService < ApplicationService
    attr_reader :params, :user

    def initialize(params:, user:)
      @params = params
      @user = user
    end

    def call
      campaign = AssessCampaign.new(campaign_params)
      campaign.created_by = user.id if user
      
      if campaign.save
        { success: true, campaign: campaign }
      else
        { success: false, errors: campaign.errors.full_messages }
      end
    end

    private

    def campaign_params
      params.require(:assess_campaign).permit(:name, :description, :start_date, :end_date, :status)
    end
  end
end