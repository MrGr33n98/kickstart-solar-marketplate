class NotificationJob < ApplicationJob
  queue_as :default

  def perform(user_id, notification_type, data = {})
    user = User.find_by(id: user_id)
    return unless user

    case notification_type
    when 'campaign_created'
      NotificationMailer.campaign_created(user, data[:campaign_id]).deliver_now
    when 'lead_assigned'
      NotificationMailer.lead_assigned(user, data[:lead_id]).deliver_now
    else
      Rails.logger.error("Unknown notification type: #{notification_type}")
    end
  end
end