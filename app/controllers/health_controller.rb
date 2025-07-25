class HealthController < ApplicationController
  skip_before_action :authenticate_request!, only: [:check]
  
  def check
    health_status = {
      status: 'ok',
      timestamp: Time.now.utc.iso8601,
      environment: Rails.env,
      database: database_status,
      redis: redis_status,
      version: '1.0.0'
    }
    
    render json: health_status
  end
  
  private
  
  def database_status
    ActiveRecord::Base.connection.execute('SELECT 1')
    'ok'
  rescue => e
    { status: 'error', message: e.message }
  end
  
  def redis_status
    return 'not_configured' unless defined?(Redis)
    
    begin
      redis = Redis.new(url: ENV['REDIS_URL'] || 'redis://localhost:6379/1')
      redis.ping == 'PONG' ? 'ok' : 'error'
    rescue => e
      { status: 'error', message: e.message }
    end
  end
end