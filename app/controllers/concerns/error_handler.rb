module ErrorHandler
  extend ActiveSupport::Concern

  included do
    rescue_from StandardError, with: :handle_standard_error
    rescue_from ActiveRecord::RecordNotFound, with: :handle_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :handle_record_invalid
    rescue_from ActionController::ParameterMissing, with: :handle_parameter_missing
    rescue_from Pundit::NotAuthorizedError, with: :handle_unauthorized
  end

  private

  def handle_standard_error(exception)
    Rails.logger.error "#{exception.class}: #{exception.message}"
    Rails.logger.error exception.backtrace.join("\n")
    
    respond_to do |format|
      format.html { render template: 'errors/internal_server_error', status: :internal_server_error }
      format.json { render json: { error: 'Internal Server Error', details: exception.message }, status: :internal_server_error }
    end
  end

  def handle_not_found(exception)
    respond_to do |format|
      format.html { render template: 'errors/not_found', status: :not_found }
      format.json { render json: { error: 'Not Found', details: exception.message }, status: :not_found }
    end
  end

  def handle_record_invalid(exception)
    respond_to do |format|
      format.html { render template: 'errors/unprocessable_entity', status: :unprocessable_entity }
      format.json { render json: { error: 'Validation Failed', details: exception.record.errors.full_messages }, status: :unprocessable_entity }
    end
  end

  def handle_parameter_missing(exception)
    respond_to do |format|
      format.html { render template: 'errors/bad_request', status: :bad_request }
      format.json { render json: { error: 'Bad Request', details: exception.message }, status: :bad_request }
    end
  end

  def handle_unauthorized(exception)
    respond_to do |format|
      format.html { redirect_to root_path, alert: 'You are not authorized to perform this action.' }
      format.json { render json: { error: 'Unauthorized', details: 'You are not authorized to perform this action.' }, status: :forbidden }
    end
  end
end