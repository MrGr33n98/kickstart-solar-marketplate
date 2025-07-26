module Mutations
  class DeleteAssessCampaign < BaseMutation
    argument :id, ID, required: true

    field :id, ID, null: true
    field :errors, [String], null: false

    def resolve(id:)
      assess_campaign = AssessCampaign.find(id)
      
      if assess_campaign.destroy
        { id: id, errors: [] }
      else
        { id: nil, errors: assess_campaign.errors.full_messages }
      end
    end
  end
end