module Sanitizable
  extend ActiveSupport::Concern

  included do
    before_validation :sanitize_fields
  end

  def sanitize_fields
    attributes.each do |attr, value|
      next unless value.is_a?(String)
      
      # Basic sanitization for all string fields
      self[attr] = ActionController::Base.helpers.sanitize(value) if self[attr].present?
    end
  end
end
