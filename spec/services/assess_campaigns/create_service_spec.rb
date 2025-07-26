require 'rails_helper'

RSpec.describe AssessCampaigns::CreateService do
  let(:user) { create(:user) }
  let(:valid_params) do
    ActionController::Parameters.new(
      assess_campaign: {
        name: 'Test Campaign',
        description: 'Test Description',
        start_date: Date.today,
        end_date: Date.today + 30.days,
        status: 1
      }
    )
  end
  
  let(:invalid_params) do
    ActionController::Parameters.new(
      assess_campaign: {
        name: '',
        description: 'Test Description',
        start_date: Date.today,
        end_date: Date.today + 30.days,
        status: 1
      }
    )
  end

  describe '#call' do
    context 'with valid parameters' do
      it 'creates a new assess campaign' do
        expect {
          result = described_class.call(params: valid_params, user: user)
          expect(result[:success]).to be true
          expect(result[:campaign]).to be_persisted
          expect(result[:campaign].name).to eq('Test Campaign')
          expect(result[:campaign].created_by).to eq(user.id)
        }.to change(AssessCampaign, :count).by(1)
      end
    end

    context 'with invalid parameters' do
      it 'does not create a new assess campaign' do
        expect {
          result = described_class.call(params: invalid_params, user: user)
          expect(result[:success]).to be false
          expect(result[:errors]).to include("Name can't be blank")
        }.not_to change(AssessCampaign, :count)
      end
    end
  end
end