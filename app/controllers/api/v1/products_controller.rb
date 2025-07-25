module Api
  module V1
    class ProductsController < ApplicationController
      before_action :set_product, only: [:show, :update, :destroy]

      def index
        @products = Rails.cache.fetch("products/all", expires_in: 1.hour) do
          Product.includes(:categories).all.to_a
        end
        
        render json: @products
      end

      def show
        render json: @product
      end

      def create
        @product = Product.new(product_params)

        if @product.save
          Rails.cache.delete("products/all")
          render json: @product, status: :created
        else
          render json: { errors: @product.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        if @product.update(product_params)
          Rails.cache.delete("products/all")
          Rails.cache.delete("products/#{@product.id}")
          render json: @product
        else
          render json: { errors: @product.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        @product.destroy
        Rails.cache.delete("products/all")
        Rails.cache.delete("products/#{@product.id}")
        head :no_content
      end

      private

      def set_product
        @product = Rails.cache.fetch("products/#{params[:id]}", expires_in: 1.hour) do
          Product.find(params[:id])
        end
      end

      def product_params
        params.require(:product).permit(:name, :description, :status, category_ids: [])
      end
    end
  end
end