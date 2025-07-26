require 'swagger_helper'

RSpec.describe 'Assess Campaigns API', type: :request do
  path '/api/v1/assess_campaigns' do
    get 'Retrieves all assess campaigns' do
      tags 'Assess Campaigns'
      produces 'application/json'

      response '200', 'assess campaigns found' do
        schema type: :array,
          items: {
            type: :object,
            properties: {
              id: { type: :integer },
              name: { type: :string },
              description: { type: :string },
              start_date: { type: :string, format: :date },
              end_date: { type: :string, format: :date },
              status: { type: :integer }
            },
            required: ['id', 'name', 'status']
          }

        run_test!
      end
    end

    post 'Creates an assess campaign' do
      tags 'Assess Campaigns'
      consumes 'application/json'
      parameter name: :assess_campaign, in: :body, schema: {
        type: :object,
        properties: {
          assess_campaign: {
            type: :object,
            properties: {
              name: { type: :string },
              description: { type: :string },
              start_date: { type: :string, format: :date },
              end_date: { type: :string, format: :date },
              status: { type: :integer }
            },
            required: ['name']
          }
        }
      }

      response '201', 'assess campaign created' do
        let(:assess_campaign) { { assess_campaign: { name: 'New Campaign' } } }
        run_test!
      end

      response '422', 'invalid request' do
        let(:assess_campaign) { { assess_campaign: { name: '' } } }
        run_test!
      end
    end
  end
end