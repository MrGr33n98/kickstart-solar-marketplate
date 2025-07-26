module Api
  module V2
    class AssessCampaignsController < BaseController
      before_action :set_assess_campaign, only: [:show, :update, :destroy]

      def index
        @assess_campaigns = AssessCampaign.includes(:leads).all
        render json: @assess_campaigns, each_serializer: V2::AssessCampaignSerializer
      end

      def show
        render json: @assess_campaign, serializer: V2::AssessCampaignSerializer
      end

      def create
        result = AssessCampaigns::CreateService.call(params: params, user: current_user)
        
        if result[:success]
          # Notify admin users about new campaign
          AdminUser.all.each do |admin|
            NotificationJob.perform_later(admin.id, 'campaign_created', { campaign_id: result[:campaign].id })
          end
          
          render json: result[:campaign], serializer: V2::AssessCampaignSerializer, status: :created
        else
          render json: { errors: result[:errors] }, status: :unprocessable_entity
        end
      end

      def update
        if @assess_campaign.update(assess_campaign_params)
          render json: @assess_campaign, serializer: V2::AssessCampaignSerializer
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

      def assess_campaign_params
        params.require(:assess_campaign).permit(:name, :description, :start_date, :end_date, :status)
      end
    end
  end
end