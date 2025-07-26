module ProfanityFilter
  extend ActiveSupport::Concern

  CURSE_WORDS = %w[badword1 badword2].freeze

  included do
    class_attribute :profanity_filter_attributes, default: []
  end

  class_methods do
    def profanity_filter(*attrs)
      self.profanity_filter_attributes += attrs.map(&:to_sym)
      validate :validate_profanity
    end
  end

  private

  def validate_profanity
    self.class.profanity_filter_attributes.each do |attr|
      value = send(attr)
      next unless value.is_a?(String)

      if CURSE_WORDS.any? { |word| value.match?(/\b#{Regexp.escape(word)}\b/i) }
        errors.add(attr, 'contains inappropriate language')
      end
    end
  end
end
