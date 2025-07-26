module Mutations
  class UpdateAssessCampaign < BaseMutation
    argument :id, ID, required: true
    argument :name, String, required: false
    argument :description, String, required: false
    argument :start_date, GraphQL::Types::ISO8601Date, required: false
    argument :end_date, GraphQL::Types::ISO8601Date, required: false
    argument :status, Integer, required: false

    field :assess_campaign, Types::AssessCampaignType, null: true
    field :errors, [String], null: false

    def resolve(id:, **attributes)
      assess_campaign = AssessCampaign.find(id)
      
      if assess_campaign.update(attributes)
        { assess_campaign: assess_campaign, errors: [] }
      else
        { assess_campaign: nil, errors: assess_campaign.errors.full_messages }
      end
    end
  end
end