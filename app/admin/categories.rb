ActiveAdmin.register Category do
  permit_params :name, :slug, :description, :parent_id, :active,
                :seo_title, :seo_description, :seo_keywords,
                :canonical_url, :meta_robots, :h1,
                :intro_text, :schema_markup, :seo_image

  index do
    selectable_column
    id_column
    column :name
    column :slug
    column('Parent') { |c| c.parent&.name }
    column :active
    column :created_at
    actions
  end

  filter :name
  filter :slug
  filter :parent_id, as: :select, collection: proc { Category.pluck(:name, :id) }, label: 'Parent'
  filter :active
  filter :created_at

  form do |f|
    f.inputs do
      f.input :name
      f.input :slug
      f.input :description
      f.input :parent_id, as: :select, collection: Category.pluck(:name, :id), include_blank: true
      f.input :active
      f.input :seo_title
      f.input :seo_description
      f.input :seo_keywords
      f.input :canonical_url
      f.input :meta_robots, as: :select, collection: ['index, follow', 'noindex, follow', 'index, nofollow', 'noindex, nofollow']
      f.input :h1
      f.input :intro_text
      f.input :schema_markup
      f.input :seo_image, as: :file
    end
    f.actions
  end

  show do
    attributes_table do
      row :name
      row :slug
      row :description
      row("Parent") { |category| category.parent&.name }
      row :active
      row :seo_title
      row :seo_description
      row :seo_keywords
      row :canonical_url
      row :meta_robots
      row :h1
      row :intro_text
      row :schema_markup
      row :seo_image do |category|
        if category.seo_image.attached?
          image_tag url_for(category.seo_image), width: 200
        end
      end
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end
end
