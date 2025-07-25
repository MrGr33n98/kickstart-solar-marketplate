class NotificationMailer < ApplicationMailer
  default from: 'notifications@example.com'

  def campaign_created(user, campaign_id)
    @user = user
    @campaign = AssessCampaign.find_by(id: campaign_id)
    
    return unless @campaign
    
    mail(
      to: @user.email,
      subject: "New Campaign Created: #{@campaign.name}"
    )
  end

  def lead_assigned(user, lead_id)
    @user = user
    @lead = Lead.find_by(id: lead_id)
    
    return unless @lead
    
    mail(
      to: @user.email,
      subject: "New Lead Assigned: #{@lead.name}"
    )
  end
end