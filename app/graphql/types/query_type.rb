module Types
  class QueryType < Types::BaseObject
    field :node, Types::NodeType, null: true, description: "Fetches an object given its ID" do
      argument :id, ID, required: true, description: "ID of the object"
    end

    def node(id:)
      context.schema.object_from_id(id, context)
    end

    field :nodes, [Types::NodeType, null: true], null: true, description: "Fetches a list of objects given a list of IDs" do
      argument :ids, [ID], required: true, description: "IDs of the objects"
    end

    def nodes(ids:)
      ids.map { |id| context.schema.object_from_id(id, context) }
    end

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :assess_campaigns, [Types::AssessCampaignType], null: false, description: "Returns a list of assess campaigns"
    def assess_campaigns
      AssessCampaign.all
    end

    field :assess_campaign, Types::AssessCampaignType, null: true, description: "Returns a single assess campaign" do
      argument :id, ID, required: true, description: "ID of the assess campaign"
    end
    def assess_campaign(id:)
      AssessCampaign.find(id)
    end

    field :leads, [Types::LeadType], null: false, description: "Returns a list of leads"
    def leads
      Lead.all
    end

    field :lead, Types::LeadType, null: true, description: "Returns a single lead" do
      argument :id, ID, required: true, description: "ID of the lead"
    end
    def lead(id:)
      Lead.find(id)
    end
  end
end