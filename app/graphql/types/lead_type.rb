module Types
  class LeadType < Types::BaseObject
    implements GraphQL::Types::Relay::Node
    global_id_field :id
    
    field :name, String, null: false
    field :email, String, null: false
    field :phone, String, null: false
    field :notes, String, null: true
    field :conversion_state, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :user_id, Integer, null: true
    field :assess_campaign_id, Integer, null: true
    
    field :assess_campaign, Types::AssessCampaignType, null: true
    def assess_campaign
      object.assess_campaign
    end
    
    field :conversion_state_text, String, null: false
    def conversion_state_text
      object.conversion_state.humanize
    end
  end
end