module Mutations
  class DeleteLead < BaseMutation
    argument :id, ID, required: true

    field :id, ID, null: true
    field :errors, [String], null: false

    def resolve(id:)
      lead = Lead.find(id)
      
      if lead.destroy
        { id: id, errors: [] }
      else
        { id: nil, errors: lead.errors.full_messages }
      end
    end
  end
end