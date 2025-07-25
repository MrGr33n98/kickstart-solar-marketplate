class Rack::Attack
  # Throttle all requests by IP (60rpm)
  throttle('req/ip', limit: 300, period: 5.minutes) do |req|
    req.ip
  end

  # Throttle POST requests to /api/v1/assess_campaigns by IP address
  throttle('posts/ip', limit: 5, period: 10.seconds) do |req|
    if req.path.start_with?('/api/v1/assess_campaigns') && req.post?
      req.ip
    end
  end

  # Throttle login attempts for a given email parameter to 6 requests per minute
  throttle("logins/email", limit: 6, period: 60.seconds) do |req|
    if req.path == '/users/sign_in' && req.post?
      # Return the email if present, nil otherwise
      req.params['email'].to_s.downcase.gsub(/\s+/, "")
    end
  end

  # Allow all local traffic
  safelist('allow from localhost') do |req|
    # Requests are allowed if the return value is truthy
    '127.0.0.1' == req.ip || '::1' == req.ip
  end
end