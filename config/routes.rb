Rails.application.routes.draw do
  # Health check endpoint
  get '/health', to: 'health#check'
  
  # Rest of your routes...
end