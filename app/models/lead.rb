class Lead < ApplicationRecord
  include Auditable
  include ProfanityFilter
  include Sanitizable
  
  belongs_to :assess_campaign, optional: true
  
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :phone, presence: true, format: { with: /\A\+?[\d\s\-\(\)]+\z/ }
  validates :name, presence: true
  
  enum conversion_state: { created: 0, contacted: 1, qualified: 2, proposal: 3, won: 4, lost: 5 }
  
  # Filter profanity from these fields
  profanity_filter :name, :notes
  
  # Encrypt sensitive data
  encrypts :email, :phone, deterministic: true
  
  def self.to_csv
    attributes = %w{id name email phone created_at conversion_state}
    
    CSV.generate(headers: true) do |csv|
      csv << attributes
      
      all.each do |lead|
        csv << attributes.map{ |attr| lead.send(attr) }
      end
    end
  end
end
