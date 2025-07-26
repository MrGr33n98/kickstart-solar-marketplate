module V2
  class AssessCampaignSerializer < ActiveModel::Serializer
    attributes :id, :name, :description, :start_date, :end_date, :status, :created_at, :updated_at
    
    # Include additional relationships in V2
    has_many :leads
    
    # Add custom attributes
    attribute :days_active do
      if object.start_date && object.end_date
        (object.end_date - object.start_date).to_i
      else
        nil
      end
    end
    
    attribute :status_text do
      case object.status
      when 0
        'Draft'
      when 1
        'Active'
      when 2
        'Completed'
      when 3
        'Cancelled'
      else
        'Unknown'
      end
    end
  end
end