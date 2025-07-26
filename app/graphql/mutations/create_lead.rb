module Mutations
  class CreateLead < BaseMutation
    argument :name, String, required: true
    argument :email, String, required: true
    argument :phone, String, required: true
    argument :notes, String, required: false
    argument :conversion_state, Integer, required: false
    argument :assess_campaign_id, ID, required: false

    field :lead, Types::LeadType, null: true
    field :errors, [String], null: false

    def resolve(name:, email:, phone:, notes: nil, conversion_state: 0, assess_campaign_id: nil)
      lead = Lead.new(
        name: name,
        email: email,
        phone: phone,
        notes: notes,
        conversion_state: conversion_state,
        assess_campaign_id: assess_campaign_id,
        user_id: context[:current_user]&.id
      )

      if lead.save
        { lead: lead, errors: [] }
      else
        { lead: nil, errors: lead.errors.full_messages }
      end
    end
  end
end