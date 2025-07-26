Rails.application.routes.draw do
  # GraphQL endpoint
  post "/graphql", to: "graphql_controller#execute"
  
  # Mount GraphiQL in development
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  
  # Health check endpoint
  get '/health', to: 'health#check'
  
  # API routes with versioning
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :assess_campaigns
      resources :categories
      resources :certifications
      resources :companies
      resources :contents
      resources :discussions
      resources :feature_groups
      resources :features
      resources :leads do
        collection do
          get :export
        end
      end
      resources :marketing_campaigns
      resources :pricing_rules
      resources :pricings
      resources :products
      resources :quotes
      resources :replies
      resources :reviews
      resources :saas_leads
      resources :saas_plans
      resources :saas_products
      resources :users, only: [:index, :show]
    end
    
    namespace :v2 do
      resources :assess_campaigns
      resources :leads do
        collection do
          get :export
        end
      end
      resources :products
      # Add other v2 resources as needed
    end
  end
  
  # Rest of your routes...
end