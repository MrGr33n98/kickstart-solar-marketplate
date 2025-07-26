module Mutations
  class CreateAssessCampaign < BaseMutation
    argument :name, String, required: true
    argument :description, String, required: false
    argument :start_date, GraphQL::Types::ISO8601Date, required: false
    argument :end_date, GraphQL::Types::ISO8601Date, required: false
    argument :status, Integer, required: true

    field :assess_campaign, Types::AssessCampaignType, null: true
    field :errors, [String], null: false

    def resolve(name:, description: nil, start_date: nil, end_date: nil, status:)
      assess_campaign = AssessCampaign.new(
        name: name,
        description: description,
        start_date: start_date,
        end_date: end_date,
        status: status,
        created_by: context[:current_user]&.id
      )

      if assess_campaign.save
        { assess_campaign: assess_campaign, errors: [] }
      else
        { assess_campaign: nil, errors: assess_campaign.errors.full_messages }
      end
    end
  end
end