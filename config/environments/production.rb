Rails.application.configure do
  # Existing configuration...
  
  # Enable fragment and page caching in production
  config.action_controller.perform_caching = true
  config.cache_store = :redis_cache_store, { 
    url: ENV.fetch("REDIS_URL") { "redis://localhost:6379/1" },
    expires_in: 1.day
  }
  
  # Use a real queuing backend for Active Job
  config.active_job.queue_adapter = :sidekiq
  
  # More existing configuration...
end