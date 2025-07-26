module Mutations
  class UpdateLead < BaseMutation
    argument :id, ID, required: true
    argument :name, String, required: false
    argument :email, String, required: false
    argument :phone, String, required: false
    argument :notes, String, required: false
    argument :conversion_state, Integer, required: false
    argument :assess_campaign_id, ID, required: false

    field :lead, Types::LeadType, null: true
    field :errors, [String], null: false

    def resolve(id:, **attributes)
      lead = Lead.find(id)
      
      if lead.update(attributes)
        { lead: lead, errors: [] }
      else
        { lead: nil, errors: lead.errors.full_messages }
      end
    end
  end
end