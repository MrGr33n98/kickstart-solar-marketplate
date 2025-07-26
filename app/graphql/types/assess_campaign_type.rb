module Types
  class AssessCampaignType < Types::BaseObject
    implements GraphQL::Types::Relay::Node
    global_id_field :id
    
    field :name, String, null: false
    field :description, String, null: true
    field :start_date, GraphQL::Types::ISO8601Date, null: true
    field :end_date, GraphQL::Types::ISO8601Date, null: true
    field :status, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :created_by, Integer, null: true
    
    field :leads, [Types::LeadType], null: true
    def leads
      object.leads
    end
    
    field :status_text, String, null: false
    def status_text
      case object.status
      when 0
        'Draft'
      when 1
        'Active'
      when 2
        'Completed'
      when 3
        'Cancelled'
      else
        'Unknown'
      end
    end
  end
end