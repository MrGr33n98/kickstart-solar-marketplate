module Types
  class BaseConnection < GraphQL::Types::Relay::BaseConnection
    # add `nodes` and `pageInfo` fields, as well as `edge_type(...)` and `node_nullable(...)` overrides
    edge_type(Types::BaseEdge)
  end
end