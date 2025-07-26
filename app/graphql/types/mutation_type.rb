module Types
  class MutationType < Types::BaseObject
    field :create_assess_campaign, mutation: Mutations::CreateAssessCampaign
    field :update_assess_campaign, mutation: Mutations::UpdateAssessCampaign
    field :delete_assess_campaign, mutation: Mutations::DeleteAssessCampaign
    
    field :create_lead, mutation: Mutations::CreateLead
    field :update_lead, mutation: Mutations::UpdateLead
    field :delete_lead, mutation: Mutations::DeleteLead
  end
end