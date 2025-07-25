module Api
  module V2
    class BaseController < ApplicationController
      before_action :authenticate_user!
      
      # Common API v2 functionality
      def current_api_version
        'v2'
      end
    end
  end
end