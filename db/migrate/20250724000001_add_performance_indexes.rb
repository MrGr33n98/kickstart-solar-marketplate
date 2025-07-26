class AddPerformanceIndexes < ActiveRecord::Migration[7.0]
  def change
    # Add indexes to foreign keys
    add_index :leads, :assess_campaign_id, name: 'index_leads_on_assess_campaign_id'
    add_index :quotes, :company_id, name: 'index_quotes_on_company_id'
    add_index :reviews, :company_id, name: 'index_reviews_on_company_id'
    add_index :features, :feature_group_id, name: 'index_features_on_feature_group_id'
    
    # Add composite indexes for frequently queried combinations
    add_index :leads, [:status, :created_at], name: 'index_leads_on_status_and_created_at'
    add_index :assess_campaigns, [:status, :start_date], name: 'index_assess_campaigns_on_status_and_start_date'
    add_index :products, [:name, :status], name: 'index_products_on_name_and_status'
    
    # Add full-text search indexes (PostgreSQL specific)
    # execute "CREATE INDEX index_products_on_name_and_description ON products USING gin(to_tsvector('english', name || ' ' || description))" if ActiveRecord::Base.connection.adapter_name == 'PostgreSQL'
    # execute "CREATE INDEX index_contents_on_title_and_body ON contents USING gin(to_tsvector('english', title || ' ' || body))" if ActiveRecord::Base.connection.adapter_name == 'PostgreSQL'
  end
end