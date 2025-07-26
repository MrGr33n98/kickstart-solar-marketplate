Rails.application.configure do
  if Rails.env.production?
    config.lograge.enabled = true
    config.lograge.custom_options = lambda do |event|
      exceptions = %w(controller action format id)
      {
        params: event.payload[:params].except(*exceptions),
        time: Time.now.utc.iso8601,
        host: event.payload[:host],
        remote_ip: event.payload[:remote_ip],
        user_id: event.payload[:user_id],
        request_id: event.payload[:request_id]
      }
    end
    
    # Send logs to a centralized logging service
    # config.lograge.formatter = Lograge::Formatters::Json.new
    # config.lograge.logger = LogStashLogger.new(type: :udp, host: 'logstash', port: 5228)
  end
end