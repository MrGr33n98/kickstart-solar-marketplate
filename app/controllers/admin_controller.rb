class AdminController < ApplicationController
  skip_before_action :authenticate_request!, raise: false if respond_to?(:authenticate_request!)

  def index
    render plain: "Admin Dashboard"
  end
end

