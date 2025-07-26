class ApplicationController < ActionController::Base
  include ActionController::MimeResponds
<<<<<<< HEAD
=======
  include Pundit::Authorization
  include ErrorHandler
>>>>>>> de353b5bc3f511b55588bdba87798f869392d988
  
  before_action :set_paper_trail_whodunnit
  before_action :append_info_to_payload
  
  protected
  
  def append_info_to_payload(payload = {})
    payload[:host] = request.host
    payload[:remote_ip] = request.remote_ip
    payload[:user_id] = current_user&.id
    payload[:request_id] = request.request_id
  end
  
  def user_for_paper_trail
    current_user&.id
  end
end