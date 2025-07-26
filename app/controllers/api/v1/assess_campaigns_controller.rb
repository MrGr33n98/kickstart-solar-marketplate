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