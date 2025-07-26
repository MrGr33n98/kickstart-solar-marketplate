# Context

All files complete source code.

## Project Structure

/
└── rails-solar/
    ├── app/
    │   ├── admin/
    │   │   ├── admin_users.rb
    │   │   ├── assess_campaigns.rb
    │   │   ├── categories.rb
    │   │   ├── certifications.rb
    │   │   ├── companies.rb
    │   │   ├── contents.rb
    │   │   ├── dashboard.rb
    │   │   ├── discussions.rb
    │   │   ├── feature_groups.rb
    │   │   ├── features.rb
    │   │   ├── leads.rb
    │   │   ├── marketing_campaigns.rb
    │   │   ├── pricing_rules.rb
    │   │   ├── pricings.rb
    │   │   ├── products.rb
    │   │   ├── quotes.rb
    │   │   ├── replies.rb
    │   │   ├── reviews.rb
    │   │   ├── saa_s_plans.rb
    │   │   ├── saa_s_products.rb
    │   │   ├── saas_leads.rb
    │   │   └── users.rb
    │   ├── assets/
    │   │   ├── config/
    │   │   │   └── manifest.js
    │   │   ├── images/
    │   │   │   └── .keep
    │   │   ├── javascripts/
    │   │   │   └── active_admin.js
    │   │   └── stylesheets/
    │   │       ├── actiontext.css
    │   │       ├── active_admin.scss
    │   │       └── application.css
    │   ├── channels/
    │   │   └── application_cable/
    │   │       ├── channel.rb
    │   │       └── connection.rb
    │   ├── controllers/
    │   │   ├── api/
    │   │   │   └── v1/
    │   │   │       ├── assess_campaigns_controller.rb
    │   │   │       ├── categories_controller.rb
    │   │   │       ├── certifications_controller.rb
    │   │   │       ├── companies_controller.rb
    │   │   │       ├── contents_controller.rb
    │   │   │       ├── discussions_controller.rb
    │   │   │       ├── feature_groups_controller.rb
    │   │   │       ├── features_controller.rb
    │   │   │       ├── leads_controller.rb
    │   │   │       ├── marketing_campaigns_controller.rb
    │   │   │       ├── pricing_rules_controller.rb
    │   │   │       ├── pricings_controller.rb
    │   │   │       ├── products_controller.rb
    │   │   │       ├── quotes_controller.rb
    │   │   │       ├── replies_controller.rb
    │   │   │       ├── reviews_controller.rb
    │   │   │       ├── saas_leads_controller.rb
    │   │   │       ├── saas_plans_controller.rb
    │   │   │       ├── saas_products_controller.rb
    │   │   │       └── users_controller.rb
    │   │   ├── concerns/
    │   │   │   └── .keep
    │   │   ├── users/
    │   │   │   ├── confirmations_controller.rb
    │   │   │   ├── omniauth_callbacks_controller.rb
    │   │   │   ├── passwords_controller.rb
    │   │   │   ├── registrations_controller.rb
    │   │   │   ├── sessions_controller.rb
    │   │   │   └── unlocks_controller.rb
    │   │   ├── application_controller.rb
    │   │   ├── comments_controller.rb
    │   │   ├── pages_controller.rb
    │   │   ├── posts_controller.rb
    │   │   └── users_controller.rb
    │   ├── helpers/
    │   │   ├── application_helper.rb
    │   │   ├── comments_helper.rb
    │   │   ├── pages_helper.rb
    │   │   ├── posts_helper.rb
    │   │   └── users_helper.rb
    │   ├── javascript/
    │   │   ├── controllers/
    │   │   │   ├── application.js
    │   │   │   ├── comments_controller.js
    │   │   │   ├── hello_controller.js
    │   │   │   └── index.js
    │   │   └── application.js
    │   ├── jobs/
    │   │   └── application_job.rb
    │   ├── mailers/
    │   │   └── application_mailer.rb
    │   ├── models/
    │   │   ├── concerns/
    │   │   │   ├── .keep
    │   │   │   ├── auditable.rb
    │   │   │   └── profanity_filter.rb
    │   │   ├── admin_user.rb
    │   │   ├── application_record.rb
    │   │   ├── assess_campaign.rb
    │   │   ├── audit_log.rb
    │   │   ├── category.rb
    │   │   ├── certification.rb
    │   │   ├── comment.rb
    │   │   ├── company.rb
    │   │   ├── content.rb
    │   │   ├── discussion.rb
    │   │   ├── feature.rb
    │   │   ├── feature_group.rb
    │   │   ├── lead.rb
    │   │   ├── marketing_campaign.rb
    │   │   ├── post.rb
    │   │   ├── pricing.rb
    │   │   ├── pricing_rule.rb
    │   │   ├── product.rb
    │   │   ├── quote.rb
    │   │   ├── reply.rb
    │   │   ├── review.rb
    │   │   ├── saas_lead.rb
    │   │   ├── saas_plan.rb
    │   │   ├── saas_product.rb
    │   │   └── user.rb
    │   ├── notifiers/
    │   │   ├── application_notifier.rb
    │   │   └── comment_notifier.rb
    │   ├── serializers/
    │   │   ├── assess_campaign_serializer.rb
    │   │   ├── category_serializer.rb
    │   │   ├── certification_serializer.rb
    │   │   ├── company_serializer.rb
    │   │   ├── content_serializer.rb
    │   │   ├── discussion_serializer.rb
    │   │   ├── feature_group_serializer.rb
    │   │   ├── feature_serializer.rb
    │   │   ├── lead_serializer.rb
    │   │   ├── marketing_campaign_serializer.rb
    │   │   ├── pricing_rule_serializer.rb
    │   │   ├── pricing_serializer.rb
    │   │   ├── product_serializer.rb
    │   │   ├── quote_serializer.rb
    │   │   ├── reply_serializer.rb
    │   │   ├── review_serializer.rb
    │   │   ├── saas_lead_serializer.rb
    │   │   ├── saas_plan_serializer.rb
    │   │   ├── saas_product_serializer.rb
    │   │   └── user_serializer.rb
    │   └── views/
    │       ├── active_storage/
    │       │   └── blobs/
    │       │       └── _blob.html.erb
    │       ├── comments/
    │       │   ├── _comment.html.erb
    │       │   └── _form.html.erb
    │       ├── devise/
    │       │   ├── confirmations/
    │       │   │   └── new.html.erb
    │       │   ├── mailer/
    │       │   │   ├── confirmation_instructions.html.erb
    │       │   │   ├── email_changed.html.erb
    │       │   │   ├── password_change.html.erb
    │       │   │   ├── reset_password_instructions.html.erb
    │       │   │   └── unlock_instructions.html.erb
    │       │   ├── passwords/
    │       │   │   ├── edit.html.erb
    │       │   │   └── new.html.erb
    │       │   ├── registrations/
    │       │   │   ├── edit.html.erb
    │       │   │   └── new.html.erb
    │       │   ├── sessions/
    │       │   │   └── new.html.erb
    │       │   ├── shared/
    │       │   │   ├── _error_messages.html.erb
    │       │   │   └── _links.html.erb
    │       │   └── unlocks/
    │       │       └── new.html.erb
    │       ├── layouts/
    │       │   ├── action_text/
    │       │   │   └── contents/
    │       │   │       └── _content.html.erb
    │       │   ├── _messages.html.erb
    │       │   ├── _navbar.html.erb
    │       │   ├── _notification.html.erb
    │       │   ├── _notifications.html.erb
    │       │   ├── application.html.erb
    │       │   ├── mailer.html.erb
    │       │   └── mailer.text.erb
    │       ├── pages/
    │       │   ├── about.html.erb
    │       │   └── home.html.erb
    │       ├── posts/
    │       │   ├── _form.html.erb
    │       │   ├── _post.html.erb
    │       │   ├── _post.json.jbuilder
    │       │   ├── edit.html.erb
    │       │   ├── index.html.erb
    │       │   ├── index.json.jbuilder
    │       │   ├── new.html.erb
    │       │   ├── show.html.erb
    │       │   └── show.json.jbuilder
    │       ├── user/
    │       │   └── _session_manager.html.erb
    │       └── users/
    │           └── profile.html.erb
    ├── bin/
    │   ├── bundle
    │   ├── importmap
    │   ├── rails
    │   ├── rake
    │   └── setup
    ├── config/
    │   ├── environments/
    │   │   ├── development.rb
    │   │   ├── production.rb
    │   │   └── test.rb
    │   ├── initializers/
    │   │   ├── active_admin.rb
    │   │   ├── assets.rb
    │   │   ├── content_security_policy.rb
    │   │   ├── cors.rb
    │   │   ├── curse_words.rb
    │   │   ├── devise.rb
    │   │   ├── filter_parameter_logging.rb
    │   │   ├── friendly_id.rb
    │   │   ├── inflections.rb
    │   │   ├── new_framework_defaults_7_0.rb
    │   │   └── permissions_policy.rb
    │   ├── locales/
    │   │   ├── devise.en.yml
    │   │   └── en.yml
    │   ├── application.rb
    │   ├── boot.rb
    │   ├── cable.yml
    │   ├── credentials.yml.enc
    │   ├── database.yml
    │   ├── environment.rb
    │   ├── importmap.rb
    │   ├── puma.rb
    │   ├── routes.rb
    │   └── storage.yml
    ├── db/
    │   ├── migrate/
    │   │   ├── 20230712221836_create_posts.rb
    │   │   ├── 20230713193131_add_views_to_posts.rb
    │   │   ├── 20230714162304_devise_create_users.rb
    │   │   ├── 20230714202502_add_user_to_posts.rb
    │   │   ├── 20230714213543_add_name_to_user.rb
    │   │   ├── 20230714232351_add_views_to_user.rb
    │   │   ├── 20230714232857_change_views_for_users.rb
    │   │   ├── 20230716133433_create_comments.rb
    │   │   ├── 20230716140302_create_active_storage_tables.active_storage.rb
    │   │   ├── 20230716140303_create_action_text_tables.action_text.rb
    │   │   ├── 20230815221100_add_service_name_to_active_storage_blobs.active_storage.rb
    │   │   ├── 20230815221101_create_active_storage_variant_records.active_storage.rb
    │   │   ├── 20230815221102_remove_not_null_on_active_storage_blobs_checksum.active_storage.rb
    │   │   ├── 20240329223906_create_noticed_tables.noticed.rb
    │   │   ├── 20240329223907_add_notifications_count_to_noticed_event.noticed.rb
    │   │   ├── 20240508205056_devise_create_admin_users.rb
    │   │   ├── 20240508205057_create_active_admin_comments.rb
    │   │   ├── 20240508205200_add_published_at_to_posts.rb
    │   │   ├── 20250720214050_add_devise_to_admin_users.rb
    │   │   ├── 20250720220115_create_companies.rb
    │   │   ├── 20250720220204_create_certifications.rb
    │   │   ├── 20250720220246_create_reviews.rb
    │   │   ├── 20250720220410_create_quotes.rb
    │   │   ├── 20250720220529_create_marketing_campaigns.rb
    │   │   ├── 20250720220705_create_pricing_rules.rb
    │   │   ├── 20250720221154_create_pricings.rb
    │   │   ├── 20250720221250_create_products.rb
    │   │   ├── 20250720221400_create_feature_groups.rb
    │   │   ├── 20250720221455_create_features.rb
    │   │   ├── 20250720221529_create_leads.rb
    │   │   ├── 20250720221646_create_assess_campaigns.rb
    │   │   ├── 20250720221941_create_categories.rb
    │   │   ├── 20250720222048_create_contents.rb
    │   │   ├── 20250720222221_create_discussions.rb
    │   │   ├── 20250720222527_create_replies.rb
    │   │   ├── 20250720222606_create_saa_s_products.rb
    │   │   ├── 20250720222717_create_saa_s_plans.rb
    │   │   ├── 20250721033234_add_location_to_companies.rb
    │   │   ├── 20250721040259_add_seo_fields_to_categories.rb
    │   │   ├── 20250721154008_create_friendly_id_slugs.rb
    │   │   ├── 20250721173435_create_join_table_categories_products.rb
    │   │   ├── 20250721192447_remove_ancestry_from_categories.rb
    │   │   ├── 20250721220000_change_status_to_integer_in_assess_campaigns.rb
    │   │   ├── 20250721221000_add_constraints_and_indexes.rb
    │   │   ├── 20250721231545_create_saa_s_leads.rb
    │   │   ├── 20250722001659_add_role_to_users.rb
    │   │   ├── 20250722002239_add_status_to_saa_s_products.rb
    │   │   ├── 20250722025131_change_value_to_decimal_in_pricings.rb
    │   │   ├── 20250722025147_change_annual_energy_output_to_decimal_in_companies.rb
    │   │   ├── 20250722025329_change_sent_at_to_datetime_in_leads.rb
    │   │   ├── 20250722025349_change_dates_to_datetime_in_assess_campaigns.rb
    │   │   ├── 20250722025833_add_not_null_to_name_and_description_in_companies.rb
    │   │   ├── 20250722030547_add_not_null_to_certifications_fields.rb
    │   │   ├── 20250722030719_add_not_null_and_default_to_reviews_fields.rb
    │   │   ├── 20250722030827_add_not_null_and_default_to_quotes_fields.rb
    │   │   ├── 20250722031011_add_not_null_to_marketing_campaigns_fields.rb
    │   │   ├── 20250722031137_add_not_null_to_pricing_rules_fields.rb
    │   │   ├── 20250722031330_add_not_null_to_pricings_fields.rb
    │   │   ├── 20250722031544_add_not_null_and_unique_index_to_products_fields.rb
    │   │   ├── 20250722032046_add_not_null_and_unique_index_to_feature_groups_name.rb
    │   │   ├── 20250722032205_add_not_null_and_unique_index_to_features_name.rb
    │   │   ├── 20250722032552_add_conversion_state_to_leads.rb
    │   │   ├── 20250722035548_add_not_null_to_assess_campaigns_fields.rb
    │   │   ├── 20250722040309_update_categories_constraints.rb
    │   │   ├── 20250722050605_add_not_null_and_default_to_replies_fields.rb
    │   │   ├── 20250722050727_add_not_null_to_saas_products_fields.rb
    │   │   ├── 20250722051620_add_not_null_to_posts_fields.rb
    │   │   ├── 20250722052427_remove_old_category_foreign_key_from_discussions.rb
    │   │   ├── 20250722052643_add_missing_indexes.rb
    │   │   ├── 20250722053138_add_seo_fields_to_contents.rb
    │   │   ├── 20250722053336_add_utm_fields_to_leads.rb
    │   │   ├── 20250722053439_add_utm_fields_to_marketing_campaigns.rb
    │   │   ├── 20250722053615_add_translations_to_categories.rb
    │   │   ├── 20250722053811_add_translations_to_products.rb
    │   │   ├── 20250722054328_create_audit_logs.rb
    │   │   ├── 20250722061208_rename_changes_to_audited_changes_in_audit_logs.rb
    │   │   └── 20250723020515_add_role_to_admin_users.rb
    │   ├── development.sqlite3
    │   ├── schema.rb
    │   └── seeds.rb
    ├── lib/
    │   ├── assets/
    │   │   └── .keep
    │   └── tasks/
    │       └── .keep
    ├── log/
    │   ├── .keep
    │   └── development.log
    ├── public/
    │   ├── 404.html
    │   ├── 422.html
    │   ├── 500.html
    │   └── robots.txt
    ├── spec/
    │   ├── models/
    │   │   ├── admin_user_spec.rb
    │   │   ├── assess_campaign_spec.rb
    │   │   ├── audit_log_spec.rb
    │   │   ├── category_spec.rb
    │   │   ├── certification_spec.rb
    │   │   ├── comment_spec.rb
    │   │   ├── company_spec.rb
    │   │   ├── content_spec.rb
    │   │   ├── discussion_spec.rb
    │   │   ├── feature_group_spec.rb
    │   │   ├── feature_spec.rb
    │   │   ├── lead_spec.rb
    │   │   ├── marketing_campaign_spec.rb
    │   │   ├── post_spec.rb
    │   │   ├── pricing_rule_spec.rb
    │   │   ├── pricing_spec.rb
    │   │   ├── product_spec.rb
    │   │   ├── quote_spec.rb
    │   │   ├── reply_spec.rb
    │   │   ├── review_spec.rb
    │   │   ├── saa_s_plan_spec.rb
    │   │   ├── saa_s_product_spec.rb
    │   │   ├── saas_lead_spec.rb
    │   │   ├── saas_plan_spec.rb
    │   │   ├── saas_product_spec.rb
    │   │   └── user_spec.rb
    │   ├── requests/
    │   │   └── api/
    │   │       └── v1/
    │   │           ├── categories_spec.rb
    │   │           ├── companies_spec.rb
    │   │           ├── marketing_campaigns_spec.rb
    │   │           ├── products_spec.rb
    │   │           ├── quotes_spec.rb
    │   │           └── reviews_spec.rb
    │   ├── rails_helper.rb
    │   └── spec_helper.rb
    ├── storage/
    │   └── .keep
    ├── test/
    │   ├── channels/
    │   │   └── application_cable/
    │   │       └── connection_test.rb
    │   ├── controllers/
    │   │   ├── .keep
    │   │   ├── comments_controller_test.rb
    │   │   ├── pages_controller_test.rb
    │   │   ├── posts_controller_test.rb
    │   │   └── users_controller_test.rb
    │   ├── fixtures/
    │   │   ├── action_text/
    │   │   │   └── rich_texts.yml
    │   │   ├── files/
    │   │   │   └── .keep
    │   │   ├── admin_users.yml
    │   │   ├── comments.yml
    │   │   ├── posts.yml
    │   │   └── users.yml
    │   ├── helpers/
    │   │   └── .keep
    │   ├── integration/
    │   │   └── .keep
    │   ├── mailers/
    │   │   └── .keep
    │   ├── models/
    │   │   ├── .keep
    │   │   ├── admin_user_test.rb
    │   │   ├── comment_test.rb
    │   │   ├── post_test.rb
    │   │   └── user_test.rb
    │   ├── system/
    │   │   ├── .keep
    │   │   └── posts_test.rb
    │   ├── application_system_test_case.rb
    │   └── test_helper.rb
    ├── tmp/
    │   ├── cache/
    │   │   └── bootsnap/
    │   │       ├── compile-cache-iseq/
    │   │       │   ├── 00/
    │   │       │   │   ├── 0e56c960ec4598
    │   │       │   │   ├── 14b26ca3692d77
    │   │       │   │   ├── 218dfc09d5ee33
    │   │       │   │   ├── 64f4506964d074
    │   │       │   │   ├── 75dc184283fe7c
    │   │       │   │   ├── 7d49eb4c838e36
    │   │       │   │   ├── 932e59ad48ecb9
    │   │       │   │   ├── aced2689922aa1
    │   │       │   │   ├── e45fe1aa545dc2
    │   │       │   │   ├── ebc356f77176bf
    │   │       │   │   └── f88ba20e0734fd
    │   │       │   ├── 01/
    │   │       │   │   ├── 18e07d4aa22b5c
    │   │       │   │   ├── 6358f2c48849ee
    │   │       │   │   ├── 7169850c90f58e
    │   │       │   │   ├── 7484e8f1a22a16
    │   │       │   │   ├── 7f0c70c39a9c34
    │   │       │   │   ├── 84393687b02c15
    │   │       │   │   ├── 8d197b08d71637
    │   │       │   │   ├── 8e4f0a09e1c427
    │   │       │   │   ├── b67cad15538b5d
    │   │       │   │   ├── bc49ad6040487f
    │   │       │   │   ├── d22521980106a2
    │   │       │   │   └── f624ed2cceb638
    │   │       │   ├── 02/
    │   │       │   │   ├── 1dcc7be82e9c58
    │   │       │   │   ├── 21b9ad0bc5b2ce
    │   │       │   │   ├── 2ebc20c2861366
    │   │       │   │   ├── 33e8fba1a1add1
    │   │       │   │   ├── 5eb6260f520c0f
    │   │       │   │   ├── 67f565796532ab
    │   │       │   │   ├── 95f454b2b2ca3a
    │   │       │   │   └── ff8e7a53258b21
    │   │       │   ├── 03/
    │   │       │   │   ├── 03a4679360ab33
    │   │       │   │   ├── 04c749d4f5773a
    │   │       │   │   ├── 5b0b42a13be047
    │   │       │   │   ├── 6aed00670f7fce
    │   │       │   │   ├── 91bb6da2307727
    │   │       │   │   ├── 9e88ffbe76b324
    │   │       │   │   ├── a5fe9ec28a0810
    │   │       │   │   ├── c32dff16c802d1
    │   │       │   │   ├── fc4955d3b42bc8
    │   │       │   │   └── ff1cb03347b2b6
    │   │       │   ├── 04/
    │   │       │   │   ├── 71e685703c10f6
    │   │       │   │   └── cf845a64f27b39
    │   │       │   ├── 05/
    │   │       │   │   ├── 198ce40584e7cb
    │   │       │   │   ├── 1b2147b7ce669d
    │   │       │   │   ├── 277993854c3b67
    │   │       │   │   ├── 32c80dfff2c563
    │   │       │   │   ├── 3893671496cd7b
    │   │       │   │   ├── 3c0d7521dd53ef
    │   │       │   │   ├── 5c9d0429436d58
    │   │       │   │   ├── 6a074e7464d150
    │   │       │   │   ├── ac52f951e25c2b
    │   │       │   │   ├── b36ea5ae26bead
    │   │       │   │   ├── c1104a4ba1cbf0
    │   │       │   │   └── d7237a89179abd
    │   │       │   ├── 06/
    │   │       │   │   ├── 0a535e0f42d8fa
    │   │       │   │   ├── 2079067eb64919
    │   │       │   │   ├── 23b4f95867f709
    │   │       │   │   ├── 4c1640ed25f295
    │   │       │   │   ├── 5eb3a5972fba64
    │   │       │   │   ├── 8793c66dda090a
    │   │       │   │   ├── b4abc78ddd18bf
    │   │       │   │   └── c4a14444db2883
    │   │       │   ├── 07/
    │   │       │   │   ├── 00f877629b17ac
    │   │       │   │   ├── 048bd6a84c9ab1
    │   │       │   │   ├── 0bdd90f90bb144
    │   │       │   │   ├── 35f69dbc2a8f14
    │   │       │   │   ├── 90e8a4e40a8196
    │   │       │   │   ├── bc127574854ddf
    │   │       │   │   └── ca1cac9c2f8758
    │   │       │   ├── 08/
    │   │       │   │   ├── 0c67473e6af036
    │   │       │   │   ├── 1f0699d0ff0c73
    │   │       │   │   ├── 47108c58a80a7b
    │   │       │   │   ├── 6ffb666b44c8c4
    │   │       │   │   ├── 73d9f70de7478a
    │   │       │   │   ├── 8faafa69ebef81
    │   │       │   │   ├── b9d76bc09b9168
    │   │       │   │   ├── c4abe0f901cc51
    │   │       │   │   └── d75bff06b87b31
    │   │       │   ├── 09/
    │   │       │   │   ├── 3bc22c9eed9874
    │   │       │   │   ├── 4059fad79dbe57
    │   │       │   │   ├── 41e2e8fdb67b35
    │   │       │   │   ├── 659c7e2f6f50b2
    │   │       │   │   ├── 6b32a775b0033e
    │   │       │   │   ├── 6f6d378d004235
    │   │       │   │   ├── 70a8e8985e3110
    │   │       │   │   ├── 816b08135e65ff
    │   │       │   │   ├── 91a281e5f3a62f
    │   │       │   │   ├── ac472d04d050fb
    │   │       │   │   ├── c9aa791192dca5
    │   │       │   │   ├── d87a8d54afde4d
    │   │       │   │   ├── f17bda40d6c303
    │   │       │   │   └── f6b2d779d0b7d8
    │   │       │   ├── 0a/
    │   │       │   │   ├── 2f4b0403cd73f2
    │   │       │   │   ├── 457225b1ec6152
    │   │       │   │   ├── 5c8513ed7bbb5a
    │   │       │   │   ├── 676491e812993d
    │   │       │   │   ├── 8df2f3527dca23
    │   │       │   │   ├── cac17af8b5ec1a
    │   │       │   │   ├── d1ca4b74d5af90
    │   │       │   │   ├── d790c79b2f9322
    │   │       │   │   └── faf45c1dae2a11
    │   │       │   ├── 0b/
    │   │       │   │   ├── 19a2c6b14b2608
    │   │       │   │   ├── 2beffe845fc7bc
    │   │       │   │   ├── 3bcfa664e8e18b
    │   │       │   │   ├── 4e949229f589e6
    │   │       │   │   ├── 62d22146ae9d20
    │   │       │   │   ├── 7dbfda22d05524
    │   │       │   │   ├── a8605aad7fa44d
    │   │       │   │   ├── cfbe2621f82f18
    │   │       │   │   ├── d0980d0c213bf3
    │   │       │   │   ├── db401b5bee9977
    │   │       │   │   └── efbac178f50dc9
    │   │       │   ├── 0c/
    │   │       │   │   ├── 1c9077c774c467
    │   │       │   │   ├── 251833ee46fd04
    │   │       │   │   ├── 3a7bc3e1d34d10
    │   │       │   │   ├── 4f9b1d6c816f31
    │   │       │   │   ├── cf8558bdd3daea
    │   │       │   │   ├── eadf3dfdc67179
    │   │       │   │   └── f85a0e0c21684d
    │   │       │   ├── 0d/
    │   │       │   │   ├── 09a9bc33977b49
    │   │       │   │   ├── 0d4cd83764fee6
    │   │       │   │   ├── 52d75089aacb10
    │   │       │   │   ├── 71af0b57ed367e
    │   │       │   │   ├── 76f6affbc023ba
    │   │       │   │   ├── 87e439863d49b0
    │   │       │   │   ├── b586b3cb52c064
    │   │       │   │   ├── da65e76b1f251a
    │   │       │   │   ├── df4c02f5e64c7a
    │   │       │   │   ├── e16b6a617a7974
    │   │       │   │   ├── e3668a0e2e101c
    │   │       │   │   ├── f05e73e782ceb9
    │   │       │   │   ├── f31f1666b64c3c
    │   │       │   │   └── fa0742b91ba528
    │   │       │   ├── 0e/
    │   │       │   │   ├── 4d977d01ac2e4d
    │   │       │   │   ├── 557031d9f73615
    │   │       │   │   ├── ced477513efe3e
    │   │       │   │   └── d21a897298c072
    │   │       │   ├── 0f/
    │   │       │   │   ├── 08e3249bbabf07
    │   │       │   │   ├── 1aa30c246f1cae
    │   │       │   │   ├── 1c6dc97f2283f2
    │   │       │   │   ├── 37bb5ff4411a49
    │   │       │   │   ├── 56aac5add9963e
    │   │       │   │   ├── 82360e250c9a4d
    │   │       │   │   ├── 990083b2a26028
    │   │       │   │   ├── 9d94e7382ac3fa
    │   │       │   │   ├── 9dfb0d8d46e902
    │   │       │   │   ├── c6c8d5d54794aa
    │   │       │   │   └── d5e924ff950ce2
    │   │       │   ├── 10/
    │   │       │   │   ├── 193729ddc7ce59
    │   │       │   │   ├── 3136035a198f61
    │   │       │   │   ├── 383079116de0e0
    │   │       │   │   ├── 3a4c017395e5df
    │   │       │   │   ├── 410e3998689260
    │   │       │   │   ├── 43122ed3b33f40
    │   │       │   │   ├── 6bf2e0e3397541
    │   │       │   │   ├── aedd0b1e190e10
    │   │       │   │   └── e339814ef5b374
    │   │       │   ├── 11/
    │   │       │   │   ├── 1f62102ab910f8
    │   │       │   │   ├── 57dc81134c59c4
    │   │       │   │   ├── 7505329b7e903b
    │   │       │   │   ├── 7646702bbd7373
    │   │       │   │   ├── 8fa36876fa7db8
    │   │       │   │   ├── 930b12cbfef8af
    │   │       │   │   ├── a80500c0391e6c
    │   │       │   │   ├── c1db624f5456ed
    │   │       │   │   ├── d67c16564e348d
    │   │       │   │   ├── dc496d72a51768
    │   │       │   │   ├── e9f57a0365935b
    │   │       │   │   └── f853c6bbf86c6b
    │   │       │   ├── 12/
    │   │       │   │   ├── 15eb2a0e22445d
    │   │       │   │   ├── 1dc6645b6c02a5
    │   │       │   │   ├── 234b76d67b702f
    │   │       │   │   ├── 296c3b0a8135c2
    │   │       │   │   ├── 2b6fde1ca87af9
    │   │       │   │   ├── 2eef11141b7e56
    │   │       │   │   ├── 62bcca8e45e123
    │   │       │   │   ├── 63368a16e67d47
    │   │       │   │   ├── 9745164d90f2e6
    │   │       │   │   ├── a2f99655564901
    │   │       │   │   └── a54d5e69c1d51b
    │   │       │   ├── 13/
    │   │       │   │   ├── a7f6ada8147d1c
    │   │       │   │   ├── b6f0e7deb5716f
    │   │       │   │   ├── c59aa1367edfad
    │   │       │   │   └── fe62d3c110fd74
    │   │       │   ├── 14/
    │   │       │   │   ├── 02f4e02ca062bf
    │   │       │   │   ├── 0ca7d7f8e0444e
    │   │       │   │   ├── 12860ddee63791
    │   │       │   │   ├── 487f65beb05607
    │   │       │   │   ├── 48e7e9c8ab56aa
    │   │       │   │   ├── 79d0d6190d0679
    │   │       │   │   ├── a5daf18dd0e699
    │   │       │   │   └── f82eb724cd0740
    │   │       │   ├── 15/
    │   │       │   │   ├── 274bf74b6df553
    │   │       │   │   ├── 2c364afaaeca82
    │   │       │   │   ├── 40eeca39f0049d
    │   │       │   │   ├── 5657c78968a6f4
    │   │       │   │   ├── 9cd674e544988c
    │   │       │   │   ├── c14eed71ca5d3c
    │   │       │   │   ├── c55121d11638c8
    │   │       │   │   ├── d18b0a489cf084
    │   │       │   │   ├── d5b0a8ddf403aa
    │   │       │   │   └── d93d2f788830dc
    │   │       │   ├── 16/
    │   │       │   │   ├── 823a779c5dc769
    │   │       │   │   ├── 8299cb7a30684a
    │   │       │   │   ├── 83049ddab2ec85
    │   │       │   │   ├── d459a9de699b77
    │   │       │   │   ├── f6557f83bf752c
    │   │       │   │   └── fe5ab9bd8413be
    │   │       │   ├── 17/
    │   │       │   │   ├── 380f1a17243b35
    │   │       │   │   ├── 6be1341bd577d4
    │   │       │   │   ├── 787967789a3d32
    │   │       │   │   ├── be09d62b477ea5
    │   │       │   │   ├── c4e95b071b00db
    │   │       │   │   ├── cd24dde107ff48
    │   │       │   │   ├── cdc4866ce8ecf9
    │   │       │   │   ├── e972d16cb8d71c
    │   │       │   │   ├── e9bf057d2afda5
    │   │       │   │   └── f59c08cbad8823
    │   │       │   ├── 18/
    │   │       │   │   ├── 1e2e46628097b7
    │   │       │   │   ├── 1eafde1fe706e8
    │   │       │   │   ├── 23c3e71ccf6d15
    │   │       │   │   ├── 3450fa5100854f
    │   │       │   │   ├── 36902a3e4eac50
    │   │       │   │   ├── 38d6ac99dab87d
    │   │       │   │   ├── 65942fdce999ed
    │   │       │   │   ├── 9241af652cfb8f
    │   │       │   │   ├── 941ed58bf50c11
    │   │       │   │   └── fee6cd8cebc2b4
    │   │       │   ├── 19/
    │   │       │   │   ├── 150e243b83759e
    │   │       │   │   ├── 18f083b9eb920b
    │   │       │   │   ├── 2199d94d86cd2d
    │   │       │   │   ├── 22940b73f3971f
    │   │       │   │   ├── 28e61a7e5350a7
    │   │       │   │   ├── 44e40283ba6c6b
    │   │       │   │   ├── 480a1035c1c0f1
    │   │       │   │   ├── 780102c5c8cdac
    │   │       │   │   ├── eb50a9b2bae550
    │   │       │   │   └── f333454aa70633
    │   │       │   ├── 1a/
    │   │       │   │   ├── 85e90e4188bbba
    │   │       │   │   └── 8741feddd7651a
    │   │       │   ├── 1b/
    │   │       │   │   ├── 045d8cf21cb31e
    │   │       │   │   ├── 09e2e28abd8061
    │   │       │   │   ├── 243be61efa8f39
    │   │       │   │   ├── 740d98d673fdd3
    │   │       │   │   ├── a586e42e9849f8
    │   │       │   │   ├── a8bd111c91e395
    │   │       │   │   ├── abab268e301c22
    │   │       │   │   ├── af7ce115e49c0e
    │   │       │   │   ├── ba43a80de8bcdd
    │   │       │   │   └── e94749bb647e53
    │   │       │   ├── 1c/
    │   │       │   │   ├── 04db7982eaa61c
    │   │       │   │   ├── 1d32d055a71c29
    │   │       │   │   ├── 4945780aa5e5e5
    │   │       │   │   ├── 4e05e9ede9ba27
    │   │       │   │   ├── 6aac4cf319b5a2
    │   │       │   │   ├── a0b9f91352f09a
    │   │       │   │   ├── ad5872cf35b127
    │   │       │   │   ├── b5acae5c96ca86
    │   │       │   │   ├── bf868bf811c295
    │   │       │   │   ├── c4542e9f28f0db
    │   │       │   │   ├── caa1d078e59e4f
    │   │       │   │   └── d2fe3c0706eeb1
    │   │       │   ├── 1d/
    │   │       │   │   ├── 118aa2c4f4f142
    │   │       │   │   ├── 1e5ababf073d07
    │   │       │   │   ├── 6f27d17cba8ee9
    │   │       │   │   ├── 79a066e4a2e158
    │   │       │   │   └── e681acfb494804
    │   │       │   ├── 1e/
    │   │       │   │   ├── 06474a74e9a18c
    │   │       │   │   ├── 0d767f19640726
    │   │       │   │   ├── 28dd24231b2a91
    │   │       │   │   ├── 4b612a02355dd5
    │   │       │   │   ├── 8ac78657a4e198
    │   │       │   │   ├── c208cd560627fa
    │   │       │   │   ├── cf3816552fcb86
    │   │       │   │   └── d91be9b85c2539
    │   │       │   ├── 1f/
    │   │       │   │   ├── 0b972ce7e447a7
    │   │       │   │   ├── 0fe7c8a3f36d91
    │   │       │   │   ├── 1fc67fb766dbb7
    │   │       │   │   ├── 214613d301773e
    │   │       │   │   ├── 28a1c13ae581d6
    │   │       │   │   ├── 53c5299b452edc
    │   │       │   │   ├── 552d68b3af9a2d
    │   │       │   │   ├── 584326b7c3d575
    │   │       │   │   ├── 6740ff4cb6dfce
    │   │       │   │   ├── 6946a9ca515d72
    │   │       │   │   ├── 98c9074225acee
    │   │       │   │   ├── aa716d1b4f10d2
    │   │       │   │   ├── ac29df4b60a53f
    │   │       │   │   ├── cef7c4c1d61c7f
    │   │       │   │   ├── d2db3ff8729e31
    │   │       │   │   └── e80ba2747462c5
    │   │       │   ├── 20/
    │   │       │   │   ├── 077c3624cc2aba
    │   │       │   │   ├── 553748fa395eca
    │   │       │   │   ├── 729ea13de76f4b
    │   │       │   │   ├── 8b306cc80e71ea
    │   │       │   │   ├── 9a498674ddb1cc
    │   │       │   │   ├── 9f6101109b90e3
    │   │       │   │   ├── baad28f8c3e8df
    │   │       │   │   ├── eeb3b98733e54e
    │   │       │   │   └── fa2d3da84c1c1a
    │   │       │   ├── 21/
    │   │       │   │   ├── 2059e5f616f352
    │   │       │   │   ├── 26f1e1bf1fa233
    │   │       │   │   ├── 4385d29c526356
    │   │       │   │   ├── 67b918b89f0f3b
    │   │       │   │   ├── 72e485e43d8c7d
    │   │       │   │   ├── a7657bbf22c489
    │   │       │   │   ├── c6c2ac1708e80e
    │   │       │   │   ├── cdb24e2b1ce39e
    │   │       │   │   ├── deb02b0fa4229d
    │   │       │   │   └── fe5953f838e434
    │   │       │   ├── 22/
    │   │       │   │   ├── 21d06645863f96
    │   │       │   │   ├── 24ad2fb87cc97a
    │   │       │   │   ├── 57d7cf4c690f38
    │   │       │   │   ├── 73087d18574a9d
    │   │       │   │   ├── 8a93234d179e24
    │   │       │   │   ├── 9377f10bd6f458
    │   │       │   │   ├── 984b9aa6fdd9ca
    │   │       │   │   └── c6ada35ba96d5c
    │   │       │   ├── 23/
    │   │       │   │   ├── 14df6ab43c7774
    │   │       │   │   ├── 202960c126689f
    │   │       │   │   ├── 22c6ebe595b585
    │   │       │   │   ├── 53e60de11d8fcc
    │   │       │   │   ├── 5bc451f1e633ea
    │   │       │   │   ├── 61bb5cf995450e
    │   │       │   │   ├── 6aeec7e599c9ac
    │   │       │   │   ├── 7370f3da1453e7
    │   │       │   │   ├── 96f7cffa03c49f
    │   │       │   │   ├── b13247d25ccc25
    │   │       │   │   ├── bcd96ab8e629eb
    │   │       │   │   ├── cf0aa4ee486e1d
    │   │       │   │   ├── e35d456066d350
    │   │       │   │   └── fc15dda1f003d8
    │   │       │   ├── 24/
    │   │       │   │   ├── 028cd25a950e52
    │   │       │   │   ├── 20ebed0f933f89
    │   │       │   │   ├── 5d240e01e55c47
    │   │       │   │   ├── 6788a274795155
    │   │       │   │   ├── 89dcdfb9892a06
    │   │       │   │   ├── 93b3154f09b452
    │   │       │   │   ├── a017ce7ee8ab49
    │   │       │   │   └── f85afd524310b1
    │   │       │   ├── 25/
    │   │       │   │   ├── 00e809031a4e27
    │   │       │   │   ├── 52f3e68752f8b6
    │   │       │   │   ├── 6ced38844d5e44
    │   │       │   │   ├── 89e30f6f7084a6
    │   │       │   │   ├── 9fdff14a4635fd
    │   │       │   │   ├── b45d66407756bd
    │   │       │   │   ├── caf6f76f3500b6
    │   │       │   │   └── ddf0ce8672710a
    │   │       │   ├── 26/
    │   │       │   │   ├── 844fb2d597d9ec
    │   │       │   │   ├── 96720e2cc8c7fb
    │   │       │   │   ├── 97d16958a666d7
    │   │       │   │   ├── 9ea831a48d2c48
    │   │       │   │   ├── a094ab59adc654
    │   │       │   │   ├── d0481e0c6d2039
    │   │       │   │   └── fff9efa7e3420b
    │   │       │   ├── 27/
    │   │       │   │   ├── 05382a269c5ba6
    │   │       │   │   ├── 140e0186f20b55
    │   │       │   │   ├── 1701ca64c64006
    │   │       │   │   ├── 33761e80434e12
    │   │       │   │   ├── 70f287bb50ff00
    │   │       │   │   ├── 8db15737ea2146
    │   │       │   │   ├── 94af7236e31d72
    │   │       │   │   ├── b576f45ea15943
    │   │       │   │   ├── ceda432447739c
    │   │       │   │   └── e79635179cbf80
    │   │       │   ├── 28/
    │   │       │   │   ├── 004e8786658684
    │   │       │   │   ├── 4a840da58e17ae
    │   │       │   │   ├── 50e6d9fceaf490
    │   │       │   │   ├── 5169a00f44cf6e
    │   │       │   │   ├── 5b1089abe2ae52
    │   │       │   │   ├── b413e127f579ac
    │   │       │   │   ├── b648a026cd0bfd
    │   │       │   │   ├── bf847cfc5cbc28
    │   │       │   │   ├── de0bbc687cbb06
    │   │       │   │   └── e4fdb0f42aa9ef
    │   │       │   ├── 29/
    │   │       │   │   ├── 28b65af394af9f
    │   │       │   │   ├── 386b587e17381a
    │   │       │   │   ├── 386e63b903e108
    │   │       │   │   ├── 5d5878b7fd6fe5
    │   │       │   │   ├── 6b5d5744a5130a
    │   │       │   │   ├── 7c5e3579bf408d
    │   │       │   │   ├── 7f69cfb3635106
    │   │       │   │   ├── 831db2cb082c54
    │   │       │   │   ├── b04a6e599642e2
    │   │       │   │   └── bce3b7ba1eed56
    │   │       │   ├── 2a/
    │   │       │   │   ├── 0b73b95e934392
    │   │       │   │   ├── 1715e3ea71f282
    │   │       │   │   ├── 24c145da2615b6
    │   │       │   │   ├── 83ef77934e6ced
    │   │       │   │   ├── bba378a5482711
    │   │       │   │   ├── bcf042ab25b8eb
    │   │       │   │   └── dc852026c2e711
    │   │       │   ├── 2b/
    │   │       │   │   ├── 1f7bdce18d2ff2
    │   │       │   │   ├── 370f9afdbe0332
    │   │       │   │   ├── 4fe07b7b2f9b12
    │   │       │   │   ├── 60f2df1e446b24
    │   │       │   │   ├── 6d04a98f6e919a
    │   │       │   │   ├── 7a0f1d3303e4d6
    │   │       │   │   ├── 838c58d03c9ce4
    │   │       │   │   ├── 9582bd901eeec0
    │   │       │   │   ├── c5e3d220b761b2
    │   │       │   │   └── f5b6b18037349c
    │   │       │   ├── 2c/
    │   │       │   │   ├── 25b084957e11aa
    │   │       │   │   ├── 376b5dcf3ebb17
    │   │       │   │   ├── 7a2b904d78dda5
    │   │       │   │   ├── 7c1e758682f70e
    │   │       │   │   ├── 85c59a2b39f0b9
    │   │       │   │   ├── 8d5821aa01b012
    │   │       │   │   ├── c37f99c99fadb6
    │   │       │   │   ├── cf01ef871b41b2
    │   │       │   │   ├── d6be512b356d18
    │   │       │   │   ├── d715e09ffb9a82
    │   │       │   │   ├── e91ee6810a96eb
    │   │       │   │   └── f08a0fb580b76d
    │   │       │   ├── 2d/
    │   │       │   │   ├── 1702d9bd89f5bc
    │   │       │   │   ├── 5b8e9c75fce94a
    │   │       │   │   ├── 753116fc6b78c6
    │   │       │   │   ├── 8789871219b280
    │   │       │   │   ├── 9e1bd40bc53a10
    │   │       │   │   ├── a105a5b54a1465
    │   │       │   │   └── b80684895c493c
    │   │       │   ├── 2e/
    │   │       │   │   ├── 08cb1f0efa100a
    │   │       │   │   ├── 209a42d8667ae9
    │   │       │   │   ├── 25049c2a4adc4b
    │   │       │   │   ├── 2e24214b146dfc
    │   │       │   │   ├── 531fd6a3a78b3d
    │   │       │   │   ├── 55d2cbf5ed1b6c
    │   │       │   │   ├── 57937836558bd3
    │   │       │   │   ├── 5d43a2613631fa
    │   │       │   │   ├── 74a40c542983ef
    │   │       │   │   ├── 790e03e3acbad3
    │   │       │   │   ├── 8649576686ae17
    │   │       │   │   ├── 9a409e789161cb
    │   │       │   │   ├── a1cda6f6fd409c
    │   │       │   │   └── e974edda28ef6d
    │   │       │   ├── 2f/
    │   │       │   │   ├── 361220732fd2cf
    │   │       │   │   ├── 3f29f8f4c7c091
    │   │       │   │   ├── 48c417e49e6989
    │   │       │   │   └── 8f0038a9f586bd
    │   │       │   ├── 30/
    │   │       │   │   ├── 1518685b49d9cc
    │   │       │   │   ├── 1f2fbc00b6b199
    │   │       │   │   ├── 27f90f93b4a2cd
    │   │       │   │   ├── 31bf48e1d7b196
    │   │       │   │   ├── 5089eedca10795
    │   │       │   │   ├── 936fac1d4f5819
    │   │       │   │   ├── e026a0abbe3321
    │   │       │   │   └── e2481c833f9d22
    │   │       │   ├── 31/
    │   │       │   │   ├── 13068517d82db5
    │   │       │   │   ├── 41dd968aba93e4
    │   │       │   │   ├── 72e04207858f0a
    │   │       │   │   ├── 99ec4ba9a69950
    │   │       │   │   ├── abc0b1a3e40e1d
    │   │       │   │   ├── abd8a78b6e04e8
    │   │       │   │   ├── b0f934317339fa
    │   │       │   │   ├── c9233e235e7546
    │   │       │   │   ├── e4944a3e5c33a8
    │   │       │   │   ├── f0914f582c635d
    │   │       │   │   └── fad651674bb24d
    │   │       │   ├── 32/
    │   │       │   │   ├── 1956621049ae61
    │   │       │   │   ├── 31f2cb6004fbb5
    │   │       │   │   ├── 5129b034860e4f
    │   │       │   │   ├── 5c7dea92d5d1d7
    │   │       │   │   ├── 7979d55dba981f
    │   │       │   │   ├── 80dbea1f6b4803
    │   │       │   │   ├── 85d9fdc53e132e
    │   │       │   │   └── f356b33b1b3b9d
    │   │       │   ├── 33/
    │   │       │   │   ├── 05a441e3c807ce
    │   │       │   │   ├── 16c32bfaa725cf
    │   │       │   │   ├── 251879425b6d3f
    │   │       │   │   ├── 2683f122de7204
    │   │       │   │   ├── 65eef1dc7975a3
    │   │       │   │   ├── 68191c1a349a66
    │   │       │   │   ├── 9bade562483b62
    │   │       │   │   ├── c3c7fa5e77e23e
    │   │       │   │   ├── dbba58f0ddebb4
    │   │       │   │   ├── e65896a8e9c0f1
    │   │       │   │   └── fe1f0f091e07d2
    │   │       │   ├── 34/
    │   │       │   │   ├── 0f3fb8eb2f98d3
    │   │       │   │   ├── 186ef9d7bcd4a2
    │   │       │   │   ├── 21ddb3563d75ce
    │   │       │   │   ├── 6307b87ce4717a
    │   │       │   │   ├── 9e0dadfa6571d5
    │   │       │   │   ├── cb8ed07e1b413a
    │   │       │   │   ├── cd62d09d86149f
    │   │       │   │   ├── de29c835926da2
    │   │       │   │   └── f1f0a27e770f6c
    │   │       │   ├── 35/
    │   │       │   │   ├── 03ffba37c9b53c
    │   │       │   │   ├── 05bbcf32eba1d3
    │   │       │   │   ├── 38c4b6d2ed2276
    │   │       │   │   ├── 4bddb5733ced54
    │   │       │   │   ├── 4f7afcf29c9702
    │   │       │   │   ├── 664017b493c4a1
    │   │       │   │   ├── aba7d5f51cbee7
    │   │       │   │   ├── c55389ff861653
    │   │       │   │   ├── e0919771b9a202
    │   │       │   │   ├── f3d626888568a5
    │   │       │   │   └── f96af1a4d6d5c3
    │   │       │   ├── 36/
    │   │       │   │   ├── 2998d49893a0b1
    │   │       │   │   ├── 2ef6ce730d1a90
    │   │       │   │   ├── 6bacf68c27fa72
    │   │       │   │   ├── 9b2ccacc41c0ab
    │   │       │   │   ├── b72f7edadcef53
    │   │       │   │   ├── d298ac5bf70e91
    │   │       │   │   ├── ebc93b7d757e94
    │   │       │   │   └── fe37351678b59d
    │   │       │   ├── 37/
    │   │       │   │   ├── 0220f59a04816a
    │   │       │   │   ├── 079b880ca5491a
    │   │       │   │   ├── 32d7102cedd7ec
    │   │       │   │   ├── 4424a5c617f6ec
    │   │       │   │   ├── 58dc45ca9519ae
    │   │       │   │   ├── 63ea3834cb0434
    │   │       │   │   └── b2d66849149d29
    │   │       │   ├── 38/
    │   │       │   │   ├── 0f904773933082
    │   │       │   │   ├── 10f49e48d77bc6
    │   │       │   │   ├── 28f622aa7c5926
    │   │       │   │   ├── 3043652c32b419
    │   │       │   │   ├── 54877086bc545c
    │   │       │   │   ├── 61a1c58ea21cf9
    │   │       │   │   ├── 62521d9723c9d8
    │   │       │   │   ├── 672eb4fbc35720
    │   │       │   │   ├── 6a767c350f1c50
    │   │       │   │   ├── 71b431f13e3c43
    │   │       │   │   ├── aaec598f928865
    │   │       │   │   ├── e0a5cb443ecc6a
    │   │       │   │   ├── efac42c66eb660
    │   │       │   │   └── ff4bfb8e7b6d0b
    │   │       │   ├── 39/
    │   │       │   │   ├── 058b097364c23b
    │   │       │   │   ├── 4bcfb3c51f7adc
    │   │       │   │   ├── 5f15e30662e318
    │   │       │   │   ├── a0086b7a44d3b1
    │   │       │   │   ├── add8c26733b808
    │   │       │   │   ├── b1fa357738e988
    │   │       │   │   ├── f2cac99b8ff1eb
    │   │       │   │   └── f9c66646137e3a
    │   │       │   ├── 3a/
    │   │       │   │   ├── 1a39bbd9fefd16
    │   │       │   │   ├── 3e7025d8a544b2
    │   │       │   │   ├── 5e775326899b35
    │   │       │   │   ├── 73dd0af3943e45
    │   │       │   │   ├── 7f7aed5f00d665
    │   │       │   │   ├── c794729007c284
    │   │       │   │   └── ff092aa911352a
    │   │       │   ├── 3b/
    │   │       │   │   ├── 4d34af5c1b3d34
    │   │       │   │   ├── 5385ec405211e0
    │   │       │   │   └── be2139a6418d7c
    │   │       │   ├── 3c/
    │   │       │   │   ├── 0053ab08b92ab7
    │   │       │   │   ├── 0234d90bcf1bed
    │   │       │   │   ├── 0c42a6be3f4b2a
    │   │       │   │   ├── 1ed68a11c03f4c
    │   │       │   │   ├── 390d05056e38a0
    │   │       │   │   ├── 3bf672d5e40725
    │   │       │   │   ├── 4ec9f1da8ac478
    │   │       │   │   ├── 544a47fa5953d3
    │   │       │   │   ├── 59e6b630b19ee1
    │   │       │   │   ├── b9e6b20d20e3be
    │   │       │   │   └── cb6cee396dea52
    │   │       │   ├── 3d/
    │   │       │   │   ├── 4a32cf3266d3ea
    │   │       │   │   ├── 6c8be639c3dcb4
    │   │       │   │   ├── 8104f5eeebf841
    │   │       │   │   ├── 9740a8e2812bdd
    │   │       │   │   ├── ad22802eb2654a
    │   │       │   │   ├── b597490a0921eb
    │   │       │   │   ├── c56249bcef4e2a
    │   │       │   │   ├── c9b993705e9454
    │   │       │   │   └── cbd78074f7f786
    │   │       │   ├── 3e/
    │   │       │   │   ├── 0e2162d0c4fb8f
    │   │       │   │   ├── 103328daa37491
    │   │       │   │   ├── 73c34f56e09b82
    │   │       │   │   ├── a5a9959a86185a
    │   │       │   │   ├── b04ad964b20835
    │   │       │   │   ├── ca736067457069
    │   │       │   │   └── d79aaecb246e00
    │   │       │   ├── 3f/
    │   │       │   │   ├── 049e53d4bb8e13
    │   │       │   │   ├── 284934fc791baa
    │   │       │   │   ├── 3003817ada8506
    │   │       │   │   ├── 32f068c679e049
    │   │       │   │   ├── 3a49ce4a257017
    │   │       │   │   ├── 51f4f82a713c7b
    │   │       │   │   ├── 744d815f4b4814
    │   │       │   │   ├── b8ad987b9cb9a3
    │   │       │   │   ├── c347562cded02b
    │   │       │   │   └── d98646ca21f8c3
    │   │       │   ├── 40/
    │   │       │   │   ├── 055da2f0b4b6b7
    │   │       │   │   ├── 14879048c3019f
    │   │       │   │   ├── 1d71d5505938e4
    │   │       │   │   ├── 2723a69d4069b8
    │   │       │   │   ├── 4d7ac087447bc3
    │   │       │   │   └── fab2a973ef98c8
    │   │       │   ├── 41/
    │   │       │   │   ├── 1d014b4e3fd715
    │   │       │   │   ├── 29acfb3f70b847
    │   │       │   │   ├── 2fb10b1d0a9751
    │   │       │   │   ├── 43c278f3844af8
    │   │       │   │   ├── a7db41ed3004fd
    │   │       │   │   ├── c84a86dd2547bd
    │   │       │   │   └── f6bfa7a5251ac2
    │   │       │   ├── 42/
    │   │       │   │   ├── 0771fc873ec6bc
    │   │       │   │   ├── 0d86e94221eae5
    │   │       │   │   ├── 0fb173c159878b
    │   │       │   │   ├── 3eea2151accf50
    │   │       │   │   ├── 593ac1b044bf97
    │   │       │   │   ├── 73ef7edf56bee2
    │   │       │   │   ├── 8ed6327e84ffc4
    │   │       │   │   ├── 9e7f01d41a013a
    │   │       │   │   ├── a622cdf0f56eab
    │   │       │   │   ├── adb6cabff37e28
    │   │       │   │   ├── e86da54acb2e6f
    │   │       │   │   └── fff5a439b45e1a
    │   │       │   ├── 43/
    │   │       │   │   ├── 26e7aad73dc1d4
    │   │       │   │   ├── 3ebbb6e8ae2c78
    │   │       │   │   ├── 3f008a06045313
    │   │       │   │   ├── 56a17172d97127
    │   │       │   │   ├── 57832bbd7bfb30
    │   │       │   │   ├── 5d110b9140acdd
    │   │       │   │   ├── 60aac751d3d415
    │   │       │   │   ├── 712d47f176c2d0
    │   │       │   │   ├── 8122088fae933d
    │   │       │   │   ├── e0ef4f97bff1f8
    │   │       │   │   └── e40085bdffa8fb
    │   │       │   ├── 44/
    │   │       │   │   ├── 00ac9cd01dff54
    │   │       │   │   ├── 0abdbd07e18df0
    │   │       │   │   ├── 290384692e2eb4
    │   │       │   │   ├── 3b02f23386853b
    │   │       │   │   ├── 4d274817cb62c2
    │   │       │   │   ├── 75fb52acf77352
    │   │       │   │   ├── 9f7d7795c2dc0b
    │   │       │   │   ├── a0e2f32e652ba4
    │   │       │   │   ├── a6a7e6aed417d3
    │   │       │   │   ├── b0c10d6e1e5050
    │   │       │   │   ├── cada91812d3df8
    │   │       │   │   ├── e65e983fb35059
    │   │       │   │   └── f4580fe862d204
    │   │       │   ├── 45/
    │   │       │   │   ├── 1a0ace80fccf07
    │   │       │   │   ├── 1b1f59b6443f16
    │   │       │   │   ├── 5a10574da9d950
    │   │       │   │   ├── 5b26459a59e153
    │   │       │   │   ├── 63e96c987fac2f
    │   │       │   │   ├── 6d42d3a4d0229f
    │   │       │   │   ├── dcc9fc2971ac56
    │   │       │   │   └── ddae92e2bf4123
    │   │       │   ├── 46/
    │   │       │   │   ├── 0eb20f037553a1
    │   │       │   │   ├── 2020328565f677
    │   │       │   │   ├── 21598125cb3972
    │   │       │   │   ├── 2b456371fd7eb7
    │   │       │   │   ├── 393a7790b0777b
    │   │       │   │   ├── 4b0286996609d4
    │   │       │   │   ├── 4cf8eb90e034be
    │   │       │   │   ├── 503c38c0350274
    │   │       │   │   ├── 537eab3469aea1
    │   │       │   │   ├── 5edede71ec3390
    │   │       │   │   ├── 88690808c9c4eb
    │   │       │   │   ├── 952e8455e0bd85
    │   │       │   │   └── c15ab641cc283c
    │   │       │   ├── 47/
    │   │       │   │   ├── 1ee65711e304e6
    │   │       │   │   ├── 253ebc7b5dd494
    │   │       │   │   ├── 44bfb4c49f6375
    │   │       │   │   ├── 49beac5daca3d6
    │   │       │   │   ├── 5abbfebcc1d5f5
    │   │       │   │   ├── 899f9828895247
    │   │       │   │   ├── a59b1631c5d4fc
    │   │       │   │   ├── ab4fed9ac6933e
    │   │       │   │   └── f42d5e45527bef
    │   │       │   ├── 48/
    │   │       │   │   ├── 1abeeb366f58f1
    │   │       │   │   ├── 6eef74daa9fc7d
    │   │       │   │   ├── 87d4adaab8184d
    │   │       │   │   ├── 8c7d84e6955ada
    │   │       │   │   ├── 95960ad5f3a386
    │   │       │   │   ├── ad008f3b0de462
    │   │       │   │   ├── bdebfd10163e41
    │   │       │   │   ├── d5549cd647138f
    │   │       │   │   ├── d8bbc6ee549539
    │   │       │   │   ├── e3c5b68d210b7d
    │   │       │   │   └── e81dc0f9430021
    │   │       │   ├── 49/
    │   │       │   │   ├── 2b94457c63d83a
    │   │       │   │   ├── 5b536717b28e60
    │   │       │   │   ├── 77c6c1e4d9fe7d
    │   │       │   │   ├── 7db0bba6d01e30
    │   │       │   │   ├── aa573d71308946
    │   │       │   │   ├── b9d0804c14257e
    │   │       │   │   ├── c09cdb727ad583
    │   │       │   │   ├── c50439e6d2427b
    │   │       │   │   ├── d29f73f48da210
    │   │       │   │   └── f779b83ed239e0
    │   │       │   ├── 4a/
    │   │       │   │   ├── 0e6b47b4d0b762
    │   │       │   │   ├── 179dffe9ce55f7
    │   │       │   │   ├── 1d2a36cd940ce1
    │   │       │   │   ├── 24b0a627739289
    │   │       │   │   ├── 4a2e32f0fb138c
    │   │       │   │   ├── 53f02189e48537
    │   │       │   │   ├── 83383bb5c52bbf
    │   │       │   │   ├── a76f87dede1f80
    │   │       │   │   ├── c492a469a386e4
    │   │       │   │   ├── d3d7ed580f66bd
    │   │       │   │   └── e049fcef00a634
    │   │       │   ├── 4b/
    │   │       │   │   ├── 033ea19c012b67
    │   │       │   │   ├── 06c79c98d0c33b
    │   │       │   │   ├── 4a944d3d169069
    │   │       │   │   ├── a97a0793e67f5a
    │   │       │   │   └── e9c79b068fe5ff
    │   │       │   ├── 4c/
    │   │       │   │   ├── 09e475b26e267b
    │   │       │   │   ├── 10de0673bf8eeb
    │   │       │   │   ├── 4a8227c5b9e30f
    │   │       │   │   ├── 74fa21c1c9beda
    │   │       │   │   ├── 7d7577716df791
    │   │       │   │   ├── 96f13072d6e023
    │   │       │   │   ├── a7f1e00122358e
    │   │       │   │   ├── c08342fcb3cf9a
    │   │       │   │   ├── d70ed2916a212d
    │   │       │   │   ├── ee788e5c78c54a
    │   │       │   │   └── ffc02ed21b520e
    │   │       │   ├── 4d/
    │   │       │   │   ├── 08443d5a8cc78d
    │   │       │   │   ├── 2822349b53097a
    │   │       │   │   ├── 38110078fb5088
    │   │       │   │   ├── 66bf0d411b4e8f
    │   │       │   │   ├── 72e1e993c52c87
    │   │       │   │   ├── 84d5630bdccb24
    │   │       │   │   ├── a3a99d435d2179
    │   │       │   │   ├── b56553b4d48c8a
    │   │       │   │   └── b60a9e5b1d7f33
    │   │       │   ├── 4e/
    │   │       │   │   ├── 45ba1d33db6f63
    │   │       │   │   ├── 6a1363cc86402b
    │   │       │   │   ├── 80d93d69446d51
    │   │       │   │   ├── 9dfdff4263b3db
    │   │       │   │   ├── a07c35edf85660
    │   │       │   │   ├── cdc9de8aaec30a
    │   │       │   │   ├── ce2ccd4a955bd8
    │   │       │   │   ├── df9869cb0fb558
    │   │       │   │   └── f1b98739c104c2
    │   │       │   ├── 4f/
    │   │       │   │   ├── 08104fb658ef47
    │   │       │   │   ├── 2ad0debb34eda9
    │   │       │   │   ├── 78ee1d41f411bc
    │   │       │   │   ├── 79444301cc5e9b
    │   │       │   │   ├── 91aa43db2ce6ab
    │   │       │   │   ├── 9e7a07cfd35b83
    │   │       │   │   ├── a6a4f0d117c19e
    │   │       │   │   └── aa5a5bccc1996d
    │   │       │   ├── 50/
    │   │       │   │   ├── 18938a7014526a
    │   │       │   │   ├── 25a905addbb296
    │   │       │   │   ├── 2adc84f5af07d8
    │   │       │   │   ├── 3bbe626f675e49
    │   │       │   │   ├── 4179e6f7d1942a
    │   │       │   │   ├── 47794fff9808f9
    │   │       │   │   ├── a3b4b35d7557aa
    │   │       │   │   ├── a8aae61ae61d45
    │   │       │   │   ├── aecae629eb08e3
    │   │       │   │   ├── b3f2d8a8cd60fc
    │   │       │   │   ├── ccbfbcef77d268
    │   │       │   │   ├── dab46eec4674f0
    │   │       │   │   └── dcaf2f4ed1632c
    │   │       │   ├── 51/
    │   │       │   │   ├── 1e89f036da29d6
    │   │       │   │   ├── 288b108b6f5f7e
    │   │       │   │   ├── 2b83ba5b917fa9
    │   │       │   │   ├── 373c2eae413267
    │   │       │   │   ├── 53e759e63fa7f5
    │   │       │   │   ├── 98a840b336274b
    │   │       │   │   ├── 9efab000b59392
    │   │       │   │   ├── c89e79c39dc75b
    │   │       │   │   └── d2023faf1e1466
    │   │       │   ├── 52/
    │   │       │   │   ├── 112a2b47b4b25a
    │   │       │   │   ├── 11a985e6e000dc
    │   │       │   │   ├── 45767f79c6a188
    │   │       │   │   ├── bc1c8a057fc15f
    │   │       │   │   ├── c7239cb4e9df74
    │   │       │   │   └── cf7da88bd74c35
    │   │       │   ├── 53/
    │   │       │   │   ├── 03267fe753910d
    │   │       │   │   ├── 0bd1ccdbb77e4c
    │   │       │   │   ├── 10ad9e1b54b4dc
    │   │       │   │   ├── 1f3a54ccc3cc80
    │   │       │   │   ├── 4ca3e4237825a1
    │   │       │   │   ├── 7954a3096ac27a
    │   │       │   │   ├── acf4b2c4e098fb
    │   │       │   │   ├── d22a1ef2900203
    │   │       │   │   ├── ea40c3f5ea4923
    │   │       │   │   └── f947eae4d0c150
    │   │       │   ├── 54/
    │   │       │   │   ├── 0443f140b8c826
    │   │       │   │   ├── 33f505f2ee3053
    │   │       │   │   ├── 67f15dfd569ce9
    │   │       │   │   ├── 870c59cc503b5e
    │   │       │   │   ├── a249ded25e71b5
    │   │       │   │   ├── a412a43bbb9b60
    │   │       │   │   ├── aac5e1ca9f66ee
    │   │       │   │   ├── c768b5ebc62ad0
    │   │       │   │   ├── cdf8c4d059be90
    │   │       │   │   ├── dea9c8e73528b6
    │   │       │   │   └── f7a0f196e2e6e8
    │   │       │   ├── 55/
    │   │       │   │   ├── 400429553dfdb3
    │   │       │   │   ├── 446f675088ae8a
    │   │       │   │   ├── 464b678f4e565b
    │   │       │   │   ├── 496a3dc1d17967
    │   │       │   │   ├── 4b0d37f72bfb81
    │   │       │   │   ├── 7af242277483bd
    │   │       │   │   ├── 98770f0cc4fa55
    │   │       │   │   ├── ab4388de1f58d5
    │   │       │   │   ├── d0c3666fa9f425
    │   │       │   │   ├── d41b2b83830c66
    │   │       │   │   ├── f971d64e724859
    │   │       │   │   └── fe6b1d71867c4e
    │   │       │   ├── 56/
    │   │       │   │   ├── 02995de5ffd012
    │   │       │   │   ├── 080718bf2a4e87
    │   │       │   │   ├── 0db257c484fbdb
    │   │       │   │   ├── 176eeecc776ba3
    │   │       │   │   ├── 2f0e9b121382f9
    │   │       │   │   ├── 349b523eba19ee
    │   │       │   │   ├── 66945f6df5541c
    │   │       │   │   ├── 94faa21e8bd5db
    │   │       │   │   ├── 98736ce5c36846
    │   │       │   │   ├── a289fabcbbfbe8
    │   │       │   │   ├── cb5ef869d367da
    │   │       │   │   ├── d37b538880683b
    │   │       │   │   └── efbe4633ab2db9
    │   │       │   ├── 57/
    │   │       │   │   ├── 0ed4a97e27f854
    │   │       │   │   ├── 380519f9302de2
    │   │       │   │   ├── 654832b2d61ae4
    │   │       │   │   ├── 7a0d0f360f6f0c
    │   │       │   │   ├── 8d4fde9d90e732
    │   │       │   │   ├── a57853ed572121
    │   │       │   │   ├── a7d96a0bd5f93f
    │   │       │   │   ├── d8635410c25b4e
    │   │       │   │   ├── da7ba1a1170338
    │   │       │   │   └── fc793db40ecdb8
    │   │       │   ├── 58/
    │   │       │   │   ├── 4cda07cf793407
    │   │       │   │   ├── 511c0949902d20
    │   │       │   │   ├── 5731b21c3255d7
    │   │       │   │   ├── 5c3e18cb7d05d4
    │   │       │   │   ├── 80b63e3da95752
    │   │       │   │   ├── 82afb278331ace
    │   │       │   │   ├── 8912b864bf53da
    │   │       │   │   ├── a4761c81dae57e
    │   │       │   │   ├── b7f1ea17770476
    │   │       │   │   ├── c7ece49bc9dfe1
    │   │       │   │   ├── d632af415a8c91
    │   │       │   │   ├── d8f87345cb5176
    │   │       │   │   └── e46f665b21230e
    │   │       │   ├── 59/
    │   │       │   │   ├── 3664f7179931bc
    │   │       │   │   ├── 49aa09ca3532e1
    │   │       │   │   ├── 60ada42b440a57
    │   │       │   │   ├── b252565a3dd051
    │   │       │   │   └── bdfe8e370c1f3c
    │   │       │   ├── 5a/
    │   │       │   │   ├── 2954ad5756bb7d
    │   │       │   │   ├── 2ffa1fc1721c08
    │   │       │   │   ├── 8b9e0f2cb7edfc
    │   │       │   │   ├── 9071d63fa8cc8c
    │   │       │   │   ├── b28385dacc7fc4
    │   │       │   │   ├── d3ab4b810d492c
    │   │       │   │   ├── e04832e58565b6
    │   │       │   │   └── e09adf5d781d5d
    │   │       │   ├── 5b/
    │   │       │   │   ├── 1845c52e2bb1d0
    │   │       │   │   ├── 3a156656ddd26e
    │   │       │   │   ├── 40128fdb33a265
    │   │       │   │   ├── 4763727e2abca7
    │   │       │   │   ├── 79d36e5c3855b1
    │   │       │   │   ├── 7ef1cb40fabc26
    │   │       │   │   ├── 86703d3ed9c8a6
    │   │       │   │   ├── 9a02f5722f3c75
    │   │       │   │   ├── be6e082002a02e
    │   │       │   │   ├── e6cc3af6bb0e98
    │   │       │   │   └── ff39cdf4035c5e
    │   │       │   ├── 5c/
    │   │       │   │   ├── 14da9364ba62be
    │   │       │   │   ├── 1cbc8cfcdb50d1
    │   │       │   │   ├── 1eac5902ba034f
    │   │       │   │   ├── 2e385f1f9c5750
    │   │       │   │   ├── 3eb62e37eb50fa
    │   │       │   │   ├── 4ec51b0e16d6cd
    │   │       │   │   ├── 5fe0b1f91f7ff2
    │   │       │   │   ├── 72de6507edf1d4
    │   │       │   │   ├── e6c8a7bdcf2b9b
    │   │       │   │   └── f070c25c79c211
    │   │       │   ├── 5d/
    │   │       │   │   ├── 1e99d434d19f1e
    │   │       │   │   ├── 401e91ac947b09
    │   │       │   │   ├── 64dfb0b7956849
    │   │       │   │   ├── 95f17751b479a3
    │   │       │   │   ├── 9c84001a5255b9
    │   │       │   │   ├── 9dc19451d6816f
    │   │       │   │   ├── b81906376e3824
    │   │       │   │   └── d7753a6e23ad5c
    │   │       │   ├── 5e/
    │   │       │   │   ├── 0db6fe2850b749
    │   │       │   │   ├── 2b1f65167f8bfd
    │   │       │   │   ├── 3398ee04bdfde9
    │   │       │   │   ├── 3fa85d586b5372
    │   │       │   │   ├── 47ede5d96a0c6c
    │   │       │   │   ├── acd73daa1be2b8
    │   │       │   │   ├── c94b75d70d6e94
    │   │       │   │   ├── cbe459ba413b65
    │   │       │   │   └── f61a1299d197da
    │   │       │   ├── 5f/
    │   │       │   │   ├── 0a0a884b58f612
    │   │       │   │   ├── 0d4d1db5cd7e74
    │   │       │   │   ├── 0e0934d0290974
    │   │       │   │   ├── 27f443697ad01b
    │   │       │   │   ├── 4ad0736bbff501
    │   │       │   │   └── 7e0d176d075d4f
    │   │       │   ├── 60/
    │   │       │   │   ├── 42d81f122efccf
    │   │       │   │   ├── 48e7ef1a43688e
    │   │       │   │   ├── c5f93f3299c966
    │   │       │   │   ├── ca7691cdea7cfd
    │   │       │   │   ├── ceaaca73c2c879
    │   │       │   │   ├── de595c3252e8cf
    │   │       │   │   └── e719491cb17d9c
    │   │       │   ├── 61/
    │   │       │   │   ├── 1868e9598bd188
    │   │       │   │   ├── 3de6c65cd1e6c0
    │   │       │   │   ├── 4af988cc5352b9
    │   │       │   │   ├── 527341a6503336
    │   │       │   │   ├── 65b5e6f1fb1a5e
    │   │       │   │   ├── 6a07366815d812
    │   │       │   │   ├── 74aa72efc07f21
    │   │       │   │   ├── 7f29062c668ae6
    │   │       │   │   ├── a2e1cf746b5715
    │   │       │   │   ├── d5bb40875bdecc
    │   │       │   │   ├── da3c63b176f987
    │   │       │   │   └── e2ddb95b109c41
    │   │       │   ├── 62/
    │   │       │   │   ├── 130ff9a70691a1
    │   │       │   │   ├── 1faeee66f4108f
    │   │       │   │   ├── 27b060fcb9f1e1
    │   │       │   │   ├── 3b9bcb83b8b4da
    │   │       │   │   ├── 3be765641c4c62
    │   │       │   │   ├── 54aead33b30029
    │   │       │   │   ├── 5d10be03d4c591
    │   │       │   │   ├── a26869f7a98de5
    │   │       │   │   ├── ad321295d2fce1
    │   │       │   │   ├── ec9641b9e98cc2
    │   │       │   │   └── f20981dc8182f2
    │   │       │   ├── 63/
    │   │       │   │   ├── 478d21ea44c97b
    │   │       │   │   ├── 62a52bf97e6458
    │   │       │   │   ├── 7113905c83d5eb
    │   │       │   │   ├── a27bdb55c5f0d7
    │   │       │   │   ├── a67c859b4f9025
    │   │       │   │   ├── a69d4fd5f11da3
    │   │       │   │   ├── ab4413360e33c7
    │   │       │   │   ├── bf3d2fe26a481c
    │   │       │   │   ├── c6e78e19196f69
    │   │       │   │   ├── d02e8c878ef4a7
    │   │       │   │   └── d6ac8ec341b5f5
    │   │       │   ├── 64/
    │   │       │   │   ├── 02ba63c49580b5
    │   │       │   │   ├── 0816e0b34a823d
    │   │       │   │   ├── 26b9c4f5be385e
    │   │       │   │   ├── 6930ff7aaed023
    │   │       │   │   ├── 90c59c1d946156
    │   │       │   │   ├── b44def42b5d5a5
    │   │       │   │   ├── d5b812e6b06ba1
    │   │       │   │   └── f31deaecc366e9
    │   │       │   ├── 65/
    │   │       │   │   ├── 021a7aff8286bd
    │   │       │   │   ├── 3dcaf20de350b9
    │   │       │   │   ├── 631af8adeb0831
    │   │       │   │   ├── 870f42610f80e8
    │   │       │   │   ├── 9180f1ee985ec6
    │   │       │   │   ├── 97c7b81d8b197b
    │   │       │   │   ├── 99cdf59ce0d47c
    │   │       │   │   ├── b7d7df00d4c006
    │   │       │   │   ├── c9dc3ab35bfbb0
    │   │       │   │   └── df0edfa6973de1
    │   │       │   ├── 66/
    │   │       │   │   ├── 14033646a95fc1
    │   │       │   │   ├── 1613b394ab032e
    │   │       │   │   ├── 1f20964700d1f6
    │   │       │   │   ├── 221fd783a84bc1
    │   │       │   │   ├── 77b2262f3af1eb
    │   │       │   │   └── e2c86561d317fe
    │   │       │   ├── 67/
    │   │       │   │   ├── 03befd40e4b734
    │   │       │   │   ├── a72d5099e8bb19
    │   │       │   │   ├── a991bfb53def5c
    │   │       │   │   ├── c857b9a61e0192
    │   │       │   │   └── edabeb53691384
    │   │       │   ├── 68/
    │   │       │   │   ├── 0cbf775f799bfa
    │   │       │   │   ├── 13ed495a501745
    │   │       │   │   ├── 30d9d5c158c3ec
    │   │       │   │   ├── 5d823063234fb4
    │   │       │   │   ├── 77e4389a2f7db9
    │   │       │   │   ├── 8ffba6e0bed74a
    │   │       │   │   ├── aa94cfbfd9cfbd
    │   │       │   │   ├── bc413c3938ec32
    │   │       │   │   ├── c3fac3b028a19f
    │   │       │   │   ├── dbb9c9a57c3172
    │   │       │   │   └── efb3daa004f4e3
    │   │       │   ├── 69/
    │   │       │   │   ├── 4db16d18f61edb
    │   │       │   │   ├── 7332df59e4d68f
    │   │       │   │   ├── 9290c9212f156b
    │   │       │   │   ├── b4cafe7b881dd5
    │   │       │   │   ├── b742fc50fc80cb
    │   │       │   │   ├── b860afe67cdb1c
    │   │       │   │   ├── bcbb76c4de51fa
    │   │       │   │   ├── e930e21eee4aae
    │   │       │   │   └── f6e82096dee266
    │   │       │   ├── 6a/
    │   │       │   │   ├── 0371a210bf5205
    │   │       │   │   ├── 0e703c6dc7f158
    │   │       │   │   ├── 12d72920e0b0ea
    │   │       │   │   ├── 320d793e8adccc
    │   │       │   │   ├── 45aa9c1e6d867b
    │   │       │   │   ├── 5b04068bb407bd
    │   │       │   │   ├── 79f917faf4ade9
    │   │       │   │   ├── 80b564f9092924
    │   │       │   │   ├── c9bd7fb9233e8f
    │   │       │   │   └── ed68b760857067
    │   │       │   ├── 6b/
    │   │       │   │   ├── 1556a891cbf622
    │   │       │   │   ├── 243aa986f1949b
    │   │       │   │   ├── 7d13166c8b2478
    │   │       │   │   ├── 90d83c41934e04
    │   │       │   │   ├── 958c70641457ce
    │   │       │   │   ├── a5f5c28940e6f3
    │   │       │   │   └── f76574fc54146a
    │   │       │   ├── 6c/
    │   │       │   │   ├── 0803943b0f40db
    │   │       │   │   ├── 0d24566fd0e458
    │   │       │   │   ├── 17243ac8157664
    │   │       │   │   ├── 24ffc34e10cb37
    │   │       │   │   ├── 2ff5f4971e8e62
    │   │       │   │   ├── 5b32b0c32c1c0b
    │   │       │   │   ├── 8316d962b73121
    │   │       │   │   ├── cf039a6e3cb3da
    │   │       │   │   └── f1b9836d88cccc
    │   │       │   ├── 6d/
    │   │       │   │   ├── 229958d3e4b34a
    │   │       │   │   ├── 2a982c13b056fd
    │   │       │   │   ├── 34b68a9e2e9aa7
    │   │       │   │   ├── 5942b249cd5ef1
    │   │       │   │   ├── 675d16860f90e2
    │   │       │   │   ├── c984c6f0c43864
    │   │       │   │   ├── d5dd982a9b9485
    │   │       │   │   └── f7a88abd901c69
    │   │       │   ├── 6e/
    │   │       │   │   ├── 05f7add8f47202
    │   │       │   │   ├── 0deea02656f2b1
    │   │       │   │   ├── 1a22d3a0f6406a
    │   │       │   │   ├── 28b8bacde6d676
    │   │       │   │   ├── 2d25c59c995588
    │   │       │   │   ├── 32d780939a55ed
    │   │       │   │   ├── 938c9b3d20fbc9
    │   │       │   │   ├── aa56a375238ef3
    │   │       │   │   ├── bca62e7bad0cdc
    │   │       │   │   ├── d666d3a948cd2a
    │   │       │   │   ├── d980b0bd47789f
    │   │       │   │   ├── dd6d264e2c32a9
    │   │       │   │   └── ff3edc4c5510ba
    │   │       │   ├── 6f/
    │   │       │   │   ├── 12c895e93a8f94
    │   │       │   │   ├── 297e92ac4ab408
    │   │       │   │   ├── 8e4c11de6f80dd
    │   │       │   │   ├── b050ec96acce4e
    │   │       │   │   ├── cd5af40a5a3768
    │   │       │   │   └── d38a77e3f73951
    │   │       │   ├── 70/
    │   │       │   │   ├── 11520fb4f9794f
    │   │       │   │   ├── 2850a204731dca
    │   │       │   │   ├── 537a1aa1e1b1da
    │   │       │   │   ├── 618b1b8da64b89
    │   │       │   │   ├── 656d86f6b1dfb7
    │   │       │   │   ├── 6aeb8ba93167cf
    │   │       │   │   ├── adee5c90688bd4
    │   │       │   │   └── b9537431a1a40d
    │   │       │   ├── 71/
    │   │       │   │   ├── 679228117d49da
    │   │       │   │   ├── 8fc61cca406496
    │   │       │   │   └── d6985007c66432
    │   │       │   ├── 72/
    │   │       │   │   ├── 191b056cb0a1a2
    │   │       │   │   ├── 361f6a33e6bcb9
    │   │       │   │   ├── 4259a1dae4637d
    │   │       │   │   ├── 537c8e92de42ca
    │   │       │   │   ├── 54057ef9707866
    │   │       │   │   ├── 5dbc970d97650b
    │   │       │   │   ├── 71edbd2fb5b430
    │   │       │   │   ├── 7903cbdc9585a0
    │   │       │   │   └── dfdfd92fbed2a3
    │   │       │   ├── 73/
    │   │       │   │   ├── 0f82402100fc7c
    │   │       │   │   ├── 728b5348934503
    │   │       │   │   ├── 7be205fb5c7efb
    │   │       │   │   └── 984b52956494cd
    │   │       │   ├── 74/
    │   │       │   │   ├── 201b4211ece577
    │   │       │   │   ├── 4f66b3c679fc22
    │   │       │   │   ├── 57370c8daf4283
    │   │       │   │   ├── 5be22ba2578ac4
    │   │       │   │   ├── 72be9ce9413d6f
    │   │       │   │   ├── 76b4a348c28b85
    │   │       │   │   ├── 793ba4d76a7557
    │   │       │   │   ├── 79ee2761791e1e
    │   │       │   │   ├── 7f4c31b1aca658
    │   │       │   │   ├── 9bd925f462d787
    │   │       │   │   ├── 9c2acfd3910da3
    │   │       │   │   ├── a4a28c0e178b6f
    │   │       │   │   ├── bf4ac852314c88
    │   │       │   │   ├── d35343d4bc55d2
    │   │       │   │   └── e8332d9b5802bd
    │   │       │   ├── 75/
    │   │       │   │   ├── 0fa30482ababb2
    │   │       │   │   ├── 200a2967df7d07
    │   │       │   │   ├── 336dd41aa5e31f
    │   │       │   │   ├── abfdde72bd027b
    │   │       │   │   ├── b4356088412c9b
    │   │       │   │   ├── c7a3c57ff9098a
    │   │       │   │   └── e0ded5ae65a48d
    │   │       │   ├── 76/
    │   │       │   │   ├── 0baf3edcf5a5a5
    │   │       │   │   ├── 1f24e26d8bcaa5
    │   │       │   │   ├── 49fdba0432d89f
    │   │       │   │   ├── 78dd7f60e43056
    │   │       │   │   ├── a487131a479af5
    │   │       │   │   ├── e1513d6a44b31c
    │   │       │   │   └── f10fec9722ddfa
    │   │       │   ├── 77/
    │   │       │   │   ├── 06c2b51d3929bc
    │   │       │   │   ├── 1b76e56044441e
    │   │       │   │   ├── 66c612bd5a89c3
    │   │       │   │   ├── 789f4a2400e2ca
    │   │       │   │   ├── 8a693650bc0acc
    │   │       │   │   └── fc1720ffb657de
    │   │       │   ├── 78/
    │   │       │   │   ├── 5e2f20465ded8e
    │   │       │   │   ├── 6eeebd3da93bf7
    │   │       │   │   ├── 748de5b152c89b
    │   │       │   │   ├── 82ba3c81a57936
    │   │       │   │   ├── 9ca376cef4a701
    │   │       │   │   ├── a0580571e1d23b
    │   │       │   │   ├── b19d610a6ca7ff
    │   │       │   │   ├── b9f83340776e51
    │   │       │   │   ├── bccee8b5085ac9
    │   │       │   │   ├── be52bc410d9a1a
    │   │       │   │   ├── e720eb15f12e86
    │   │       │   │   └── eab2f45ba9e48c
    │   │       │   ├── 79/
    │   │       │   │   ├── 0d302be4b5e14c
    │   │       │   │   ├── 20d14e5f097743
    │   │       │   │   ├── 24715bd559daf6
    │   │       │   │   ├── 2e44c09b1e4291
    │   │       │   │   ├── 49a42c6a31301d
    │   │       │   │   ├── 4e8d084d0743c5
    │   │       │   │   ├── 55c76dd135c7f4
    │   │       │   │   ├── 84366c4bb36e88
    │   │       │   │   ├── 9bb2ce519fa454
    │   │       │   │   ├── a5b2542ac18fab
    │   │       │   │   ├── c0fa6d3259ab41
    │   │       │   │   ├── d7371451a6364b
    │   │       │   │   ├── ed30c632b7f251
    │   │       │   │   ├── fbd9fb421b38ab
    │   │       │   │   └── ffa9344a594fa0
    │   │       │   ├── 7a/
    │   │       │   │   ├── 24447a510385b8
    │   │       │   │   ├── 499abfb049c201
    │   │       │   │   ├── 66e86379739254
    │   │       │   │   ├── 6eeb2a3552d96c
    │   │       │   │   ├── 805ac3ba1b7273
    │   │       │   │   ├── 8143c08d9f70e1
    │   │       │   │   ├── 898e6be860bad0
    │   │       │   │   ├── 950c98bc976bc3
    │   │       │   │   ├── 9e43e7ad773c87
    │   │       │   │   ├── a5b3bb9d6fbff9
    │   │       │   │   ├── c22ec5fffdb0dc
    │   │       │   │   └── db023f5555c357
    │   │       │   ├── 7b/
    │   │       │   │   ├── 1845b8bce566a9
    │   │       │   │   ├── 9773abfef1b372
    │   │       │   │   ├── c11b252f8d1430
    │   │       │   │   ├── df69e318d15cac
    │   │       │   │   └── f107d4f30c3653
    │   │       │   ├── 7c/
    │   │       │   │   ├── 4f1cb7cae9576b
    │   │       │   │   ├── 5d259dcf316e24
    │   │       │   │   ├── 7e77c40d5a4582
    │   │       │   │   ├── 8d82abb4722215
    │   │       │   │   ├── 8e84d9c322e1f6
    │   │       │   │   ├── b04020787b5939
    │   │       │   │   ├── c18435883e46cd
    │   │       │   │   └── c4fde67ec3ad28
    │   │       │   ├── 7d/
    │   │       │   │   ├── 0ceabf23c3740e
    │   │       │   │   ├── 1ce8977f087585
    │   │       │   │   ├── 4af7598dfb21f9
    │   │       │   │   ├── 5b07af38fbd513
    │   │       │   │   ├── 68aa397b53d694
    │   │       │   │   ├── 94c2088efb9e76
    │   │       │   │   ├── a4b353573bbcdb
    │   │       │   │   ├── c3d1280b3d067e
    │   │       │   │   └── d485aedcfb630a
    │   │       │   ├── 7e/
    │   │       │   │   ├── 01fc9645044c7b
    │   │       │   │   ├── 0627007c68a1a3
    │   │       │   │   ├── 41f5c10d030863
    │   │       │   │   ├── 61eacfe86d0d76
    │   │       │   │   ├── 916dc3c77138df
    │   │       │   │   ├── ac6f5cf0f7b6d0
    │   │       │   │   ├── c17338f166f653
    │   │       │   │   └── cec34ac87eefc7
    │   │       │   ├── 7f/
    │   │       │   │   ├── 1e0a01cc08889b
    │   │       │   │   ├── 336733f900b822
    │   │       │   │   ├── 445f71b1c1b301
    │   │       │   │   ├── 47a0c3d00d2ceb
    │   │       │   │   ├── 5af97ab715fbbf
    │   │       │   │   ├── 6528b5c1899a4b
    │   │       │   │   ├── 864c66d88a9d0c
    │   │       │   │   ├── 96234e0b015974
    │   │       │   │   ├── b3fe4818863244
    │   │       │   │   ├── ed55fccc52eb92
    │   │       │   │   └── f9b667067b4727
    │   │       │   ├── 80/
    │   │       │   │   ├── 03ff98c3c780e6
    │   │       │   │   ├── 0b8cd3dc023989
    │   │       │   │   ├── 0f1fa8b633e8ee
    │   │       │   │   ├── 10cf243fdb71a6
    │   │       │   │   ├── 1f147e1198101a
    │   │       │   │   ├── 529af95a56fe55
    │   │       │   │   ├── bb84df6b3552d8
    │   │       │   │   └── bbade6f358c217
    │   │       │   ├── 81/
    │   │       │   │   ├── 0b4c0437a65b2b
    │   │       │   │   ├── 1d0dceed750923
    │   │       │   │   ├── 209b050b0bcfdc
    │   │       │   │   ├── 35d8625ebe8df8
    │   │       │   │   └── 3fbd7f86da1bfe
    │   │       │   ├── 82/
    │   │       │   │   ├── 1367adc1ead6fb
    │   │       │   │   ├── 21a5d55f01cb5d
    │   │       │   │   ├── 23e1afcd174889
    │   │       │   │   ├── 4d36a47e655c1d
    │   │       │   │   ├── 9a6dd41cc16d13
    │   │       │   │   ├── cadb41dfe7dee2
    │   │       │   │   ├── db266f4bc80a3f
    │   │       │   │   └── ea53d85982b49d
    │   │       │   ├── 83/
    │   │       │   │   ├── 2c5e481eb982e2
    │   │       │   │   ├── 331f570a99846b
    │   │       │   │   ├── 53c159abdcbe6a
    │   │       │   │   ├── 84e55e10bfc94e
    │   │       │   │   ├── 89cc1f84f414fd
    │   │       │   │   ├── 90930a4969f156
    │   │       │   │   ├── bec6b4f5f3d087
    │   │       │   │   └── dcc398eba6fe94
    │   │       │   ├── 84/
    │   │       │   │   ├── 1bfd8219cc0708
    │   │       │   │   ├── 2cb47b085dde22
    │   │       │   │   ├── 4da92e68a0a4f3
    │   │       │   │   ├── 7debedbee07ac1
    │   │       │   │   ├── 95bcf152f56ca6
    │   │       │   │   ├── 9a37f5f027680e
    │   │       │   │   ├── d1fba69765b60e
    │   │       │   │   └── ff2c62053a59ac
    │   │       │   ├── 85/
    │   │       │   │   ├── 13965c46390efc
    │   │       │   │   ├── 1cb2ca919fc8bb
    │   │       │   │   ├── 36a756e44454a9
    │   │       │   │   ├── 3d61916eab75ca
    │   │       │   │   ├── 4ba3ff24373aaa
    │   │       │   │   ├── 65e7898067313c
    │   │       │   │   ├── 6b196714f5fa80
    │   │       │   │   ├── 8c20ba8555d370
    │   │       │   │   ├── 9f337159c1bc46
    │   │       │   │   ├── c813b9ff7317ee
    │   │       │   │   ├── d6ea6baae16f07
    │   │       │   │   ├── da0285bfb9a5c1
    │   │       │   │   ├── dc43a520490640
    │   │       │   │   ├── dd3792b5e372f4
    │   │       │   │   ├── e08f7e69c2b615
    │   │       │   │   ├── f4109bd4595915
    │   │       │   │   ├── fd38b553ea9931
    │   │       │   │   └── ffcd6f2e47297f
    │   │       │   ├── 86/
    │   │       │   │   ├── 07e8b8334ec242
    │   │       │   │   ├── 3f92017afe69a8
    │   │       │   │   ├── 476f88212d0d89
    │   │       │   │   ├── 4ad5d122886973
    │   │       │   │   ├── 529383b676510d
    │   │       │   │   ├── 8e51c5397d04ba
    │   │       │   │   ├── 96fbd34b638802
    │   │       │   │   ├── aee7f24ea5a150
    │   │       │   │   ├── b4de3ae2043f41
    │   │       │   │   ├── c89137ae0045af
    │   │       │   │   └── ddb32d40ba2fad
    │   │       │   ├── 87/
    │   │       │   │   ├── 2a8ea608c02ebc
    │   │       │   │   ├── 301c85efd49594
    │   │       │   │   ├── a43b3e85134b74
    │   │       │   │   ├── ca97b0177b0bf3
    │   │       │   │   ├── d49fe31a5d77a1
    │   │       │   │   └── e746ef07791547
    │   │       │   ├── 88/
    │   │       │   │   ├── 2c10e48a9dee3e
    │   │       │   │   ├── 3694bd2b0fe8a1
    │   │       │   │   ├── 387f1b0e052e27
    │   │       │   │   ├── 40eb0c27abf3fe
    │   │       │   │   ├── 4e7e5785dd7fa6
    │   │       │   │   ├── 74ba325b2d9c75
    │   │       │   │   ├── 79f70885595ded
    │   │       │   │   ├── 84eaa01e895af9
    │   │       │   │   ├── 9ec7e55d11700f
    │   │       │   │   ├── cfa9097b849079
    │   │       │   │   ├── e2901ab9262a3a
    │   │       │   │   └── e784d0a2b38afa
    │   │       │   ├── 89/
    │   │       │   │   ├── 4ecba73706efba
    │   │       │   │   ├── 61a255f0445df4
    │   │       │   │   ├── a03bb24165541b
    │   │       │   │   ├── a83a3a5dd26a05
    │   │       │   │   ├── ab4d093df30f18
    │   │       │   │   ├── c94a8a6e6c7ecf
    │   │       │   │   ├── d7817e75a46c96
    │   │       │   │   ├── efa39bc90d955c
    │   │       │   │   └── f34be7e09112e2
    │   │       │   ├── 8a/
    │   │       │   │   ├── 063ca570f8e3a2
    │   │       │   │   ├── 17d8cb401a5644
    │   │       │   │   ├── 22f8d9cf257e36
    │   │       │   │   ├── 2af2e01293db79
    │   │       │   │   ├── 5238ce498bd31e
    │   │       │   │   ├── 643fee2e8fa686
    │   │       │   │   ├── dfab354d4a14ac
    │   │       │   │   └── ebccac4083f12f
    │   │       │   ├── 8b/
    │   │       │   │   ├── 0e0f27050305c0
    │   │       │   │   ├── 0ff1f69c99d1d9
    │   │       │   │   ├── 1a43071db8a9d0
    │   │       │   │   ├── 33a1167280eb7a
    │   │       │   │   ├── 43c29130542983
    │   │       │   │   ├── 56f9636ab06c10
    │   │       │   │   ├── 66a9243ccb2374
    │   │       │   │   ├── 90b72dda935a65
    │   │       │   │   └── f2979541f2c5e6
    │   │       │   ├── 8c/
    │   │       │   │   ├── 0b268d0c150adc
    │   │       │   │   ├── 21ae98f53bd6e3
    │   │       │   │   ├── 2ee7f22335f230
    │   │       │   │   ├── 3205e7eb75d141
    │   │       │   │   ├── 435ea161112cb7
    │   │       │   │   ├── abf1daef944a5a
    │   │       │   │   ├── cff9c8a6ca2eeb
    │   │       │   │   ├── d7c6289dffc8f9
    │   │       │   │   └── f75e2e0317f806
    │   │       │   ├── 8d/
    │   │       │   │   ├── 3dfcb054d3c63a
    │   │       │   │   ├── 94f2970015a7ac
    │   │       │   │   ├── cc22157f94b81b
    │   │       │   │   ├── d7685a8bfbbb96
    │   │       │   │   └── ec967a82d90a82
    │   │       │   ├── 8e/
    │   │       │   │   ├── 0986c5c1332e65
    │   │       │   │   ├── 1d075b2d75d320
    │   │       │   │   ├── 25425c39a8d2a6
    │   │       │   │   ├── 8b8fbae30e6026
    │   │       │   │   ├── be7359c2748b30
    │   │       │   │   ├── d0062869ece7a2
    │   │       │   │   └── ebdcf004287c61
    │   │       │   ├── 8f/
    │   │       │   │   ├── 30f09ede9b1f96
    │   │       │   │   ├── aaf8e78f05d5e4
    │   │       │   │   ├── c29e557c70b9bb
    │   │       │   │   ├── ca1405d0b1ff48
    │   │       │   │   └── f259c8ca4813a6
    │   │       │   ├── 90/
    │   │       │   │   ├── 03b2c44de4aae1
    │   │       │   │   ├── 04584123ae4011
    │   │       │   │   ├── 262501ddd40f76
    │   │       │   │   ├── 2ce70c7cfad77e
    │   │       │   │   ├── 4ef1d4d1ca9960
    │   │       │   │   ├── 7d77215f9a8f53
    │   │       │   │   ├── 826055d6b7e26c
    │   │       │   │   ├── c404f31c52f858
    │   │       │   │   ├── db565da17fdbc2
    │   │       │   │   └── f9540c5fdcfe12
    │   │       │   ├── 91/
    │   │       │   │   ├── 36b320f88c4d79
    │   │       │   │   ├── 4411a4cc5bb0d5
    │   │       │   │   ├── 4c495a2c6ba469
    │   │       │   │   ├── 6e7c56e0b31bd1
    │   │       │   │   ├── 8860e31c1d912c
    │   │       │   │   └── d5a0d7e2cf57b2
    │   │       │   ├── 92/
    │   │       │   │   ├── 151cc38011c1bc
    │   │       │   │   ├── 27b64a9cfecb14
    │   │       │   │   ├── 2aaa4556e25eb6
    │   │       │   │   ├── 4008843d933468
    │   │       │   │   ├── 45eb55ea10104a
    │   │       │   │   ├── 4ab66c9bf19a87
    │   │       │   │   ├── 9c935796fe9832
    │   │       │   │   ├── aa73f8dddcbcd6
    │   │       │   │   ├── b21908de8a6f20
    │   │       │   │   ├── b2397b89484189
    │   │       │   │   ├── ba84969c8f8c1e
    │   │       │   │   ├── ca37a672b9f675
    │   │       │   │   ├── d4b6a1d140cfd3
    │   │       │   │   └── dc7d7ec0d4cd60
    │   │       │   ├── 93/
    │   │       │   │   ├── 1b1da31c34f1a2
    │   │       │   │   ├── 3efe6f6c998194
    │   │       │   │   └── cec181ffdf5dc2
    │   │       │   ├── 94/
    │   │       │   │   ├── 1e790832d9606f
    │   │       │   │   ├── 3187bd924027d0
    │   │       │   │   ├── 62779caeac06e3
    │   │       │   │   ├── 88d1964d12c7db
    │   │       │   │   ├── ba85565740b7d5
    │   │       │   │   ├── c7fab708724d53
    │   │       │   │   ├── cf594df2d3f622
    │   │       │   │   ├── d30f43aee5b896
    │   │       │   │   └── e57f9b269172cc
    │   │       │   ├── 95/
    │   │       │   │   ├── 0dddc650dffebe
    │   │       │   │   ├── 1460c8cfdfa639
    │   │       │   │   ├── 1c742aff35290e
    │   │       │   │   ├── 228c9f5ff51db0
    │   │       │   │   ├── 83d5aed6bae4b7
    │   │       │   │   ├── 8e3f615af3f990
    │   │       │   │   ├── 948d3fd759a5ac
    │   │       │   │   ├── b502dc6486ac61
    │   │       │   │   ├── ce4ac69e436e44
    │   │       │   │   ├── defa3e2ccc3ef8
    │   │       │   │   └── f3726b6027fe15
    │   │       │   ├── 96/
    │   │       │   │   ├── 09b4c279b84ccc
    │   │       │   │   ├── 1ad6a3e2a1fd40
    │   │       │   │   ├── 290ac9676091f2
    │   │       │   │   ├── 2d3c5bca1f0688
    │   │       │   │   ├── 34102a2d0fea1a
    │   │       │   │   ├── 74d753279697a2
    │   │       │   │   ├── 7adf4eefb6d2c8
    │   │       │   │   ├── 954fe6b80dec33
    │   │       │   │   ├── bf00405e91919a
    │   │       │   │   ├── cd2b17197e12e5
    │   │       │   │   ├── f23321a63fd565
    │   │       │   │   └── f4395c813908f6
    │   │       │   ├── 97/
    │   │       │   │   ├── 2300455ee49fa9
    │   │       │   │   ├── 24685cc8f5e210
    │   │       │   │   ├── 36bfe1d2ce0d28
    │   │       │   │   ├── 42159ee61a935f
    │   │       │   │   ├── 528ee61609a85a
    │   │       │   │   ├── 6c45217f9ea704
    │   │       │   │   ├── 75125a7c941879
    │   │       │   │   ├── 814ce9fc4fe8a0
    │   │       │   │   ├── 90e1f5f071d826
    │   │       │   │   ├── 9e43af9dbc4fbb
    │   │       │   │   └── a3f47be6f30aa5
    │   │       │   ├── 98/
    │   │       │   │   ├── 08e95d4206e9e1
    │   │       │   │   ├── 1437e2285510a1
    │   │       │   │   ├── 254fa2367f5378
    │   │       │   │   ├── 365a60bac603a0
    │   │       │   │   ├── 52adf1b6a65682
    │   │       │   │   ├── 5c8655c45d2a87
    │   │       │   │   ├── 6c33a4f1b4a96d
    │   │       │   │   ├── 8436584a84d2cc
    │   │       │   │   ├── ad5eef2ce8dcf7
    │   │       │   │   ├── ad7d68e2ff33e0
    │   │       │   │   ├── e4ac4ca99cfac2
    │   │       │   │   ├── e6664af8b8ae6d
    │   │       │   │   └── f71f112bbab197
    │   │       │   ├── 99/
    │   │       │   │   ├── 2d28a688821b27
    │   │       │   │   ├── acf223b6a63a3f
    │   │       │   │   ├── b0346d03e99ecd
    │   │       │   │   ├── b6c894e7d2a065
    │   │       │   │   ├── c7d13dca75094b
    │   │       │   │   ├── eea5905c3beee9
    │   │       │   │   ├── f9444904d08b09
    │   │       │   │   └── fdea3e039bcfdc
    │   │       │   ├── 9a/
    │   │       │   │   ├── 005a889d8a4fa7
    │   │       │   │   ├── 28f5fbb144a5d9
    │   │       │   │   ├── 5a0fd4fcbe5025
    │   │       │   │   ├── 6fc713ed86c4c0
    │   │       │   │   ├── 8d279edd210faa
    │   │       │   │   ├── 9720100ecdada2
    │   │       │   │   ├── a9f897fdef8a95
    │   │       │   │   ├── c3e6638d302094
    │   │       │   │   ├── d0d56d1f52ef51
    │   │       │   │   ├── db4481189ee45b
    │   │       │   │   └── e4aaea4dd6cb63
    │   │       │   ├── 9b/
    │   │       │   │   ├── 042bd94796df2d
    │   │       │   │   ├── 1083c4a87ce7c2
    │   │       │   │   ├── 15e6d812fa2b22
    │   │       │   │   ├── 3b90b6fa367beb
    │   │       │   │   ├── 3d7339782b2fef
    │   │       │   │   └── 84d6559a20b5a7
    │   │       │   ├── 9c/
    │   │       │   │   ├── 39f2fc677c1050
    │   │       │   │   ├── 52c558773ee22c
    │   │       │   │   ├── 5a6198a8e4171d
    │   │       │   │   ├── 5bfbd06daa6eca
    │   │       │   │   ├── 70aee55a52fe7e
    │   │       │   │   ├── 76c45f7ad9e943
    │   │       │   │   ├── a90b6d73f3d61b
    │   │       │   │   ├── afcc1841573d4e
    │   │       │   │   └── e74867aeb11b7d
    │   │       │   ├── 9d/
    │   │       │   │   ├── 5c0d30ee31827d
    │   │       │   │   ├── 849df438aec8ab
    │   │       │   │   └── fc197d76728e73
    │   │       │   ├── 9e/
    │   │       │   │   ├── 0509a66e06ffe2
    │   │       │   │   ├── 0b00cf5b7c9b47
    │   │       │   │   ├── 17c70c63baf4cd
    │   │       │   │   ├── 2639e5eab928a4
    │   │       │   │   ├── 2fe81254897684
    │   │       │   │   ├── 37f698e78727f1
    │   │       │   │   ├── 424a99a0ae2fef
    │   │       │   │   ├── 497ad543819571
    │   │       │   │   ├── c91839c36cfa19
    │   │       │   │   └── fd25c2c2934c8a
    │   │       │   ├── 9f/
    │   │       │   │   ├── 026870b2c2c988
    │   │       │   │   ├── 4a1f7eac591e3b
    │   │       │   │   ├── 5b60f47e5bd6f3
    │   │       │   │   ├── 7869e036725eca
    │   │       │   │   ├── 7d2056c186e950
    │   │       │   │   ├── 94f7580fc9a625
    │   │       │   │   ├── a12c7955883177
    │   │       │   │   ├── a38d2b9a34a6a7
    │   │       │   │   ├── bd20204e24fcb7
    │   │       │   │   ├── d85f41b748cd52
    │   │       │   │   └── ebd3b2cb1d9ef8
    │   │       │   ├── a0/
    │   │       │   │   ├── 274d7070dd9593
    │   │       │   │   ├── 2f78f49a6b3c70
    │   │       │   │   ├── 5c7b41cf66068b
    │   │       │   │   ├── 6237bf2a2e4357
    │   │       │   │   ├── 725e3a5e5b1ef9
    │   │       │   │   ├── 8edb75f53936f3
    │   │       │   │   ├── a719deb08960fa
    │   │       │   │   ├── bd833778a526dd
    │   │       │   │   ├── d9cbe8ca122b19
    │   │       │   │   ├── e3f7039b451cde
    │   │       │   │   ├── f407929998b29e
    │   │       │   │   ├── fde72fa95fc329
    │   │       │   │   └── ff0c1981e64555
    │   │       │   ├── a1/
    │   │       │   │   ├── 29dbb3bbe05fc5
    │   │       │   │   ├── 2a7f1e74761c04
    │   │       │   │   ├── 40a672b7ac8e62
    │   │       │   │   ├── 7a3a811dda5f24
    │   │       │   │   ├── 87c62f989195b9
    │   │       │   │   ├── 9c1decb2e565dc
    │   │       │   │   ├── b62b06d1492b21
    │   │       │   │   ├── cdfa103214524c
    │   │       │   │   ├── f262dd096a6b35
    │   │       │   │   └── f2add0ed05d58d
    │   │       │   ├── a2/
    │   │       │   │   ├── 07762f341a5221
    │   │       │   │   ├── 0b66b2a14ca731
    │   │       │   │   ├── 163df4bda905c4
    │   │       │   │   ├── 2164942b6390c2
    │   │       │   │   ├── 3fc50a015239f8
    │   │       │   │   ├── 4ced25f7641645
    │   │       │   │   ├── 6ba125f0837513
    │   │       │   │   ├── 7294b2457bd1f7
    │   │       │   │   ├── 80e0e87c68e55f
    │   │       │   │   ├── 9ee11d85424efa
    │   │       │   │   ├── af344aa57167cf
    │   │       │   │   ├── dd918a7854042e
    │   │       │   │   └── f8a842852ce79c
    │   │       │   ├── a3/
    │   │       │   │   ├── 131a93d1ced72e
    │   │       │   │   ├── 152870c331327e
    │   │       │   │   ├── 18020061d5ebb8
    │   │       │   │   ├── 1ca37873b71685
    │   │       │   │   ├── 44dc625236f4aa
    │   │       │   │   ├── 4d2172da682a70
    │   │       │   │   ├── 94f11309774462
    │   │       │   │   ├── a1aab698758553
    │   │       │   │   ├── a82f4d65b7beb0
    │   │       │   │   ├── c74542e9b3c96a
    │   │       │   │   ├── e696ba16d383e6
    │   │       │   │   └── e75d004de63ef4
    │   │       │   ├── a4/
    │   │       │   │   ├── 0de0cc2d986ef7
    │   │       │   │   ├── 16d63d325e693c
    │   │       │   │   ├── 3d7246131e0fb4
    │   │       │   │   ├── 4e372a0e17c701
    │   │       │   │   ├── 5fb8f1bc2b3cca
    │   │       │   │   ├── 7070a01207342e
    │   │       │   │   ├── 71cdbfc4de39ac
    │   │       │   │   ├── 7c6ef162b5bcaf
    │   │       │   │   ├── 8ce397b4d285f4
    │   │       │   │   ├── 8f3ddea2a60327
    │   │       │   │   ├── d2667a8ad7d5f0
    │   │       │   │   └── efc37ac0dd769d
    │   │       │   ├── a5/
    │   │       │   │   ├── 0306df2b02022d
    │   │       │   │   ├── 15f18a133ef196
    │   │       │   │   ├── 2625eaacfeee13
    │   │       │   │   ├── 3fd53f47a128f4
    │   │       │   │   ├── a7293e94e8f470
    │   │       │   │   └── c94a8786590273
    │   │       │   ├── a6/
    │   │       │   │   ├── 14f50c2e3319e7
    │   │       │   │   ├── 1f858233e03d50
    │   │       │   │   ├── 2a8c350fca39e5
    │   │       │   │   ├── 2d43bb169a6835
    │   │       │   │   ├── 31afab148f43be
    │   │       │   │   ├── 3691918b202741
    │   │       │   │   ├── 4b6165f7cc9a9b
    │   │       │   │   ├── 4d65385ae4eac3
    │   │       │   │   ├── 506f52e16e7e51
    │   │       │   │   ├── 8f0478d20a9247
    │   │       │   │   ├── 92442e7fda780e
    │   │       │   │   ├── a790ef381229aa
    │   │       │   │   ├── c280e1332002de
    │   │       │   │   ├── cb2fa499eafe0c
    │   │       │   │   ├── d23516546ebfd4
    │   │       │   │   ├── e2f153388ca527
    │   │       │   │   └── f60da6a963679d
    │   │       │   ├── a7/
    │   │       │   │   ├── 221f8f581e13a5
    │   │       │   │   ├── 3e77c31ac464cc
    │   │       │   │   ├── 485f7764496876
    │   │       │   │   ├── 5654048e8c23a1
    │   │       │   │   ├── 81a1a1aca2f6a7
    │   │       │   │   ├── d9957605f691bf
    │   │       │   │   └── e530513ff405e9
    │   │       │   ├── a8/
    │   │       │   │   ├── 03a28ab04c1c45
    │   │       │   │   ├── 050521c5dcff1e
    │   │       │   │   ├── 096dd07d6e4791
    │   │       │   │   ├── 1ec09539985d11
    │   │       │   │   ├── 26305fe9a674df
    │   │       │   │   ├── 33197e7eb5af00
    │   │       │   │   ├── 744351230e58d3
    │   │       │   │   ├── 90c34024259dc3
    │   │       │   │   ├── 9c660387901f70
    │   │       │   │   ├── 9d2f9ed5def0bb
    │   │       │   │   ├── c2edd144085290
    │   │       │   │   └── f9be577cb588f8
    │   │       │   ├── a9/
    │   │       │   │   ├── 09e8b8afe99bcf
    │   │       │   │   ├── 0ebab8f5dbdd81
    │   │       │   │   ├── 4fff88c06769ca
    │   │       │   │   ├── 73aed53056e277
    │   │       │   │   ├── 7a653a9a400b90
    │   │       │   │   ├── 8db1e7522d0150
    │   │       │   │   ├── 9e2c3ba214a7e5
    │   │       │   │   ├── bfb2f9eaa6b19c
    │   │       │   │   ├── cf55e9de493a6b
    │   │       │   │   └── ff14be9ef35b4b
    │   │       │   ├── aa/
    │   │       │   │   ├── 25b1615e788e07
    │   │       │   │   ├── 381fa248113407
    │   │       │   │   ├── 4396e57a55694e
    │   │       │   │   ├── 4630f63a6a2115
    │   │       │   │   ├── 561ab45475ce51
    │   │       │   │   └── 918e9bd1e03d0b
    │   │       │   ├── ab/
    │   │       │   │   ├── 1791309f3ccf7f
    │   │       │   │   ├── 4f90ac8389b4a2
    │   │       │   │   ├── 51efb895fb692b
    │   │       │   │   ├── 5a91718030acdc
    │   │       │   │   ├── 712e2c923806f0
    │   │       │   │   ├── 854ecc94e55139
    │   │       │   │   ├── 8694ec09187705
    │   │       │   │   ├── 876d39cd3e243c
    │   │       │   │   ├── 9e2823880b0012
    │   │       │   │   ├── b75c692cdc4ec1
    │   │       │   │   ├── fcd8268190807f
    │   │       │   │   └── ffe0e10b927f01
    │   │       │   ├── ac/
    │   │       │   │   ├── 100b5ebeb35da8
    │   │       │   │   ├── 1d04337d1ed6dd
    │   │       │   │   ├── 2d75b7ad46d6c4
    │   │       │   │   ├── 3b80e5e5620ffd
    │   │       │   │   ├── 3c98e7b5e9d0bb
    │   │       │   │   ├── 6219bfc0331924
    │   │       │   │   ├── 7207419a8bc3b0
    │   │       │   │   ├── 9452026edf6f47
    │   │       │   │   ├── a1788e00a7e430
    │   │       │   │   ├── ca7cefdf025873
    │   │       │   │   ├── dcf131a8a3e1d6
    │   │       │   │   └── f60f7b20cc9842
    │   │       │   ├── ad/
    │   │       │   │   ├── 0939a8b3b16f3f
    │   │       │   │   ├── 1d4f2b8e20ca3c
    │   │       │   │   ├── 22f4b567167146
    │   │       │   │   ├── 456ce5439336d2
    │   │       │   │   ├── 476aa73ec15cf7
    │   │       │   │   ├── 5ae96f99ecc888
    │   │       │   │   ├── 5e29d59225bcaf
    │   │       │   │   ├── 8ffd14ccffc1bd
    │   │       │   │   ├── 95e3e85bbefe13
    │   │       │   │   ├── a4c22abbac2643
    │   │       │   │   ├── c3eec2649e0bf5
    │   │       │   │   ├── d7bcbb9eac063c
    │   │       │   │   └── d89586e64a4a42
    │   │       │   ├── ae/
    │   │       │   │   ├── 0208884e679309
    │   │       │   │   ├── 0e23c13fe18390
    │   │       │   │   ├── 2343fef84b73a5
    │   │       │   │   ├── 94f496792fba47
    │   │       │   │   ├── a008af94a80fb2
    │   │       │   │   ├── e3d5f03fa7db47
    │   │       │   │   └── f6785985d5b862
    │   │       │   ├── af/
    │   │       │   │   ├── 058ca8ddedd29c
    │   │       │   │   ├── 0c825b2b01a059
    │   │       │   │   ├── 1a4600bc09e02b
    │   │       │   │   ├── 43238806225cff
    │   │       │   │   ├── 608f9b67f43458
    │   │       │   │   ├── cf74d9a39b5a28
    │   │       │   │   └── cf81038f8891e6
    │   │       │   ├── b0/
    │   │       │   │   ├── 015967a17625fb
    │   │       │   │   ├── 045052717172ad
    │   │       │   │   ├── 120b1e98ebd453
    │   │       │   │   ├── 40c03a0dec8de9
    │   │       │   │   ├── 677fc889d4e694
    │   │       │   │   ├── bfd03661a7a26f
    │   │       │   │   ├── d19e9505eeadec
    │   │       │   │   ├── dbcb8a39913c15
    │   │       │   │   ├── e482f8477cde74
    │   │       │   │   └── fb54ce8825e8a7
    │   │       │   ├── b1/
    │   │       │   │   ├── 0188b54da7f1e4
    │   │       │   │   ├── 36e9a056b30774
    │   │       │   │   ├── ad012024231c50
    │   │       │   │   ├── b6ad8299b83f70
    │   │       │   │   ├── d4dec13bdca49e
    │   │       │   │   └── d512be5326ece5
    │   │       │   ├── b2/
    │   │       │   │   ├── 01e4d158e2a461
    │   │       │   │   ├── 114585c2509b2e
    │   │       │   │   ├── 20870eb4b7992f
    │   │       │   │   ├── 57a4208dc78f43
    │   │       │   │   ├── 723d9f2bdade91
    │   │       │   │   ├── 7312476ad59af1
    │   │       │   │   ├── bad9903c0abc0a
    │   │       │   │   └── f90e770d53adbc
    │   │       │   ├── b3/
    │   │       │   │   ├── 2fa6ddad4bec5f
    │   │       │   │   ├── 387db230a93f39
    │   │       │   │   ├── 679866bab5f86a
    │   │       │   │   ├── 913a0defa7e4b4
    │   │       │   │   ├── 9253e8ac786e4b
    │   │       │   │   └── 97991087fb01a9
    │   │       │   ├── b4/
    │   │       │   │   ├── 07fe50eb5a2f2d
    │   │       │   │   ├── 695856f703b45f
    │   │       │   │   ├── 95a9b1c358ff0c
    │   │       │   │   ├── aa7c2d08ed2e9d
    │   │       │   │   ├── b1a07bfe3604d0
    │   │       │   │   ├── dca33a55d665dc
    │   │       │   │   └── e448ddc624fff0
    │   │       │   ├── b5/
    │   │       │   │   ├── 30c2a5005db0ca
    │   │       │   │   ├── 412c89e8a8e9cf
    │   │       │   │   ├── 648beb6ef647b3
    │   │       │   │   ├── 8850036b1496f7
    │   │       │   │   ├── df307782b795e1
    │   │       │   │   └── e5717cc9a358c6
    │   │       │   ├── b6/
    │   │       │   │   ├── 02995751e33eda
    │   │       │   │   ├── 0a282899439b69
    │   │       │   │   ├── 14072c3c800f01
    │   │       │   │   ├── 16503b5989f709
    │   │       │   │   ├── 20617ac2ad312e
    │   │       │   │   ├── 34d21166635237
    │   │       │   │   ├── 8b1fbc1b416a46
    │   │       │   │   ├── 912e99b82f69e8
    │   │       │   │   ├── 92b1b926001e1b
    │   │       │   │   ├── aa620fefc418bf
    │   │       │   │   ├── b1a8c26fd52deb
    │   │       │   │   ├── b7d00d5706b466
    │   │       │   │   └── d10522ff01e91c
    │   │       │   ├── b7/
    │   │       │   │   ├── 2b4be06379ca6b
    │   │       │   │   ├── 395853038eb707
    │   │       │   │   ├── 73ea6e242d9bba
    │   │       │   │   ├── bad081cca7a257
    │   │       │   │   └── bffaf39aea6fce
    │   │       │   ├── b8/
    │   │       │   │   ├── 2a6d29c1d06294
    │   │       │   │   ├── 3178f5ded273c3
    │   │       │   │   ├── 467895f01d8118
    │   │       │   │   ├── 60f6ba9bb93bb2
    │   │       │   │   └── cba2d08bcbf781
    │   │       │   ├── b9/
    │   │       │   │   ├── 114145a162f744
    │   │       │   │   ├── 1dd03ceb25a6b7
    │   │       │   │   ├── 363be7ab613749
    │   │       │   │   ├── 3872d8fe08ff48
    │   │       │   │   ├── 466a4fc2542649
    │   │       │   │   ├── 81c38ee5aceefa
    │   │       │   │   ├── b85e861fb34d31
    │   │       │   │   ├── bd02ab7112647a
    │   │       │   │   ├── be285313dbc1e1
    │   │       │   │   ├── bf9c0d3c8ff378
    │   │       │   │   ├── c302f1965b16c4
    │   │       │   │   ├── dbce0d1f3a73e2
    │   │       │   │   ├── f1bdbbd6f88693
    │   │       │   │   └── f7a2e9fc88ffb0
    │   │       │   ├── ba/
    │   │       │   │   ├── 3ba237ca9a0201
    │   │       │   │   ├── 425bdbf13d545a
    │   │       │   │   ├── 615fce8cf189e4
    │   │       │   │   ├── 6b513bc29095ff
    │   │       │   │   ├── 73bc0239a5aa1e
    │   │       │   │   ├── 8c6b38a94ca7e1
    │   │       │   │   ├── 9517f290ae7b20
    │   │       │   │   ├── d31f462d1bd0b7
    │   │       │   │   └── d6a8c16863db4f
    │   │       │   ├── bb/
    │   │       │   │   ├── 007e4e92f6886c
    │   │       │   │   ├── 29fd4d73ae7e9f
    │   │       │   │   ├── 520dfa78ad24cb
    │   │       │   │   ├── 577d6147dac4b7
    │   │       │   │   ├── 628b81e64e1627
    │   │       │   │   ├── 71a9f92c52c826
    │   │       │   │   ├── 8fc0245fcfafa9
    │   │       │   │   ├── a1622233997ac6
    │   │       │   │   ├── ab83344bced98b
    │   │       │   │   ├── be11f57a7339da
    │   │       │   │   └── ccd71d48addf1f
    │   │       │   ├── bc/
    │   │       │   │   ├── 1cb4343442096c
    │   │       │   │   ├── 326d85fe2058ca
    │   │       │   │   ├── 40860d1fdaa9bb
    │   │       │   │   ├── 466eec2849a658
    │   │       │   │   ├── 60976da975a0d0
    │   │       │   │   ├── 6513ce678f47f2
    │   │       │   │   ├── 665a2451c113e0
    │   │       │   │   ├── 6bd49308adc68c
    │   │       │   │   ├── 9f880e85f0a9de
    │   │       │   │   ├── aeb266e94222ea
    │   │       │   │   └── da3ff62f4fecfb
    │   │       │   ├── bd/
    │   │       │   │   ├── 0606a18216dc7a
    │   │       │   │   ├── 0dfe605014deae
    │   │       │   │   ├── 4b7c6bfbe9766f
    │   │       │   │   ├── 63ccc67a9c3846
    │   │       │   │   ├── bd9c152ee20844
    │   │       │   │   └── d9b716ba47ae18
    │   │       │   ├── be/
    │   │       │   │   ├── 12e649482bb1ba
    │   │       │   │   ├── 23f6b5358d1446
    │   │       │   │   ├── 3107fff973234d
    │   │       │   │   ├── 35e6c955fdd5ef
    │   │       │   │   ├── 80cab2547aafe5
    │   │       │   │   ├── 9d174e3329cdc7
    │   │       │   │   ├── bc513da07622ed
    │   │       │   │   ├── ce3252bb8598af
    │   │       │   │   ├── eac095eefdabd4
    │   │       │   │   ├── ef465a237ecf77
    │   │       │   │   └── fecfb479de9190
    │   │       │   ├── bf/
    │   │       │   │   ├── 0424d9dbab5b9c
    │   │       │   │   ├── 21882cbb9eb379
    │   │       │   │   ├── 2a8d3d9de81576
    │   │       │   │   ├── 30b14cad2239e2
    │   │       │   │   ├── 519681e0269c32
    │   │       │   │   ├── 73ab25f908f623
    │   │       │   │   ├── ac3ac67cc9749e
    │   │       │   │   ├── e1126c335d4ddc
    │   │       │   │   ├── f87db656fe8479
    │   │       │   │   └── fa7e9ba4d567f0
    │   │       │   ├── c0/
    │   │       │   │   ├── 01dc221926452c
    │   │       │   │   ├── 0673a667fafa4c
    │   │       │   │   ├── 0bff84142e4d3f
    │   │       │   │   ├── 0e8285aa1bf39f
    │   │       │   │   ├── 1891ea430e7399
    │   │       │   │   ├── 6158a528e19044
    │   │       │   │   ├── 958d0442f22495
    │   │       │   │   └── f630e601d0769d
    │   │       │   ├── c1/
    │   │       │   │   ├── 2f937c07622589
    │   │       │   │   ├── 32e724c471ef04
    │   │       │   │   ├── 356415253aef60
    │   │       │   │   ├── 4c12ea9711883b
    │   │       │   │   ├── 6cf339af4d776e
    │   │       │   │   ├── 6e18132ab261a2
    │   │       │   │   ├── 70293ca0bb412e
    │   │       │   │   ├── 8cedb605ec00a7
    │   │       │   │   ├── aaa49486e0d0f9
    │   │       │   │   ├── ad66d731a95913
    │   │       │   │   ├── bcb1ea317b3ffd
    │   │       │   │   └── e5239de82c3928
    │   │       │   ├── c2/
    │   │       │   │   ├── 9e89ee3add8d7c
    │   │       │   │   ├── b4121cd40e87b4
    │   │       │   │   ├── bfd08c43382f6f
    │   │       │   │   ├── bfd3b866d278ab
    │   │       │   │   ├── cdece5dacafadb
    │   │       │   │   ├── d19ebe8e6fe38a
    │   │       │   │   ├── d6d9c7d27cd15d
    │   │       │   │   ├── e1b48ec5042222
    │   │       │   │   └── f2c99b1fc65aff
    │   │       │   ├── c3/
    │   │       │   │   ├── 0ad80f5dc4d835
    │   │       │   │   ├── 0e1b2cb5ce0611
    │   │       │   │   ├── 38b64d136e99ef
    │   │       │   │   ├── 3e0a396334b98c
    │   │       │   │   ├── 51fdfd6f3e2645
    │   │       │   │   ├── 7b80576e851777
    │   │       │   │   ├── adeeb92a3c75ab
    │   │       │   │   ├── b98896de47d0db
    │   │       │   │   ├── c1747c7e984a4a
    │   │       │   │   └── e871e527750a7f
    │   │       │   ├── c4/
    │   │       │   │   ├── 01b03954033077
    │   │       │   │   ├── 0eb402c4696a62
    │   │       │   │   ├── 2b90da0ec54d09
    │   │       │   │   ├── 2e141043d4085d
    │   │       │   │   ├── 2f8c12b631c93c
    │   │       │   │   ├── 346f24e894710a
    │   │       │   │   ├── 363b4c186961c4
    │   │       │   │   ├── 7faed32b1b7498
    │   │       │   │   ├── a4900814c36845
    │   │       │   │   ├── ac28702615fec9
    │   │       │   │   ├── b424cebb917332
    │   │       │   │   ├── d49f00d91226b3
    │   │       │   │   └── f1a0417c744e21
    │   │       │   ├── c5/
    │   │       │   │   ├── 167d49affde9fb
    │   │       │   │   ├── 1d2472ece2a94d
    │   │       │   │   ├── 56f48b9ca6fb55
    │   │       │   │   ├── 96bddae67e23ba
    │   │       │   │   ├── 999dc39521572e
    │   │       │   │   ├── 9f169bd207f944
    │   │       │   │   ├── bdb3f4af19137b
    │   │       │   │   ├── eed0b2db9d846e
    │   │       │   │   └── fe509b9315d553
    │   │       │   ├── c6/
    │   │       │   │   ├── 0da144d70885a3
    │   │       │   │   ├── 192cf9930703b8
    │   │       │   │   ├── 1e734fefd2c80a
    │   │       │   │   ├── 30ea1319c4c9e5
    │   │       │   │   ├── 4b16e1a63dd310
    │   │       │   │   ├── 7914ebcdfa6b6d
    │   │       │   │   ├── aa6cff96db5058
    │   │       │   │   ├── e4b49af48981c3
    │   │       │   │   └── e6689a6843cf81
    │   │       │   ├── c7/
    │   │       │   │   ├── 005e75f2b7f11b
    │   │       │   │   ├── 19b4e0244fe3b4
    │   │       │   │   ├── 35941c7605247d
    │   │       │   │   ├── 68ecbca481e065
    │   │       │   │   ├── 6b5dfcee7db8c0
    │   │       │   │   ├── 726bc1ae9a2517
    │   │       │   │   ├── 7a2adc6b92e447
    │   │       │   │   ├── c09b4961547854
    │   │       │   │   ├── da2c1e05319e7f
    │   │       │   │   ├── e098d4fa3c07ca
    │   │       │   │   └── e42cbb77bbf3ef
    │   │       │   ├── c8/
    │   │       │   │   ├── 14613fed87bd87
    │   │       │   │   ├── 1768a525295ba3
    │   │       │   │   ├── 17caa7e09ec5d9
    │   │       │   │   ├── 266aa1ae4a22f9
    │   │       │   │   ├── 295f3b43dd6770
    │   │       │   │   ├── 4e5fc98e2f44a5
    │   │       │   │   ├── 5bcfa678dd17e8
    │   │       │   │   ├── 8a09b7d492ef84
    │   │       │   │   ├── 93f6ef7eab3db5
    │   │       │   │   ├── 98cf211f793347
    │   │       │   │   ├── b99f0b637699bb
    │   │       │   │   ├── d10951ba017111
    │   │       │   │   ├── e52fda39278638
    │   │       │   │   └── f85deebf129fe8
    │   │       │   ├── c9/
    │   │       │   │   ├── 546040468317e2
    │   │       │   │   ├── b545f9fb7d03b4
    │   │       │   │   ├── d849570db38581
    │   │       │   │   ├── e62f319c8f6619
    │   │       │   │   ├── ec55331dafcd62
    │   │       │   │   └── eca68cc4204d19
    │   │       │   ├── ca/
    │   │       │   │   ├── 04835a4a61f6b7
    │   │       │   │   ├── 3f51ced94c60f7
    │   │       │   │   ├── 76e597eb9e8b90
    │   │       │   │   ├── 7faebb8c862476
    │   │       │   │   ├── 8c4e3d0367783d
    │   │       │   │   ├── 8d63c8e2ce95cb
    │   │       │   │   ├── ba4a6065ed6d02
    │   │       │   │   ├── cbc0f5c84e90aa
    │   │       │   │   ├── d199199bdc410e
    │   │       │   │   └── dc4a244f6b9dec
    │   │       │   ├── cb/
    │   │       │   │   ├── 05e05f1fef1d79
    │   │       │   │   ├── 1fd829b3d4979d
    │   │       │   │   ├── 3cb05b485fd80a
    │   │       │   │   ├── 40864ff19b96df
    │   │       │   │   ├── 4625eca3c2ff62
    │   │       │   │   ├── 46b0447613d91a
    │   │       │   │   ├── 640a5f6322df31
    │   │       │   │   ├── a185f9bbdb8e17
    │   │       │   │   ├── b7c8f3d3741157
    │   │       │   │   └── deb3fe07f1748d
    │   │       │   ├── cc/
    │   │       │   │   ├── 41148dde889391
    │   │       │   │   ├── 6dd394b821ea65
    │   │       │   │   ├── 71b7b3584452fc
    │   │       │   │   ├── 93ee4b1414da74
    │   │       │   │   ├── 9a5426581d5679
    │   │       │   │   └── d542f29d0d989c
    │   │       │   ├── cd/
    │   │       │   │   ├── 08f3daa391aeb3
    │   │       │   │   ├── 20b0ac6bd53b80
    │   │       │   │   ├── 23b6bbbcbf2e0f
    │   │       │   │   ├── 5f4025e1cc4325
    │   │       │   │   ├── 84a9d32b59f9ba
    │   │       │   │   ├── aa2cf0df7acb58
    │   │       │   │   ├── d9568ee7ec6cc7
    │   │       │   │   ├── e051e4f7600ee7
    │   │       │   │   └── e84367942405a5
    │   │       │   ├── ce/
    │   │       │   │   ├── 19e57ada0ed4e7
    │   │       │   │   ├── 827f7ac7948aa8
    │   │       │   │   └── c4fc39a052c280
    │   │       │   ├── cf/
    │   │       │   │   ├── 1a4ee0b840ce04
    │   │       │   │   ├── 2b9f741cc3175f
    │   │       │   │   ├── 34773b5f5d2cf4
    │   │       │   │   ├── 68682d79d7f6b3
    │   │       │   │   ├── 7cc2648913a281
    │   │       │   │   ├── 910c00e0ed8aae
    │   │       │   │   ├── b9968dfd16034e
    │   │       │   │   ├── cb2f5085d2a661
    │   │       │   │   └── d0d03dee1ee9ce
    │   │       │   ├── d0/
    │   │       │   │   ├── 117bf3f74ecc84
    │   │       │   │   ├── 2d86b311c44e44
    │   │       │   │   ├── 8db31b2e0d47a2
    │   │       │   │   ├── cdb4f57086681a
    │   │       │   │   ├── d390145ecab530
    │   │       │   │   └── e73fb86d36eb89
    │   │       │   ├── d1/
    │   │       │   │   ├── 103e079fbb4154
    │   │       │   │   ├── 12d57c6250408d
    │   │       │   │   ├── 4e54016d156b8f
    │   │       │   │   ├── 5486a60fde32c5
    │   │       │   │   ├── 57a8c3e05e2166
    │   │       │   │   ├── 7d304342b2a7aa
    │   │       │   │   ├── 88f05b6db1ad92
    │   │       │   │   ├── 9118d6eaad21f0
    │   │       │   │   ├── 94b33a642fc19e
    │   │       │   │   ├── b7686a7104a495
    │   │       │   │   ├── c3be771995f7bc
    │   │       │   │   ├── ce5c9e531c3fd8
    │   │       │   │   ├── d41a551f097a85
    │   │       │   │   ├── f5b1b09becd707
    │   │       │   │   └── fbb6daae074480
    │   │       │   ├── d2/
    │   │       │   │   ├── 0a014185dc5412
    │   │       │   │   ├── 14b7dc627d3354
    │   │       │   │   ├── 1f885898cdf5b6
    │   │       │   │   ├── 2fcac6f5da423d
    │   │       │   │   ├── 442395784db778
    │   │       │   │   ├── 4eadef122fce0b
    │   │       │   │   ├── 607effef4bd143
    │   │       │   │   ├── 6a12e100a5ecbf
    │   │       │   │   ├── 6f7be44b8ec3d1
    │   │       │   │   ├── 73a43e62bb802e
    │   │       │   │   ├── 73e450087ad025
    │   │       │   │   ├── 767c0f4e8c97ef
    │   │       │   │   ├── 76f9c23e0a49e3
    │   │       │   │   ├── d299ee4ecadcd0
    │   │       │   │   └── e8b0ae2550197d
    │   │       │   ├── d3/
    │   │       │   │   ├── 0b1df93c16fae4
    │   │       │   │   ├── 1c6778a5eb437d
    │   │       │   │   ├── 1fc1e7abab7227
    │   │       │   │   ├── 8e581f699da2d0
    │   │       │   │   ├── abbd5ff4eeb10a
    │   │       │   │   ├── b4068919ffb4c4
    │   │       │   │   ├── d712f79c6364e9
    │   │       │   │   └── ee5e81b0b8fe89
    │   │       │   ├── d4/
    │   │       │   │   ├── 0a468fd4750ad9
    │   │       │   │   ├── 4973091961cd91
    │   │       │   │   ├── 7a8b4c26dcdbd5
    │   │       │   │   ├── 8eff7498f76db1
    │   │       │   │   └── e8574135117cee
    │   │       │   ├── d5/
    │   │       │   │   ├── 00f605aad7dbd1
    │   │       │   │   ├── 5fde8cdbd4a516
    │   │       │   │   ├── 6d4c3670ac0d3a
    │   │       │   │   ├── 75949135db0dcb
    │   │       │   │   ├── 86ca18e32757d4
    │   │       │   │   ├── 9e3ff06ec54085
    │   │       │   │   └── e8b3a0ad91103e
    │   │       │   ├── d6/
    │   │       │   │   ├── 20611e78f34f8a
    │   │       │   │   ├── 30625ec1b3176a
    │   │       │   │   ├── 3eefa331dcca35
    │   │       │   │   ├── 9b4f310fa7c6ac
    │   │       │   │   ├── b7dee98d26478c
    │   │       │   │   ├── c3487ded5ec86d
    │   │       │   │   └── ee31db179a015c
    │   │       │   ├── d7/
    │   │       │   │   ├── 3e028ce6984a1e
    │   │       │   │   ├── 51d56d0e62772e
    │   │       │   │   ├── 6301e30f5a56af
    │   │       │   │   ├── 7653de15741c24
    │   │       │   │   ├── 7f95c0f40ed653
    │   │       │   │   ├── 9dca2838959368
    │   │       │   │   ├── ae1dec2c875ff2
    │   │       │   │   ├── bbb76c027b018c
    │   │       │   │   └── d287127efdd60c
    │   │       │   ├── d8/
    │   │       │   │   ├── 0b6b2bec57de0e
    │   │       │   │   ├── 1c7e71709f5fc6
    │   │       │   │   ├── 22f310eae98f40
    │   │       │   │   ├── 2f6dd2b7f0bc8a
    │   │       │   │   ├── 6c1999c0a0744c
    │   │       │   │   ├── 8dfc04c73e1609
    │   │       │   │   ├── 9215e198c0e370
    │   │       │   │   ├── a7c8240902ff31
    │   │       │   │   ├── b1bd0a85a1b6cb
    │   │       │   │   ├── b4fc8811da9ba1
    │   │       │   │   ├── beeace5cdd6d0c
    │   │       │   │   ├── c5c1e79cfc265b
    │   │       │   │   └── fc968853657ac8
    │   │       │   ├── d9/
    │   │       │   │   ├── 0ef29d59ae87ad
    │   │       │   │   ├── 3022c400c86816
    │   │       │   │   ├── 6ce2a9140afaec
    │   │       │   │   ├── 8b8e50c2382377
    │   │       │   │   └── c04f71cf318cd0
    │   │       │   ├── da/
    │   │       │   │   ├── 706e446344e0e4
    │   │       │   │   ├── 7918e17156f5d0
    │   │       │   │   ├── 7b947be4c2a940
    │   │       │   │   ├── ad26ebe58c1cd6
    │   │       │   │   ├── e63f8b67527d68
    │   │       │   │   └── f8e6336e9facdc
    │   │       │   ├── db/
    │   │       │   │   ├── 1dac5037a63c87
    │   │       │   │   ├── 5133d33e8e58f3
    │   │       │   │   ├── 537dc2e1ef6ffd
    │   │       │   │   ├── 5cd180912da0ba
    │   │       │   │   ├── 759a9e1e5adf4b
    │   │       │   │   ├── 88123bcf7b823d
    │   │       │   │   ├── abddff900e4b34
    │   │       │   │   ├── b1795da5ea784e
    │   │       │   │   └── b659155c634424
    │   │       │   ├── dc/
    │   │       │   │   ├── 0578798605b9f1
    │   │       │   │   ├── 3d47e5abf6412b
    │   │       │   │   ├── 5532e4e9c84410
    │   │       │   │   ├── 69de34845e1fac
    │   │       │   │   ├── 796188f139f3a2
    │   │       │   │   ├── 922e5a99619e0d
    │   │       │   │   ├── 9c1ec3908384a6
    │   │       │   │   ├── aeb5ea3602d3c2
    │   │       │   │   ├── d100491ffb1654
    │   │       │   │   ├── f3fec7ddf37889
    │   │       │   │   └── f8d0625bf41bf0
    │   │       │   ├── dd/
    │   │       │   │   ├── 0cc3db0c71150d
    │   │       │   │   ├── 11dad23d814a55
    │   │       │   │   ├── 66972b17e363b8
    │   │       │   │   ├── 6c226782331fdd
    │   │       │   │   ├── 88142ebc919e83
    │   │       │   │   ├── a3c0169debca78
    │   │       │   │   ├── ecf270ae683959
    │   │       │   │   └── fa8f7b2226b142
    │   │       │   ├── de/
    │   │       │   │   ├── 40bfca0c989699
    │   │       │   │   ├── 5d4361e9b87454
    │   │       │   │   └── d23fb0f9a1ee03
    │   │       │   ├── df/
    │   │       │   │   ├── 009ffa99e26646
    │   │       │   │   ├── 0a7e3ef8e4843e
    │   │       │   │   ├── 10967372df16b9
    │   │       │   │   ├── 4d612cb7fae671
    │   │       │   │   ├── 55f0c1267cfa3a
    │   │       │   │   ├── 5aaa0d9d36f62e
    │   │       │   │   ├── 6b1fbefe633c6b
    │   │       │   │   ├── 9f47bcc95cfca1
    │   │       │   │   ├── a6f60082544af7
    │   │       │   │   ├── b0497f743f1e7f
    │   │       │   │   ├── c590e4d15c15a6
    │   │       │   │   ├── d70878e4fe86ee
    │   │       │   │   ├── f16e0459dad0c7
    │   │       │   │   └── fcb7aa9dd7932f
    │   │       │   ├── e0/
    │   │       │   │   ├── 0f5e9dc113a0fa
    │   │       │   │   ├── 4e15d6a82b3c1b
    │   │       │   │   ├── 4eb8e9733a516c
    │   │       │   │   ├── 59a70de2684a4b
    │   │       │   │   ├── 6444bf627e92c8
    │   │       │   │   ├── 692e4541aea62b
    │   │       │   │   ├── c9a035cb963216
    │   │       │   │   ├── e368fc4df7010f
    │   │       │   │   ├── e4c4aa610d08ed
    │   │       │   │   └── efa667067bc0c1
    │   │       │   ├── e1/
    │   │       │   │   ├── 083412ed96f63f
    │   │       │   │   ├── 12a3932aa35a56
    │   │       │   │   ├── 1b959d297e6944
    │   │       │   │   ├── 2a35f42fd05df7
    │   │       │   │   ├── 4336bba34658dd
    │   │       │   │   ├── 454e2d7d4b2f4b
    │   │       │   │   ├── 5798ff53f87036
    │   │       │   │   ├── 77dfc5465d7190
    │   │       │   │   ├── 8bb5301e7ce96e
    │   │       │   │   ├── 98118cea5d84ac
    │   │       │   │   ├── aafd11ea1d01de
    │   │       │   │   └── dcb54fed4f2977
    │   │       │   ├── e2/
    │   │       │   │   ├── 0a46a45cb7f9c1
    │   │       │   │   ├── 711412cbe17ac7
    │   │       │   │   ├── 83f88c927221e8
    │   │       │   │   ├── c0bec45a5f8093
    │   │       │   │   ├── ecf69ddef77e30
    │   │       │   │   └── f337a3fc1d81a1
    │   │       │   ├── e3/
    │   │       │   │   ├── 096210c4aadabb
    │   │       │   │   ├── 1cb3afcf06a804
    │   │       │   │   ├── 1fd5369a8fdef1
    │   │       │   │   ├── 3651e39ae59314
    │   │       │   │   ├── 3acc5ae11c4bed
    │   │       │   │   ├── 5bb319a13f0d2c
    │   │       │   │   ├── 6527850bfd405a
    │   │       │   │   ├── 7de332263760b2
    │   │       │   │   ├── 826cada4f89b95
    │   │       │   │   ├── 85ce31f9710d2d
    │   │       │   │   ├── e47ebd8effb9c5
    │   │       │   │   └── e9c44be0762865
    │   │       │   ├── e4/
    │   │       │   │   ├── 3deddf93447297
    │   │       │   │   ├── 5369749d346d35
    │   │       │   │   ├── 78e682a288f221
    │   │       │   │   ├── 8170d043ca8f00
    │   │       │   │   ├── 88565fcbeb2c71
    │   │       │   │   ├── c97171d1352300
    │   │       │   │   ├── d891ddb4f25d33
    │   │       │   │   ├── fbb24e533fbe33
    │   │       │   │   └── fec1591db17530
    │   │       │   ├── e5/
    │   │       │   │   ├── 06f20f09dfab69
    │   │       │   │   ├── 096cf4d8a35c26
    │   │       │   │   ├── 34fba757787ca8
    │   │       │   │   ├── 5308846e209d6b
    │   │       │   │   ├── 5a52d94a725efb
    │   │       │   │   ├── 5bec5be039fa4c
    │   │       │   │   ├── 663a5993c1b9c3
    │   │       │   │   ├── 6d2381e8dc64e3
    │   │       │   │   ├── 7b862700212bf0
    │   │       │   │   ├── 9663f828d3db32
    │   │       │   │   ├── b89f87db64a441
    │   │       │   │   └── d4358e1545fe7e
    │   │       │   ├── e6/
    │   │       │   │   ├── 000f8ae89316ec
    │   │       │   │   ├── 3c5071144b9ccb
    │   │       │   │   ├── 800bf57d78d482
    │   │       │   │   ├── 88c6e6e5a1be59
    │   │       │   │   ├── a6639e7009dc91
    │   │       │   │   ├── b8dccfbac38cc8
    │   │       │   │   ├── dd727f60e21002
    │   │       │   │   ├── de46ed7b8596d6
    │   │       │   │   ├── eb4b56bcb61095
    │   │       │   │   └── ff8fb1da7909b7
    │   │       │   ├── e7/
    │   │       │   │   ├── 01615c0857276d
    │   │       │   │   ├── 0c8fe763c8939b
    │   │       │   │   ├── 0f3a89cebf5356
    │   │       │   │   ├── 41c70b236988c6
    │   │       │   │   ├── 507a6f0d707f18
    │   │       │   │   ├── 6147022780bffc
    │   │       │   │   ├── 9c7aceaa182e93
    │   │       │   │   ├── bdae5306a7e2da
    │   │       │   │   └── ee54214de24acc
    │   │       │   ├── e8/
    │   │       │   │   ├── 147ae30f730120
    │   │       │   │   ├── 361c9d5d632366
    │   │       │   │   ├── 41271b8ac0ab1a
    │   │       │   │   ├── 5095922ca29522
    │   │       │   │   ├── 5421f55d149b74
    │   │       │   │   ├── 5c393aee6c54f1
    │   │       │   │   ├── 613fefddd28980
    │   │       │   │   ├── 6a6aef8c9c34b9
    │   │       │   │   ├── 848cdb56e7eba1
    │   │       │   │   ├── 96bf8ca6b64f45
    │   │       │   │   ├── ab3a763abfc251
    │   │       │   │   ├── af4f52bb626645
    │   │       │   │   ├── d71b7c566eeae3
    │   │       │   │   ├── ee4af37a753d1a
    │   │       │   │   ├── f81a354e295a3b
    │   │       │   │   └── fc55e00e947fd9
    │   │       │   ├── e9/
    │   │       │   │   ├── 06a57df20b9d80
    │   │       │   │   ├── 0d438137b38816
    │   │       │   │   ├── 63ac46bf462fc7
    │   │       │   │   ├── 7b72279d0c285a
    │   │       │   │   ├── 8dcfb5724ca99d
    │   │       │   │   ├── acb7bead8ad5c1
    │   │       │   │   ├── b7e5733dfc2e99
    │   │       │   │   └── e0b085d73d959e
    │   │       │   ├── ea/
    │   │       │   │   ├── 214027bcc4447a
    │   │       │   │   ├── 30e8c023842915
    │   │       │   │   ├── 3863c4b2e36cd8
    │   │       │   │   ├── 65af5cad27014d
    │   │       │   │   ├── 7d93ccdc7a1d5d
    │   │       │   │   ├── c71d56d58b746e
    │   │       │   │   ├── ce56a19b31229b
    │   │       │   │   └── d5d113c0045b72
    │   │       │   ├── eb/
    │   │       │   │   ├── 1caf1cbdf17f93
    │   │       │   │   ├── 2789391ead8e49
    │   │       │   │   ├── 4338c809a22631
    │   │       │   │   ├── 50e4de7020e110
    │   │       │   │   ├── 517b25fe32dce0
    │   │       │   │   ├── 7963a6296ed598
    │   │       │   │   ├── 852d9f77b397a3
    │   │       │   │   ├── 994425937fa1d0
    │   │       │   │   └── c222f1c8ae899f
    │   │       │   ├── ec/
    │   │       │   │   ├── 0e11511615eed2
    │   │       │   │   ├── 8937e139246b77
    │   │       │   │   ├── 92b1c4b762cd05
    │   │       │   │   ├── 994d5ce50b8f09
    │   │       │   │   ├── e52870ea5eb516
    │   │       │   │   ├── eb54b50fa404f8
    │   │       │   │   └── eb5753277c137c
    │   │       │   ├── ed/
    │   │       │   │   ├── 45e5e83c8546bb
    │   │       │   │   ├── 89b76c2a60b954
    │   │       │   │   ├── b710bf9963acd6
    │   │       │   │   ├── f5096b360ef3db
    │   │       │   │   └── fd58ef87872b8c
    │   │       │   ├── ee/
    │   │       │   │   ├── 233f4d2a26a1b3
    │   │       │   │   ├── 5115bcd167a8d5
    │   │       │   │   ├── 60277a83bb669c
    │   │       │   │   ├── 7b106b45c3d64a
    │   │       │   │   ├── 9d955f004f70b0
    │   │       │   │   └── b72313499ae9eb
    │   │       │   ├── ef/
    │   │       │   │   ├── 131283d392d77e
    │   │       │   │   ├── 148eb7452f0f29
    │   │       │   │   ├── 531ed082793c81
    │   │       │   │   ├── 8be9da74e17a91
    │   │       │   │   ├── 994c1f83f5a23b
    │   │       │   │   ├── 9c1fb6fc3433dd
    │   │       │   │   ├── a8e8cbaa30cca2
    │   │       │   │   ├── b0357527af27d5
    │   │       │   │   ├── d78149b11875da
    │   │       │   │   └── ecfcdb707c2c82
    │   │       │   ├── f0/
    │   │       │   │   ├── 3360cbfe95afb2
    │   │       │   │   ├── 5f39663a9efbc6
    │   │       │   │   ├── 621b3bc131731c
    │   │       │   │   ├── 694fa78a64da40
    │   │       │   │   ├── 6e1e2145a503b3
    │   │       │   │   ├── 7712a7eba1ad94
    │   │       │   │   ├── 7df0ad5f51b175
    │   │       │   │   ├── b8f3334665ef7b
    │   │       │   │   └── ff741cd2a0b2ed
    │   │       │   ├── f1/
    │   │       │   │   ├── 02dd8f98bce86c
    │   │       │   │   ├── 0a387ff7d45e5f
    │   │       │   │   ├── 1c51754b1ed1f6
    │   │       │   │   ├── 2189ed6631a9f8
    │   │       │   │   ├── 32ebe061da25de
    │   │       │   │   ├── 3ca3102cb20af1
    │   │       │   │   ├── 41eef1f7080039
    │   │       │   │   ├── 47bf0ea7b5c31f
    │   │       │   │   ├── 5983601bea309e
    │   │       │   │   ├── 631a4c91b13ba2
    │   │       │   │   ├── 712340b574655a
    │   │       │   │   ├── 7e2a04daf4fed5
    │   │       │   │   ├── 920f1c2730686d
    │   │       │   │   ├── b776dbc1a198ef
    │   │       │   │   ├── be5166f0a1876a
    │   │       │   │   ├── cd77675ecfd429
    │   │       │   │   ├── d6e761ccc7af7b
    │   │       │   │   ├── dcdc11e3dc1853
    │   │       │   │   └── f56854ef8db697
    │   │       │   ├── f2/
    │   │       │   │   ├── 047e8e68627d06
    │   │       │   │   ├── 42a25eddefaf03
    │   │       │   │   ├── 5de5f1ce4fe529
    │   │       │   │   ├── 6c83fdf97a912f
    │   │       │   │   ├── 8c25c2c0af7085
    │   │       │   │   ├── 95f099d03eb950
    │   │       │   │   ├── d61d41bbdac9e5
    │   │       │   │   ├── f9d5e88e26cb6a
    │   │       │   │   └── fdc17f8973c8f4
    │   │       │   ├── f3/
    │   │       │   │   ├── 017305f2334e9c
    │   │       │   │   ├── 167c895140d59a
    │   │       │   │   ├── 600999afb8f2f7
    │   │       │   │   ├── 6880daf313f6ec
    │   │       │   │   ├── 74319f1f127355
    │   │       │   │   ├── 7969502bfe6856
    │   │       │   │   ├── 806a699ea30c5e
    │   │       │   │   ├── 927a9464ae857e
    │   │       │   │   ├── a4ab835178ee2d
    │   │       │   │   ├── af0d2b44ef7bba
    │   │       │   │   ├── b67a5c443f033e
    │   │       │   │   └── cc6d7dee5dde5e
    │   │       │   ├── f4/
    │   │       │   │   ├── 13871ab9edec01
    │   │       │   │   ├── 2092421abcbbb1
    │   │       │   │   ├── 85df8bc52a0338
    │   │       │   │   ├── 8a4c9426b55b70
    │   │       │   │   ├── 927673ef314589
    │   │       │   │   ├── 96346207346940
    │   │       │   │   ├── 9778ce0db71b1f
    │   │       │   │   ├── eab2f2ed56b68b
    │   │       │   │   └── f691adc13a7247
    │   │       │   ├── f5/
    │   │       │   │   ├── 100145e1f2a274
    │   │       │   │   ├── 1083f16747a4bc
    │   │       │   │   ├── 28fd00ed1ff207
    │   │       │   │   ├── 478d3f6979ecaf
    │   │       │   │   ├── 4804057161894f
    │   │       │   │   ├── 6c6cd68ae84f30
    │   │       │   │   ├── 6df8b5f35c60ac
    │   │       │   │   ├── d4e10e42d51d62
    │   │       │   │   └── e9f7c4c5ab61da
    │   │       │   ├── f6/
    │   │       │   │   ├── 01cc86796d628c
    │   │       │   │   ├── 07946c5b20dd73
    │   │       │   │   ├── 09de0eb2263ae7
    │   │       │   │   ├── 23df391e3e3607
    │   │       │   │   ├── 33963e7baf4e1a
    │   │       │   │   ├── 520d870a504eb5
    │   │       │   │   ├── 90aa58cbd395c7
    │   │       │   │   ├── a1ae1b065bbc67
    │   │       │   │   ├── acb9fbdad0349f
    │   │       │   │   ├── bde38aada9f139
    │   │       │   │   ├── c216259605fc9f
    │   │       │   │   ├── e07e01926c1112
    │   │       │   │   ├── e3eded9e10bc33
    │   │       │   │   └── e6b5d11e40b06b
    │   │       │   ├── f7/
    │   │       │   │   ├── 04ea139571d0cf
    │   │       │   │   ├── 08d677472da091
    │   │       │   │   ├── 0995767408e724
    │   │       │   │   ├── 174871bf7301c9
    │   │       │   │   ├── 23b3e421fef5a8
    │   │       │   │   ├── 3fcfa3aa8c27b9
    │   │       │   │   ├── 556ab79a8ee358
    │   │       │   │   ├── aa84541d2fc619
    │   │       │   │   ├── be83bedc456017
    │   │       │   │   └── e33247d5287049
    │   │       │   ├── f8/
    │   │       │   │   ├── 18460f4ab6e208
    │   │       │   │   ├── 554efab49e3184
    │   │       │   │   ├── 5c02cd4fe558a5
    │   │       │   │   ├── 6770bfc3aeb748
    │   │       │   │   ├── 9b99af88afc43f
    │   │       │   │   ├── a0c5fc20495390
    │   │       │   │   └── a5c9e13cb5b5af
    │   │       │   ├── f9/
    │   │       │   │   ├── 009ecce479f64f
    │   │       │   │   ├── 1151547f11319f
    │   │       │   │   ├── 17f5c202492d60
    │   │       │   │   ├── 3a2ca4ecee62fe
    │   │       │   │   ├── 4648c8bd78f8cc
    │   │       │   │   ├── 55f3697c634531
    │   │       │   │   ├── 5ee6672470da79
    │   │       │   │   ├── 8fd37cc38312ec
    │   │       │   │   ├── 95c9115f5a6d1f
    │   │       │   │   ├── bbc5cee5fc9119
    │   │       │   │   ├── d6ad1287d08139
    │   │       │   │   └── f49984f4620b16
    │   │       │   ├── fa/
    │   │       │   │   ├── 0eda59fa85be24
    │   │       │   │   ├── 3b1377b6ab5c30
    │   │       │   │   ├── 4471564e73a182
    │   │       │   │   ├── 57867a8096684f
    │   │       │   │   ├── 639ac88a9c7938
    │   │       │   │   ├── 6eb0dbf7bcec8b
    │   │       │   │   ├── 777413683f35b1
    │   │       │   │   ├── b786abeccf8b73
    │   │       │   │   ├── c5388eb2eb313a
    │   │       │   │   └── f8589d08f7a64d
    │   │       │   ├── fb/
    │   │       │   │   ├── 01c10324258cd9
    │   │       │   │   ├── 059bafae2dc187
    │   │       │   │   ├── 1dad9dbda062d3
    │   │       │   │   ├── 35975795d6b120
    │   │       │   │   ├── 365e0b26468ed5
    │   │       │   │   ├── 3792b4a3dffe92
    │   │       │   │   ├── 3cb33ba9a46305
    │   │       │   │   ├── 703368804ac896
    │   │       │   │   ├── 9114abc1db21e1
    │   │       │   │   ├── ab1755d4b8938f
    │   │       │   │   ├── acd7867eb4a7dd
    │   │       │   │   ├── b0527a84285f4c
    │   │       │   │   ├── b0ba568a5d809d
    │   │       │   │   ├── e163c476e30af7
    │   │       │   │   ├── e483f99eab80b8
    │   │       │   │   ├── e9d8a48a751039
    │   │       │   │   └── f71b2f5fa97d82
    │   │       │   ├── fc/
    │   │       │   │   ├── 030cea852ddc1a
    │   │       │   │   ├── 706c8392ab0839
    │   │       │   │   ├── 72105168e928be
    │   │       │   │   ├── 73267c069a4280
    │   │       │   │   ├── 826535dd148fac
    │   │       │   │   ├── e2bf205d943672
    │   │       │   │   └── fa1d0c7ede3ded
    │   │       │   ├── fd/
    │   │       │   │   ├── 1a9ed6f15bf642
    │   │       │   │   ├── 310f2c345db639
    │   │       │   │   ├── 6d9db3385f90d7
    │   │       │   │   ├── a12edd1fc77bf6
    │   │       │   │   ├── a311f2ff8f4047
    │   │       │   │   ├── a7af2ef0969301
    │   │       │   │   └── cdb84aa50a465f
    │   │       │   ├── fe/
    │   │       │   │   ├── 166e6f80b9f779
    │   │       │   │   ├── 2eaf10f6a08438
    │   │       │   │   ├── 3884225723cd02
    │   │       │   │   ├── 5d20969e0161d6
    │   │       │   │   ├── c6fa8acd321efd
    │   │       │   │   └── da74fd38e2a869
    │   │       │   └── ff/
    │   │       │       ├── 0b7f3cc1c30c6e
    │   │       │       ├── 17e85beca8a484
    │   │       │       ├── 1dc672519f82d5
    │   │       │       ├── 2db7251c4f9bea
    │   │       │       ├── 6ececdee2b066e
    │   │       │       ├── 81f5eca5547fc2
    │   │       │       ├── 8273f68bf85255
    │   │       │       ├── cb476511f24ad9
    │   │       │       └── e3f60c536a190b
    │   │       ├── compile-cache-yaml/
    │   │       │   ├── 02/
    │   │       │   │   ├── 100e36eda43c6d
    │   │       │   │   └── 7c423d4b2f1826
    │   │       │   ├── 07/
    │   │       │   │   └── 0e6c47397a1c15
    │   │       │   ├── 0b/
    │   │       │   │   ├── 1ce408082486c9
    │   │       │   │   └── 3dce02e59e80e2
    │   │       │   ├── 0e/
    │   │       │   │   └── ea4fddb88eb3f3
    │   │       │   ├── 10/
    │   │       │   │   └── 28829364438d90
    │   │       │   ├── 18/
    │   │       │   │   └── 55be9a51042338
    │   │       │   ├── 20/
    │   │       │   │   └── 1ac8b3daac9990
    │   │       │   ├── 21/
    │   │       │   │   └── 1d698efa899019
    │   │       │   ├── 22/
    │   │       │   │   └── a1eff5d99fd222
    │   │       │   ├── 24/
    │   │       │   │   └── 9f72647d11602a
    │   │       │   ├── 26/
    │   │       │   │   └── 379c03893a9d34
    │   │       │   ├── 2c/
    │   │       │   │   └── f55650581e1bdd
    │   │       │   ├── 2e/
    │   │       │   │   └── 771cd98f5583f0
    │   │       │   ├── 30/
    │   │       │   │   └── cb549f5be9d24d
    │   │       │   ├── 32/
    │   │       │   │   └── 12065c0b04131b
    │   │       │   ├── 3b/
    │   │       │   │   └── 275f6b33615d15
    │   │       │   ├── 3f/
    │   │       │   │   ├── 2c4120b3d593ad
    │   │       │   │   └── d3d820220f90d0
    │   │       │   ├── 40/
    │   │       │   │   └── 8095ee97a92a3a
    │   │       │   ├── 44/
    │   │       │   │   └── 339380699270b5
    │   │       │   ├── 45/
    │   │       │   │   └── c5e0e5fb97b335
    │   │       │   ├── 47/
    │   │       │   │   └── 31dd792f2d7c17
    │   │       │   ├── 48/
    │   │       │   │   └── 252e1c17ae4bae
    │   │       │   ├── 49/
    │   │       │   │   └── 77f25a72bfd5ea
    │   │       │   ├── 4d/
    │   │       │   │   └── aa26506cbcc740
    │   │       │   ├── 50/
    │   │       │   │   ├── a6cb57b4461f12
    │   │       │   │   └── d0c2392738a455
    │   │       │   ├── 52/
    │   │       │   │   └── f57470d546f9b7
    │   │       │   ├── 55/
    │   │       │   │   ├── e8d8ac160cd9ea
    │   │       │   │   └── f10712e6666576
    │   │       │   ├── 5e/
    │   │       │   │   └── 28339174ff35b8
    │   │       │   ├── 66/
    │   │       │   │   └── 123a1c2f2f5535
    │   │       │   ├── 68/
    │   │       │   │   ├── 2b8797396bc18e
    │   │       │   │   └── d78005f1577c90
    │   │       │   ├── 69/
    │   │       │   │   └── f3b46d588409da
    │   │       │   ├── 6d/
    │   │       │   │   └── d21e61ce8b7548
    │   │       │   ├── 7a/
    │   │       │   │   └── 891084a53b3986
    │   │       │   ├── 7b/
    │   │       │   │   └── 6518baeb34fc49
    │   │       │   ├── 8c/
    │   │       │   │   └── 16574efdae6bce
    │   │       │   ├── 8d/
    │   │       │   │   └── 90c629b932f688
    │   │       │   ├── 90/
    │   │       │   │   └── 38e8c85b9e9b3a
    │   │       │   ├── 94/
    │   │       │   │   ├── 49aa08dd299f38
    │   │       │   │   └── e4a34f6cdf7254
    │   │       │   ├── 97/
    │   │       │   │   ├── d0d76c917a70a1
    │   │       │   │   └── d439246a0d5551
    │   │       │   ├── 98/
    │   │       │   │   └── fc98807c0373d6
    │   │       │   ├── 9a/
    │   │       │   │   └── 024c201aeffca4
    │   │       │   ├── 9b/
    │   │       │   │   └── 5484fe2559970f
    │   │       │   ├── 9c/
    │   │       │   │   └── 15212e838f2ff2
    │   │       │   ├── 9e/
    │   │       │   │   ├── 6524430b86020d
    │   │       │   │   └── c097f23cd25097
    │   │       │   ├── 9f/
    │   │       │   │   └── c8d0009769589a
    │   │       │   ├── a1/
    │   │       │   │   ├── 4a138f29b4b528
    │   │       │   │   └── 786bdbf126a19e
    │   │       │   ├── a5/
    │   │       │   │   ├── 0362d7f5a30236
    │   │       │   │   └── 9e6036bc989083
    │   │       │   ├── a6/
    │   │       │   │   └── ebc5c7cbc55f40
    │   │       │   ├── a8/
    │   │       │   │   └── 9592e77f3aa912
    │   │       │   ├── aa/
    │   │       │   │   └── 336611630589c6
    │   │       │   ├── b4/
    │   │       │   │   └── 81dc86c245ff41
    │   │       │   ├── b8/
    │   │       │   │   └── cace53ca38a549
    │   │       │   ├── b9/
    │   │       │   │   └── c70bba98077f38
    │   │       │   ├── c0/
    │   │       │   │   └── ef000a97569492
    │   │       │   ├── c1/
    │   │       │   │   └── 93f823ac105eba
    │   │       │   ├── c4/
    │   │       │   │   └── c26f0a80ee4083
    │   │       │   ├── c6/
    │   │       │   │   └── 155ccbe508471e
    │   │       │   ├── ca/
    │   │       │   │   ├── 5c2688ac024483
    │   │       │   │   └── dd246603fe03a7
    │   │       │   ├── d1/
    │   │       │   │   └── 949d090d8b2bbd
    │   │       │   ├── d4/
    │   │       │   │   └── 3d0196d13a6b14
    │   │       │   ├── dc/
    │   │       │   │   └── 96a6392e11d527
    │   │       │   ├── dd/
    │   │       │   │   └── 54b5df34718df2
    │   │       │   ├── df/
    │   │       │   │   └── 1822f278ce5ddf
    │   │       │   ├── e7/
    │   │       │   │   └── b2a40709f5be5f
    │   │       │   ├── e8/
    │   │       │   │   └── 8b1fae5158c59a
    │   │       │   ├── e9/
    │   │       │   │   └── 82038677a604ce
    │   │       │   ├── ea/
    │   │       │   │   └── 36473cd8f6b4e5
    │   │       │   ├── ed/
    │   │       │   │   └── bc12684a52ce6f
    │   │       │   ├── ee/
    │   │       │   │   └── 6a5030bcf220e6
    │   │       │   ├── f1/
    │   │       │   │   └── 3f36e0379193b8
    │   │       │   ├── f5/
    │   │       │   │   └── 15d9df3bb46c23
    │   │       │   ├── f6/
    │   │       │   │   └── f6fc78c2d8d8cc
    │   │       │   ├── f7/
    │   │       │   │   ├── 0a6f73fd138684
    │   │       │   │   └── f7a51299464913
    │   │       │   ├── f9/
    │   │       │   │   └── f8af93c56390ef
    │   │       │   ├── fa/
    │   │       │   │   └── f18756c80115e1
    │   │       │   ├── fc/
    │   │       │   │   └── b489635964bf98
    │   │       │   ├── fe/
    │   │       │   │   ├── 457c93c5554fde
    │   │       │   │   └── 7519aca5e98583
    │   │       │   └── ff/
    │   │       │       └── 1c9a3d273461b0
    │   │       └── load-path-cache
    │   ├── pids/
    │   │   └── .keep
    │   ├── storage/
    │   │   └── .keep
    │   ├── .keep
    │   ├── development_secret.txt
    │   └── restart.txt
    ├── .gitattributes
    ├── .rspec
    ├── .ruby-version
    ├── Dockerfile
    ├── Gemfile
    ├── Gemfile.lock
    ├── README.md
    ├── Rakefile
    ├── config.ru
    ├── docker-compose.yml
    ├── history.txt
    ├── pdr_integration.md
    └── step.md

## File Contents

### rails-solar/app/admin/admin_users.rb
```
ActiveAdmin.register AdminUser do
  permit_params :email, :password, :password_confirmation

  index do
    selectable_column
    id_column
    column :email
    column :current_sign_in_at
    column :sign_in_count
    column :created_at
    actions
  end

  filter :email
  filter :current_sign_in_at
  filter :sign_in_count
  filter :created_at

  form do |f|
    f.inputs do
      f.input :email
      f.input :password
      f.input :password_confirmation
    end
    f.actions
  end

end
```

### rails-solar/app/admin/assess_campaigns.rb
```
ActiveAdmin.register AssessCampaign do

  permit_params :product_id, :title, :code, :owner_id, :goal, :achieved, :shares, :prize, :starts_at, :ends_at, :debutantes, :status

  # Scopes para as abas
  scope :all, default: true
  scope("Ativos")    { |c| c.where(status: 'active') }
  scope("Na fila")   { |c| c.where(status: 'queued') }
  scope("Expirados") { |c| c.where(status: 'expired') }

  index do
    selectable_column
    id_column
    column :title
    column :product
    column :owner
    column :goal
    column :achieved
    column :shares
    column :prize
    column :starts_at
    column :ends_at
    column :status do |campaign|
      campaign.status.humanize
    end
    column :created_at
    actions
  end

  filter :title
  filter :product
  filter :owner
  filter :status, as: :select, collection: AssessCampaign.statuses.keys.map { |k| [k.humanize, k] }
  filter :starts_at
  filter :ends_at
  filter :created_at

  form do |f|
    f.inputs do
      f.input :product
      f.input :owner
      f.input :title
      f.input :code
      f.input :goal
      f.input :achieved
      f.input :shares
      f.input :prize
      f.input :starts_at, as: :datepicker
      f.input :ends_at, as: :datepicker
      f.input :debutantes
      f.input :status, as: :select, collection: AssessCampaign.statuses.keys.map { |k| [k.humanize, k] }
    end
    f.actions
  end

  show do
    attributes_table do
      row :product
      row :owner
      row :title
      row :code
      row :goal
      row :achieved
      row :shares
      row :prize
      row :starts_at
      row :ends_at
      row :debutantes
      row :status do |campaign|
        campaign.status.humanize
      end
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end

end
```

### rails-solar/app/admin/categories.rb
```
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
```

### rails-solar/app/admin/certifications.rb
```
ActiveAdmin.register Certification do

  permit_params :company_id, :name, :issued_by, :issued_at, :expires_at

  index do
    selectable_column
    id_column
    column :name
    column :company
    column :issued_by
    column :issued_at
    column :expires_at
    column :created_at
    actions
  end

  filter :company
  filter :name
  filter :issued_by
  filter :issued_at
  filter :expires_at
  filter :created_at
  filter :updated_at

  form do |f|
    f.inputs do
      f.input :company
      f.input :name
      f.input :issued_by
      f.input :issued_at, as: :datepicker
      f.input :expires_at, as: :datepicker
    end
    f.actions
  end

  show do
    attributes_table do
      row :company
      row :name
      row :issued_by
      row :issued_at
      row :expires_at
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end

end
```

### rails-solar/app/admin/companies.rb
```


ActiveAdmin.register Company do

  permit_params :name, :description, :user_id, :verified, :target_segment, :annual_energy_output, :installation_count, :location, :logo

  index do
    selectable_column
    id_column
    column :name
    column :user
    column :verified
    column :target_segment do |company|
      company.target_segment.humanize
    end
    column :annual_energy_output
    column :installation_count
    column :logo do |company|
      if company.logo.attached?
        image_tag helpers.rails_blob_url(company.logo), width: 50
      end
    end
    column :created_at
    actions
  end

  filter :name
  filter :verified
  filter :target_segment, as: :select, collection: Company.target_segments.keys.map { |k| [k.humanize, k] }
  filter :created_at

  form do |f|
    f.inputs do
      f.input :user
      f.input :name
      f.input :description
      f.input :verified
      f.input :target_segment, as: :select, collection: Company.target_segments.keys.map { |k| [k.humanize, k] }
      f.input :annual_energy_output
      f.input :installation_count
      f.input :location # Assuming this is a string field for address
      f.input :logo, as: :file
    end
    f.actions
  end

  show do
    attributes_table do
      row :user
      row :name
      row :description
      row :verified
      row :target_segment do |company|
        company.target_segment.humanize
      end
      row :annual_energy_output
      row :installation_count
      row :location
      row :logo do |company|
        if company.logo.attached?
          image_tag helpers.rails_blob_url(company.logo), width: 200
        end
      end
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end

end
```

### rails-solar/app/admin/contents.rb
```
ActiveAdmin.register Content do

  permit_params :title, :short_description, :tags, :lp_url, :format, :level, :active

  index do
    selectable_column
    id_column
    column :title
    column :format
    column :level
    column :active
    column :created_at
    actions
  end

  filter :title
  filter :format
  filter :level
  filter :active
  filter :created_at

  form do |f|
    f.inputs do
      f.input :title
      f.input :short_description
      f.input :tags
      f.input :lp_url
      f.input :format, as: :select, collection: %w[article video infographic podcast]
      f.input :level, as: :select, collection: %w[beginner intermediate advanced]
      f.input :active
    end
    f.actions
  end

  show do
    attributes_table do
      row :title
      row :short_description
      row :tags
      row :lp_url
      row :format
      row :level
      row :active
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end

end
```

### rails-solar/app/admin/dashboard.rb
```
# frozen_string_literal: true
ActiveAdmin.register_page "Dashboard" do
  menu priority: 1, label: proc { I18n.t("active_admin.dashboard") }

  content title: proc { I18n.t("active_admin.dashboard") } do
    columns do
      column do
        panel "Recent Companies" do
          ul do
            Company.last(5).map do |company|
              li link_to(company.name, admin_company_path(company))
            end
          end
        end
      end

      column do
        panel "Recent Leads" do
          ul do
            Lead.last(5).map do |lead|
              li link_to(lead.email, admin_lead_path(lead))
            end
          end
        end
      end

      column do
        panel "Recent Quotes" do
          ul do
            Quote.last(5).map do |quote|
              li link_to(quote.name, admin_quote_path(quote))
            end
          end
        end
      end
    end

    columns do
      column do
        panel "Overview" do
          para "Welcome to the SolarInside Admin Dashboard!"
          para "Here you can manage companies, leads, quotes, and other essential data."
        end
      end
    end
  end # content
end
```

### rails-solar/app/admin/discussions.rb
```
ActiveAdmin.register Discussion do

  permit_params :user_id, :product_id, :category_id, :subject, :body, :status

  index do
    selectable_column
    id_column
    column :subject
    column :user
    column :product
    column :category
    column :status do |discussion|
      discussion.status.humanize
    end
    column :created_at
    actions
  end

  filter :subject
  filter :user
  filter :product
  filter :category
  filter :status, as: :select, collection: Discussion.statuses.keys.map { |k| [k.humanize, k] }
  filter :created_at

  form do |f|
    f.inputs do
      f.input :user
      f.input :product
      f.input :category
      f.input :subject
      f.input :body
      f.input :status, as: :select, collection: Discussion.statuses.keys.map { |k| [k.humanize, k] }
    end
    f.actions
  end

  show do
    attributes_table do
      row :user
      row :product
      row :category
      row :subject
      row :body
      row :status do |discussion|
        discussion.status.humanize
      end
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end

  action_item :close, only: :show do
    link_to 'Close Discussion', close_admin_discussion_path(discussion), method: :put unless discussion.closed?
  end

  action_item :open, only: :show do
    link_to 'Open Discussion', open_admin_discussion_path(discussion), method: :put if discussion.closed?
  end

  member_action :close, method: :put do
    discussion = Discussion.find(params[:id])
    discussion.closed!
    redirect_to admin_discussion_path(discussion), notice: "Discussion closed!"
  end

  member_action :open, method: :put do
    discussion = Discussion.find(params[:id])
    discussion.open!
    redirect_to admin_discussion_path(discussion), notice: "Discussion opened!"
  end

end
```

### rails-solar/app/admin/feature_groups.rb
```
ActiveAdmin.register FeatureGroup do

  permit_params :name

  index do
    selectable_column
    id_column
    column :name
    column :created_at
    actions
  end

  filter :name
  filter :created_at

  form do |f|
    f.inputs do
      f.input :name
    end
    f.actions
  end

  show do
    attributes_table do
      row :name
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end

end
```

### rails-solar/app/admin/features.rb
```
ActiveAdmin.register Feature do

  permit_params :name, :feature_group_id

  index do
    selectable_column
    id_column
    column :name
    column :feature_group
    column :created_at
    actions
  end

  filter :name
  filter :feature_group
  filter :created_at

  form do |f|
    f.inputs do
      f.input :feature_group
      f.input :name
    end
    f.actions
  end

  show do
    attributes_table do
      row :feature_group
      row :name
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end

end
```

### rails-solar/app/admin/leads.rb
```
ActiveAdmin.register Lead do

  permit_params :user_id, :product_id, :name, :email, :role, :company_size, :desired_category, :funnel_stage, :score, :sent_at, :conversion_state

  index do
    selectable_column
    id_column
    column :name
    column :email
    column :user
    column :product
    column :funnel_stage
    column :score
    column :conversion_state do |lead|
      lead.conversion_state.present? ? lead.conversion_state.humanize : "-"
    end
    column :sent_at
    column :created_at
    actions
  end

  filter :email
  filter :funnel_stage
  filter :conversion_state, as: :select, collection: Lead.conversion_states.keys.map { |k| [k.humanize, k] }
  filter :user
  filter :product
  filter :created_at

  form do |f|
    f.inputs do
      f.input :user
      f.input :product
      f.input :name
      f.input :email
      f.input :role
      f.input :company_size
      f.input :desired_category
      f.input :funnel_stage
      f.input :score
      f.input :sent_at, as: :datepicker
      f.input :conversion_state, as: :select, collection: Lead.conversion_states.keys.map { |k| [k.humanize, k] }
    end
    f.actions
  end

  show do
    attributes_table do
      row :user
      row :product
      row :name
      row :email
      row :role
      row :company_size
      row :desired_category
      row :funnel_stage
      row :score
      row :conversion_state do |lead|
        lead.conversion_state.present? ? lead.conversion_state.humanize : "-"
      end
      row :sent_at
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end

  action_item :mark_as_qualified, only: :show do
    link_to 'Mark as Qualified', mark_as_qualified_admin_lead_path(lead), method: :put unless lead.qualified?
  end

  member_action :mark_as_qualified, method: :put do
    lead = Lead.find(params[:id])
    lead.qualified!
    redirect_to admin_lead_path(lead), notice: "Lead marked as qualified!"
  end

end

ActiveAdmin.register SaasLead do
  permit_params :first_name, :last_name, :email, :phone_number, :preferred_contact_time, :contact_method,
                :company_name, :building_type, :roof_type, :available_roof_area, :address, :city, :state,
                :monthly_energy_consumption_kwh, :budget_range, :decision_timeline, :current_energy_provider,
                :score, :status, :pain_points, :competitor_considered, :lead_source, :utm_campaign, :utm_source,
                :utm_medium, :saas_plan_id, :b2b, :funnel_stage, :site_visit_scheduled, :site_visit_date,
                :converted_at, :proposal_sent_at, :follow_up_date

  index do
    selectable_column
    id_column
    column :first_name
    column :last_name
    column :email
    column :company_name
    column :lead_source
    column :status
    column :created_at
    actions
  end

  filter :first_name
  filter :last_name
  filter :email
  filter :company_name
  filter :lead_source
  filter :status
  filter :created_at

  form do |f|
    f.inputs do
      f.input :first_name
      f.input :last_name
      f.input :email
      f.input :phone_number
      f.input :preferred_contact_time
      f.input :contact_method
      f.input :company_name
      f.input :building_type
      f.input :roof_type
      f.input :available_roof_area
      f.input :address
      f.input :city
      f.input :state
      f.input :monthly_energy_consumption_kwh
      f.input :budget_range
      f.input :decision_timeline
      f.input :current_energy_provider
      f.input :score
      f.input :status, as: :select, collection: SaasLead.statuses.keys
      f.input :pain_points
      f.input :competitor_considered
      f.input :lead_source
      f.input :utm_campaign
      f.input :utm_source
      f.input :utm_medium
      f.input :saas_plan
      f.input :b2b
      f.input :funnel_stage
      f.input :site_visit_scheduled
      f.input :site_visit_date, as: :datepicker
      f.input :converted_at, as: :datepicker
      f.input :proposal_sent_at, as: :datepicker
      f.input :follow_up_date, as: :datepicker
    end
    f.actions
  end

  show do
    attributes_table do
      row :first_name
      row :last_name
      row :email
      row :phone_number
      row :preferred_contact_time
      row :contact_method
      row :company_name
      row :building_type
      row :roof_type
      row :available_roof_area
      row :address
      row :city
      row :state
      row :monthly_energy_consumption_kwh
      row :budget_range
      row :decision_timeline
      row :current_energy_provider
      row :score
      row :status
      row :pain_points
      row :competitor_considered
      row :lead_source
      row :utm_campaign
      row :utm_source
      row :utm_medium
      row :saas_plan
      row :b2b
      row :funnel_stage
      row :site_visit_scheduled
      row :site_visit_date
      row :converted_at
      row :proposal_sent_at
      row :follow_up_date
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end
end
```

### rails-solar/app/admin/marketing_campaigns.rb
```
ActiveAdmin.register MarketingCampaign do
  permit_params :name, :channel, :template, :scheduled_at

  # Scopes para as abas
  scope :all, default: true
  scope("ATIVOS")         { |c| c.where(channel: 'active') }
  scope("Planos Ouro")    { |c| c.where(channel: 'gold') }
  scope("Planos Prata")   { |c| c.where(channel: 'silver') }
  scope("Planos Bronze")  { |c| c.where(channel: 'bronze') }
  scope("Planos Amostra") { |c| c.where(channel: 'sample') }

  index do
    selectable_column
    id_column
    column :name
    column :channel do |campaign|
      campaign.channel.humanize
    end
    column :template
    column :scheduled_at
    column :created_at
    actions
  end

  filter :name
  filter :channel, as: :select, collection: MarketingCampaign.channels.keys.map { |k| [k.humanize, k] }
  filter :scheduled_at
  filter :created_at

  form do |f|
    f.inputs do
      f.input :name
      f.input :channel, as: :select, collection: MarketingCampaign.channels.keys.map { |k| [k.humanize, k] }
      f.input :template
      f.input :scheduled_at, as: :datepicker
    end
    f.actions
  end

  show do
    attributes_table do
      row :name
      row :channel do |campaign|
        campaign.channel.humanize
      end
      row :template
      row :scheduled_at
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end
end
```

### rails-solar/app/admin/pricing_rules.rb
```
ActiveAdmin.register PricingRule do

  permit_params :name, :condition, :discount_pct

  index do
    selectable_column
    id_column
    column :name
    column :condition
    column :discount_pct
    column :created_at
    actions
  end

  filter :name
  filter :discount_pct
  filter :created_at

  form do |f|
    f.inputs do
      f.input :name
      f.input :condition
      f.input :discount_pct
    end
    f.actions
  end

  show do
    attributes_table do
      row :name
      row :condition
      row :discount_pct
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end

end
```

### rails-solar/app/admin/pricings.rb
```
ActiveAdmin.register Pricing do

  permit_params :product_id, :title, :currency, :value, :charge_type, :frequency, :payment_methods, :position, :state

  index do
    selectable_column
    id_column
    column :product
    column :title
    column :value
    column :currency
    column :frequency
    column :state
    column :position
    column :created_at
    actions
  end

  filter :product
  filter :currency
  filter :state
  filter :created_at

  form do |f|
    f.inputs do
      f.input :product
      f.input :title
      f.input :currency
      f.input :value
      f.input :charge_type
      f.input :frequency
      f.input :payment_methods
      f.input :position
      f.input :state
    end
    f.actions
  end

  show do
    attributes_table do
      row :product
      row :title
      row :currency
      row :value
      row :charge_type
      row :frequency
      row :payment_methods
      row :position
      row :state
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end

end
```

### rails-solar/app/admin/products.rb
```
ActiveAdmin.register Product do

  # Scopes para as abas
  scope :all, default: true
  scope("Pending")   { |products| products.where(status: :pending) }
  scope("Approved")  { |products| products.where(status: :approved) }
  scope("Canceled")  { |products| products.where(status: :canceled) }

  permit_params :name, :seo_url, :seo_title, :status, :kind, :premium_until, :source, :country, category_ids: [], images: []

  index do
    selectable_column
    id_column
    column :name
    column :status
    column :kind
    column :seo_url
    column :seo_title
    column :premium_until
    column :source
    column :country
    column :images do |product|
      if product.images.attached?
        product.images.map do |img|
          image_tag helpers.rails_blob_url(img), width: 50
        end.join(' ').html_safe
      end
    end
    column :created_at
    actions
  end

  filter :name
  filter :status
  filter :kind
  filter :categories, as: :select, collection: -> { Category.all.map { |c| [c.name, c.id] } }
  filter :created_at

  form do |f|
    f.inputs do
      f.input :name
      f.input :status
      f.input :kind
      f.input :seo_url
      f.input :seo_title
      f.input :premium_until, as: :datepicker
      f.input :source
      f.input :country, as: :select, collection: ISO3166::Country.all.map { |c| [c.translations[I18n.locale.to_s] || c.name, c.alpha2] }
      f.input :categories, as: :check_boxes
      f.input :images, as: :file, input_html: { multiple: true }
      f.input :category_id, as: :select, collection: -> { Category.all.map { |c| [c.name, c.id] } }
    end
    f.actions
  end

  show do
    attributes_table do
      row :name
      row :status
      row :kind
      row :seo_url
      row :seo_title
      row :premium_until
      row :source
      row :country
      row :categories do |product|
        product.categories.map(&:name).join(", ")
      end
      row :images do |product|
        if product.images.attached?
          product.images.map do |img|
            image_tag helpers.rails_blob_url(img), width: 100
          end.join(' ').html_safe
        end
      end
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end

end
```

### rails-solar/app/admin/quotes.rb
```
ActiveAdmin.register Quote do

  permit_params :name, :email, :phone, :message, :company_id, :status, :estimated_kwh, :user_id

  index do
    selectable_column
    id_column
    column :name
    column :email
    column :phone
    column :status do |quote|
      quote.status.humanize
    end
    column :estimated_kwh
    column :company
    column :user
    column :created_at
    actions
  end

  filter :email
  filter :status, as: :select, collection: Quote.statuses.keys.map { |k| [k.humanize, k] }
  filter :estimated_kwh
  filter :company
  filter :user
  filter :created_at

  form do |f|
    f.inputs do
      f.input :company
      f.input :user
      f.input :name
      f.input :email
      f.input :phone
      f.input :message
      f.input :status, as: :select, collection: Quote.statuses.keys.map { |k| [k.humanize, k] }
      f.input :estimated_kwh
    end
    f.actions
  end

  show do
    attributes_table do
      row :company
      row :user
      row :name
      row :email
      row :phone
      row :message
      row :status do |quote|
        quote.status.humanize
      end
      row :estimated_kwh
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end

  action_item :mark_as_responded, only: :show do
    link_to 'Mark as Responded', mark_as_responded_admin_quote_path(quote), method: :put unless quote.responded?
  end

  member_action :mark_as_responded, method: :put do
    quote = Quote.find(params[:id])
    quote.responded!
    redirect_to admin_quote_path(quote), notice: "Quote marked as responded!"
  end

end
```

### rails-solar/app/admin/replies.rb
```
ActiveAdmin.register Reply do

  permit_params :user_id, :discussion_id, :body, :status

  index do
    selectable_column
    id_column
    column :discussion
    column :user
    column :body
    column :status do |reply|
      reply.status.humanize
    end
    column :created_at
    actions
  end

  filter :discussion
  filter :user
  filter :status, as: :select, collection: Reply.statuses.keys.map { |k| [k.humanize, k] }
  filter :created_at

  form do |f|
    f.inputs do
      f.input :discussion
      f.input :user
      f.input :body
      f.input :status, as: :select, collection: Reply.statuses.keys.map { |k| [k.humanize, k] }
    end
    f.actions
  end

  show do
    attributes_table do
      row :discussion
      row :user
      row :body
      row :status do |reply|
        reply.status.humanize
      end
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end

  action_item :approve, only: :show do
    link_to 'Approve', approve_admin_reply_path(reply), method: :put unless reply.approved?
  end

  action_item :reject, only: :show do
    link_to 'Reject', reject_admin_reply_path(reply), method: :put unless reply.rejected?
  end

  member_action :approve, method: :put do
    reply = Reply.find(params[:id])
    reply.approved!
    redirect_to admin_reply_path(reply), notice: "Reply approved!"
  end

  member_action :reject, method: :put do
    reply = Reply.find(params[:id])
    reply.rejected!
    redirect_to admin_reply_path(reply), notice: "Reply rejected!"
  end

end
```

### rails-solar/app/admin/reviews.rb
```
ActiveAdmin.register Review do

  permit_params :user_id, :company_id, :rating, :title, :content, :status

  # Scopes para as abas
  scope :all, default: true
  scope("Canceladas")                      { |reviews| reviews.where(status: 'canceled') }
  scope("Iniciadas")                       { |reviews| reviews.where(status: 'started') }
  scope("Aguardando aprovação")            { |reviews| reviews.where(status: 'pending_approval') }
  scope("Aguardando revisão do usuário")   { |reviews| reviews.where(status: 'pending_user_review') }
  scope("Aprovadas")                       { |reviews| reviews.where(status: 'approved') }

  index do
    selectable_column
    id_column
    column :user
    column :company
    column :rating
    column :title
    column :status do |review|
      review.status.humanize
    end
    column :created_at
    actions
  end

  filter :user, as: :select, collection: -> { User.all }
  filter :user_id
  filter :company
  filter :rating
  filter :status, as: :select, collection: Review.statuses.keys.map { |k| [k.humanize, k] }
  filter :created_at

  form do |f|
    f.inputs do
      f.input :user
      f.input :company
      f.input :rating
      f.input :title
      f.input :content
      f.input :status, as: :select, collection: Review.statuses.keys.map { |k| [k.humanize, k] }
    end
    f.actions
  end

  show do
    attributes_table do
      row :user
      row :company
      row :rating
      row :title
      row :content
      row :status do |review|
        review.status.humanize
      end
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end

  action_item :approve, only: :show do
    link_to 'Approve', approve_admin_review_path(review), method: :put unless review.approved?
  end

  action_item :reject, only: :show do
    link_to 'Reject', reject_admin_review_path(review), method: :put unless review.rejected?
  end

  member_action :approve, method: :put do
    review = Review.find(params[:id])
    review.approved!
    redirect_to admin_review_path(review), notice: "Review approved!"
  end

  member_action :reject, method: :put do
    review = Review.find(params[:id])
    review.rejected!
    redirect_to admin_review_path(review), notice: "Review rejected!"
  end

end
```

### rails-solar/app/admin/saa_s_plans.rb
```
ActiveAdmin.register SaasPlan do

  permit_params :name, :saas_product_id, :tier, :features, :price, :active

  # Scopes para as abas
  scope("Clientes")      { |plans| plans.where(tier: 'clientes') }
  scope("Advanced")      { |plans| plans.where(tier: 'advanced') }
  scope("Profissional")  { |plans| plans.where(tier: 'profissional') }
  scope("Starter")       { |plans| plans.where(tier: 'starter') }
  scope("Prospecção")    { |plans| plans.where(tier: 'prospeccao') }
  scope("Growth")        { |plans| plans.where(tier: 'growth') }
  scope("Reputation")    { |plans| plans.where(tier: 'reputation') }
  scope("Gratuitos")     { |plans| plans.where(tier: 'gratuito') }
  scope :all, default: true

  index do
    selectable_column
    id_column
    column :name
    column :saas_product
    column :tier do |plan|
      plan.tier.humanize
    end
    column :price
    column :active
    column :created_at
    actions
  end

  form do |f|
    f.inputs do
      f.input :saas_product
      f.input :name
      f.input :tier, as: :select, collection: SaasPlan.tiers.keys.map { |k| [k.humanize, k] }
      f.input :features
      f.input :price
      f.input :active
    end
    f.actions
  end

  filter :name
  filter :saas_product
  filter :tier, as: :select, collection: SaasPlan.tiers.keys.map { |k| [k.humanize, k] }
  filter :price
  filter :active
  filter :created_at
  filter :updated_at

  show do
    attributes_table do
      row :saas_product
      row :name
      row :tier do |plan|
        plan.tier.humanize
      end
      row :features
      row :price
      row :active
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end

end
```

### rails-solar/app/admin/saa_s_products.rb
```
ActiveAdmin.register SaasProduct do

  permit_params :name, :description, :price, :billing_cycle, :features, :active, :status

  # Scopes para as abas
  scope("Aguardando aprovação") { |products| products.where(status: 'pending') }
  scope("Aprovadas")            { |products| products.where(status: 'approved') }
  scope("Canceladas")           { |products| products.where(status: 'canceled') }

  index do
    selectable_column
    id_column
    column :name
    column :price
    column :billing_cycle
    column :active
    column :status
    column :created_at
    actions
  end

  filter :name
  filter :price
  filter :billing_cycle
  filter :active
  filter :status
  filter :created_at

  form do |f|
    f.inputs do
      f.input :name
      f.input :description
      f.input :price
      f.input :billing_cycle, as: :select, collection: %w[monthly annually one_time]
      f.input :features
      f.input :active
      f.input :status, as: :select, collection: %w[pending approved canceled]
    end
    f.actions
  end

  show do
    attributes_table do
      row :name
      row :description
      row :price
      row :billing_cycle
      row :features
      row :active
      row :status
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end

end
```

### rails-solar/app/admin/saas_leads.rb
```
ActiveAdmin.register SaasLead do

  permit_params :first_name, :last_name, :email, :phone_number, :preferred_contact_time, :contact_method,
                :company_name, :building_type, :roof_type, :available_roof_area, :address, :city, :state,
                :monthly_energy_consumption_kwh, :budget_range, :decision_timeline, :current_energy_provider,
                :score, :status, :pain_points, :competitor_considered, :lead_source, :utm_campaign, :utm_source,
                :utm_medium, :saas_plan_id, :b2b, :funnel_stage, :site_visit_scheduled, :site_visit_date,
                :converted_at, :proposal_sent_at, :follow_up_date

  index do
    selectable_column
    id_column
    column :first_name
    column :last_name
    column :email
    column :company_name
    column :lead_source
    column :status do |lead|
      lead.status.present? ? lead.status.humanize : "-"
    end
    column :created_at
    actions
  end

  form do |f|
    f.inputs do
      f.input :first_name
      f.input :last_name
      f.input :email
      f.input :phone_number
      f.input :preferred_contact_time
      f.input :contact_method
      f.input :company_name
      f.input :building_type
      f.input :roof_type
      f.input :available_roof_area
      f.input :address
      f.input :city
      f.input :state
      f.input :monthly_energy_consumption_kwh
      f.input :budget_range
      f.input :decision_timeline
      f.input :current_energy_provider
      f.input :score
      f.input :status, as: :select, collection: SaasLead.statuses.keys.map { |k| [k.humanize, k] }
      f.input :pain_points
      f.input :competitor_considered
      f.input :lead_source
      f.input :utm_campaign
      f.input :utm_source
      f.input :utm_medium
      f.input :saas_plan
      f.input :b2b
      f.input :funnel_stage
      f.input :site_visit_scheduled
      f.input :site_visit_date, as: :datepicker
      f.input :converted_at, as: :datepicker
      f.input :proposal_sent_at, as: :datepicker
      f.input :follow_up_date, as: :datepicker
    end
    f.actions
  end

end
```

### rails-solar/app/admin/users.rb
```
ActiveAdmin.register User do

  permit_params :email, :password, :password_confirmation, :name, :role, :phone, :banned_until, :is_super_admin

  # Scopes para as abas
  scope :all, default: true
  scope("Usuários Admin") { |users| users.where(role: 'admin') }
  scope("Usuários do SAAS") { |users| users.where(role: 'saas') }

  index do
    selectable_column
    id_column
    column :email
    column :name
    column :role do |user|
      user.role.present? ? user.role.humanize : "-"
    end
    column :is_super_admin
    column :banned_until
    column :created_at
    actions
  end

  filter :email
  filter :name
  filter :role, as: :select, collection: User.roles.keys.map { |k| [k.humanize, k] }
  filter :is_super_admin
  filter :created_at

  form do |f|
    f.inputs do
      f.input :email
      f.input :name
      f.input :role, as: :select, collection: User.roles.keys.map { |k| [k.humanize, k] }
      f.input :phone
      f.input :banned_until, as: :datepicker
      f.input :is_super_admin
      f.input :password
      f.input :password_confirmation
    end
    f.actions
  end

  show do
    attributes_table do
      row :email
      row :name
      row :role do |user|
        user.role.present? ? user.role.humanize : "-"
      end
      row :phone
      row :banned_until
      row :is_super_admin
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end

end
```

### rails-solar/app/assets/config/manifest.js
```
//= link_tree ../images
//= link_directory ../stylesheets .css
//= link_tree ../../javascript .js
//= link_tree ../../../vendor/javascript .js
```

### rails-solar/app/assets/images/.keep
```

```

### rails-solar/app/assets/javascripts/active_admin.js
```
//= require active_admin/base
```

### rails-solar/app/assets/stylesheets/actiontext.css
```
/*
 * Provides a drop-in pointer for the default Trix stylesheet that will format the toolbar and
 * the trix-editor content (whether displayed or under editing). Feel free to incorporate this
 * inclusion directly in any other asset bundle and remove this file.
 *
 *= require trix
*/

/*
 * We need to override trix.css’s image gallery styles to accommodate the
 * <action-text-attachment> element we wrap around attachments. Otherwise,
 * images in galleries will be squished by the max-width: 33%; rule.
*/
.trix-content .attachment-gallery > action-text-attachment,
.trix-content .attachment-gallery > .attachment {
  flex: 1 0 33%;
  padding: 0 0.5em;
  max-width: 33%;
}

.trix-content .attachment-gallery.attachment-gallery--2 > action-text-attachment,
.trix-content .attachment-gallery.attachment-gallery--2 > .attachment, .trix-content .attachment-gallery.attachment-gallery--4 > action-text-attachment,
.trix-content .attachment-gallery.attachment-gallery--4 > .attachment {
  flex-basis: 50%;
  max-width: 50%;
}

.trix-content action-text-attachment .attachment {
  padding: 0 !important;
  max-width: 100% !important;
}
```

### rails-solar/app/assets/stylesheets/active_admin.scss
```
// Sass variable overrides must be declared before loading up Active Admin's styles.
//
// To view the variables that Active Admin provides, take a look at
// `app/assets/stylesheets/active_admin/mixins/_variables.scss` in the
// Active Admin source.
//
// For example, to change the sidebar width:
// $sidebar-width: 242px;

// Active Admin's got SASS!
@import "active_admin/mixins";
@import "active_admin/base";

// Overriding any non-variable Sass must be done after the fact.
// For example, to change the default status-tag color:
//
//   .status_tag { background: #6090DB; }
```

### rails-solar/app/assets/stylesheets/application.css
```
/*
 * This is a manifest file that'll be compiled into application.css, which will include all the files
 * listed below.
 *
 * Any CSS (and SCSS, if configured) file within this directory, lib/assets/stylesheets, or any plugin's
 * vendor/assets/stylesheets directory can be referenced here using a relative path.
 *
 * You're free to add application-wide styles to this file and they'll appear at the bottom of the
 * compiled file so the styles you add here take precedence over styles defined in any other CSS
 * files in this directory. Styles in this file should be added after the last require_* statement.
 * It is generally better to create a new file per style scope.
 *
 *= require_tree .
 *= require_self
 */
```

### rails-solar/app/channels/application_cable/channel.rb
```
module ApplicationCable
  class Channel < ActionCable::Channel::Base
  end
end
```

### rails-solar/app/channels/application_cable/connection.rb
```
module ApplicationCable
  class Connection < ActionCable::Connection::Base
  end
end
```

### rails-solar/app/controllers/api/v1/assess_campaigns_controller.rb
```
module Api
  module V1
    class AssessCampaignsController < ApplicationController
      def index
        assess_campaigns = AssessCampaign.all
        render json: assess_campaigns, each_serializer: AssessCampaignSerializer
      end

      def show
        assess_campaign = AssessCampaign.find(params[:id])
        render json: assess_campaign, serializer: AssessCampaignSerializer
      end
    end
  end
end
```

### rails-solar/app/controllers/api/v1/categories_controller.rb
```
module Api
  module V1
    class CategoriesController < ApplicationController
      # GET /api/v1/categories
      def index
        # Returns only root categories with their children loaded
        categories = Category.includes(:children).where(parent_id: nil)
        render json: categories, each_serializer: CategorySerializer
      end

      # GET /api/v1/categories/:id
      def show
        category = Category.find(params[:id])
        # Includes subcategories in the response
        render json: category, serializer: CategorySerializer
      end
    end
  end
end
```

### rails-solar/app/controllers/api/v1/certifications_controller.rb
```
module Api
  module V1
    class CertificationsController < ApplicationController
      def index
        certifications = Certification.all
        render json: certifications, each_serializer: CertificationSerializer
      end

      def show
        certification = Certification.find(params[:id])
        render json: certification, serializer: CertificationSerializer
      end
    end
  end
end
```

### rails-solar/app/controllers/api/v1/companies_controller.rb
```
module Api
  module V1
    class CompaniesController < ApplicationController
      # GET /api/v1/companies
      def index
        companies = Company.all
        render json: companies, each_serializer: CompanySerializer
      end

      # GET /api/v1/companies/:id
      def show
        company = Company.find(params[:id])
        render json: company, serializer: CompanySerializer
      end
    end
  end
end
```

### rails-solar/app/controllers/api/v1/contents_controller.rb
```
module Api
  module V1
    class ContentsController < ApplicationController
      def index
        contents = Content.all
        render json: contents, each_serializer: ContentSerializer
      end

      def show
        content = Content.find(params[:id])
        render json: content, serializer: ContentSerializer
      end
    end
  end
end
```

### rails-solar/app/controllers/api/v1/discussions_controller.rb
```
module Api
  module V1
    class DiscussionsController < ApplicationController
      def index
        discussions = Discussion.all
        render json: discussions, each_serializer: DiscussionSerializer
      end

      def show
        discussion = Discussion.find(params[:id])
        render json: discussion, serializer: DiscussionSerializer
      end
    end
  end
end
```

### rails-solar/app/controllers/api/v1/feature_groups_controller.rb
```
module Api
  module V1
    class FeatureGroupsController < ApplicationController
      def index
        feature_groups = FeatureGroup.all
        render json: feature_groups, each_serializer: FeatureGroupSerializer
      end

      def show
        feature_group = FeatureGroup.find(params[:id])
        render json: feature_group, serializer: FeatureGroupSerializer
      end
    end
  end
end
```

### rails-solar/app/controllers/api/v1/features_controller.rb
```
module Api
  module V1
    class FeaturesController < ApplicationController
      def index
        features = Feature.all
        render json: features, each_serializer: FeatureSerializer
      end

      def show
        feature = Feature.find(params[:id])
        render json: feature, serializer: FeatureSerializer
      end
    end
  end
end
```

### rails-solar/app/controllers/api/v1/leads_controller.rb
```
module Api
  module V1
    class LeadsController < ApplicationController
      def index
        leads = Lead.all
        render json: leads, each_serializer: LeadSerializer
      end

      def show
        lead = Lead.find(params[:id])
        render json: lead, serializer: LeadSerializer
      end
    end
  end
end
```

### rails-solar/app/controllers/api/v1/marketing_campaigns_controller.rb
```
module Api
  module V1
    class MarketingCampaignsController < ApplicationController
      # Only admins can manage campaigns
      before_action :authenticate_user!
      before_action :authorize_admin!

      # GET /api/v1/marketing_campaigns
      def index
        campaigns = MarketingCampaign.all
        render json: campaigns, each_serializer: MarketingCampaignSerializer
      end

      # POST /api/v1/marketing_campaigns
      def create
        campaign = MarketingCampaign.new(campaign_params)
        if campaign.save
          render json: campaign, serializer: MarketingCampaignSerializer, status: :created
        else
          render json: { errors: campaign.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def campaign_params
        params.require(:marketing_campaign).permit(
          :name,
          :channel,
          :template,
          :scheduled_at
        )
      end

      def authorize_admin!
        unless current_user.super_admin? || current_user.company_admin?
          render json: { error: 'Access denied' }, status: :forbidden
        end
      end
    end
  end
end
```

### rails-solar/app/controllers/api/v1/pricing_rules_controller.rb
```
module Api
  module V1
    class PricingRulesController < ApplicationController
      def index
        pricing_rules = PricingRule.all
        render json: pricing_rules, each_serializer: PricingRuleSerializer
      end

      def show
        pricing_rule = PricingRule.find(params[:id])
        render json: pricing_rule, serializer: PricingRuleSerializer
      end
    end
  end
end
```

### rails-solar/app/controllers/api/v1/pricings_controller.rb
```
module Api
  module V1
    class PricingsController < ApplicationController
      def index
        pricings = Pricing.all
        render json: pricings, each_serializer: PricingSerializer
      end

      def show
        pricing = Pricing.find(params[:id])
        render json: pricing, serializer: PricingSerializer
      end
    end
  end
end
```

### rails-solar/app/controllers/api/v1/products_controller.rb
```
module Api
  module V1
    class ProductsController < ApplicationController
      # GET /api/v1/products
      def index
        products = Product.includes(:categories, :feature_groups).all
        render json: products, each_serializer: ProductSerializer
      end

      # GET /api/v1/products/:id
      def show
        product = Product.find(params[:id])
        render json: product, serializer: ProductSerializer
      end
    end
  end
end
```

### rails-solar/app/controllers/api/v1/quotes_controller.rb
```
module Api
  module V1
    class QuotesController < ApplicationController
      def index
        quotes = Quote.all
        render json: quotes, each_serializer: QuoteSerializer
      end

      def show
        quote = Quote.find(params[:id])
        render json: quote, serializer: QuoteSerializer
      end
    end
  end
end
```

### rails-solar/app/controllers/api/v1/replies_controller.rb
```
module Api
  module V1
    class RepliesController < ApplicationController
      def index
        replies = Reply.all
        render json: replies, each_serializer: ReplySerializer
      end

      def show
        reply = Reply.find(params[:id])
        render json: reply, serializer: ReplySerializer
      end
    end
  end
end
```

### rails-solar/app/controllers/api/v1/reviews_controller.rb
```
module Api
  module V1
    class ReviewsController < ApplicationController
      # Ensures only authenticated users can create or list
      before_action :authenticate_user!

      # GET /api/v1/reviews
      # If admin, returns all reviews; otherwise, only the user's own reviews
      def index
        reviews = if current_user.super_admin? || current_user.company_admin?
                    Review.all
                  else
                    current_user.reviews
                  end

        render json: reviews, each_serializer: ReviewSerializer
      end

      # POST /api/v1/reviews
      def create
        review = current_user.reviews.build(review_params)
        if review.save
          render json: review, serializer: ReviewSerializer, status: :created
        else
          render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def review_params
        params.require(:review).permit(
          :company_id,
          :rating,
          :title,
          :content,
          :status
        )
      end
    end
  end
end
```

### rails-solar/app/controllers/api/v1/saas_leads_controller.rb
```
module Api
  module V1
    class SaasLeadsController < ApplicationController
      def index
        saas_leads = SaasLead.all
        render json: saas_leads, each_serializer: SaasLeadSerializer
      end

      def show
        saas_lead = SaasLead.find(params[:id])
        render json: saas_lead, serializer: SaasLeadSerializer
      end
    end
  end
end
```

### rails-solar/app/controllers/api/v1/saas_plans_controller.rb
```
module Api
  module V1
    class SaasPlansController < ApplicationController
      def index
        saas_plans = SaasPlan.all
        render json: saas_plans, each_serializer: SaasPlanSerializer
      end

      def show
        saas_plan = SaasPlan.find(params[:id])
        render json: saas_plan, serializer: SaasPlanSerializer
      end
    end
  end
end
```

### rails-solar/app/controllers/api/v1/saas_products_controller.rb
```
module Api
  module V1
    class SaasProductsController < ApplicationController
      def index
        saas_products = SaasProduct.all
        render json: saas_products, each_serializer: SaasProductSerializer
      end

      def show
        saas_product = SaasProduct.find(params[:id])
        render json: saas_product, serializer: SaasProductSerializer
      end
    end
  end
end
```

### rails-solar/app/controllers/api/v1/users_controller.rb
```
module Api
  module V1
    class UsersController < ApplicationController
      def index
        users = User.all
        render json: users, each_serializer: UserSerializer
      end

      def show
        user = User.find(params[:id])
        render json: user, serializer: UserSerializer
      end
    end
  end
end
```

### rails-solar/app/controllers/concerns/.keep
```

```

### rails-solar/app/controllers/users/confirmations_controller.rb
```
# frozen_string_literal: true

class Users::ConfirmationsController < Devise::ConfirmationsController
  # GET /resource/confirmation/new
  # def new
  #   super
  # end

  # POST /resource/confirmation
  # def create
  #   super
  # end

  # GET /resource/confirmation?confirmation_token=abcdef
  # def show
  #   super
  # end

  # protected

  # The path used after resending confirmation instructions.
  # def after_resending_confirmation_instructions_path_for(resource_name)
  #   super(resource_name)
  # end

  # The path used after confirmation.
  # def after_confirmation_path_for(resource_name, resource)
  #   super(resource_name, resource)
  # end
end
```

### rails-solar/app/controllers/users/omniauth_callbacks_controller.rb
```
# frozen_string_literal: true

class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  # You should configure your model like this:
  # devise :omniauthable, omniauth_providers: [:twitter]

  # You should also create an action method in this controller like this:
  # def twitter
  # end

  # More info at:
  # https://github.com/heartcombo/devise#omniauth

  # GET|POST /resource/auth/twitter
  # def passthru
  #   super
  # end

  # GET|POST /users/auth/twitter/callback
  # def failure
  #   super
  # end

  # protected

  # The path used when OmniAuth fails
  # def after_omniauth_failure_path_for(scope)
  #   super(scope)
  # end
end
```

### rails-solar/app/controllers/users/passwords_controller.rb
```
# frozen_string_literal: true

class Users::PasswordsController < Devise::PasswordsController
  # GET /resource/password/new
  # def new
  #   super
  # end

  # POST /resource/password
  # def create
  #   super
  # end

  # GET /resource/password/edit?reset_password_token=abcdef
  # def edit
  #   super
  # end

  # PUT /resource/password
  # def update
  #   super
  # end

  # protected

  # def after_resetting_password_path_for(resource)
  #   super(resource)
  # end

  # The path used after sending reset password instructions
  # def after_sending_reset_password_instructions_path_for(resource_name)
  #   super(resource_name)
  # end
end
```

### rails-solar/app/controllers/users/registrations_controller.rb
```
# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: [:create]
  before_action :configure_account_update_params, only: [:update]

  # GET /resource/sign_up
  # def new
  #   super
  # end

  # POST /resource
  # def create
  #   super
  # end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  # def update
  #   super
  # end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end

  # If you have extra params to permit, append them to the sanitizer.
  def configure_account_update_params
    devise_parameter_sanitizer.permit(:account_update, keys: [:name])
  end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end
```

### rails-solar/app/controllers/users/sessions_controller.rb
```
# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
```

### rails-solar/app/controllers/users/unlocks_controller.rb
```
# frozen_string_literal: true

class Users::UnlocksController < Devise::UnlocksController
  # GET /resource/unlock/new
  # def new
  #   super
  # end

  # POST /resource/unlock
  # def create
  #   super
  # end

  # GET /resource/unlock?unlock_token=abcdef
  # def show
  #   super
  # end

  # protected

  # The path used after sending unlock password instructions
  # def after_sending_unlock_instructions_path_for(resource)
  #   super(resource)
  # end

  # The path used after unlocking the resource
  # def after_unlock_path_for(resource)
  #   super(resource)
  # end
end
```

### rails-solar/app/controllers/application_controller.rb
```
class ApplicationController < ActionController::Base
  before_action :set_notifications, if: :current_user

  private

  def set_notifications
    notifications = Noticed::Notification.where(recipient: current_user).newest_first.limit(9)
    @unread = current_user.notifications.unread
    @read = current_user.notifications.read
  end

  def after_sign_in_path_for(resource)
    if resource.is_a?(AdminUser)
      admin_dashboard_path
    else
      super
    end
  end
end
```

### rails-solar/app/controllers/comments_controller.rb
```
class CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_post

  def create
    @comment = @post.comments.new(comment_params)
    @comment.user = current_user

    if curse_word_found?(@comment.body.to_plain_text)
      flash[:alert] = 'Your comment contains inappropriate language and cannot be saved.'
      redirect_to post_path(@post)
    elsif @comment.save
      flash[:notice] = 'Comment has been created.'
      redirect_to post_path(@post)
    else
      flash[:alert] = 'Comment could not be created.'
      redirect_to post_path(@post)
    end
  end

  def destroy
    @comment = @post.comments.find(params[:id])
    @comment.destroy
    redirect_to post_path(@post)
  end

  def update
    @comment = @post.comments.find(params[:id])

    respond_to do |format|
      if @comment.update(comment_params)
        format.html { redirect_to post_url(@post), notice: 'Comment has been updated!' }
      else
        format.html { redirect_to post_url(@post), alert: 'Comment was not updated!' }
      end
    end
  end

  def no_curse_words
    plain_text_body = body.to_plain_text if body.present?
    return unless plain_text_body.present? && curse_word_found?(plain_text_body)

    errors.add(:base, 'Your comment contains inappropriate language and cannot be saved.')
  end

  def curse_word_found?(text)
    CURSE_WORDS.any? { |word| text.match?(Regexp.new(word, Regexp::IGNORECASE)) }
  end

  private

  def set_post
    @post = Post.find(params[:post_id])
  end

  def comment_params
    params.require(:comment).permit(:body)
  end
end
```

### rails-solar/app/controllers/pages_controller.rb
```
class PagesController < ApplicationController
  def home
  end

  def about
  end
end
```

### rails-solar/app/controllers/posts_controller.rb
```
class PostsController < ApplicationController
  before_action :set_post, only: %i[show edit update destroy]
  before_action :authenticate_user!, except: %i[show index]

  # GET /posts or /posts.json
  def index
    # @posts = Post.all.order(created_at: :desc)
    @posts = Post.where.not(published_at: nil).order(published_at: :desc)
  end

  # GET /posts/1 or /posts/1.json
  def show
    @post.update(views: @post.views + 1)
    @comments = @post.comments.order(created_at: :desc)
    # views = @post.views +1
    # @post.views = views
    # @post.save
    mark_notifications_as_read
  end

  # GET /posts/new
  def new
    @post = Post.new
  end

  # GET /posts/1/edit
  def edit; end

  # POST /posts or /posts.json
  def create
    @post = Post.new(post_params)
    @post.user = current_user

    respond_to do |format|
      if @post.save
        format.html { redirect_to post_url(@post), notice: 'Post was successfully created.' }
        format.json { render :show, status: :created, location: @post }
      else
        error_message = @post.errors.full_messages.join('. ')
        if @post.errors.any? { |error| error.attribute == 'title' }
          error_message += '. Title contains inappropriate language'
        end
        if @post.errors.any? { |error| error.attribute == 'body' }
          error_message += '. Body contains inappropriate language'
        end
        format.html { redirect_to new_post_url, alert: error_message }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /posts/1 or /posts/1.json
  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to post_url(@post), notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1 or /posts/1.json
  def destroy
    @post.comments.destroy_all
    @post.delete

    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def post_params
    params.require(:post).permit(:title, :body)
  end

  def mark_notifications_as_read
    return unless current_user

    notifications_to_mark_as_read = @post.notifications.where(recipient: current_user)
    notifications_to_mark_as_read.update_all(read_at: Time.zone.now)
  end
end
```

### rails-solar/app/controllers/users_controller.rb
```
class UsersController < ApplicationController
  before_action :set_user
  def profile
    @user.update(views: @user.views + 1)
  end

  private

  def set_user
    @user = User.find(params[:id])
  end
end
```

### rails-solar/app/helpers/application_helper.rb
```
module ApplicationHelper
end
```

### rails-solar/app/helpers/comments_helper.rb
```
module CommentsHelper
end
```

### rails-solar/app/helpers/pages_helper.rb
```
module PagesHelper
end
```

### rails-solar/app/helpers/posts_helper.rb
```
module PostsHelper
end
```

### rails-solar/app/helpers/users_helper.rb
```
module UsersHelper
end
```

### rails-solar/app/javascript/controllers/application.js
```
import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
```

### rails-solar/app/javascript/controllers/comments_controller.js
```
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  initialize() {}
  connect() {}
  toggleForm(event) {
    console.log("I clicked the edit button.");
    event.preventDefault();
    event.stopPropagation();
    const formID = event.params["form"];
    const commentBodyID = event.params["body"];
    const editButtonID = event.params["edit"];

    const form = document.getElementById(formID);
    const commentBody = document.getElementById(commentBodyID);
    const editButton = document.getElementById(editButtonID);

    form.classList.toggle("d-none");
    form.classList.toggle("mt-5");
    commentBody.classList.toggle("d-none");
    this.toggleEditButton(editButton);
  }

  toggleEditButton(editButton) {
    if (editButton.innerText === "Edit") {
      editButton.innerText = "Cancel";
      this.toggleEditButtonClass(editButton);
    } else {
      editButton.innerText = "Edit";
      this.toggleEditButtonClass(editButton);
    }
  }

  toggleEditButtonClass(editButton) {
    editButton.classList.toggle("btn-secondary");
    editButton.classList.toggle("btn-warning");
  }
}
```

### rails-solar/app/javascript/controllers/hello_controller.js
```
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!"
  }
}
```

### rails-solar/app/javascript/controllers/index.js
```
// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)
```

### rails-solar/app/javascript/application.js
```
// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "trix"
import "@rails/actiontext"
```

### rails-solar/app/jobs/application_job.rb
```
class ApplicationJob < ActiveJob::Base
  # Automatically retry jobs that encountered a deadlock
  # retry_on ActiveRecord::Deadlocked

  # Most jobs are safe to ignore if the underlying records are no longer available
  # discard_on ActiveJob::DeserializationError
end
```

### rails-solar/app/mailers/application_mailer.rb
```
class ApplicationMailer < ActionMailer::Base
  default from: "from@example.com"
  layout "mailer"
end
```

### rails-solar/app/models/concerns/.keep
```

```

### rails-solar/app/models/concerns/auditable.rb
```
module Auditable
  extend ActiveSupport::Concern

  included do
    before_save :log_changes
  end

  def log_changes
    if self.changed?
      AuditLog.create!(
        auditable_type: self.class.name,
        auditable_id: self.id,
        action: self.new_record? ? 'create' : 'update',
        audited_changes: self.changes.transform_values { |v| [v[0].to_s, v[1].to_s] }.to_json
      ).tap do |log|
        log.user_id = Current.user.id if defined?(Current) && Current.user
      end
    end
  end
end
```

### rails-solar/app/models/concerns/profanity_filter.rb
```
module ProfanityFilter
  extend ActiveSupport::Concern

  CURSE_WORDS = %w[badword1 badword2].freeze # Define your list of curse words here

  included do
    validate :no_curse_words
  end

  private

  def no_curse_words
    text_to_check = ""
    if self.respond_to?(:body) && body.present?
      text_to_check += body.to_s
    end
    if self.respond_to?(:title) && title.present?
      text_to_check += " " + title.to_s
    end

    if curse_word_found?(text_to_check)
      errors.add(:base, 'Contains inappropriate language')
    end
  end

  def curse_word_found?(text)
    CURSE_WORDS.any? { |word| text.match?(Regexp.new("\\b#{Regexp.escape(word)}\\b", Regexp::IGNORECASE)) }
  end
end
```

### rails-solar/app/models/admin_user.rb
```
class AdminUser < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, 
         :recoverable, :rememberable, :validatable

  enum role: { admin: 0, super_admin: 1 }

  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :role, presence: true
end
```

### rails-solar/app/models/application_record.rb
```
class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  include Auditable # Example of including a concern

  # Common utility method example
  def self.human_attribute_name(attribute, options = {})
    super
  end

  def self.ransackable_attributes(_auth_object = nil)
    %w[id email created_at updated_at]
  end
end
```

### rails-solar/app/models/assess_campaign.rb
```
class AssessCampaign < ApplicationRecord
  belongs_to :product
  belongs_to :owner, class_name: 'User'

  enum status: { draft: 0, active: 1, completed: 2, cancelled: 3 }

  validates :title, :code, :goal, :starts_at, :ends_at, :status, presence: true
  validates :goal, numericality: { greater_than: 0 }
  validate :ends_at_after_starts_at

  scope :ongoing, -> { where('starts_at <= ? AND ends_at >= ?', Time.current, Time.current) }
  scope :completed, -> { where('ends_at < ?', Time.current) }

  def self.ransackable_attributes(auth_object = nil)
    %w[id title code goal achieved shares prize starts_at ends_at debutantes status created_at updated_at owner_id]
  end

  def self.ransackable_associations(auth_object = nil)
    %w[owner product]
  end

  private

  def ends_at_after_starts_at
    return if ends_at.blank? || starts_at.blank?
    if ends_at < starts_at
      errors.add(:ends_at, 'cannot be before starts_at')
    end
  end
end
```

### rails-solar/app/models/audit_log.rb
```
class AuditLog < ApplicationRecord
end
```

### rails-solar/app/models/category.rb
```
class Category < ApplicationRecord
  belongs_to :parent, class_name: 'Category', optional: true
  has_many   :children, class_name: 'Category', foreign_key: :parent_id, dependent: :nullify

  has_and_belongs_to_many :products
  has_one_attached :seo_image

  validates :name, presence: true
  validates :slug, presence: true, uniqueness: { scope: :parent_id, message: 'must be unique within its level' }
  before_validation :generate_slug, on: :create

  serialize :name_translations, JSON
  serialize :description_translations, JSON

  def self.ransackable_associations(auth_object = nil)
    %w[parent children products]
  end

  def self.ransackable_attributes(auth_object = nil)
    %w[id name slug parent_id active created_at updated_at]
  end

  def self.active_categories
    Rails.cache.fetch("active_categories", expires_in: 12.hours) do
      where(active: true).to_a
    end
  end

  private

  def generate_slug
    self.slug = name.parameterize if name.present? && slug.blank?
  end
end
```

### rails-solar/app/models/certification.rb
```
class Certification < ApplicationRecord
  belongs_to :company

  validates :name, :issued_by, :issued_at, :expires_at, presence: true
  validate :issued_at_before_expires_at

  # include Notifiable # Placeholder for a notification concern

  def self.ransackable_associations(auth_object = nil)
    ["company"]
  end

  def self.ransackable_attributes(auth_object = nil)
    authorizable_ransackable_attributes = %w[id company_id name issued_by issued_at expires_at created_at updated_at]
    super + authorizable_ransackable_attributes
  end

  private

  def issued_at_before_expires_at
    return if issued_at.blank? || expires_at.blank?

    if issued_at >= expires_at
      errors.add(:issued_at, "must be before expires_at")
    end
  end
end
```

### rails-solar/app/models/comment.rb
```
class Comment < ApplicationRecord
  include ProfanityFilter

  belongs_to :post
  belongs_to :user
  has_rich_text :body

  enum status: { pending: 0, approved: 1, rejected: 2 }

  after_create_commit :notify_recipient
  before_destroy :cleanup_notifications
  before_create :set_default_status

  has_noticed_notifications model_name: 'Noticed::Event'
  has_many :notification_mentions, as: :record, dependent: :destroy, class_name: 'Noticed::Event'

  validates :body, presence: true, length: { minimum: 5 }
  validate :no_curse_words

  def self.ransackable_attributes(_auth_object = nil)
    %w[user_id post_id status created_at updated_at] # Allow searching by user_id, post_id, and status
  end

  def self.ransackable_associations(_auth_object = nil)
    ["user", "post"] # Allow searching by user and post associations
  end

  private

  def notify_recipient
    CommentNotifier.with(record: self, post:).deliver_later(post.user)
  end

  def cleanup_notifications
    post.notifications.where(id: post.id).destroy_all
  end

  def set_default_status
    self.status ||= :pending
  end
end
```

### rails-solar/app/models/company.rb
```
class Company < ApplicationRecord
  has_one_attached :logo
  belongs_to :user
  has_many   :certifications, dependent: :destroy
  has_many   :reviews,        dependent: :destroy
  has_many   :quotes,         dependent: :destroy

  # include Geocodable # Placeholder for geocoding concern

  enum target_segment: { residential: 0, commercial: 1, industrial: 2, public_sector: 3 }

  validates :name, :description, :location, :target_segment, presence: true

  def self.ransackable_attributes(auth_object = nil)
    authorizable_ransackable_attributes = %w[id name description verified target_segment annual_energy_output installation_count user_id created_at updated_at]
    super + authorizable_ransackable_attributes
  end

  def self.ransackable_associations(auth_object = nil)
    ["user", "certifications", "reviews", "quotes"]
  end
end
```

### rails-solar/app/models/content.rb
```
class Content < ApplicationRecord
  # include Versionable # Placeholder for a versioning concern

  validates :title, :short_description, :format, :level, presence: true
  validates :format, inclusion: { in: %w[article video infographic podcast], message: "%<value>s is not a valid format" }
  validates :level, inclusion: { in: %w[beginner intermediate advanced], message: "%<value>s is not a valid level" }

  scope :published, -> { where(active: true) }

  def self.ransackable_associations(auth_object = nil)
    []
  end

  def self.ransackable_attributes(auth_object = nil)
    authorizable_ransackable_attributes = %w[id title short_description tags lp_url format level active created_at updated_at]
    super + authorizable_ransackable_attributes
  end
end
```

### rails-solar/app/models/discussion.rb
```
class Discussion < ApplicationRecord
  belongs_to :user
  belongs_to :product
  belongs_to :category

  enum status: { open: 0, closed: 1, archived: 2 }

  validates :subject, presence: true, length: { minimum: 5 }
  validates :body, presence: true, length: { minimum: 10 }
  validates :status, presence: true

  scope :recent, -> { order(created_at: :desc).limit(10) }

  def self.ransackable_associations(auth_object = nil)
    ["user", "product", "category"]
  end

  def self.ransackable_attributes(auth_object = nil)
    authorizable_ransackable_attributes = %w[id user_id product_id category_id subject body status created_at updated_at]
    super + authorizable_ransackable_attributes
  end
end
```

### rails-solar/app/models/feature.rb
```
class Feature < ApplicationRecord
  belongs_to :feature_group

  validates :name, presence: true, uniqueness: { scope: :feature_group_id }

  def self.ransackable_associations(auth_object = nil)
    ["feature_group"]
  end

  def self.ransackable_attributes(auth_object = nil)
    authorizable_ransackable_attributes = %w[id name feature_group_id created_at updated_at]
    super + authorizable_ransackable_attributes
  end
end
```

### rails-solar/app/models/feature_group.rb
```
class FeatureGroup < ApplicationRecord
  has_many :features, dependent: :destroy

  validates :name, presence: true, uniqueness: true

  def self.ransackable_associations(auth_object = nil)
    ["features"]
  end

  def self.ransackable_attributes(auth_object = nil)
    authorizable_ransackable_attributes = %w[id name created_at updated_at]
    super + authorizable_ransackable_attributes
  end
end
```

### rails-solar/app/models/lead.rb
```
class Lead < ApplicationRecord
  belongs_to :user
  belongs_to :product

  enum conversion_state: {
    new_lead:    0,
    contacted:   1,
    qualified:   2,
    unqualified: 3,
    converted:   4
  }

  validates :name, :email, :role, :conversion_state, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  scope :qualified, -> { where(conversion_state: :qualified) }

  # Exemplo de método de conversão
  def convert!
    transaction do
      # Exemplo: criar um registro relacionado ao converter o lead
      # Ajuste conforme sua lógica de negócio
      update!(conversion_state: :converted, sent_at: Time.current)
    end
  end

  def full_name
    name
  end

  # Permite buscas por essas associações no ActiveAdmin/Ransack
  def self.ransackable_associations(_auth_object = nil)
    %w[user product]
  end

  # Permite buscas por esses atributos no ActiveAdmin/Ransack
  def self.ransackable_attributes(_auth_object = nil)
    super + %w[
      id user_id product_id name email role company_size desired_category
      funnel_stage score sent_at created_at updated_at conversion_state
    ]
  end
end
```

### rails-solar/app/models/marketing_campaign.rb
```
class MarketingCampaign < ApplicationRecord
  enum channel: { email: 0, sms: 1, push: 2 }

  validates :name, :channel, :template, :scheduled_at, presence: true
  validate :scheduled_at_in_future

  scope :upcoming, -> { where('scheduled_at > ?', Time.current) }
  scope :past, -> { where('scheduled_at <= ?', Time.current) }

  def self.ransackable_attributes(auth_object = nil)
    authorizable_ransackable_attributes = %w[id name channel template scheduled_at created_at updated_at]
    super + authorizable_ransackable_attributes
  end

  def self.ransackable_associations(auth_object = nil)
    []
  end

  private

  def scheduled_at_in_future
    return if scheduled_at.blank?

    if scheduled_at <= Time.current
      errors.add(:scheduled_at, "must be in the future")
    end
  end
end
```

### rails-solar/app/models/post.rb
```
class Post < ApplicationRecord
  include ProfanityFilter

  validates :title, presence: true, length: { minimum: 5, maximum: 50 }
  validates :body, presence: true, length: { minimum: 10, maximum: 1000 }
  belongs_to :user # This is the author
  has_many :comments, dependent: :destroy
  has_many :notifications, through: :user, dependent: :destroy
  has_many :notification_mentions, through: :user, dependent: :destroy
  has_noticed_notifications model_name: 'Noticed::Notification'
  validate :no_curse_words

  scope :published, -> { where.not(published_at: nil) }
  scope :draft, -> { where(published_at: nil) }

  def self.ransackable_attributes(_auth_object = nil)
    %w[title body user_id published_at] # Allow searching by title, body, user_id and published_at
  end

  def self.ransackable_associations(_auth_object = nil)
    ["user", "comments"]
  end
end
```

### rails-solar/app/models/pricing.rb
```
class Pricing < ApplicationRecord
  belongs_to :product

  validates :title, :currency, :value, :charge_type, :frequency, presence: true
  validates :value, numericality: { greater_than_or_equal_to: 0.01 }

  scope :active, -> { where(state: :active) } # Assuming a 'state' column for active/inactive
  scope :by_currency, ->(currency) { where(currency: currency) }

  def self.ransackable_attributes(auth_object = nil)
    authorizable_ransackable_attributes = %w[id product_id title currency value charge_type frequency payment_methods position state created_at updated_at]
    super + authorizable_ransackable_attributes
  end

  def self.ransackable_associations(auth_object = nil)
    ["product"]
  end
end
```

### rails-solar/app/models/pricing_rule.rb
```
class PricingRule < ApplicationRecord
  validates :name, :condition, :discount_pct, presence: true
  validates :discount_pct, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }
  validates :condition, format: { with: /\A[a-zA-Z0-9_\s\.\+\-\*\/\(\)\[\]\=\!\&\|\<\>\"\\]+\z/, message: "contains invalid characters or format" }

  def self.ransackable_attributes(auth_object = nil)
    authorizable_ransackable_attributes = %w[id name condition discount_pct created_at updated_at]
    super + authorizable_ransackable_attributes
  end

  def self.ransackable_associations(auth_object = nil)
    []
  end
end
```

### rails-solar/app/models/product.rb
```
class Product < ApplicationRecord
  has_many_attached :images
  has_and_belongs_to_many :categories
  has_many :feature_groups, dependent: :destroy

  validates :name, :status, :kind, presence: true
  validates :seo_url, uniqueness: true, allow_blank: true
  validates :seo_title, presence: true, length: { maximum: 60 }, allow_blank: true

  before_validation :generate_seo_url, on: :create

  serialize :name_translations, JSON
  serialize :description_translations, JSON

  def self.ransackable_attributes(auth_object = nil)
    authorizable_ransackable_attributes = %w[id name seo_url seo_title status kind premium_until source country created_at updated_at]
    super + authorizable_ransackable_attributes
  end

  def self.ransackable_associations(auth_object = nil)
    ["categories", "feature_groups"]
  end

  def self.active_products
    Rails.cache.fetch("active_products", expires_in: 12.hours) do
      where(status: :active).to_a # Assuming 'active' is a valid status for products
    end
  end

  private

  def generate_seo_url
    self.seo_url = name.parameterize if name.present? && seo_url.blank?
  end
end
```

### rails-solar/app/models/quote.rb
```
class Quote < ApplicationRecord
  belongs_to :company
  belongs_to :user, optional: true

  enum status: { pending: 0, responded: 1, closed: 2 }

  validates :name, :email, :phone, :message, presence: true

  def self.ransackable_attributes(auth_object = nil)
    authorizable_ransackable_attributes = %w[id name email phone message status estimated_kwh created_at updated_at]
    super + authorizable_ransackable_attributes
  end

  def self.ransackable_associations(auth_object = nil)
    ["company", "user"]
  end
end
```

### rails-solar/app/models/reply.rb
```
class Reply < ApplicationRecord
  belongs_to :user
  belongs_to :discussion

  enum status: { pending: 0, approved: 1, rejected: 2 }

  validates :body, presence: true, length: { minimum: 5 }

  # after_create :notify_discussion_author # Placeholder for notification callback

  def self.ransackable_associations(auth_object = nil)
    ["user", "discussion"]
  end

  def self.ransackable_attributes(auth_object = nil)
    authorizable_ransackable_attributes = %w[id user_id discussion_id body status created_at updated_at]
    super + authorizable_ransackable_attributes
  end

  # private

  # def notify_discussion_author
  #   # Logic to notify the discussion author about the new reply
  # end
end
```

### rails-solar/app/models/review.rb
```
class Review < ApplicationRecord
  belongs_to :user
  belongs_to :company

  enum status: { pending: 0, approved: 1, rejected: 2 }

  validates :rating, inclusion: { in: 1..5 }
  validates :title, :content, presence: true

  scope :top_rated, -> { where('rating >= ?', 4).order(rating: :desc) } # Example: top_rated are reviews with 4 or 5 stars

  # after_create :notify_company_about_review # Placeholder for notification callback

  def self.ransackable_attributes(auth_object = nil)
    authorizable_ransackable_attributes = %w[id rating title content status created_at updated_at user_id company_id]
    super + authorizable_ransackable_attributes
  end

  def self.ransackable_associations(auth_object = nil)
    ["user", "company"]
  end

  # private

  # def notify_company_about_review
  #   # Logic to notify the company about a new review
  # end
end
```

### rails-solar/app/models/saas_lead.rb
```
class SaasLead < ApplicationRecord
  self.table_name = 'saa_s_leads'
  belongs_to :user
  belongs_to :saas_product
  belongs_to :saas_plan, optional: true

  enum status: {
    new_lead:       0,
    contacted:      1,
    proposal_sent:  2,
    won:            3,
    lost:           4
  }

  validates :first_name, :last_name, :email, presence: true
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :phone, presence: true
  validates :status, presence: true
  validates :contacted_at, presence: true, if: -> { contacted? || qualified? || unqualified? || converted? }

  scope :recent_leads, -> { order(created_at: :desc).limit(10) }

  def self.ransackable_associations(auth_object = nil)
    ["user", "saas_product", "saas_plan"]
  end

  def self.ransackable_attributes(auth_object = nil)
    authorizable_ransackable_attributes = %w[id user_id saas_product_id company email phone status contacted_at created_at updated_at]
    super + authorizable_ransackable_attributes + %w[
      first_name last_name email phone_number preferred_contact_time contact_method
      company_name building_type roof_type available_roof_area address city state
      monthly_energy_consumption_kwh budget_range decision_timeline current_energy_provider
      score status pain_points competitor_considered lead_source utm_campaign utm_source utm_medium
      saas_plan_id b2b funnel_stage site_visit_scheduled site_visit_date converted_at
      proposal_sent_at follow_up_date created_at updated_at
    ]
  end
end
```

### rails-solar/app/models/saas_plan.rb
```
class SaasPlan < ApplicationRecord
  self.table_name = 'saa_s_plans'
  belongs_to :saas_product

  enum tier: { basic: 0, standard: 1, premium: 2 }

  validates :name, :price, :tier, presence: true
  validates :price, numericality: { greater_than_or_equal_to: 0.01 }
  validate :features_must_be_valid_json

  scope :by_tier, ->(tier) { where(tier: tier) }

  def self.ransackable_associations(auth_object = nil)
    ["saas_product"]
  end

  def self.ransackable_attributes(auth_object = nil)
    authorizable_ransackable_attributes = %w[id name saas_product_id tier features price active created_at updated_at]
    super + authorizable_ransackable_attributes
  end

  private

  def features_must_be_valid_json
    return if features.blank?

    begin
      JSON.parse(features)
    rescue JSON::ParserError
      errors.add(:features, "must be a valid JSON string")
    end
  end
end
```

### rails-solar/app/models/saas_product.rb
```
class SaasProduct < ApplicationRecord
  self.table_name = 'saa_s_products'
  has_many :saas_plans
  has_many :saas_leads

  validates :name, :description, :price, :billing_cycle, presence: true
  validates :price, numericality: { greater_than_or_equal_to: 0 }
  validates :billing_cycle, inclusion: { in: %w[monthly annually one_time], message: "%<value>s is not a valid billing cycle" }

  scope :active_products, -> { where(active: true) }

  def self.ransackable_associations(auth_object = nil)
    ["saas_plans", "saas_leads"]
  end

  def self.ransackable_attributes(auth_object = nil)
    %w[id name description price billing_cycle features active status created_at updated_at]
  end
end
```

### rails-solar/app/models/user.rb
```
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  enum role: { admin: 0, editor: 1 }

  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_many :quotes, dependent: :destroy
  has_many :leads, dependent: :destroy
  has_many :saas_leads, dependent: :destroy

  # By implementing this feature, users will be able to conveniently
  # associate and access all notifications directed towards them.
  has_many :notifications, as: :recipient, dependent: :destroy, class_name: 'Noticed::Notification'
  # Whenever you have noticed events that have the record pointing to the user,
  # such as when a new user joins a team or any similar occurrences,
  # It's important to ensure that notifications mentioning us are accessible.
  has_many :notification_mentions, as: :record, dependent: :destroy, class_name: 'Noticed::Event'

  validates :email, uniqueness: { case_sensitive: false }
  validates :role, presence: true

  def self.ransackable_attributes(_auth_object = nil)
    %w[name email role created_at updated_at] # Allow searching by name, email, and role
  end

  def self.ransackable_associations(_auth_object = nil)
    ["posts", "comments", "reviews", "quotes", "leads", "saas_leads"]
  end
end
```

### rails-solar/app/notifiers/application_notifier.rb
```
class ApplicationNotifier < Noticed::Event
end
```

### rails-solar/app/notifiers/comment_notifier.rb
```
# To deliver this notification:
#
# CommentNotifier.with(record: @post, message: "New post").deliver(User.all)

class CommentNotifier < ApplicationNotifier
  # Add your delivery methods
  #
  # deliver_by :email do |config|
  #   config.mailer = "UserMailer"
  #   config.method = "new_post"
  # end
  #
  # bulk_deliver_by :slack do |config|
  #   config.url = -> { Rails.application.credentials.slack_webhook_url }
  # end
  #
  # deliver_by :custom do |config|
  #   config.class = "MyDeliveryMethod"
  # end

  # Add required params
  #
  # required_param :message
end
```

### rails-solar/app/serializers/assess_campaign_serializer.rb
```
class AssessCampaignSerializer < ActiveModel::Serializer
  attributes :id,
             :product_id,
             :title,
             :code,
             :owner_id,
             :goal,
             :achieved,
             :shares,
             :prize,
             :debutantes,
             :starts_at,
             :ends_at,
             :created_at,
             :updated_at

  belongs_to :product
  belongs_to :owner, serializer: UserSerializer
end
```

### rails-solar/app/serializers/category_serializer.rb
```
class CategorySerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :slug,
             :description,
             :parent_id,
             :active,
             :depth,
             :created_at,
             :updated_at

  belongs_to :parent, if: -> { object.parent.present? }
  has_many :children
end
```

### rails-solar/app/serializers/certification_serializer.rb
```
class CertificationSerializer < ActiveModel::Serializer
  attributes :id,
             :company_id,
             :name,
             :issued_by,
             :issued_at,
             :expires_at,
             :created_at,
             :updated_at

  belongs_to :company
end
```

### rails-solar/app/serializers/company_serializer.rb
```
class CompanySerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :description,
             :verified,
             :target_segment,
             :annual_energy_output,
             :installation_count,
             :user_id,
             :created_at,
             :updated_at

  belongs_to :user
  has_many   :certifications
  has_many   :reviews
end
```

### rails-solar/app/serializers/content_serializer.rb
```
class ContentSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :short_description,
             :tags,
             :lp_url,
             :format,
             :level,
             :active,
             :created_at,
             :updated_at
end
```

### rails-solar/app/serializers/discussion_serializer.rb
```
class DiscussionSerializer < ActiveModel::Serializer
  attributes :id,
             :user_id,
             :product_id,
             :category_id,
             :subject,
             :body,
             :status,
             :created_at,
             :updated_at

  belongs_to :user
  belongs_to :product
  belongs_to :category
end
```

### rails-solar/app/serializers/feature_group_serializer.rb
```
class FeatureGroupSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :created_at,
             :updated_at

  has_many :features
end
```

### rails-solar/app/serializers/feature_serializer.rb
```
class FeatureSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :feature_group_id,
             :created_at,
             :updated_at

  belongs_to :feature_group
end
```

### rails-solar/app/serializers/lead_serializer.rb
```
class LeadSerializer < ActiveModel::Serializer
  attributes :id,
             :user_id,
             :product_id,
             :name,
             :email,
             :role,
             :company_size,
             :desired_category,
             :funnel_stage,
             :score,
             :sent_at,
             :created_at,
             :updated_at

  belongs_to :user
  belongs_to :product
end
```

### rails-solar/app/serializers/marketing_campaign_serializer.rb
```
class MarketingCampaignSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :channel,
             :template,
             :scheduled_at,
             :created_at,
             :updated_at
end
```

### rails-solar/app/serializers/pricing_rule_serializer.rb
```
# app/serializers/pricing_rule_serializer.rb
class PricingRuleSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :condition,
             :discount_pct,
             :created_at,
             :updated_at
end
```

### rails-solar/app/serializers/pricing_serializer.rb
```
class PricingSerializer < ActiveModel::Serializer
  attributes :id,
             :product_id,
             :title,
             :currency,
             :value,
             :charge_type,
             :frequency,
             :payment_methods,
             :position,
             :state,
             :created_at,
             :updated_at

  belongs_to :product
end
```

### rails-solar/app/serializers/product_serializer.rb
```
class ProductSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :seo_url,
             :seo_title,
             :status,
             :kind,
             :premium_until,
             :source,
             :country,
             :created_at,
             :updated_at

  has_many :categories
  has_many :feature_groups
end
```

### rails-solar/app/serializers/quote_serializer.rb
```
class QuoteSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :email,
             :phone,
             :message,
             :status,
             :estimated_kwh,
             :created_at,
             :updated_at

  belongs_to :company
  belongs_to :user, if: -> { object.user.present? }
end
```

### rails-solar/app/serializers/reply_serializer.rb
```
class ReplySerializer < ActiveModel::Serializer
  attributes :id,
             :user_id,
             :discussion_id,
             :body,
             :status,
             :created_at,
             :updated_at

  belongs_to :user
  belongs_to :discussion
end
```

### rails-solar/app/serializers/review_serializer.rb
```
class ReviewSerializer < ActiveModel::Serializer
  attributes :id,
             :rating,
             :title,
             :content,
             :status,
             :created_at,
             :updated_at

  belongs_to :company
  belongs_to :user
end
```

### rails-solar/app/serializers/saas_lead_serializer.rb
```
class SaasLeadSerializer < ActiveModel::Serializer
  attributes :id,
             :user_id,
             :saas_product_id,
             :company,
             :email,
             :phone,
             :status,
             :contacted_at,
             :created_at,
             :updated_at

  belongs_to :user
  belongs_to :saas_product
end
```

### rails-solar/app/serializers/saas_plan_serializer.rb
```
class SaasPlanSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :saas_product_id,
             :tier,
             :features,
             :price,
             :active,
             :created_at,
             :updated_at

  belongs_to :saas_product
end
```

### rails-solar/app/serializers/saas_product_serializer.rb
```
ActiveAdmin.register SaaSProduct do
  # ...
end

class SaaSProduct < ApplicationRecord
  class SaasProductSerializer < ActiveModel::Serializer
    attributes :id,
               :name,
               :description,
               :price,
               :billing_cycle,
               :features,
               :active,
               :created_at,
               :updated_at

    has_many :saas_plans
    has_many :saas_leads
  end
end
```

### rails-solar/app/serializers/user_serializer.rb
```
class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :role, :phone, :banned_until, :is_super_admin, :created_at, :updated_at
end
```

### rails-solar/app/views/active_storage/blobs/_blob.html.erb
```
<figure class="attachment attachment--<%= blob.representable? ? "preview" : "file" %> attachment--<%= blob.filename.extension %>">
  <% if blob.representable? %>
    <%= image_tag blob.representation(resize_to_limit: local_assigns[:in_gallery] ? [ 800, 600 ] : [ 1024, 768 ]) %>
  <% end %>

  <figcaption class="attachment__caption">
    <% if caption = blob.try(:caption) %>
      <%= caption %>
    <% else %>
      <span class="attachment__name"><%= blob.filename %></span>
      <span class="attachment__size"><%= number_to_human_size blob.byte_size %></span>
    <% end %>
  </figcaption>
</figure>
```

### rails-solar/app/views/comments/_comment.html.erb
```
<div class="comment-<%= comment.id %> container"
    style="border: 1px solid black; padding: 1em; margin: 1em;">
  <%= comment.user.email %><br />
  <% if (comment.updated_at - comment.created_at ) > 1 %>
    <span>Edited <%= time_ago_in_words(comment.updated_at) %> ago</span>
  <% else %>
    <span>Posted <%= time_ago_in_words(comment.created_at) %> ago</span>
  <% end %>
  <% if current_user == comment.user %>
    <div class="btn-group float-end">
      <%= link_to "Edit", nil, remote: true, class: "btn btn-warning", 
      data: {
        controller: "comments", 
        action: "comments#toggleForm", 
        comments_form_param: "edit-form-#{comment.id}", 
        comments_body_param: "comment-body-#{comment.id}",
        comments_edit_param: "edit-button-#{comment.id}"},
        id: "edit-button-#{comment.id}" %>
      <%= button_to "Delete", [post, comment], class:"btn btn-danger", method: :delete %>
    </div>
    <div id="edit-form-<%= comment.id %>" class="d-none" >
      <%= render 'comments/form', post: @post, comment: comment, submit_label: "Update" %>
    </div>
  <% end %>
  <hr />
  <div id="comment-body-<%= comment.id %>">
    <%= comment.body %>
  </div>
</div>
```

### rails-solar/app/views/comments/_form.html.erb
```
<%= form_with(model: [post, comment]) do |f| %>
  <div class="form-control">
    <%= f.rich_text_area :body %>
    <%= f.submit submit_label, class: "btn btn-primary mt-1" %>
  </div>
<% end %>
```

### rails-solar/app/views/devise/confirmations/new.html.erb
```
<h2>Resend confirmation instructions</h2>

<%= form_for(resource, as: resource_name, url: confirmation_path(resource_name), html: { method: :post }) do |f| %>
  <%= render "devise/shared/error_messages", resource: resource %>

  <div class="field">
    <%= f.label :email %><br />
    <%= f.email_field :email, autofocus: true, autocomplete: "email", value: (resource.pending_reconfirmation? ? resource.unconfirmed_email : resource.email) %>
  </div>

  <div class="actions">
    <%= f.submit "Resend confirmation instructions" %>
  </div>
<% end %>

<%= render "devise/shared/links" %>
```

### rails-solar/app/views/devise/mailer/confirmation_instructions.html.erb
```
<p>Welcome <%= @email %>!</p>

<p>You can confirm your account email through the link below:</p>

<p><%= link_to 'Confirm my account', confirmation_url(@resource, confirmation_token: @token) %></p>
```

### rails-solar/app/views/devise/mailer/email_changed.html.erb
```
<p>Hello <%= @email %>!</p>

<% if @resource.try(:unconfirmed_email?) %>
  <p>We're contacting you to notify you that your email is being changed to <%= @resource.unconfirmed_email %>.</p>
<% else %>
  <p>We're contacting you to notify you that your email has been changed to <%= @resource.email %>.</p>
<% end %>
```

### rails-solar/app/views/devise/mailer/password_change.html.erb
```
<p>Hello <%= @resource.email %>!</p>

<p>We're contacting you to notify you that your password has been changed.</p>
```

### rails-solar/app/views/devise/mailer/reset_password_instructions.html.erb
```
<p>Hello <%= @resource.email %>!</p>

<p>Someone has requested a link to change your password. You can do this through the link below.</p>

<p><%= link_to 'Change my password', edit_password_url(@resource, reset_password_token: @token) %></p>

<p>If you didn't request this, please ignore this email.</p>
<p>Your password won't change until you access the link above and create a new one.</p>
```

### rails-solar/app/views/devise/mailer/unlock_instructions.html.erb
```
<p>Hello <%= @resource.email %>!</p>

<p>Your account has been locked due to an excessive number of unsuccessful sign in attempts.</p>

<p>Click the link below to unlock your account:</p>

<p><%= link_to 'Unlock my account', unlock_url(@resource, unlock_token: @token) %></p>
```

### rails-solar/app/views/devise/passwords/edit.html.erb
```
<h2>Change your password</h2>

<%= form_for(resource, as: resource_name, url: password_path(resource_name), html: { method: :put }) do |f| %>
  <%= render "devise/shared/error_messages", resource: resource %>
  <%= f.hidden_field :reset_password_token %>

  <div class="field">
    <%= f.label :password, "New password" %><br />
    <% if @minimum_password_length %>
      <em>(<%= @minimum_password_length %> characters minimum)</em><br />
    <% end %>
    <%= f.password_field :password, autofocus: true, autocomplete: "new-password" %>
  </div>

  <div class="field">
    <%= f.label :password_confirmation, "Confirm new password" %><br />
    <%= f.password_field :password_confirmation, autocomplete: "new-password" %>
  </div>

  <div class="actions">
    <%= f.submit "Change my password" %>
  </div>
<% end %>

<%= render "devise/shared/links" %>
```

### rails-solar/app/views/devise/passwords/new.html.erb
```
<h2>Forgot your password?</h2>

<%= form_for(resource, as: resource_name, url: password_path(resource_name), html: { method: :post }) do |f| %>
  <%= render "devise/shared/error_messages", resource: resource %>

  <div class="field">
    <%= f.label :email %><br />
    <%= f.email_field :email, autofocus: true, autocomplete: "email" %>
  </div>

  <div class="actions">
    <%= f.submit "Send me reset password instructions" %>
  </div>
<% end %>

<%= render "devise/shared/links" %>
```

### rails-solar/app/views/devise/registrations/edit.html.erb
```
<h2>Edit <%= resource_name.to_s.humanize %></h2>
<%= form_for(resource, as: resource_name, url: registration_path(resource_name), html: { method: :put }) do |f| %>
  <%= render "devise/shared/error_messages", resource: resource %>
  <div class="field">
    <%= f.label :email %><br />
    <%= f.email_field :email, autofocus: true, autocomplete: "email" %>
  </div>
  <div class="field">
    <%= f.label :name %><br />
    <%= f.text_field :name %>
  </div>
  <% if devise_mapping.confirmable? && resource.pending_reconfirmation? %>
    <div>Currently waiting confirmation for: <%= resource.unconfirmed_email %></div>
  <% end %>
  <div class="field">
    <%= f.label :password %> <i>(leave blank if you don't want to change it)</i><br />
    <%= f.password_field :password, autocomplete: "new-password" %>
    <% if @minimum_password_length %>
      <br />
      <em><%= @minimum_password_length %> characters minimum</em>
    <% end %>
  </div>
  <div class="field">
    <%= f.label :password_confirmation %><br />
    <%= f.password_field :password_confirmation, autocomplete: "new-password" %>
  </div>
  <div class="field">
    <%= f.label :current_password %> <i>(we need your current password to confirm your changes)</i><br />
    <%= f.password_field :current_password, autocomplete: "current-password" %>
  </div>
  <div class="actions">
    <%= f.submit "Update" %>
  </div>
<% end %>
<h3>Cancel my account</h3>
<div>Unhappy? <%= button_to "Cancel my account", registration_path(resource_name), data: { confirm: "Are you sure?", turbo_confirm: "Are you sure?" }, method: :delete %></div>
<%= link_to "Back", :back %>
```

### rails-solar/app/views/devise/registrations/new.html.erb
```
<h2>Sign up</h2>
<%= form_for(resource, as: resource_name, url: registration_path(resource_name)) do |f| %>
  <%= render "devise/shared/error_messages", resource: resource %>
  <div class="field">
    <%= f.label :email %><br />
    <%= f.email_field :email, autofocus: true, autocomplete: "email" %>
  </div>
  <div class="field">
    <%= f.label :name %><br />
    <%= f.text_field :name %>
  </div>
  <div class="field">
    <%= f.label :password %>
    <% if @minimum_password_length %>
      <em>(<%= @minimum_password_length %> characters minimum)</em>
    <% end %><br />
    <%= f.password_field :password, autocomplete: "new-password" %>
  </div>
  <div class="field">
    <%= f.label :password_confirmation %><br />
    <%= f.password_field :password_confirmation, autocomplete: "new-password" %>
  </div>
  <div class="actions">
    <%= f.submit "Sign up" %>
  </div>
<% end %>
<%= render "devise/shared/links" %>
```

### rails-solar/app/views/devise/sessions/new.html.erb
```
<h2>Log in</h2>

<%= form_for(resource, as: resource_name, url: session_path(resource_name)) do |f| %>
  <div class="field">
    <%= f.label :email %><br />
    <%= f.email_field :email, autofocus: true, autocomplete: "email" %>
  </div>

  <div class="field">
    <%= f.label :password %><br />
    <%= f.password_field :password, autocomplete: "current-password" %>
  </div>

  <% if devise_mapping.rememberable? %>
    <div class="field">
      <%= f.check_box :remember_me %>
      <%= f.label :remember_me %>
    </div>
  <% end %>

  <div class="actions">
    <%= f.submit "Log in" %>
  </div>
<% end %>

<%= render "devise/shared/links" %>
```

### rails-solar/app/views/devise/shared/_error_messages.html.erb
```
<% if resource.errors.any? %>
  <div id="error_explanation" data-turbo-cache="false">
    <h2>
      <%= I18n.t("errors.messages.not_saved",
                 count: resource.errors.count,
                 resource: resource.class.model_name.human.downcase)
       %>
    </h2>
    <ul>
      <% resource.errors.full_messages.each do |message| %>
        <li><%= message %></li>
      <% end %>
    </ul>
  </div>
<% end %>
```

### rails-solar/app/views/devise/shared/_links.html.erb
```
<%- if controller_name != 'sessions' %>
  <%= link_to "Log in", new_session_path(resource_name) %><br />
<% end %>

<%- if devise_mapping.registerable? && controller_name != 'registrations' %>
  <%= link_to "Sign up", new_registration_path(resource_name) %><br />
<% end %>

<%- if devise_mapping.recoverable? && controller_name != 'passwords' && controller_name != 'registrations' %>
  <%= link_to "Forgot your password?", new_password_path(resource_name) %><br />
<% end %>

<%- if devise_mapping.confirmable? && controller_name != 'confirmations' %>
  <%= link_to "Didn't receive confirmation instructions?", new_confirmation_path(resource_name) %><br />
<% end %>

<%- if devise_mapping.lockable? && resource_class.unlock_strategy_enabled?(:email) && controller_name != 'unlocks' %>
  <%= link_to "Didn't receive unlock instructions?", new_unlock_path(resource_name) %><br />
<% end %>

<%- if devise_mapping.omniauthable? %>
  <%- resource_class.omniauth_providers.each do |provider| %>
    <%= button_to "Sign in with #{OmniAuth::Utils.camelize(provider)}", omniauth_authorize_path(resource_name, provider), data: { turbo: false } %><br />
  <% end %>
<% end %>
```

### rails-solar/app/views/devise/unlocks/new.html.erb
```
<h2>Resend unlock instructions</h2>

<%= form_for(resource, as: resource_name, url: unlock_path(resource_name), html: { method: :post }) do |f| %>
  <%= render "devise/shared/error_messages", resource: resource %>

  <div class="field">
    <%= f.label :email %><br />
    <%= f.email_field :email, autofocus: true, autocomplete: "email" %>
  </div>

  <div class="actions">
    <%= f.submit "Resend unlock instructions" %>
  </div>
<% end %>

<%= render "devise/shared/links" %>
```

### rails-solar/app/views/layouts/action_text/contents/_content.html.erb
```
<div class="trix-content">
  <%= yield -%>
</div>
```

### rails-solar/app/views/layouts/_messages.html.erb
```
<% if notice %>
  <div class="alert alert-success" >
    <button type="button" class="btn-close float-end" data-bs-dismiss="alert" aria-label="Close"></button>
    <%# <button type="button" class="close" data-dismiss="alert" aria-label="Close"> %>
    <span aria-hidden="true">&times;</span>
  </button>
  <%= notice %>
</div>
<% end %>
<% if alert %>
  <div class="alert alert-danger">
    <button type="button" class="btn-close float-end" data-bs-dismiss="alert" aria-label="Close"></button>
    <%# <button type="button" class="close" data-dismiss="alert" aria-label="Close"> %>
    <span aria-hidden="true">&times;</span>
  </button>
  <%= alert %>
</div>
<% end %>
```

### rails-solar/app/views/layouts/_navbar.html.erb
```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/home">Rails Blog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <%# <a class="nav-link active" aria-current="page" href="#">Home</a> %>
          <%= link_to "Home", root_path, class: 'nav-link' %>
        </li>
        <li class="nav-item">
          <%= link_to "Blog", posts_path, class: 'nav-link' %>
        </li>
        <li class="nav-item">
          <%= link_to "About", about_path, class: 'nav-link' %>
        </li>
      </ul>
      <ul class="navbar-nav">
        <%= render 'layouts/notifications' %>
        <%= render 'user/session_manager' %>
      </ul>
    </div>
  </div>
</nav>
```

### rails-solar/app/views/layouts/_notification.html.erb
```
<li class="dropdown-item">
  <li>
    <%= link_to notification.event.message, notification.event.url %>
  </li>
</li>
```

### rails-solar/app/views/layouts/_notifications.html.erb
```
<% if current_user %>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="badge rounded-pill bg-secondary">
        <%= @unread.count >= 9 ? "9+" : @unread.count %> <i class="bi bi-bell-fill"></i>
      </span>
    </a>
    <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDropdown">
      <% @unread.each do |notification| %>
        <%= render 'layouts/notification', notification: notification %>
      <% end %>
      <% if @read.count > 0 && @unread.count > 0 %>
        <li>
          <hr class="dropdown-divider">
        </li>
      <% elsif @read.count + @unread.count == 0 %>
        <li class="dropdown-item">
          No notifications yet.
        </li>
      <% end %>
      <% @read.each do |notification| %>
        <%= render 'layouts/notification', notification: notification %>
      <% end %>
    </ul>
  </li>
<% end %>
```

### rails-solar/app/views/layouts/application.html.erb
```
<!DOCTYPE html>
<html>
  <head>
    <title>RailsBlogDemo</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <%= stylesheet_link_tag "application", "data-turbo-track": "reload" %>
    <%= javascript_importmap_tags %>
  </head>
  <body>
    <header>
      <%= render 'layouts/navbar' %>
    </header>
    <main>
      <div class="container">
        <%= render 'layouts/messages'%>
        <%= yield %>
      </div>
    </main>
  </body>
</html>
```

### rails-solar/app/views/layouts/mailer.html.erb
```
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <style>
      /* Email styles need to be inline */
    </style>
  </head>

  <body>
    <%= yield %>
  </body>
</html>
```

### rails-solar/app/views/layouts/mailer.text.erb
```
<%= yield %>
```

### rails-solar/app/views/pages/about.html.erb
```
<h1>Hi! I am Jaythree!</h1>
<p>That's right guys... o/ I am J3! I am just a hobby-dev, playing around with  </p>
<p> Python, Django, Ruby, Rails, Lego, Arduino, Raspy, PIC, AI… </p>
<p>Welcome! Join us!</p>
<hr>
<a href="https://medium.com/jungletronics">Visit Jungletronics</a><br>
<a href="https://medium.com/kidstronics">Visit Kidstronics</a><br>
<hr>
```

### rails-solar/app/views/pages/home.html.erb
```
<h1>Welcome to My Personal Web Blog!</h1>
<p>You can read more about me 👇️, or check out my blog 👋️ </p>
<br>
<%= link_to 'Blog', posts_path, class: 'btn btn-primary' %>
```

### rails-solar/app/views/posts/_form.html.erb
```
<%= form_with(model: post) do |form| %>
  <% if post.errors.any? %>
    <div style="color: red">
      <h2><%= pluralize(post.errors.count, "error") %> prohibited this post from being saved:</h2>

      <ul>
        <% post.errors.each do |error| %>
          <li><%= error.full_message %></li>
        <% end %>
      </ul>
    </div>
  <% end %>

  <div>
    <%= form.label :title, style: "display: block" %>
    <%= form.text_field :title %>
  </div>

  <div>
    <%= form.label :body, style: "display: block" %>
    <%= form.text_area :body %>
  </div>

  <div>
    <%= form.submit %>
  </div>
<% end %>
```

### rails-solar/app/views/posts/_post.html.erb
```
<div id="<%= dom_id post %>">
  <h2><%= post.title %></h2>
  <h4>Posted by <%= link_to post.user.name, user_path(post.user) %></h4>
  <h6><%= pluralize(post.views, "view")%></h6>
  <div>
    <%= post.body %>
  </div>
</div>
```

### rails-solar/app/views/posts/_post.json.jbuilder
```
json.extract! post, :id, :title, :body, :created_at, :updated_at
json.url post_url(post, format: :json)
```

### rails-solar/app/views/posts/edit.html.erb
```
<h1>Editing post</h1>

<%= render "form", post: @post %>

<br>

<div>
  <%= link_to "Show this post", @post %> |
  <%= link_to "Back to posts", posts_path %>
</div>
```

### rails-solar/app/views/posts/index.html.erb
```
<h1>Posts</h1>
<div id="posts">
  <% @posts.each do |post| %>
    <%= render post %>
    <p>
      <%= link_to "Show this post", post %>
    </p>
  <% end %>
</div>
<%= link_to "New post", new_post_path %>
```

### rails-solar/app/views/posts/index.json.jbuilder
```
json.array! @posts, partial: "posts/post", as: :post
```

### rails-solar/app/views/posts/new.html.erb
```
<h1>New post</h1>

<%= render "form", post: @post %>

<br>

<div>
  <%= link_to "Back to posts", posts_path %>
</div>
```

### rails-solar/app/views/posts/show.html.erb
```
<%= render @post %>
<div>
  <%= link_to "Edit this post", edit_post_path(@post) %> |
  <%= link_to "Back to posts", posts_path %>
  <% if current_user == @post.user %>
    <%= button_to "Destroy this post", @post, method: :delete %>
  <% end %>
</div>
<div class="container">
  <%= render 'comments/form', post: @post, comment: @post.comments.build , submit_label: "Reply" %>
  <% @comments.each do |comment| %>
    <%= render 'comments/comment', post: @post, comment: comment%>
  <% end %>
</div>
```

### rails-solar/app/views/posts/show.json.jbuilder
```
json.partial! "posts/post", post: @post
```

### rails-solar/app/views/user/_session_manager.html.erb
```
<% if current_user %>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <%= current_user.name %>
    </a>
    <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDropdown">
      <li><%= link_to "New Post", new_post_path , class: "dropdown-item" %></li>
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><%= link_to "Edit Account", edit_user_registration_path, class:"dropdown-item" %></li>
      <li><hr class="dropdown-divider"></li>
      <li><%= button_to "Sign out", destroy_user_session_path, method: :delete, class:"dropdown-item" %></li>
    </ul>
  </li>
<% else %>
  <li class="nav-item">
    <%= link_to "Sign up", new_user_registration_path, class: 'nav-link' %>
  </li>
  <li class="nav-item">
    <%= link_to "Login", new_user_session_path, class: 'nav-link' %>
  </li>
<% end %>
```

### rails-solar/app/views/users/profile.html.erb
```
<h1><%= @user.name %></h1>
<h6><%= pluralize(@user.views,"view") %></h6>
```

### rails-solar/bin/bundle
```
#!/usr/bin/env ruby
# frozen_string_literal: true

#
# This file was generated by Bundler.
#
# The application 'bundle' is installed as part of a gem, and
# this file is here to facilitate running it.
#

require "rubygems"

m = Module.new do
  module_function

  def invoked_as_script?
    File.expand_path($0) == File.expand_path(__FILE__)
  end

  def env_var_version
    ENV["BUNDLER_VERSION"]
  end

  def cli_arg_version
    return unless invoked_as_script? # don't want to hijack other binstubs
    return unless "update".start_with?(ARGV.first || " ") # must be running `bundle update`
    bundler_version = nil
    update_index = nil
    ARGV.each_with_index do |a, i|
      if update_index && update_index.succ == i && a =~ Gem::Version::ANCHORED_VERSION_PATTERN
        bundler_version = a
      end
      next unless a =~ /\A--bundler(?:[= ](#{Gem::Version::VERSION_PATTERN}))?\z/
      bundler_version = $1
      update_index = i
    end
    bundler_version
  end

  def gemfile
    gemfile = ENV["BUNDLE_GEMFILE"]
    return gemfile if gemfile && !gemfile.empty?

    File.expand_path("../Gemfile", __dir__)
  end

  def lockfile
    lockfile =
      case File.basename(gemfile)
      when "gems.rb" then gemfile.sub(/\.rb$/, ".locked")
      else "#{gemfile}.lock"
      end
    File.expand_path(lockfile)
  end

  def lockfile_version
    return unless File.file?(lockfile)
    lockfile_contents = File.read(lockfile)
    return unless lockfile_contents =~ /\n\nBUNDLED WITH\n\s{2,}(#{Gem::Version::VERSION_PATTERN})\n/
    Regexp.last_match(1)
  end

  def bundler_requirement
    @bundler_requirement ||=
      env_var_version ||
      cli_arg_version ||
      bundler_requirement_for(lockfile_version)
  end

  def bundler_requirement_for(version)
    return "#{Gem::Requirement.default}.a" unless version

    bundler_gem_version = Gem::Version.new(version)

    bundler_gem_version.approximate_recommendation
  end

  def load_bundler!
    ENV["BUNDLE_GEMFILE"] ||= gemfile

    activate_bundler
  end

  def activate_bundler
    gem_error = activation_error_handling do
      gem "bundler", bundler_requirement
    end
    return if gem_error.nil?
    require_error = activation_error_handling do
      require "bundler/version"
    end
    return if require_error.nil? && Gem::Requirement.new(bundler_requirement).satisfied_by?(Gem::Version.new(Bundler::VERSION))
    warn "Activating bundler (#{bundler_requirement}) failed:\n#{gem_error.message}\n\nTo install the version of bundler this project requires, run `gem install bundler -v '#{bundler_requirement}'`"
    exit 42
  end

  def activation_error_handling
    yield
    nil
  rescue StandardError, LoadError => e
    e
  end
end

m.load_bundler!

if m.invoked_as_script?
  load Gem.bin_path("bundler", "bundle")
end
```

### rails-solar/bin/importmap
```
#!/usr/bin/env ruby

require_relative "../config/application"
require "importmap/commands"
```

### rails-solar/bin/rails
```
#!/usr/bin/env ruby
APP_PATH = File.expand_path("../config/application", __dir__)
require_relative "../config/boot"
require "rails/commands"
```

### rails-solar/bin/rake
```
#!/usr/bin/env ruby
require_relative "../config/boot"
require "rake"
Rake.application.run
```

### rails-solar/bin/setup
```
#!/usr/bin/env ruby
require "fileutils"

# path to your application root.
APP_ROOT = File.expand_path("..", __dir__)

def system!(*args)
  system(*args) || abort("\n== Command #{args} failed ==")
end

FileUtils.chdir APP_ROOT do
  # This script is a way to set up or update your development environment automatically.
  # This script is idempotent, so that you can run it at any time and get an expectable outcome.
  # Add necessary setup steps to this file.

  puts "== Installing dependencies =="
  system! "gem install bundler --conservative"
  system("bundle check") || system!("bundle install")

  # puts "\n== Copying sample files =="
  # unless File.exist?("config/database.yml")
  #   FileUtils.cp "config/database.yml.sample", "config/database.yml"
  # end

  puts "\n== Preparing database =="
  system! "bin/rails db:prepare"

  puts "\n== Removing old logs and tempfiles =="
  system! "bin/rails log:clear tmp:clear"

  puts "\n== Restarting application server =="
  system! "bin/rails restart"
end
```

### rails-solar/config/environments/development.rb
```
require "active_support/core_ext/integer/time"

Rails.application.configure do
  # Para Active Storage e url_for em contextos que precisam de host completo
  config.action_controller.asset_host = 'http://localhost:3000'
  config.action_mailer.asset_host = 'http://localhost:3000'
  Rails.application.routes.default_url_options[:host] = 'localhost:3000'

  # Settings specified here will take precedence over those in config/application.rb.

  # In the development environment your application's code is reloaded any time
  # it changes. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false

  # Do not eager load code on boot.
  config.eager_load = false

  # Show full error reports.
  config.consider_all_requests_local = true

  # Enable server timing
  config.server_timing = true

  # Enable/disable caching. By default caching is disabled.
  # Run rails dev:cache to toggle caching.
  if Rails.root.join("tmp/caching-dev.txt").exist?
    config.action_controller.perform_caching = true
    config.action_controller.enable_fragment_cache_logging = true

    config.cache_store = :memory_store
    config.public_file_server.headers = {
      "Cache-Control" => "public, max-age=#{2.days.to_i}"
    }
  else
    config.action_controller.perform_caching = false

    config.cache_store = :null_store
  end

  # Store uploaded files on the local file system (see config/storage.yml for options).
  config.active_storage.service = :local

  # Don't care if the mailer can't send.
  config.action_mailer.raise_delivery_errors = false

  config.action_mailer.perform_caching = false

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log

  # Raise exceptions for disallowed deprecations.
  config.active_support.disallowed_deprecation = :raise

  # Tell Active Support which deprecation messages to disallow.
  config.active_support.disallowed_deprecation_warnings = []

  # Raise an error on page load if there are pending migrations.
  config.active_record.migration_error = :page_load

  # Highlight code that triggered database queries in logs.
  config.active_record.verbose_query_logs = true

  # Suppress logger output for asset requests.
  config.assets.quiet = true

  # Raises error for missing translations.
  # config.i18n.raise_on_missing_translations = true

  # Annotate rendered view with file names.
  # config.action_view.annotate_rendered_view_with_filenames = true

  # Uncomment if you wish to allow Action Cable access from any origin.
  # config.action_cable.disable_request_forgery_protection = true
end
```

### rails-solar/config/environments/production.rb
```
require "active_support/core_ext/integer/time"

Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # Code is not reloaded between requests.
  config.cache_classes = true

  # Eager load code on boot. This eager loads most of Rails and
  # your application in memory, allowing both threaded web servers
  # and those relying on copy on write to perform better.
  # Rake tasks automatically ignore this option for performance.
  config.eager_load = true

  # Full error reports are disabled and caching is turned on.
  config.consider_all_requests_local       = false
  config.action_controller.perform_caching = true

  # Ensures that a master key has been made available in either ENV["RAILS_MASTER_KEY"]
  # or in config/master.key. This key is used to decrypt credentials (and other encrypted files).
  # config.require_master_key = true

  # Disable serving static files from the `/public` folder by default since
  # Apache or NGINX already handles this.
  config.public_file_server.enabled = ENV["RAILS_SERVE_STATIC_FILES"].present?

  # Compress CSS using a preprocessor.
  # config.assets.css_compressor = :sass

  # Do not fallback to assets pipeline if a precompiled asset is missed.
  config.assets.compile = false

  # Enable serving of images, stylesheets, and JavaScripts from an asset server.
  # config.asset_host = "http://assets.example.com"

  # Specifies the header that your server uses for sending files.
  # config.action_dispatch.x_sendfile_header = "X-Sendfile" # for Apache
  # config.action_dispatch.x_sendfile_header = "X-Accel-Redirect" # for NGINX

  # Store uploaded files on the local file system (see config/storage.yml for options).
  config.active_storage.service = :local

  # Mount Action Cable outside main process or domain.
  # config.action_cable.mount_path = nil
  # config.action_cable.url = "wss://example.com/cable"
  # config.action_cable.allowed_request_origins = [ "http://example.com", /http:\/\/example.*/ ]

  # Force all access to the app over SSL, use Strict-Transport-Security, and use secure cookies.
  # config.force_ssl = true

  # Include generic and useful information about system operation, but avoid logging too much
  # information to avoid inadvertent exposure of personally identifiable information (PII).
  config.log_level = :info

  # Prepend all log lines with the following tags.
  config.log_tags = [ :request_id ]

  # Use a different cache store in production.
  # config.cache_store = :mem_cache_store

  # Use a real queuing backend for Active Job (and separate queues per environment).
  # config.active_job.queue_adapter     = :resque
  # config.active_job.queue_name_prefix = "rails_blog_demo_production"

  config.action_mailer.perform_caching = false

  # Ignore bad email addresses and do not raise email delivery errors.
  # Set this to true and configure the email server for immediate delivery to raise delivery errors.
  # config.action_mailer.raise_delivery_errors = false

  # Enable locale fallbacks for I18n (makes lookups for any locale fall back to
  # the I18n.default_locale when a translation cannot be found).
  config.i18n.fallbacks = true

  # Don't log any deprecations.
  config.active_support.report_deprecations = false

  # Use default logging formatter so that PID and timestamp are not suppressed.
  config.log_formatter = ::Logger::Formatter.new

  # Use a different logger for distributed setups.
  # require "syslog/logger"
  # config.logger = ActiveSupport::TaggedLogging.new(Syslog::Logger.new "app-name")

  if ENV["RAILS_LOG_TO_STDOUT"].present?
    logger           = ActiveSupport::Logger.new(STDOUT)
    logger.formatter = config.log_formatter
    config.logger    = ActiveSupport::TaggedLogging.new(logger)
  end

  # Do not dump schema after migrations.
  config.active_record.dump_schema_after_migration = false
end
```

### rails-solar/config/environments/test.rb
```
require "active_support/core_ext/integer/time"

# The test environment is used exclusively to run your application's
# test suite. You never need to work with it otherwise. Remember that
# your test database is "scratch space" for the test suite and is wiped
# and recreated between test runs. Don't rely on the data there!

Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # Turn false under Spring and add config.action_view.cache_template_loading = true.
  config.cache_classes = true

  # Eager loading loads your whole application. When running a single test locally,
  # this probably isn't necessary. It's a good idea to do in a continuous integration
  # system, or in some way before deploying your code.
  config.eager_load = ENV["CI"].present?

  # Configure public file server for tests with Cache-Control for performance.
  config.public_file_server.enabled = true
  config.public_file_server.headers = {
    "Cache-Control" => "public, max-age=#{1.hour.to_i}"
  }

  # Show full error reports and disable caching.
  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false
  config.cache_store = :null_store

  # Raise exceptions instead of rendering exception templates.
  config.action_dispatch.show_exceptions = false

  # Disable request forgery protection in test environment.
  config.action_controller.allow_forgery_protection = false

  # Store uploaded files on the local file system in a temporary directory.
  config.active_storage.service = :test

  config.action_mailer.perform_caching = false

  # Tell Action Mailer not to deliver emails to the real world.
  # The :test delivery method accumulates sent emails in the
  # ActionMailer::Base.deliveries array.
  config.action_mailer.delivery_method = :test

  # Print deprecation notices to the stderr.
  config.active_support.deprecation = :stderr

  # Raise exceptions for disallowed deprecations.
  config.active_support.disallowed_deprecation = :raise

  # Tell Active Support which deprecation messages to disallow.
  config.active_support.disallowed_deprecation_warnings = []

  # Raises error for missing translations.
  # config.i18n.raise_on_missing_translations = true

  # Annotate rendered view with file names.
  # config.action_view.annotate_rendered_view_with_filenames = true
end
```

### rails-solar/config/initializers/active_admin.rb
```
ActiveAdmin.setup do |config|
  # == Site Title
  #
  # Set the title that is displayed on the main layout
  # for each of the active admin pages.
  #
  config.site_title = "Inside Solar"

  # Set the link url for the title. For example, to take
  # users to your main site. Defaults to no link.
  #
  # config.site_title_link = "/"

  # Set an optional image to be displayed for the header
  # instead of a string (overrides :site_title)
  #
  # Note: Aim for an image that's 21px high so it fits in the header.
  #
  # config.site_title_image = "logo.png"

  # == Load Paths
  #
  # By default Active Admin files go inside app/admin/.
  # You can change this directory.
  #
  # eg:
  #   config.load_paths = [File.join(Rails.root, 'app', 'ui')]
  #
  # Or, you can also load more directories.
  # Useful when setting namespaces with users that are not your main AdminUser entity.
  #
  # eg:
  #   config.load_paths = [
  #     File.join(Rails.root, 'app', 'admin'),
  #     File.join(Rails.root, 'app', 'cashier')
  #   ]

  # == Default Namespace
  #
  # Set the default namespace each administration resource
  # will be added to.
  #
  # eg:
  #   config.default_namespace = :hello_world
  #
  # This will create resources in the HelloWorld module and
  # will namespace routes to /hello_world/*
  #
  # To set no namespace by default, use:
  #   config.default_namespace = false
  #
  # Default:
  # config.default_namespace = :admin
  #
  # You can customize the settings for each namespace by using
  # a namespace block. For example, to change the site title
  # within a namespace:
  #
  #   config.namespace :admin do |admin|
  #     admin.site_title = "Custom Admin Title"
  #   end
  #
  # This will ONLY change the title for the admin section. Other
  # namespaces will continue to use the main "site_title" configuration.

  # == User Authentication
  #
  # Active Admin will automatically call an authentication
  # method in a before filter of all controller actions to
  # ensure that there is a currently logged in admin user.
  #
  # This setting changes the method which Active Admin calls
  # within the application controller.
  config.authentication_method = :authenticate_admin_user!

  # == User Authorization
  #
  # Active Admin will automatically call an authorization
  # method in a before filter of all controller actions to
  # ensure that there is a user with proper rights. You can use
  # CanCanAdapter or make your own. Please refer to documentation.
  # config.authorization_adapter = ActiveAdmin::CanCanAdapter

  # In case you prefer Pundit over other solutions you can here pass
  # the name of default policy class. This policy will be used in every
  # case when Pundit is unable to find suitable policy.
  # config.pundit_default_policy = "MyDefaultPunditPolicy"

  # If you wish to maintain a separate set of Pundit policies for admin
  # resources, you may set a namespace here that Pundit will search
  # within when looking for a resource's policy.
  # config.pundit_policy_namespace = :admin

  # You can customize your CanCan Ability class name here.
  # config.cancan_ability_class = "Ability"

  # You can specify a method to be called on unauthorized access.
  # This is necessary in order to prevent a redirect loop which happens
  # because, by default, user gets redirected to Dashboard. If user
  # doesn't have access to Dashboard, he'll end up in a redirect loop.
  # Method provided here should be defined in application_controller.rb.
  # config.on_unauthorized_access = :access_denied

  # == Current User
  #
  # Active Admin will associate actions with the current
  # user performing them.
  #
  # This setting changes the method which Active Admin calls
  # (within the application controller) to return the currently logged in user.
  config.current_user_method = :current_admin_user

  # == Logging Out
  #
  # Active Admin displays a logout link on each screen. These
  # settings configure the location and method used for the link.
  #
  # This setting changes the path where the link points to. If it's
  # a string, the strings is used as the path. If it's a Symbol, we
  # will call the method to return the path.
  #
  # Default:
  config.logout_link_path = :destroy_admin_user_session_path

  # This setting changes the http method used when rendering the
  # link. For example :get, :delete, :put, etc..
  #
  # Default:
  # config.logout_link_method = :get

  # == Root
  #
  # Set the action to call for the root path. You can set different
  # roots for each namespace.
  #
  # Default:
  # config.root_to = 'dashboard#index'

  # == Admin Comments
  #
  # This allows your users to comment on any resource registered with Active Admin.
  #
  # You can completely disable comments:
  # config.comments = false
  #
  # You can change the name under which comments are registered:
  # config.comments_registration_name = 'AdminComment'
  #
  # You can change the order for the comments and you can change the column
  # to be used for ordering:
  # config.comments_order = 'created_at ASC'
  #
  # You can disable the menu item for the comments index page:
  # config.comments_menu = false
  #
  # You can customize the comment menu:
  # config.comments_menu = { parent: 'Admin', priority: 1 }

  # == Batch Actions
  #
  # Enable and disable Batch Actions
  #
  config.batch_actions = true

  # == Controller Filters
  #
  # You can add before, after and around filters to all of your
  # Active Admin resources and pages from here.
  #
  # config.before_action :do_something_awesome

  # == Attribute Filters
  #
  # You can exclude possibly sensitive model attributes from being displayed,
  # added to forms, or exported by default by ActiveAdmin
  #
  config.filter_attributes = [:encrypted_password, :password, :password_confirmation]

  # == Localize Date/Time Format
  #
  # Set the localize format to display dates and times.
  # To understand how to localize your app with I18n, read more at
  # https://guides.rubyonrails.org/i18n.html
  #
  # You can run `bin/rails runner 'puts I18n.t("date.formats")'` to see the
  # available formats in your application.
  #
  config.localize_format = :long

  # == Setting a Favicon
  #
  # config.favicon = 'favicon.ico'

  # == Meta Tags
  #
  # Add additional meta tags to the head element of active admin pages.
  #
  # Add tags to all pages logged in users see:
  #   config.meta_tags = { author: 'My Company' }

  # By default, sign up/sign in/recover password pages are excluded
  # from showing up in search engine results by adding a robots meta
  # tag. You can reset the hash of meta tags included in logged out
  # pages:
  #   config.meta_tags_for_logged_out_pages = {}

  # == Removing Breadcrumbs
  #
  # Breadcrumbs are enabled by default. You can customize them for individual
  # resources or you can disable them globally from here.
  #
  # config.breadcrumb = false

  # == Create Another Checkbox
  #
  # Create another checkbox is disabled by default. You can customize it for individual
  # resources or you can enable them globally from here.
  #
  # config.create_another = true

  # == Register Stylesheets & Javascripts
  #
  # We recommend using the built in Active Admin layout and loading
  # up your own stylesheets / javascripts to customize the look
  # and feel.
  #
  # To load a stylesheet:
  #   config.register_stylesheet 'my_stylesheet.css'
  #
  # You can provide an options hash for more control, which is passed along to stylesheet_link_tag():
  #   config.register_stylesheet 'my_print_stylesheet.css', media: :print
  #
  # To load a javascript file:
  #   config.register_javascript 'my_javascript.js'

  # == CSV options
  #
  # Set the CSV builder separator
  # config.csv_options = { col_sep: ';' }
  #
  # Force the use of quotes
  # config.csv_options = { force_quotes: true }

  # == Menu System
  #
  # You can add a navigation menu to be used in your application, or configure a provided menu
  #
  # To change the default utility navigation to show a link to your website & a logout btn
  #
  #   config.namespace :admin do |admin|
  #     admin.build_menu :utility_navigation do |menu|
  #       menu.add label: "My Great Website", url: "http://www.mygreatwebsite.com", html_options: { target: :blank }
  #       admin.add_logout_button_to_menu menu
  #     end
  #   end
  #
  # If you wanted to add a static menu item to the default menu provided:
  #
  #   config.namespace :admin do |admin|
  #     admin.build_menu :default do |menu|
  #       menu.add label: "My Great Website", url: "http://www.mygreatwebsite.com", html_options: { target: "_blank" }
  #     end
  #   end

  # == Download Links
  #
  # You can disable download links on resource listing pages,
  # or customize the formats shown per namespace/globally
  #
  # To disable/customize for the :admin namespace:
  #
  #   config.namespace :admin do |admin|
  #
  #     # Disable the links entirely
  #     admin.download_links = false
  #
  #     # Only show XML & PDF options
  #     admin.download_links = [:xml, :pdf]
  #
  #     # Enable/disable the links based on block
  #     #   (for example, with cancan)
  #     admin.download_links = proc { can?(:view_download_links) }
  #
  #   end

  # == Pagination
  #
  # Pagination is enabled by default for all resources.
  # You can control the default per page count for all resources here.
  #
  # config.default_per_page = 30
  #
  # You can control the max per page count too.
  #
  # config.max_per_page = 10_000

  # == Filters
  #
  # By default the index screen includes a "Filters" sidebar on the right
  # hand side with a filter for each attribute of the registered model.
  # You can enable or disable them for all resources here.
  #
  # config.filters = true
  #
  # By default the filters include associations in a select, which means
  # that every record will be loaded for each association (up
  # to the value of config.maximum_association_filter_arity).
  # You can enabled or disable the inclusion
  # of those filters by default here.
  #
  # config.include_default_association_filters = true

  # config.maximum_association_filter_arity = 256 # default value of :unlimited will change to 256 in a future version
  # config.filter_columns_for_large_association = [
  #    :display_name,
  #    :full_name,
  #    :name,
  #    :username,
  #    :login,
  #    :title,
  #    :email,
  #  ]
  # config.filter_method_for_large_association = '_start'

  # == Head
  #
  # You can add your own content to the site head like analytics. Make sure
  # you only pass content you trust.
  #
  # config.head = ''.html_safe

  # == Footer
  #
  # By default, the footer shows the current Active Admin version. You can
  # override the content of the footer here.
  #
  # config.footer = 'my custom footer text'

  # == Sorting
  #
  # By default ActiveAdmin::OrderClause is used for sorting logic
  # You can inherit it with own class and inject it for all resources
  #
  # config.order_clause = MyOrderClause

  # == Webpacker
  #
  # By default, Active Admin uses Sprocket's asset pipeline.
  # You can switch to using Webpacker here.
  #
  # config.use_webpacker = true
end
```

### rails-solar/config/initializers/assets.rb
```
# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = "1.0"

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
```

### rails-solar/config/initializers/content_security_policy.rb
```
# Be sure to restart your server when you modify this file.

# Define an application-wide content security policy.
# See the Securing Rails Applications Guide for more information:
# https://guides.rubyonrails.org/security.html#content-security-policy-header

# Rails.application.configure do
#   config.content_security_policy do |policy|
#     policy.default_src :self, :https
#     policy.font_src    :self, :https, :data
#     policy.img_src     :self, :https, :data
#     policy.object_src  :none
#     policy.script_src  :self, :https
#     policy.style_src   :self, :https
#     # Specify URI for violation reports
#     # policy.report_uri "/csp-violation-report-endpoint"
#   end
#
#   # Generate session nonces for permitted importmap and inline scripts
#   config.content_security_policy_nonce_generator = ->(request) { request.session.id.to_s }
#   config.content_security_policy_nonce_directives = %w(script-src)
#
#   # Report violations without enforcing the policy.
#   # config.content_security_policy_report_only = true
# end
```

### rails-solar/config/initializers/cors.rb
```
# Be sure to restart your server when you modify this file.

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3001'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

### rails-solar/config/initializers/curse_words.rb
```
# config/initializers/curse_words.rb
CURSE_WORDS = %w[
  curse_word_1
  curse_word_2
  curse_word_3
]
```

### rails-solar/config/initializers/devise.rb
```
# frozen_string_literal: true

# Assuming you have not yet modified this file, each configuration option below
# is set to its default value. Note that some are commented out while others
# are not: uncommented lines are intended to protect your configuration from
# breaking changes in upgrades (i.e., in the event that future versions of
# Devise change the default values for those options).
#
# Use this hook to configure devise mailer, warden hooks and so forth.
# Many of these configuration options can be set straight in your model.
Devise.setup do |config|
  # The secret key used by Devise. Devise uses this key to generate
  # random tokens. Changing this key will render invalid all existing
  # confirmation, reset password and unlock tokens in the database.
  # Devise will use the `secret_key_base` as its `secret_key`
  # by default. You can change it below and use your own secret key.
  # config.secret_key = '2a4ac4f44d6cade85fd213b49ce6208b48b06b5da8393cf308a80e60710e3554af0b3454bda2899e838b77d97e720112a30e0cf64ca5df68d15fcb1c63d468b9'

  # ==> Controller configuration
  # Configure the parent class to the devise controllers.
  # config.parent_controller = 'DeviseController'

  # ==> Mailer Configuration
  # Configure the e-mail address which will be shown in Devise::Mailer,
  # note that it will be overwritten if you use your own mailer class
  # with default "from" parameter.
  config.mailer_sender = 'please-change-me-at-config-initializers-devise@example.com'

  # Configure the class responsible to send e-mails.
  # config.mailer = 'Devise::Mailer'

  # Configure the parent class responsible to send e-mails.
  # config.parent_mailer = 'ActionMailer::Base'

  # ==> ORM configuration
  # Load and configure the ORM. Supports :active_record (default) and
  # :mongoid (bson_ext recommended) by default. Other ORMs may be
  # available as additional gems.
  require 'devise/orm/active_record'

  # ==> Configuration for any authentication mechanism
  # Configure which keys are used when authenticating a user. The default is
  # just :email. You can configure it to use [:username, :subdomain], so for
  # authenticating a user, both parameters are required. Remember that those
  # parameters are used only when authenticating and not when retrieving from
  # session. If you need permissions, you should implement that in a before filter.
  # You can also supply a hash where the value is a boolean determining whether
  # or not authentication should be aborted when the value is not present.
  # config.authentication_keys = [:email]

  # Configure parameters from the request object used for authentication. Each entry
  # given should be a request method and it will automatically be passed to the
  # find_for_authentication method and considered in your model lookup. For instance,
  # if you set :request_keys to [:subdomain], :subdomain will be used on authentication.
  # The same considerations mentioned for authentication_keys also apply to request_keys.
  # config.request_keys = []

  # Configure which authentication keys should be case-insensitive.
  # These keys will be downcased upon creating or modifying a user and when used
  # to authenticate or find a user. Default is :email.
  config.case_insensitive_keys = [:email]

  # Configure which authentication keys should have whitespace stripped.
  # These keys will have whitespace before and after removed upon creating or
  # modifying a user and when used to authenticate or find a user. Default is :email.
  config.strip_whitespace_keys = [:email]

  # Tell if authentication through request.params is enabled. True by default.
  # It can be set to an array that will enable params authentication only for the
  # given strategies, for example, `config.params_authenticatable = [:database]` will
  # enable it only for database (email + password) authentication.
  # config.params_authenticatable = true

  # Tell if authentication through HTTP Auth is enabled. False by default.
  # It can be set to an array that will enable http authentication only for the
  # given strategies, for example, `config.http_authenticatable = [:database]` will
  # enable it only for database authentication.
  # For API-only applications to support authentication "out-of-the-box", you will likely want to
  # enable this with :database unless you are using a custom strategy.
  # The supported strategies are:
  # :database      = Support basic authentication with authentication key + password
  # config.http_authenticatable = false

  # If 401 status code should be returned for AJAX requests. True by default.
  # config.http_authenticatable_on_xhr = true

  # The realm used in Http Basic Authentication. 'Application' by default.
  # config.http_authentication_realm = 'Application'

  # It will change confirmation, password recovery and other workflows
  # to behave the same regardless if the e-mail provided was right or wrong.
  # Does not affect registerable.
  # config.paranoid = true

  # By default Devise will store the user in session. You can skip storage for
  # particular strategies by setting this option.
  # Notice that if you are skipping storage for all authentication paths, you
  # may want to disable generating routes to Devise's sessions controller by
  # passing skip: :sessions to `devise_for` in your config/routes.rb
  config.skip_session_storage = [:http_auth]

  # By default, Devise cleans up the CSRF token on authentication to
  # avoid CSRF token fixation attacks. This means that, when using AJAX
  # requests for sign in and sign up, you need to get a new CSRF token
  # from the server. You can disable this option at your own risk.
  # config.clean_up_csrf_token_on_authentication = true

  # When false, Devise will not attempt to reload routes on eager load.
  # This can reduce the time taken to boot the app but if your application
  # requires the Devise mappings to be loaded during boot time the application
  # won't boot properly.
  # config.reload_routes = true

  # ==> Configuration for :database_authenticatable
  # For bcrypt, this is the cost for hashing the password and defaults to 12. If
  # using other algorithms, it sets how many times you want the password to be hashed.
  # The number of stretches used for generating the hashed password are stored
  # with the hashed password. This allows you to change the stretches without
  # invalidating existing passwords.
  #
  # Limiting the stretches to just one in testing will increase the performance of
  # your test suite dramatically. However, it is STRONGLY RECOMMENDED to not use
  # a value less than 10 in other environments. Note that, for bcrypt (the default
  # algorithm), the cost increases exponentially with the number of stretches (e.g.
  # a value of 20 is already extremely slow: approx. 60 seconds for 1 calculation).
  config.stretches = Rails.env.test? ? 1 : 12

  # Set up a pepper to generate the hashed password.
  # config.pepper = 'b2035086798e28f7fcda2239537adbac74cb04d07c2f26ba95c69fde1ea4a5f88cd298ae4e7329472d19cbae6306c8c26dea5a3c268c8d8ec876357402ab2ce9'

  # Send a notification to the original email when the user's email is changed.
  # config.send_email_changed_notification = false

  # Send a notification email when the user's password is changed.
  # config.send_password_change_notification = false

  # ==> Configuration for :confirmable
  # A period that the user is allowed to access the website even without
  # confirming their account. For instance, if set to 2.days, the user will be
  # able to access the website for two days without confirming their account,
  # access will be blocked just in the third day.
  # You can also set it to nil, which will allow the user to access the website
  # without confirming their account.
  # Default is 0.days, meaning the user cannot access the website without
  # confirming their account.
  # config.allow_unconfirmed_access_for = 2.days

  # A period that the user is allowed to confirm their account before their
  # token becomes invalid. For example, if set to 3.days, the user can confirm
  # their account within 3 days after the mail was sent, but on the fourth day
  # their account can't be confirmed with the token any more.
  # Default is nil, meaning there is no restriction on how long a user can take
  # before confirming their account.
  # config.confirm_within = 3.days

  # If true, requires any email changes to be confirmed (exactly the same way as
  # initial account confirmation) to be applied. Requires additional unconfirmed_email
  # db field (see migrations). Until confirmed, new email is stored in
  # unconfirmed_email column, and copied to email column on successful confirmation.
  config.reconfirmable = true

  # Defines which key will be used when confirming an account
  # config.confirmation_keys = [:email]

  # ==> Configuration for :rememberable
  # The time the user will be remembered without asking for credentials again.
  # config.remember_for = 2.weeks

  # Invalidates all the remember me tokens when the user signs out.
  config.expire_all_remember_me_on_sign_out = true

  # If true, extends the user's remember period when remembered via cookie.
  # config.extend_remember_period = false

  # Options to be passed to the created cookie. For instance, you can set
  # secure: true in order to force SSL only cookies.
  # config.rememberable_options = {}

  # ==> Configuration for :validatable
  # Range for password length.
  config.password_length = 6..128

  # Email regex used to validate email formats. It simply asserts that
  # one (and only one) @ exists in the given string. This is mainly
  # to give user feedback and not to assert the e-mail validity.
  config.email_regexp = /\A[^@\s]+@[^@\s]+\z/

  # ==> Configuration for :timeoutable
  # The time you want to timeout the user session without activity. After this
  # time the user will be asked for credentials again. Default is 30 minutes.
  # config.timeout_in = 30.minutes

  # ==> Configuration for :lockable
  # Defines which strategy will be used to lock an account.
  # :failed_attempts = Locks an account after a number of failed attempts to sign in.
  # :none            = No lock strategy. You should handle locking by yourself.
  # config.lock_strategy = :failed_attempts

  # Defines which key will be used when locking and unlocking an account
  # config.unlock_keys = [:email]

  # Defines which strategy will be used to unlock an account.
  # :email = Sends an unlock link to the user email
  # :time  = Re-enables login after a certain amount of time (see :unlock_in below)
  # :both  = Enables both strategies
  # :none  = No unlock strategy. You should handle unlocking by yourself.
  # config.unlock_strategy = :both

  # Number of authentication tries before locking an account if lock_strategy
  # is failed attempts.
  # config.maximum_attempts = 20

  # Time interval to unlock the account if :time is enabled as unlock_strategy.
  # config.unlock_in = 1.hour

  # Warn on the last attempt before the account is locked.
  # config.last_attempt_warning = true

  # ==> Configuration for :recoverable
  #
  # Defines which key will be used when recovering the password for an account
  # config.reset_password_keys = [:email]

  # Time interval you can reset your password with a reset password key.
  # Don't put a too small interval or your users won't have the time to
  # change their passwords.
  config.reset_password_within = 6.hours

  # When set to false, does not sign a user in automatically after their password is
  # reset. Defaults to true, so a user is signed in automatically after a reset.
  # config.sign_in_after_reset_password = true

  # ==> Configuration for :encryptable
  # Allow you to use another hashing or encryption algorithm besides bcrypt (default).
  # You can use :sha1, :sha512 or algorithms from others authentication tools as
  # :clearance_sha1, :authlogic_sha512 (then you should set stretches above to 20
  # for default behavior) and :restful_authentication_sha1 (then you should set
  # stretches to 10, and copy REST_AUTH_SITE_KEY to pepper).
  #
  # Require the `devise-encryptable` gem when using anything other than bcrypt
  # config.encryptor = :sha512

  # ==> Scopes configuration
  # Turn scoped views on. Before rendering "sessions/new", it will first check for
  # "users/sessions/new". It's turned off by default because it's slower if you
  # are using only default views.
  # config.scoped_views = false

  # Configure the default scope given to Warden. By default it's the first
  # devise role declared in your routes (usually :user).
  # config.default_scope = :user

  # Set this configuration to false if you want /users/sign_out to sign out
  # only the current scope. By default, Devise signs out all scopes.
  # config.sign_out_all_scopes = true

  # ==> Navigation configuration
  # Lists the formats that should be treated as navigational. Formats like
  # :html should redirect to the sign in page when the user does not have
  # access, but formats like :xml or :json, should return 401.
  #
  # If you have any extra navigational formats, like :iphone or :mobile, you
  # should add them to the navigational formats lists.
  #
  # The "*/*" below is required to match Internet Explorer requests.
  # config.navigational_formats = ['*/*', :html, :turbo_stream]

  # The default HTTP method used to sign out a resource. Default is :delete.
  config.sign_out_via = :delete

  # ==> OmniAuth
  # Add a new OmniAuth provider. Check the wiki for more information on setting
  # up on your models and hooks.
  # config.omniauth :github, 'APP_ID', 'APP_SECRET', scope: 'user,public_repo'

  # ==> Warden configuration
  # If you want to use other strategies, that are not supported by Devise, or
  # change the failure app, you can configure them inside the config.warden block.
  #
  # config.warden do |manager|
  #   manager.intercept_401 = false
  #   manager.default_strategies(scope: :user).unshift :some_external_strategy
  # end

  # ==> Mountable engine configurations
  # When using Devise inside an engine, let's call it `MyEngine`, and this engine
  # is mountable, there are some extra configurations to be taken into account.
  # The following options are available, assuming the engine is mounted as:
  #
  #     mount MyEngine, at: '/my_engine'
  #
  # The router that invoked `devise_for`, in the example above, would be:
  # config.router_name = :my_engine
  #
  # When using OmniAuth, Devise cannot automatically set OmniAuth path,
  # so you need to do it manually. For the users scope, it would be:
  # config.omniauth_path_prefix = '/my_engine/users/auth'

  # ==> Hotwire/Turbo configuration
  # When using Devise with Hotwire/Turbo, the http status for error responses
  # and some redirects must match the following. The default in Devise for existing
  # apps is `200 OK` and `302 Found respectively`, but new apps are generated with
  # these new defaults that match Hotwire/Turbo behavior.
  # Note: These might become the new default in future versions of Devise.
  config.responder.error_status = :unprocessable_entity
  config.responder.redirect_status = :see_other

  # ==> Configuration for :registerable

  # When set to false, does not sign a user in automatically after their password is
  # changed. Defaults to true, so a user is signed in automatically after changing a password.
  # config.sign_in_after_change_password = true
end
```

### rails-solar/config/initializers/filter_parameter_logging.rb
```
# Be sure to restart your server when you modify this file.

# Configure parameters to be filtered from the log file. Use this to limit dissemination of
# sensitive information. See the ActiveSupport::ParameterFilter documentation for supported
# notations and behaviors.
Rails.application.config.filter_parameters += [
  :passw, :secret, :token, :_key, :crypt, :salt, :certificate, :otp, :ssn
]
```

### rails-solar/config/initializers/friendly_id.rb
```
# FriendlyId Global Configuration
#
# Use this to set up shared configuration options for your entire application.
# Any of the configuration options shown here can also be applied to single
# models by passing arguments to the `friendly_id` class method or defining
# methods in your model.
#
# To learn more, check out the guide:
#
# http://norman.github.io/friendly_id/file.Guide.html

FriendlyId.defaults do |config|
  # ## Reserved Words
  #
  # Some words could conflict with Rails's routes when used as slugs, or are
  # undesirable to allow as slugs. Edit this list as needed for your app.
  config.use :reserved

  config.reserved_words = %w[new edit index session login logout users admin
    stylesheets assets javascripts images]

  # This adds an option to treat reserved words as conflicts rather than exceptions.
  # When there is no good candidate, a UUID will be appended, matching the existing
  # conflict behavior.

  # config.treat_reserved_as_conflict = true

  #  ## Friendly Finders
  #
  # Uncomment this to use friendly finders in all models. By default, if
  # you wish to find a record by its friendly id, you must do:
  #
  #    MyModel.friendly.find('foo')
  #
  # If you uncomment this, you can do:
  #
  #    MyModel.find('foo')
  #
  # This is significantly more convenient but may not be appropriate for
  # all applications, so you must explicitly opt-in to this behavior. You can
  # always also configure it on a per-model basis if you prefer.
  #
  # Something else to consider is that using the :finders addon boosts
  # performance because it will avoid Rails-internal code that makes runtime
  # calls to `Module.extend`.
  #
  # config.use :finders
  #
  # ## Slugs
  #
  # Most applications will use the :slugged module everywhere. If you wish
  # to do so, uncomment the following line.
  #
  # config.use :slugged
  #
  # By default, FriendlyId's :slugged addon expects the slug column to be named
  # 'slug', but you can change it if you wish.
  #
  # config.slug_column = 'slug'
  #
  # By default, slug has no size limit, but you can change it if you wish.
  #
  # config.slug_limit = 255
  #
  # When FriendlyId can not generate a unique ID from your base method, it appends
  # a UUID, separated by a single dash. You can configure the character used as the
  # separator. If you're upgrading from FriendlyId 4, you may wish to replace this
  # with two dashes.
  #
  # config.sequence_separator = '-'
  #
  # Note that you must use the :slugged addon **prior** to the line which
  # configures the sequence separator, or else FriendlyId will raise an undefined
  # method error.
  #
  #  ## Tips and Tricks
  #
  #  ### Controlling when slugs are generated
  #
  # As of FriendlyId 5.0, new slugs are generated only when the slug field is
  # nil, but if you're using a column as your base method can change this
  # behavior by overriding the `should_generate_new_friendly_id?` method that
  # FriendlyId adds to your model. The change below makes FriendlyId 5.0 behave
  # more like 4.0.
  # Note: Use(include) Slugged module in the config if using the anonymous module.
  # If you have `friendly_id :name, use: slugged` in the model, Slugged module
  # is included after the anonymous module defined in the initializer, so it
  # overrides the `should_generate_new_friendly_id?` method from the anonymous module.
  #
  # config.use :slugged
  # config.use Module.new {
  #   def should_generate_new_friendly_id?
  #     slug.blank? || <your_column_name_here>_changed?
  #   end
  # }
  #
  # FriendlyId uses Rails's `parameterize` method to generate slugs, but for
  # languages that don't use the Roman alphabet, that's not usually sufficient.
  # Here we use the Babosa library to transliterate Russian Cyrillic slugs to
  # ASCII. If you use this, don't forget to add "babosa" to your Gemfile.
  #
  # config.use Module.new {
  #   def normalize_friendly_id(text)
  #     text.to_slug.normalize! :transliterations => [:russian, :latin]
  #   end
  # }
end
```

### rails-solar/config/initializers/inflections.rb
```
# Be sure to restart your server when you modify this file.

# Add new inflection rules using the following format. Inflections
# are locale specific, and you may define rules for as many different
# locales as you wish. All of these examples are active by default:
# ActiveSupport::Inflector.inflections(:en) do |inflect|
#   inflect.plural /^(ox)$/i, "\\1en"
#   inflect.singular /^(ox)en/i, "\\1"
#   inflect.irregular "person", "people"
#   inflect.uncountable %w( fish sheep )
# end

# These inflection rules are supported but not enabled by default:
# ActiveSupport::Inflector.inflections(:en) do |inflect|
#   inflect.acronym "RESTful"
# end
```

### rails-solar/config/initializers/new_framework_defaults_7_0.rb
```
# Be sure to restart your server when you modify this file.
#
# This file eases your Rails 7.0 framework defaults upgrade.
#
# Uncomment each configuration one by one to switch to the new default.
# Once your application is ready to run with all new defaults, you can remove
# this file and set the `config.load_defaults` to `7.0`.
#
# Read the Guide for Upgrading Ruby on Rails for more info on each option.
# https://guides.rubyonrails.org/upgrading_ruby_on_rails.html

# `button_to` view helper will render `<button>` element, regardless of whether
# or not the content is passed as the first argument or as a block.
# Rails.application.config.action_view.button_to_generates_button_tag = true

# `stylesheet_link_tag` view helper will not render the media attribute by default.
# Rails.application.config.action_view.apply_stylesheet_media_default = false

# Change the digest class for the key generators to `OpenSSL::Digest::SHA256`.
# Changing this default means invalidate all encrypted messages generated by
# your application and, all the encrypted cookies. Only change this after you
# rotated all the messages using the key rotator.
#
# See upgrading guide for more information on how to build a rotator.
# https://guides.rubyonrails.org/v7.0/upgrading_ruby_on_rails.html
# Rails.application.config.active_support.key_generator_hash_digest_class = OpenSSL::Digest::SHA256

# Change the digest class for ActiveSupport::Digest.
# Changing this default means that for example Etags change and
# various cache keys leading to cache invalidation.
# Rails.application.config.active_support.hash_digest_class = OpenSSL::Digest::SHA256

# Don't override ActiveSupport::TimeWithZone.name and use the default Ruby
# implementation.
# Rails.application.config.active_support.remove_deprecated_time_with_zone_name = true

# Calls `Rails.application.executor.wrap` around test cases.
# This makes test cases behave closer to an actual request or job.
# Several features that are normally disabled in test, such as Active Record query cache
# and asynchronous queries will then be enabled.
# Rails.application.config.active_support.executor_around_test_case = true

# Define the isolation level of most of Rails internal state.
# If you use a fiber based server or job processor, you should set it to `:fiber`.
# Otherwise the default of `:thread` if preferable.
# Rails.application.config.active_support.isolation_level = :thread

# Set both the `:open_timeout` and `:read_timeout` values for `:smtp` delivery method.
# Rails.application.config.action_mailer.smtp_timeout = 5

# The ActiveStorage video previewer will now use scene change detection to generate
# better preview images (rather than the previous default of using the first frame
# of the video).
# Rails.application.config.active_storage.video_preview_arguments =
#   "-vf 'select=eq(n\\,0)+eq(key\\,1)+gt(scene\\,0.015),loop=loop=-1:size=2,trim=start_frame=1' -frames:v 1 -f image2"

# Automatically infer `inverse_of` for associations with a scope.
# Rails.application.config.active_record.automatic_scope_inversing = true

# Raise when running tests if fixtures contained foreign key violations
# Rails.application.config.active_record.verify_foreign_keys_for_fixtures = true

# Disable partial inserts.
# This default means that all columns will be referenced in INSERT queries
# regardless of whether they have a default or not.
# Rails.application.config.active_record.partial_inserts = false

# Protect from open redirect attacks in `redirect_back_or_to` and `redirect_to`.
# Rails.application.config.action_controller.raise_on_open_redirects = true

# Change the variant processor for Active Storage.
# Changing this default means updating all places in your code that
# generate variants to use image processing macros and ruby-vips
# operations. See the upgrading guide for detail on the changes required.
# The `:mini_magick` option is not deprecated; it's fine to keep using it.
# Rails.application.config.active_storage.variant_processor = :vips

# Enable parameter wrapping for JSON.
# Previously this was set in an initializer. It's fine to keep using that initializer if you've customized it.
# To disable parameter wrapping entirely, set this config to `false`.
# Rails.application.config.action_controller.wrap_parameters_by_default = true

# Specifies whether generated namespaced UUIDs follow the RFC 4122 standard for namespace IDs provided as a
# `String` to `Digest::UUID.uuid_v3` or `Digest::UUID.uuid_v5` method calls.
#
# See https://guides.rubyonrails.org/configuring.html#config-active-support-use-rfc4122-namespaced-uuids for
# more information.
# Rails.application.config.active_support.use_rfc4122_namespaced_uuids = true

# Change the default headers to disable browsers' flawed legacy XSS protection.
# Rails.application.config.action_dispatch.default_headers = {
#   "X-Frame-Options" => "SAMEORIGIN",
#   "X-XSS-Protection" => "0",
#   "X-Content-Type-Options" => "nosniff",
#   "X-Download-Options" => "noopen",
#   "X-Permitted-Cross-Domain-Policies" => "none",
#   "Referrer-Policy" => "strict-origin-when-cross-origin"
# }


# ** Please read carefully, this must be configured in config/application.rb **
# Change the format of the cache entry.
# Changing this default means that all new cache entries added to the cache
# will have a different format that is not supported by Rails 6.1 applications.
# Only change this value after your application is fully deployed to Rails 7.0
# and you have no plans to rollback.
# When you're ready to change format, add this to `config/application.rb` (NOT this file):
#  config.active_support.cache_format_version = 7.0


# Cookie serializer: 2 options
#
# If you're upgrading and haven't set `cookies_serializer` previously, your cookie serializer
# is `:marshal`. The default for new apps is `:json`.
#
# Rails.application.config.action_dispatch.cookies_serializer = :json
#
#
# To migrate an existing application to the `:json` serializer, use the `:hybrid` option.
#
# Rails transparently deserializes existing (Marshal-serialized) cookies on read and
# re-writes them in the JSON format.
#
# It is fine to use `:hybrid` long term; you should do that until you're confident *all* your cookies
# have been converted to JSON. To keep using `:hybrid` long term, move this config to its own
# initializer or to `config/application.rb`.
#
# Rails.application.config.action_dispatch.cookies_serializer = :hybrid
#
#
# If your cookies can't yet be serialized to JSON, keep using `:marshal` for backward-compatibility.
#
# If you have configured the serializer elsewhere, you can remove this section of the file.
#
# See https://guides.rubyonrails.org/action_controller_overview.html#cookies for more information.

# Change the return value of `ActionDispatch::Request#content_type` to the Content-Type header without modification.
# Rails.application.config.action_dispatch.return_only_request_media_type_on_content_type = false

# Active Storage `has_many_attached` relationships will default to replacing the current collection instead of appending to it.
# Thus, to support submitting an empty collection, the `file_field` helper will render an hidden field `include_hidden` by default when `multiple_file_field_include_hidden` is set to `true`.
# See https://guides.rubyonrails.org/configuring.html#config-active-storage-multiple-file-field-include-hidden for more information.
# Rails.application.config.active_storage.multiple_file_field_include_hidden = true

# ** Please read carefully, this must be configured in config/application.rb (NOT this file) **
# Disables the deprecated #to_s override in some Ruby core classes
# See https://guides.rubyonrails.org/configuring.html#config-active-support-disable-to-s-conversion for more information.
# config.active_support.disable_to_s_conversion = true
```

### rails-solar/config/initializers/permissions_policy.rb
```
# Define an application-wide HTTP permissions policy. For further
# information see https://developers.google.com/web/updates/2018/06/feature-policy
#
# Rails.application.config.permissions_policy do |f|
#   f.camera      :none
#   f.gyroscope   :none
#   f.microphone  :none
#   f.usb         :none
#   f.fullscreen  :self
#   f.payment     :self, "https://secure.example.com"
# end
```

### rails-solar/config/locales/devise.en.yml
```
# Additional translations at https://github.com/heartcombo/devise/wiki/I18n

en:
  devise:
    confirmations:
      confirmed: "Your email address has been successfully confirmed."
      send_instructions: "You will receive an email with instructions for how to confirm your email address in a few minutes."
      send_paranoid_instructions: "If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes."
    failure:
      already_authenticated: "You are already signed in."
      inactive: "Your account is not activated yet."
      invalid: "Invalid %{authentication_keys} or password."
      locked: "Your account is locked."
      last_attempt: "You have one more attempt before your account is locked."
      not_found_in_database: "Invalid %{authentication_keys} or password."
      timeout: "Your session expired. Please sign in again to continue."
      unauthenticated: "You need to sign in or sign up before continuing."
      unconfirmed: "You have to confirm your email address before continuing."
    mailer:
      confirmation_instructions:
        subject: "Confirmation instructions"
      reset_password_instructions:
        subject: "Reset password instructions"
      unlock_instructions:
        subject: "Unlock instructions"
      email_changed:
        subject: "Email Changed"
      password_change:
        subject: "Password Changed"
    omniauth_callbacks:
      failure: "Could not authenticate you from %{kind} because \"%{reason}\"."
      success: "Successfully authenticated from %{kind} account."
    passwords:
      no_token: "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided."
      send_instructions: "You will receive an email with instructions on how to reset your password in a few minutes."
      send_paranoid_instructions: "If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes."
      updated: "Your password has been changed successfully. You are now signed in."
      updated_not_active: "Your password has been changed successfully."
    registrations:
      destroyed: "Bye! Your account has been successfully cancelled. We hope to see you again soon."
      signed_up: "Welcome! You have signed up successfully."
      signed_up_but_inactive: "You have signed up successfully. However, we could not sign you in because your account is not yet activated."
      signed_up_but_locked: "You have signed up successfully. However, we could not sign you in because your account is locked."
      signed_up_but_unconfirmed: "A message with a confirmation link has been sent to your email address. Please follow the link to activate your account."
      update_needs_confirmation: "You updated your account successfully, but we need to verify your new email address. Please check your email and follow the confirmation link to confirm your new email address."
      updated: "Your account has been updated successfully."
      updated_but_not_signed_in: "Your account has been updated successfully, but since your password was changed, you need to sign in again."
    sessions:
      signed_in: "Signed in successfully."
      signed_out: "Signed out successfully."
      already_signed_out: "Signed out successfully."
    unlocks:
      send_instructions: "You will receive an email with instructions for how to unlock your account in a few minutes."
      send_paranoid_instructions: "If your account exists, you will receive an email with instructions for how to unlock it in a few minutes."
      unlocked: "Your account has been unlocked successfully. Please sign in to continue."
  errors:
    messages:
      already_confirmed: "was already confirmed, please try signing in"
      confirmation_period_expired: "needs to be confirmed within %{period}, please request a new one"
      expired: "has expired, please request a new one"
      not_found: "not found"
      not_locked: "was not locked"
      not_saved:
        one: "1 error prohibited this %{resource} from being saved:"
        other: "%{count} errors prohibited this %{resource} from being saved:"
```

### rails-solar/config/locales/en.yml
```
en:
  active_admin:
    dashboard: "Dashboard"
  dashboard:
    welcome: "Welcome to my Active Admin Tutorial"
    call_to_action: "Read more on Active Admin 3.2.0"
```

### rails-solar/config/application.rb
```
require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module RailsBlogDemo
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
```

### rails-solar/config/boot.rb
```
ENV["BUNDLE_GEMFILE"] ||= File.expand_path("../Gemfile", __dir__)

require "bundler/setup" # Set up gems listed in the Gemfile.
require "bootsnap/setup" # Speed up boot time by caching expensive operations.
```

### rails-solar/config/cable.yml
```
development:
  adapter: async

test:
  adapter: test

production:
  adapter: redis
  url: <%= ENV.fetch("REDIS_URL") { "redis://localhost:6379/1" } %>
  channel_prefix: rails_blog_demo_production
```

### rails-solar/config/credentials.yml.enc
```
weS5L4FUMSf1hCTcOtyLcrr10kbh5kV5HhXfM3pUk5GwGLqEkT2y+QLE6eE8VAd/3DY1dlnV5RpmjfhuG+SyUyg8wL/7ofQxaVT3mcv0kf5OJjZfJDrVD/xRuRBXrsnjvyf/Ng3NXBlEtkvsiujloOYcZx9cJg8Vagok80IOvXiOTIZ1VFgOT0hsw4CjfgkyqG2Y8sBEJFXEZ0v1Nibnop8KokH+w7Tw3goW16GDW6M0yEpeoVZ2HdbAtZUYjmwrHDheosc60DCXgjw5YchxbZllzusUmMhHv1YtGqX4mvsX+AZPPs+6i1iwgGo0wjMolXRFfrM0uiPqD8YT2oZTzfe4+9uDHRdTMIr4YOyv9/IGo17pSvUfYgH8HR5msolgVbP9sUgrmQzaZYy9n2jT7/qRejdj1Jip3R0J--QYGKU0avjrIgYAZf--uJkYp+fo4s7a0/N5xts1ng==
```

### rails-solar/config/database.yml
```
# SQLite. Versions 3.8.0 and up are supported.
#   gem install sqlite3
#
#   Ensure the SQLite 3 gem is defined in your Gemfile
#   gem "sqlite3"
#
default: &default
  adapter: sqlite3
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  timeout: 5000

development:
  <<: *default
  database: db/development.sqlite3

# Warning: The database defined as "test" will be erased and
# re-generated from your development database when you run "rake".
# Do not set this db to the same as development or production.
test:
  <<: *default
  database: db/test.sqlite3

production:
  <<: *default
  database: db/production.sqlite3
```

### rails-solar/config/environment.rb
```
# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!
```

### rails-solar/config/importmap.rb
```
# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "trix"
pin "@rails/actiontext", to: "actiontext.js"
```

### rails-solar/config/puma.rb
```
# Puma can serve each request in a thread from an internal thread pool.
# The `threads` method setting takes two numbers: a minimum and maximum.
# Any libraries that use thread pools should be configured to match
# the maximum value specified for Puma. Default is set to 5 threads for minimum
# and maximum; this matches the default thread size of Active Record.
#
max_threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }
min_threads_count = ENV.fetch("RAILS_MIN_THREADS") { max_threads_count }
threads min_threads_count, max_threads_count

# Specifies the `worker_timeout` threshold that Puma will use to wait before
# terminating a worker in development environments.
#
worker_timeout 3600 if ENV.fetch("RAILS_ENV", "development") == "development"

# Specifies the `port` that Puma will listen on to receive requests; default is 3000.
#
port ENV.fetch("PORT") { 3000 }

# Specifies the `environment` that Puma will run in.
#
environment ENV.fetch("RAILS_ENV") { "development" }

# Specifies the `pidfile` that Puma will use.
pidfile ENV.fetch("PIDFILE") { "tmp/pids/server.pid" }

# Specifies the number of `workers` to boot in clustered mode.
# Workers are forked web server processes. If using threads and workers together
# the concurrency of the application would be max `threads` * `workers`.
# Workers do not work on JRuby or Windows (both of which do not support
# processes).
#
# workers ENV.fetch("WEB_CONCURRENCY") { 2 }

# Use the `preload_app!` method when specifying a `workers` number.
# This directive tells Puma to first boot the application and load code
# before forking the application. This takes advantage of Copy On Write
# process behavior so workers use less memory.
#
# preload_app!

# Allow puma to be restarted by `bin/rails restart` command.
plugin :tmp_restart
```

### rails-solar/config/routes.rb
```
Rails.application.routes.draw do
  # API para consumo do frontend Next.js
  namespace :api do
    namespace :v1 do
      get 'marketing_campaigns/index'
      get 'marketing_campaigns/create'
      get 'quotes/create'
      get 'reviews/index'
      get 'reviews/create'
      resources :companies,  only: %i[index show]
      resources :categories, only: %i[index show]
      resources :products,   only: %i[index show]
      resources :quotes,     only: %i[create]
      resources :reviews,    only: %i[index create]
      resources :marketing_campaigns, only: %i[index create]
    end
  end

  # Admin users e ActiveAdmin
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  # Usuários Devise (front e API privada)
  devise_for :users, controllers: {
    sessions:      'users/sessions',
    registrations: 'users/registrations'
  }

  # Root para o painel administrativo
  root to: 'admin/dashboard#index'
end
```

### rails-solar/config/storage.yml
```
test:
  service: Disk
  root: <%= Rails.root.join("tmp/storage") %>

local:
  service: Disk
  root: <%= Rails.root.join("storage") %>

# Use bin/rails credentials:edit to set the AWS secrets (as aws:access_key_id|secret_access_key)
# amazon:
#   service: S3
#   access_key_id: <%= Rails.application.credentials.dig(:aws, :access_key_id) %>
#   secret_access_key: <%= Rails.application.credentials.dig(:aws, :secret_access_key) %>
#   region: us-east-1
#   bucket: your_own_bucket-<%= Rails.env %>

# Remember not to checkin your GCS keyfile to a repository
# google:
#   service: GCS
#   project: your_project
#   credentials: <%= Rails.root.join("path/to/gcs.keyfile") %>
#   bucket: your_own_bucket-<%= Rails.env %>

# Use bin/rails credentials:edit to set the Azure Storage secret (as azure_storage:storage_access_key)
# microsoft:
#   service: AzureStorage
#   storage_account_name: your_account_name
#   storage_access_key: <%= Rails.application.credentials.dig(:azure_storage, :storage_access_key) %>
#   container: your_container_name-<%= Rails.env %>

# mirror:
#   service: Mirror
#   primary: local
#   mirrors: [ amazon, google, microsoft ]
```

### rails-solar/db/migrate/20230712221836_create_posts.rb
```
class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20230713193131_add_views_to_posts.rb
```
class AddViewsToPosts < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :views, :integer, default: 0
  end
end
```

### rails-solar/db/migrate/20230714162304_devise_create_users.rb
```
# frozen_string_literal: true

class DeviseCreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      ## Database authenticatable
      t.string :email,              null: false, default: ""
      t.string :encrypted_password, null: false, default: ""

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      ## Rememberable
      t.datetime :remember_created_at

      ## Trackable
      # t.integer  :sign_in_count, default: 0, null: false
      # t.datetime :current_sign_in_at
      # t.datetime :last_sign_in_at
      # t.string   :current_sign_in_ip
      # t.string   :last_sign_in_ip

      ## Confirmable
      # t.string   :confirmation_token
      # t.datetime :confirmed_at
      # t.datetime :confirmation_sent_at
      # t.string   :unconfirmed_email # Only if using reconfirmable

      ## Lockable
      # t.integer  :failed_attempts, default: 0, null: false # Only if lock strategy is :failed_attempts
      # t.string   :unlock_token # Only if unlock strategy is :email or :both
      # t.datetime :locked_at


      t.timestamps null: false
    end

    add_index :users, :email,                unique: true
    add_index :users, :reset_password_token, unique: true
    # add_index :users, :confirmation_token,   unique: true
    # add_index :users, :unlock_token,         unique: true
  end
end
```

### rails-solar/db/migrate/20230714202502_add_user_to_posts.rb
```
class AddUserToPosts < ActiveRecord::Migration[7.0]
  def change
    add_reference :posts, :user, null: false, foreign_key: true
  end
end
```

### rails-solar/db/migrate/20230714213543_add_name_to_user.rb
```
class AddNameToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :name, :string
  end
end
```

### rails-solar/db/migrate/20230714232351_add_views_to_user.rb
```
class AddViewsToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :views, :integer
  end
end
```

### rails-solar/db/migrate/20230714232857_change_views_for_users.rb
```
class ChangeViewsForUsers < ActiveRecord::Migration[7.0]
  def change
    change_column :users, :views, :integer, default: 0
    # Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
```

### rails-solar/db/migrate/20230716133433_create_comments.rb
```
class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.belongs_to :post, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20230716140302_create_active_storage_tables.active_storage.rb
```
# This migration comes from active_storage (originally 20170806125915)
class CreateActiveStorageTables < ActiveRecord::Migration[5.2]
  def change
    # Use Active Record's configured type for primary and foreign keys
    primary_key_type, foreign_key_type = primary_and_foreign_key_types

    create_table :active_storage_blobs, id: primary_key_type do |t|
      t.string   :key,          null: false
      t.string   :filename,     null: false
      t.string   :content_type
      t.text     :metadata
      t.string   :service_name, null: false
      t.bigint   :byte_size,    null: false
      t.string   :checksum

      if connection.supports_datetime_with_precision?
        t.datetime :created_at, precision: 6, null: false
      else
        t.datetime :created_at, null: false
      end

      t.index [ :key ], unique: true
    end

    create_table :active_storage_attachments, id: primary_key_type do |t|
      t.string     :name,     null: false
      t.references :record,   null: false, polymorphic: true, index: false, type: foreign_key_type
      t.references :blob,     null: false, type: foreign_key_type

      if connection.supports_datetime_with_precision?
        t.datetime :created_at, precision: 6, null: false
      else
        t.datetime :created_at, null: false
      end

      t.index [ :record_type, :record_id, :name, :blob_id ], name: :index_active_storage_attachments_uniqueness, unique: true
      t.foreign_key :active_storage_blobs, column: :blob_id
    end

    create_table :active_storage_variant_records, id: primary_key_type do |t|
      t.belongs_to :blob, null: false, index: false, type: foreign_key_type
      t.string :variation_digest, null: false

      t.index [ :blob_id, :variation_digest ], name: :index_active_storage_variant_records_uniqueness, unique: true
      t.foreign_key :active_storage_blobs, column: :blob_id
    end
  end

  private
    def primary_and_foreign_key_types
      config = Rails.configuration.generators
      setting = config.options[config.orm][:primary_key_type]
      primary_key_type = setting || :primary_key
      foreign_key_type = setting || :bigint
      [primary_key_type, foreign_key_type]
    end
end
```

### rails-solar/db/migrate/20230716140303_create_action_text_tables.action_text.rb
```
# This migration comes from action_text (originally 20180528164100)
class CreateActionTextTables < ActiveRecord::Migration[6.0]
  def change
    # Use Active Record's configured type for primary and foreign keys
    primary_key_type, foreign_key_type = primary_and_foreign_key_types

    create_table :action_text_rich_texts, id: primary_key_type do |t|
      t.string     :name, null: false
      t.text       :body, size: :long
      t.references :record, null: false, polymorphic: true, index: false, type: foreign_key_type

      t.timestamps

      t.index [ :record_type, :record_id, :name ], name: "index_action_text_rich_texts_uniqueness", unique: true
    end
  end

  private
    def primary_and_foreign_key_types
      config = Rails.configuration.generators
      setting = config.options[config.orm][:primary_key_type]
      primary_key_type = setting || :primary_key
      foreign_key_type = setting || :bigint
      [primary_key_type, foreign_key_type]
    end
end
```

### rails-solar/db/migrate/20230815221100_add_service_name_to_active_storage_blobs.active_storage.rb
```
# This migration comes from active_storage (originally 20190112182829)
class AddServiceNameToActiveStorageBlobs < ActiveRecord::Migration[6.0]
  def up
    return unless table_exists?(:active_storage_blobs)

    unless column_exists?(:active_storage_blobs, :service_name)
      add_column :active_storage_blobs, :service_name, :string

      if configured_service = ActiveStorage::Blob.service.name
        ActiveStorage::Blob.unscoped.update_all(service_name: configured_service)
      end

      change_column :active_storage_blobs, :service_name, :string, null: false
    end
  end

  def down
    return unless table_exists?(:active_storage_blobs)

    remove_column :active_storage_blobs, :service_name
  end
end
```

### rails-solar/db/migrate/20230815221101_create_active_storage_variant_records.active_storage.rb
```
# This migration comes from active_storage (originally 20191206030411)
class CreateActiveStorageVariantRecords < ActiveRecord::Migration[6.0]
  def change
    return unless table_exists?(:active_storage_blobs)

    # Use Active Record's configured type for primary key
    create_table :active_storage_variant_records, id: primary_key_type, if_not_exists: true do |t|
      t.belongs_to :blob, null: false, index: false, type: blobs_primary_key_type
      t.string :variation_digest, null: false

      t.index %i[ blob_id variation_digest ], name: "index_active_storage_variant_records_uniqueness", unique: true
      t.foreign_key :active_storage_blobs, column: :blob_id
    end
  end

  private
    def primary_key_type
      config = Rails.configuration.generators
      config.options[config.orm][:primary_key_type] || :primary_key
    end

    def blobs_primary_key_type
      pkey_name = connection.primary_key(:active_storage_blobs)
      pkey_column = connection.columns(:active_storage_blobs).find { |c| c.name == pkey_name }
      pkey_column.bigint? ? :bigint : pkey_column.type
    end
end
```

### rails-solar/db/migrate/20230815221102_remove_not_null_on_active_storage_blobs_checksum.active_storage.rb
```
# This migration comes from active_storage (originally 20211119233751)
class RemoveNotNullOnActiveStorageBlobsChecksum < ActiveRecord::Migration[6.0]
  def change
    return unless table_exists?(:active_storage_blobs)

    change_column_null(:active_storage_blobs, :checksum, true)
  end
end
```

### rails-solar/db/migrate/20240329223906_create_noticed_tables.noticed.rb
```
# This migration comes from noticed (originally 20231215190233)
class CreateNoticedTables < ActiveRecord::Migration[6.1]
  def change
    primary_key_type, foreign_key_type = primary_and_foreign_key_types
    create_table :noticed_events, id: primary_key_type do |t|
      t.string :type
      t.belongs_to :record, polymorphic: true, type: foreign_key_type
      if t.respond_to?(:jsonb)
        t.jsonb :params
      else
        t.json :params
      end

      t.timestamps
    end

    create_table :noticed_notifications, id: primary_key_type do |t|
      t.string :type
      t.belongs_to :event, null: false, type: foreign_key_type
      t.belongs_to :recipient, polymorphic: true, null: false, type: foreign_key_type
      t.datetime :read_at
      t.datetime :seen_at

      t.timestamps
    end
  end

  private

  def primary_and_foreign_key_types
    config = Rails.configuration.generators
    setting = config.options[config.orm][:primary_key_type]
    primary_key_type = setting || :primary_key
    foreign_key_type = setting || :bigint
    [primary_key_type, foreign_key_type]
  end
end
```

### rails-solar/db/migrate/20240329223907_add_notifications_count_to_noticed_event.noticed.rb
```
# This migration comes from noticed (originally 20240129184740)
class AddNotificationsCountToNoticedEvent < ActiveRecord::Migration[6.1]
  def change
    add_column :noticed_events, :notifications_count, :integer
  end
end
```

### rails-solar/db/migrate/20240508205056_devise_create_admin_users.rb
```
# frozen_string_literal: true

class DeviseCreateAdminUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :admin_users do |t|
      ## Database authenticatable
      t.string :email,              null: false, default: ""
      t.string :encrypted_password, null: false, default: ""

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      ## Rememberable
      t.datetime :remember_created_at

      ## Trackable
      # t.integer  :sign_in_count, default: 0, null: false
      # t.datetime :current_sign_in_at
      # t.datetime :last_sign_in_at
      # t.string   :current_sign_in_ip
      # t.string   :last_sign_in_ip

      ## Confirmable
      # t.string   :confirmation_token
      # t.datetime :confirmed_at
      # t.datetime :confirmation_sent_at
      # t.string   :unconfirmed_email # Only if using reconfirmable

      ## Lockable
      # t.integer  :failed_attempts, default: 0, null: false # Only if lock strategy is :failed_attempts
      # t.string   :unlock_token # Only if unlock strategy is :email or :both
      # t.datetime :locked_at


      t.timestamps null: false
    end

    add_index :admin_users, :email,                unique: true
    add_index :admin_users, :reset_password_token, unique: true
    # add_index :admin_users, :confirmation_token,   unique: true
    # add_index :admin_users, :unlock_token,         unique: true
  end
end
```

### rails-solar/db/migrate/20240508205057_create_active_admin_comments.rb
```
class CreateActiveAdminComments < ActiveRecord::Migration[7.0]
  def self.up
    create_table :active_admin_comments do |t|
      t.string :namespace
      t.text   :body
      t.references :resource, polymorphic: true
      t.references :author, polymorphic: true
      t.timestamps
    end
    add_index :active_admin_comments, [:namespace]
  end

  def self.down
    drop_table :active_admin_comments
  end
end
```

### rails-solar/db/migrate/20240508205200_add_published_at_to_posts.rb
```
class AddPublishedAtToPosts < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :published_at, :datetime
  end
end
```

### rails-solar/db/migrate/20250720214050_add_devise_to_admin_users.rb
```
# frozen_string_literal: true

class AddDeviseToAdminUsers < ActiveRecord::Migration[7.0]
  def up
    # Todas as colunas já existem, nada a fazer
  end

  def down
    # Nada a desfazer
  end
end
```

### rails-solar/db/migrate/20250720220115_create_companies.rb
```
class CreateCompanies < ActiveRecord::Migration[7.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.text :description
      t.references :user, null: false, foreign_key: true
      t.boolean :verified
      t.integer :target_segment
      t.decimal :annual_energy_output
      t.integer :installation_count

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20250720220204_create_certifications.rb
```
class CreateCertifications < ActiveRecord::Migration[7.0]
  def change
    create_table :certifications do |t|
      t.references :company, null: false, foreign_key: true
      t.string :name
      t.string :issued_by
      t.date :issued_at
      t.date :expires_at

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20250720220246_create_reviews.rb
```
class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :user, null: false, foreign_key: true
      t.references :company, null: false, foreign_key: true
      t.integer :rating
      t.string :title
      t.text :content
      t.integer :status
      t.boolean :cliente

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20250720220410_create_quotes.rb
```
class CreateQuotes < ActiveRecord::Migration[7.0]
  def change
    create_table :quotes do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.text :message
      t.references :company, null: false, foreign_key: true
      t.integer :status
      t.decimal :estimated_kwh

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20250720220529_create_marketing_campaigns.rb
```
class CreateMarketingCampaigns < ActiveRecord::Migration[7.0]
  def change
    create_table :marketing_campaigns do |t|
      t.string :name
      t.integer :channel
      t.text :template
      t.datetime :scheduled_at

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20250720220705_create_pricing_rules.rb
```
class CreatePricingRules < ActiveRecord::Migration[7.0]
  def change
    create_table :pricing_rules do |t|
      t.string :name
      t.text :condition
      t.decimal :discount_pct

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20250720221154_create_pricings.rb
```
class CreatePricings < ActiveRecord::Migration[7.0]
  def change
    create_table :pricings do |t|
      t.references :product, null: false, foreign_key: true
      t.string :title
      t.string :currency
      t.decimal :value
      t.string :charge_type
      t.string :frequency
      t.text :payment_methods
      t.integer :position
      t.string :state

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20250720221250_create_products.rb
```
class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :seo_url
      t.string :seo_title
      t.string :status
      t.string :kind
      t.date :premium_until
      t.string :source
      t.string :country

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20250720221400_create_feature_groups.rb
```
class CreateFeatureGroups < ActiveRecord::Migration[7.0]
  def change
    create_table :feature_groups do |t|
      t.string :name

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20250720221455_create_features.rb
```
class CreateFeatures < ActiveRecord::Migration[7.0]
  def change
    create_table :features do |t|
      t.string :name
      t.references :feature_group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20250720221529_create_leads.rb
```
class CreateLeads < ActiveRecord::Migration[7.0]
  def change
    create_table :leads do |t|
      t.references :user, null: false, foreign_key: true
      t.references :product, null: false, foreign_key: true
      t.string :name, null: false
      t.string :email, null: false
      t.string :role, null: false
      t.string :company_size
      t.string :desired_category
      t.string :funnel_stage
      t.integer :score
      t.date :sent_at
      t.integer :conversion_state, null: false, default: 0

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20250720221646_create_assess_campaigns.rb
```
class CreateAssessCampaigns < ActiveRecord::Migration[7.0]
  def change
    create_table :assess_campaigns do |t|
      t.references :product, null: false, foreign_key: true
      t.string :title
      t.string :code
      t.references :owner, null: false, foreign_key: { to_table: :users }
      t.integer :goal
      t.integer :achieved
      t.integer :shares
      t.string :prize
      t.date :starts_at
      t.date :ends_at
      t.integer :debutantes
      t.string :status, default: 'draft', null: false

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20250720221941_create_categories.rb
```
class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.string :name
      t.string :slug
      t.text :description
      t.references :parent, null: false, foreign_key: true
      t.boolean :active
      t.integer :depth
      t.string :ancestry

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20250720222048_create_contents.rb
```
class CreateContents < ActiveRecord::Migration[7.0]
  def change
    create_table :contents do |t|
      t.string :title, null: false
      t.string :short_description, null: false
      t.string :tags
      t.string :lp_url
      t.string :format, null: false
      t.string :level, null: false
      t.boolean :active

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20250720222221_create_discussions.rb
```
class CreateDiscussions < ActiveRecord::Migration[7.0]
  def change
    create_table :discussions do |t|
      t.references :user, null: false, foreign_key: true
      t.references :product, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true
      t.string :subject, null: false
      t.text :body, null: false
      t.integer :status, null: false, default: 0

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20250720222527_create_replies.rb
```
class CreateReplies < ActiveRecord::Migration[7.0]
  def change
    create_table :replies do |t|
      t.references :user, null: false, foreign_key: true
      t.references :discussion, null: false, foreign_key: true
      t.text :body
      t.integer :status

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20250720222606_create_saa_s_products.rb
```
class CreateSaaSProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :saa_s_products do |t|
      t.string :name
      t.text :description
      t.decimal :price
      t.string :billing_cycle
      t.text :features
      t.boolean :active

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20250720222717_create_saa_s_plans.rb
```
class CreateSaaSPlans < ActiveRecord::Migration[7.0]
  def change
    create_table :saa_s_plans do |t|
      t.string :name, null: false
      t.references :saas_product, null: false, foreign_key: true
      t.string :tier, null: false
      t.text :features
      t.decimal :price, null: false
      t.boolean :active

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20250721033234_add_location_to_companies.rb
```
class AddLocationToCompanies < ActiveRecord::Migration[7.0]
  def change
    add_column :companies, :location, :string
  end
end
```

### rails-solar/db/migrate/20250721040259_add_seo_fields_to_categories.rb
```
class AddSeoFieldsToCategories < ActiveRecord::Migration[7.0]
  def change
    add_column :categories, :seo_title, :string
    add_column :categories, :seo_description, :text
    add_column :categories, :seo_keywords, :string
    add_column :categories, :canonical_url, :string
    add_column :categories, :meta_robots, :string
    add_column :categories, :h1, :string
    add_column :categories, :intro_text, :text
    add_column :categories, :schema_markup, :text
  end
end
```

### rails-solar/db/migrate/20250721154008_create_friendly_id_slugs.rb
```
MIGRATION_CLASS =
  if ActiveRecord::VERSION::MAJOR >= 5
    ActiveRecord::Migration["#{ActiveRecord::VERSION::MAJOR}.#{ActiveRecord::VERSION::MINOR}"]
  else
    ActiveRecord::Migration
  end

class CreateFriendlyIdSlugs < MIGRATION_CLASS
  def change
    create_table :friendly_id_slugs do |t|
      t.string :slug, null: false
      t.integer :sluggable_id, null: false
      t.string :sluggable_type, limit: 50
      t.string :scope
      t.datetime :created_at
    end
    add_index :friendly_id_slugs, [:sluggable_type, :sluggable_id]
    add_index :friendly_id_slugs, [:slug, :sluggable_type], length: {slug: 140, sluggable_type: 50}
    add_index :friendly_id_slugs, [:slug, :sluggable_type, :scope], length: {slug: 70, sluggable_type: 50, scope: 70}, unique: true
  end
end
```

### rails-solar/db/migrate/20250721173435_create_join_table_categories_products.rb
```
class CreateJoinTableCategoriesProducts < ActiveRecord::Migration[7.0]
  def change
    create_join_table :categories, :products do |t|
      # Índices para buscas e unicidade
      t.index [:category_id, :product_id], unique: true, name: 'index_categories_products_on_category_and_product'
      t.index [:product_id, :category_id], name: 'index_categories_products_on_product_and_category'

      # (Opcional) Se quiser timestamps na associação:
      # t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20250721192447_remove_ancestry_from_categories.rb
```
class RemoveAncestryFromCategories < ActiveRecord::Migration[7.0]
  def up
    # Temporarily disable foreign key checks for SQLite
    execute 'PRAGMA foreign_keys = OFF;'

    # Rename the original table
    rename_table :categories, :categories_old

    # Create the new table without the 'ancestry' and 'depth' columns
    create_table :categories do |t|
      t.string   "name"
      t.string   "slug"
      t.text     "description"
      t.integer  "parent_id"
      t.boolean  "active"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.string   "seo_title"
      t.text     "seo_description"
      t.string   "seo_keywords"
      t.string   "canonical_url"
      t.string   "meta_robots"
      t.string   "h1"
      t.text     "intro_text"
      t.text     "schema_markup"
      t.index ["parent_id"], name: "index_categories_on_parent_id"
    end

    # Copy data from the old table to the new one
    # Note: We need to explicitly list all columns to ensure correct mapping
    execute <<-SQL
      INSERT INTO categories (id, name, slug, description, parent_id, active, created_at, updated_at, seo_title, seo_description, seo_keywords, canonical_url, meta_robots, h1, intro_text, schema_markup)
      SELECT id, name, slug, description, parent_id, active, created_at, updated_at, seo_title, seo_description, seo_keywords, canonical_url, meta_robots, h1, intro_text, schema_markup FROM categories_old;
    SQL

    # Drop the old table
    drop_table :categories_old

    # Re-enable foreign key checks
    execute 'PRAGMA foreign_keys = ON;'
  end

  def down
    # This migration is not easily reversible
    raise ActiveRecord::IrreversibleMigration
  end
end
```

### rails-solar/db/migrate/20250721220000_change_status_to_integer_in_assess_campaigns.rb
```
class ChangeStatusToIntegerInAssessCampaigns < ActiveRecord::Migration[7.0]
  def up
    add_column :assess_campaigns, :status_tmp, :integer, default: 0, null: false
    status_map = { 'draft' => 0, 'active' => 1, 'completed' => 2, 'cancelled' => 3 }
    status_map.each do |str, int|
      execute <<-SQL.squish
        UPDATE assess_campaigns SET status_tmp = #{int} WHERE status = '#{str}'
      SQL
    end
    remove_column :assess_campaigns, :status
    rename_column :assess_campaigns, :status_tmp, :status
  end

  def down
    add_column :assess_campaigns, :status_tmp, :string
    status_map = { 0 => 'draft', 1 => 'active', 2 => 'completed', 3 => 'cancelled' }
    status_map.each do |int, str|
      execute <<-SQL.squish
        UPDATE assess_campaigns SET status_tmp = '#{str}' WHERE status = #{int}
      SQL
    end
    remove_column :assess_campaigns, :status
    rename_column :assess_campaigns, :status_tmp, :status
  end
end
```

### rails-solar/db/migrate/20250721221000_add_constraints_and_indexes.rb
```
class AddConstraintsAndIndexes < ActiveRecord::Migration[7.0]
  def change
    add_index :categories, :slug, unique: true
    add_index :products, :seo_url, unique: true
    add_foreign_key :assess_campaigns, :products
    add_foreign_key :assess_campaigns, :users, column: :owner_id
    change_column_null :companies, :name, false
    change_column_null :companies, :user_id, false
    # Adicione outras restrições conforme necessário
  end
end
```

### rails-solar/db/migrate/20250721231545_create_saa_s_leads.rb
```
class CreateSaaSLeads < ActiveRecord::Migration[7.0]
  def change
    create_table :saa_s_leads do |t|
      ## Contato
      t.string   :first_name,                null: false
      t.string   :last_name,                 null: false
      t.string   :email,                     null: false, index: true
      t.string   :phone_number
      t.string   :preferred_contact_time
      t.string   :contact_method             # e.g. "Telefone", "E‑mail", "WhatsApp"

      ## Empresa / Local
      t.string   :company_name
      t.string   :building_type              # "Residência", "Comércio", "Indústria"
      t.string   :roof_type                  # "Fibrocimento", "Cerâmica", "Metálico"…
      t.decimal  :available_roof_area,       precision: 8, scale: 2  # m²
      t.string   :address
      t.string   :city
      t.string   :state

      ## Consumo e expectativa
      t.integer  :monthly_energy_consumption_kwh
      t.string   :budget_range               # ex. "Até 5k", "5–10k", "10–20k"
      t.string   :decision_timeline          # ex. "Imediato", "1–3 meses", "3–6 meses"
      t.string   :current_energy_provider

      ## Qualificação interna
      t.integer  :score,                     default: 0, index: true
      t.integer  :status,                    null: false, default: 0
      # status enum: { new: 0, contact_made: 1, proposal_sent: 2, won: 3, lost: 4 }
      t.text     :pain_points
      t.string   :competitor_considered

      ## Origem e Marketing
      t.string   :lead_source                # e.g. "Google Ads", "Facebook", "Indicação", "Orgânico"
      t.string   :utm_campaign
      t.string   :utm_source
      t.string   :utm_medium

      ## Pré‑venda e controle de funil
      t.references :saas_plan, foreign_key: true
      t.boolean  :b2b,                       default: false, index: true
      t.string   :funnel_stage               # ex. "novo", "qualificado", "em contato", "fechado"
      t.boolean  :site_visit_scheduled,      default: false
      t.datetime :site_visit_date
      t.datetime :converted_at               # data de conversão em empresa
      t.datetime :proposal_sent_at
      t.datetime :follow_up_date

      t.timestamps
    end

    add_index :saa_s_leads, :lead_source
    add_index :saa_s_leads, :funnel_stage
  end
end
```

### rails-solar/db/migrate/20250722001659_add_role_to_users.rb
```
class AddRoleToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :role, :string
  end
end
```

### rails-solar/db/migrate/20250722002239_add_status_to_saa_s_products.rb
```
class AddStatusToSaaSProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :saa_s_products, :status, :string
  end
end
```

### rails-solar/db/migrate/20250722025131_change_value_to_decimal_in_pricings.rb
```
class ChangeValueToDecimalInPricings < ActiveRecord::Migration[7.0]
  def change
  end
end
```

### rails-solar/db/migrate/20250722025147_change_annual_energy_output_to_decimal_in_companies.rb
```
class ChangeAnnualEnergyOutputToDecimalInCompanies < ActiveRecord::Migration[7.0]
  def change
  end
end
```

### rails-solar/db/migrate/20250722025329_change_sent_at_to_datetime_in_leads.rb
```
class ChangeSentAtToDatetimeInLeads < ActiveRecord::Migration[7.0]
  def change
    change_column :leads, :sent_at, :datetime
  end
end
```

### rails-solar/db/migrate/20250722025349_change_dates_to_datetime_in_assess_campaigns.rb
```
class ChangeDatesToDatetimeInAssessCampaigns < ActiveRecord::Migration[7.0]
  def change
    change_column :assess_campaigns, :starts_at, :datetime
    change_column :assess_campaigns, :ends_at, :datetime
  end
end
```

### rails-solar/db/migrate/20250722025833_add_not_null_to_name_and_description_in_companies.rb
```
class AddNotNullToNameAndDescriptionInCompanies < ActiveRecord::Migration[7.0]
  def change
    change_column_null :companies, :name, false
    change_column_null :companies, :description, false
  end
end
```

### rails-solar/db/migrate/20250722030547_add_not_null_to_certifications_fields.rb
```
class AddNotNullToCertificationsFields < ActiveRecord::Migration[7.0]
  def change
    change_column_null :certifications, :name, false
    change_column_null :certifications, :issued_by, false
    change_column_null :certifications, :issued_at, false
    change_column_null :certifications, :expires_at, false
  end
end
```

### rails-solar/db/migrate/20250722030719_add_not_null_and_default_to_reviews_fields.rb
```
class AddNotNullAndDefaultToReviewsFields < ActiveRecord::Migration[7.0]
  def change
    change_column_null :reviews, :rating, false
    change_column_null :reviews, :title, false
    change_column_null :reviews, :content, false
    change_column_null :reviews, :status, false
    change_column_default :reviews, :status, 0
  end
end
```

### rails-solar/db/migrate/20250722030827_add_not_null_and_default_to_quotes_fields.rb
```
class AddNotNullAndDefaultToQuotesFields < ActiveRecord::Migration[7.0]
  def change
    change_column_null :quotes, :name, false
    change_column_null :quotes, :email, false
    change_column_null :quotes, :phone, false
    change_column_null :quotes, :message, false
    change_column_null :quotes, :status, false
    change_column_default :quotes, :status, 0
  end
end
```

### rails-solar/db/migrate/20250722031011_add_not_null_to_marketing_campaigns_fields.rb
```
class AddNotNullToMarketingCampaignsFields < ActiveRecord::Migration[7.0]
  def change
    change_column_null :marketing_campaigns, :name, false
    change_column_null :marketing_campaigns, :channel, false
    change_column_null :marketing_campaigns, :template, false
    change_column_null :marketing_campaigns, :scheduled_at, false
  end
end
```

### rails-solar/db/migrate/20250722031137_add_not_null_to_pricing_rules_fields.rb
```
class AddNotNullToPricingRulesFields < ActiveRecord::Migration[7.0]
  def change
    change_column_null :pricing_rules, :name, false
    change_column_null :pricing_rules, :condition, false
    change_column_null :pricing_rules, :discount_pct, false
  end
end
```

### rails-solar/db/migrate/20250722031330_add_not_null_to_pricings_fields.rb
```
class AddNotNullToPricingsFields < ActiveRecord::Migration[7.0]
  def change
    change_column_null :pricings, :title, false
    change_column_null :pricings, :currency, false
    change_column_null :pricings, :value, false
    change_column_null :pricings, :charge_type, false
    change_column_null :pricings, :frequency, false
  end
end
```

### rails-solar/db/migrate/20250722031544_add_not_null_and_unique_index_to_products_fields.rb
```
class AddNotNullAndUniqueIndexToProductsFields < ActiveRecord::Migration[7.0]
  def change
    change_column_null :products, :name, false
    change_column_null :products, :status, false
    change_column_null :products, :kind, false
    change_column_null :products, :seo_title, false
  end
end
```

### rails-solar/db/migrate/20250722032046_add_not_null_and_unique_index_to_feature_groups_name.rb
```
class AddNotNullAndUniqueIndexToFeatureGroupsName < ActiveRecord::Migration[7.0]
  def change
    change_column_null :feature_groups, :name, false
    add_index :feature_groups, :name, unique: true
  end
end
```

### rails-solar/db/migrate/20250722032205_add_not_null_and_unique_index_to_features_name.rb
```
class AddNotNullAndUniqueIndexToFeaturesName < ActiveRecord::Migration[7.0]
  def change
    change_column_null :features, :name, false
    add_index :features, [:name, :feature_group_id], unique: true
  end
end
```

### rails-solar/db/migrate/20250722032552_add_conversion_state_to_leads.rb
```
class AddConversionStateToLeads < ActiveRecord::Migration[7.0]
  def change
    add_column :leads, :conversion_state, :integer, default: 0
  end
end
```

### rails-solar/db/migrate/20250722035548_add_not_null_to_assess_campaigns_fields.rb
```
class AddNotNullToAssessCampaignsFields < ActiveRecord::Migration[7.0]
  def change
    change_column_null :assess_campaigns, :title, false
    change_column_null :assess_campaigns, :code, false
    change_column_null :assess_campaigns, :goal, false
    change_column_null :assess_campaigns, :starts_at, false
    change_column_null :assess_campaigns, :ends_at, false
  end
end
```

### rails-solar/db/migrate/20250722040309_update_categories_constraints.rb
```
class UpdateCategoriesConstraints < ActiveRecord::Migration[7.0]
  def change
    change_column_null :categories, :parent_id, true
    change_column_null :categories, :name, false
    change_column_null :categories, :slug, false
    add_index :categories, [:slug, :parent_id], unique: true
  end
end
```

### rails-solar/db/migrate/20250722050605_add_not_null_and_default_to_replies_fields.rb
```
class AddNotNullAndDefaultToRepliesFields < ActiveRecord::Migration[7.0]
  def change
    change_column_null :replies, :body, false
    change_column_null :replies, :status, false
    change_column_default :replies, :status, 0
  end
end
```

### rails-solar/db/migrate/20250722050727_add_not_null_to_saas_products_fields.rb
```
class AddNotNullToSaasProductsFields < ActiveRecord::Migration[7.0]
  def change
    change_column_null :saa_s_products, :name, false
    change_column_null :saa_s_products, :description, false
    change_column_null :saa_s_products, :price, false
    change_column_null :saa_s_products, :billing_cycle, false
    change_column_null :saa_s_products, :status, false
  end
end
```

### rails-solar/db/migrate/20250722051620_add_not_null_to_posts_fields.rb
```
class AddNotNullToPostsFields < ActiveRecord::Migration[7.0]
  def change
    change_column_null :posts, :title, false
    change_column_null :posts, :body, false
  end
end
```

### rails-solar/db/migrate/20250722052427_remove_old_category_foreign_key_from_discussions.rb
```
class RemoveOldCategoryForeignKeyFromDiscussions < ActiveRecord::Migration[7.0]
  def change
    remove_foreign_key :discussions, column: :category_id, to_table: :categories_old
  end
end
```

### rails-solar/db/migrate/20250722052643_add_missing_indexes.rb
```
class AddMissingIndexes < ActiveRecord::Migration[7.0]
  def change
    add_index :assess_campaigns, :status
    add_index :certifications, :issued_at
    add_index :certifications, :expires_at
    add_index :companies, :target_segment
    add_index :companies, :location
    add_index :contents, :format
    add_index :contents, :level
    add_index :contents, :tags
    add_index :contents, :lp_url
    add_index :discussions, :status
    add_index :discussions, :subject
    add_index :leads, :conversion_state
    add_index :leads, :email
    add_index :leads, :lead_source
    add_index :leads, :funnel_stage
    add_index :marketing_campaigns, :channel
    add_index :marketing_campaigns, :scheduled_at
    add_index :noticed_events, :type
    add_index :noticed_events, :notifications_count
    add_index :noticed_notifications, :type
    add_index :noticed_notifications, :read_at
    add_index :noticed_notifications, :seen_at
    add_index :posts, :views
    add_index :posts, :published_at
    add_index :pricing_rules, :name
    add_index :pricing_rules, :discount_pct
    add_index :pricings, :currency
    add_index :pricings, :charge_type
    add_index :pricings, :frequency
    add_index :pricings, :state
    add_index :products, :status
    add_index :products, :kind
    add_index :products, :source
    add_index :products, :country
    add_index :quotes, :status
    add_index :quotes, :email
    add_index :quotes, :phone
    add_index :replies, :status
    add_index :reviews, :rating
    add_index :reviews, :status
    add_index :saa_s_leads, :status
    add_index :saa_s_plans, :tier
    add_index :saa_s_plans, :active
    add_index :saa_s_products, :status
    add_index :saa_s_products, :active
    add_index :users, :role
    add_index :users, :name
  end
end
```

### rails-solar/db/migrate/20250722053138_add_seo_fields_to_contents.rb
```
class AddSeoFieldsToContents < ActiveRecord::Migration[7.0]
  def change
    add_column :contents, :seo_title, :string
    add_column :contents, :seo_description, :text
    add_column :contents, :seo_keywords, :string
    add_column :contents, :canonical_url, :string
    add_column :contents, :meta_robots, :string
    add_column :contents, :h1, :string
    add_column :contents, :intro_text, :text
    add_column :contents, :schema_markup, :text
  end
end
```

### rails-solar/db/migrate/20250722053336_add_utm_fields_to_leads.rb
```
class AddUtmFieldsToLeads < ActiveRecord::Migration[7.0]
  def change
    add_column :leads, :utm_campaign, :string
    add_column :leads, :utm_source, :string
    add_column :leads, :utm_medium, :string
  end
end
```

### rails-solar/db/migrate/20250722053439_add_utm_fields_to_marketing_campaigns.rb
```
class AddUtmFieldsToMarketingCampaigns < ActiveRecord::Migration[7.0]
  def change
    add_column :marketing_campaigns, :utm_campaign, :string
    add_column :marketing_campaigns, :utm_source, :string
    add_column :marketing_campaigns, :utm_medium, :string
  end
end
```

### rails-solar/db/migrate/20250722053615_add_translations_to_categories.rb
```
class AddTranslationsToCategories < ActiveRecord::Migration[7.0]
  def change
    add_column :categories, :name_translations, :text # Stores JSON
    add_column :categories, :description_translations, :text # Stores JSON
  end
end
```

### rails-solar/db/migrate/20250722053811_add_translations_to_products.rb
```
class AddTranslationsToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :name_translations, :text # Stores JSON
    add_column :products, :description_translations, :text # Stores JSON
  end
end
```

### rails-solar/db/migrate/20250722054328_create_audit_logs.rb
```
class CreateAuditLogs < ActiveRecord::Migration[7.0]
  def change
    create_table :audit_logs do |t|
      t.string :auditable_type
      t.integer :auditable_id
      t.integer :user_id
      t.string :action
      t.text :changes # Stores JSON representation of changes

      t.timestamps
    end
  end
end
```

### rails-solar/db/migrate/20250722061208_rename_changes_to_audited_changes_in_audit_logs.rb
```
class RenameChangesToAuditedChangesInAuditLogs < ActiveRecord::Migration[7.0]
  def change
    rename_column :audit_logs, :changes, :audited_changes
  end
end
```

### rails-solar/db/migrate/20250723020515_add_role_to_admin_users.rb
```
class AddRoleToAdminUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :admin_users, :role, :integer
  end
end
```

### rails-solar/db/development.sqlite3 (binary)

### rails-solar/db/schema.rb
```
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2025_07_22_061208) do
  create_table "action_text_rich_texts", force: :cascade do |t|
    t.string "name", null: false
    t.text "body"
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["record_type", "record_id", "name"], name: "index_action_text_rich_texts_uniqueness", unique: true
  end

  create_table "active_admin_comments", force: :cascade do |t|
    t.string "namespace"
    t.text "body"
    t.string "resource_type"
    t.integer "resource_id"
    t.string "author_type"
    t.integer "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author"
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace"
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource"
  end

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.integer "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "admin_users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admin_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true
  end

  create_table "assess_campaigns", force: :cascade do |t|
    t.integer "product_id", null: false
    t.string "title", null: false
    t.string "code", null: false
    t.integer "owner_id", null: false
    t.integer "goal", null: false
    t.integer "achieved"
    t.integer "shares"
    t.string "prize"
    t.datetime "starts_at", precision: nil, null: false
    t.datetime "ends_at", precision: nil, null: false
    t.integer "debutantes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "status", default: 0, null: false
    t.index ["owner_id"], name: "index_assess_campaigns_on_owner_id"
    t.index ["product_id"], name: "index_assess_campaigns_on_product_id"
    t.index ["status"], name: "index_assess_campaigns_on_status"
  end

  create_table "audit_logs", force: :cascade do |t|
    t.string "auditable_type"
    t.integer "auditable_id"
    t.integer "user_id"
    t.string "action"
    t.text "audited_changes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
    t.string "slug", null: false
    t.text "description"
    t.integer "parent_id"
    t.boolean "active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "seo_title"
    t.text "seo_description"
    t.string "seo_keywords"
    t.string "canonical_url"
    t.string "meta_robots"
    t.string "h1"
    t.text "intro_text"
    t.text "schema_markup"
    t.text "name_translations"
    t.text "description_translations"
    t.index ["parent_id"], name: "index_categories_on_parent_id"
    t.index ["slug", "parent_id"], name: "index_categories_on_slug_and_parent_id", unique: true
    t.index ["slug"], name: "index_categories_on_slug", unique: true
  end

  create_table "categories_products", id: false, force: :cascade do |t|
    t.integer "category_id", null: false
    t.integer "product_id", null: false
    t.index ["category_id", "product_id"], name: "index_categories_products_on_category_and_product", unique: true
    t.index ["product_id", "category_id"], name: "index_categories_products_on_product_and_category"
  end

  create_table "certifications", force: :cascade do |t|
    t.integer "company_id", null: false
    t.string "name", null: false
    t.string "issued_by", null: false
    t.date "issued_at", null: false
    t.date "expires_at", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_certifications_on_company_id"
    t.index ["expires_at"], name: "index_certifications_on_expires_at"
    t.index ["issued_at"], name: "index_certifications_on_issued_at"
  end

  create_table "comments", force: :cascade do |t|
    t.integer "post_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_comments_on_post_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "companies", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.integer "user_id", null: false
    t.boolean "verified"
    t.integer "target_segment"
    t.decimal "annual_energy_output"
    t.integer "installation_count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "location"
    t.index ["location"], name: "index_companies_on_location"
    t.index ["target_segment"], name: "index_companies_on_target_segment"
    t.index ["user_id"], name: "index_companies_on_user_id"
  end

  create_table "contents", force: :cascade do |t|
    t.string "title"
    t.string "short_description"
    t.string "tags"
    t.string "lp_url"
    t.string "format"
    t.string "level"
    t.boolean "active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "seo_title"
    t.text "seo_description"
    t.string "seo_keywords"
    t.string "canonical_url"
    t.string "meta_robots"
    t.string "h1"
    t.text "intro_text"
    t.text "schema_markup"
    t.index ["format"], name: "index_contents_on_format"
    t.index ["level"], name: "index_contents_on_level"
    t.index ["lp_url"], name: "index_contents_on_lp_url"
    t.index ["tags"], name: "index_contents_on_tags"
  end

  create_table "discussions", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "product_id", null: false
    t.integer "category_id", null: false
    t.string "subject"
    t.text "body"
    t.integer "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_discussions_on_category_id"
    t.index ["product_id"], name: "index_discussions_on_product_id"
    t.index ["status"], name: "index_discussions_on_status"
    t.index ["subject"], name: "index_discussions_on_subject"
    t.index ["user_id"], name: "index_discussions_on_user_id"
  end

  create_table "feature_groups", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_feature_groups_on_name", unique: true
  end

  create_table "features", force: :cascade do |t|
    t.string "name", null: false
    t.integer "feature_group_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["feature_group_id"], name: "index_features_on_feature_group_id"
    t.index ["name", "feature_group_id"], name: "index_features_on_name_and_feature_group_id", unique: true
  end

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string "slug", null: false
    t.integer "sluggable_id", null: false
    t.string "sluggable_type", limit: 50
    t.string "scope"
    t.datetime "created_at"
    t.index ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true
    t.index ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type"
    t.index ["sluggable_type", "sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_type_and_sluggable_id"
  end

  create_table "leads", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "product_id", null: false
    t.string "name"
    t.string "email"
    t.string "role"
    t.string "company_size"
    t.string "desired_category"
    t.string "funnel_stage"
    t.integer "score"
    t.datetime "sent_at", precision: nil
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "conversion_state", default: 0
    t.string "utm_campaign"
    t.string "utm_source"
    t.string "utm_medium"
    t.index "\"lead_source\"", name: "index_leads_on_lead_source"
    t.index ["conversion_state"], name: "index_leads_on_conversion_state"
    t.index ["email"], name: "index_leads_on_email"
    t.index ["funnel_stage"], name: "index_leads_on_funnel_stage"
    t.index ["product_id"], name: "index_leads_on_product_id"
    t.index ["user_id"], name: "index_leads_on_user_id"
  end

  create_table "marketing_campaigns", force: :cascade do |t|
    t.string "name", null: false
    t.integer "channel", null: false
    t.text "template", null: false
    t.datetime "scheduled_at", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "utm_campaign"
    t.string "utm_source"
    t.string "utm_medium"
    t.index ["channel"], name: "index_marketing_campaigns_on_channel"
    t.index ["scheduled_at"], name: "index_marketing_campaigns_on_scheduled_at"
  end

  create_table "noticed_events", force: :cascade do |t|
    t.string "type"
    t.string "record_type"
    t.bigint "record_id"
    t.json "params"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "notifications_count"
    t.index ["notifications_count"], name: "index_noticed_events_on_notifications_count"
    t.index ["record_type", "record_id"], name: "index_noticed_events_on_record"
    t.index ["type"], name: "index_noticed_events_on_type"
  end

  create_table "noticed_notifications", force: :cascade do |t|
    t.string "type"
    t.bigint "event_id", null: false
    t.string "recipient_type", null: false
    t.bigint "recipient_id", null: false
    t.datetime "read_at", precision: nil
    t.datetime "seen_at", precision: nil
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_noticed_notifications_on_event_id"
    t.index ["read_at"], name: "index_noticed_notifications_on_read_at"
    t.index ["recipient_type", "recipient_id"], name: "index_noticed_notifications_on_recipient"
    t.index ["seen_at"], name: "index_noticed_notifications_on_seen_at"
    t.index ["type"], name: "index_noticed_notifications_on_type"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "views", default: 0
    t.integer "user_id", null: false
    t.datetime "published_at"
    t.index ["published_at"], name: "index_posts_on_published_at"
    t.index ["user_id"], name: "index_posts_on_user_id"
    t.index ["views"], name: "index_posts_on_views"
  end

  create_table "pricing_rules", force: :cascade do |t|
    t.string "name", null: false
    t.text "condition", null: false
    t.decimal "discount_pct", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discount_pct"], name: "index_pricing_rules_on_discount_pct"
    t.index ["name"], name: "index_pricing_rules_on_name"
  end

  create_table "pricings", force: :cascade do |t|
    t.integer "product_id", null: false
    t.string "title", null: false
    t.string "currency", null: false
    t.decimal "value", null: false
    t.string "charge_type", null: false
    t.string "frequency", null: false
    t.text "payment_methods"
    t.integer "position"
    t.string "state"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["charge_type"], name: "index_pricings_on_charge_type"
    t.index ["currency"], name: "index_pricings_on_currency"
    t.index ["frequency"], name: "index_pricings_on_frequency"
    t.index ["product_id"], name: "index_pricings_on_product_id"
    t.index ["state"], name: "index_pricings_on_state"
  end

  create_table "products", force: :cascade do |t|
    t.string "name", null: false
    t.string "seo_url"
    t.string "seo_title", null: false
    t.string "status", null: false
    t.string "kind", null: false
    t.date "premium_until"
    t.string "source"
    t.string "country"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "name_translations"
    t.text "description_translations"
    t.index ["country"], name: "index_products_on_country"
    t.index ["kind"], name: "index_products_on_kind"
    t.index ["seo_url"], name: "index_products_on_seo_url", unique: true
    t.index ["source"], name: "index_products_on_source"
    t.index ["status"], name: "index_products_on_status"
  end

  create_table "quotes", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "phone", null: false
    t.text "message", null: false
    t.integer "company_id", null: false
    t.integer "status", default: 0, null: false
    t.decimal "estimated_kwh"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_quotes_on_company_id"
    t.index ["email"], name: "index_quotes_on_email"
    t.index ["phone"], name: "index_quotes_on_phone"
    t.index ["status"], name: "index_quotes_on_status"
  end

  create_table "replies", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "discussion_id", null: false
    t.text "body", null: false
    t.integer "status", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discussion_id"], name: "index_replies_on_discussion_id"
    t.index ["status"], name: "index_replies_on_status"
    t.index ["user_id"], name: "index_replies_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "company_id", null: false
    t.integer "rating", null: false
    t.string "title", null: false
    t.text "content", null: false
    t.integer "status", default: 0, null: false
    t.boolean "cliente"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_reviews_on_company_id"
    t.index ["rating"], name: "index_reviews_on_rating"
    t.index ["status"], name: "index_reviews_on_status"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "saa_s_leads", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "phone_number"
    t.string "preferred_contact_time"
    t.string "contact_method"
    t.string "company_name"
    t.string "building_type"
    t.string "roof_type"
    t.decimal "available_roof_area", precision: 8, scale: 2
    t.string "address"
    t.string "city"
    t.string "state"
    t.integer "monthly_energy_consumption_kwh"
    t.string "budget_range"
    t.string "decision_timeline"
    t.string "current_energy_provider"
    t.integer "score", default: 0
    t.integer "status", default: 0, null: false
    t.text "pain_points"
    t.string "competitor_considered"
    t.string "lead_source"
    t.string "utm_campaign"
    t.string "utm_source"
    t.string "utm_medium"
    t.integer "saas_plan_id"
    t.boolean "b2b", default: false
    t.string "funnel_stage"
    t.boolean "site_visit_scheduled", default: false
    t.datetime "site_visit_date"
    t.datetime "converted_at"
    t.datetime "proposal_sent_at"
    t.datetime "follow_up_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["b2b"], name: "index_saa_s_leads_on_b2b"
    t.index ["email"], name: "index_saa_s_leads_on_email"
    t.index ["funnel_stage"], name: "index_saa_s_leads_on_funnel_stage"
    t.index ["lead_source"], name: "index_saa_s_leads_on_lead_source"
    t.index ["saas_plan_id"], name: "index_saa_s_leads_on_saas_plan_id"
    t.index ["score"], name: "index_saa_s_leads_on_score"
    t.index ["status"], name: "index_saa_s_leads_on_status"
  end

  create_table "saa_s_plans", force: :cascade do |t|
    t.string "name"
    t.integer "saas_product_id", null: false
    t.string "tier"
    t.text "features"
    t.decimal "price"
    t.boolean "active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["active"], name: "index_saa_s_plans_on_active"
    t.index ["saas_product_id"], name: "index_saa_s_plans_on_saas_product_id"
    t.index ["tier"], name: "index_saa_s_plans_on_tier"
  end

  create_table "saa_s_products", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.decimal "price", null: false
    t.string "billing_cycle", null: false
    t.text "features"
    t.boolean "active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status", null: false
    t.index ["active"], name: "index_saa_s_products_on_active"
    t.index ["status"], name: "index_saa_s_products_on_status"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.integer "views", default: 0
    t.string "role"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["name"], name: "index_users_on_name"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["role"], name: "index_users_on_role"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "assess_campaigns", "products"
  add_foreign_key "assess_campaigns", "products"
  add_foreign_key "assess_campaigns", "users", column: "owner_id"
  add_foreign_key "assess_campaigns", "users", column: "owner_id"
  add_foreign_key "certifications", "companies"
  add_foreign_key "comments", "posts"
  add_foreign_key "comments", "users"
  add_foreign_key "companies", "users"
  add_foreign_key "discussions", "products"
  add_foreign_key "discussions", "users"
  add_foreign_key "features", "feature_groups"
  add_foreign_key "leads", "products"
  add_foreign_key "leads", "users"
  add_foreign_key "posts", "users"
  add_foreign_key "pricings", "products"
  add_foreign_key "quotes", "companies"
  add_foreign_key "replies", "discussions"
  add_foreign_key "replies", "users"
  add_foreign_key "reviews", "companies"
  add_foreign_key "reviews", "users"
  add_foreign_key "saa_s_leads", "saas_plans"
  add_foreign_key "saa_s_plans", "saas_products"
end
```

### rails-solar/db/seeds.rb
```
user1 = User.create(email: 'test1@test.com', name: 'test1', password: 'password', password_confirmation: 'password', role: :editor)
user2 = User.create(email: 'test2@test.com', name: 'test2', password: 'password', password_confirmation: 'password', role: :editor)

3.times do |i|
  post1 = Post.create(title: "Title #{i}", body: "Body #{i} words goes here idk...", user_id: user1.id)
  post2 = Post.create(title: "Title #{i}", body: "Body #{i} words goes here idk...", user_id: user2.id)

  3.times do |_j|
    Comment.create(post_id: post1.id, user_id: user2.id, body: "Comment body for Post #{post1.id} by User #{user2.id}")
    Comment.create(post_id: post2.id, user_id: user1.id, body: "Comment body for Post #{post2.id} by User #{user1.id}")
  end
end

# Create some categories with a simple parent/child hierarchy
tech = Category.create!(name: 'Solar Technology')
%w[Panels Inverters Batteries 'Mounting Systems'].each do |child_name|
  Category.create!(name: child_name, parent: tech)
end

services = Category.create!(name: 'Services')
%w[Installation Maintenance Consulting Financing Monitoring].each do |child_name|
  Category.create!(name: child_name, parent: services)
end

# Create five companies tied to the users created above
5.times do |i|
  owner = i.even? ? user1 : user2
  Company.create!(
    name: "Company #{i + 1}",
    description: "Demo company number #{i + 1}",
    location: "City #{i + 1}",
    target_segment: Company.target_segments.keys.sample,
    user: owner,
    verified: [true, false].sample,
    annual_energy_output: rand(500..1500),
    installation_count: rand(10..100)
  )
end

if Rails.env.development?
  AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password', role: :admin)
end
```

### rails-solar/lib/assets/.keep
```

```

### rails-solar/lib/tasks/.keep
```

```

### rails-solar/log/.keep
```

```

### rails-solar/log/development.log
```
Started GET "/" for 172.20.0.1 at 2025-07-25 19:38:18 +0000
Cannot render console from 172.20.0.1! Allowed networks: 127.0.0.0/127.255.255.255, ::1
  [1m[35m (2.7ms)[0m  [1m[35mCREATE TABLE "schema_migrations" ("version" varchar NOT NULL PRIMARY KEY)[0m
  [1m[35m (2.3ms)[0m  [1m[35mCREATE TABLE "ar_internal_metadata" ("key" varchar NOT NULL PRIMARY KEY, "value" varchar, "created_at" datetime(6) NOT NULL, "updated_at" datetime(6) NOT NULL)[0m
  [1m[36mActiveRecord::SchemaMigration Pluck (0.0ms)[0m  [1m[34mSELECT "schema_migrations"."version" FROM "schema_migrations" ORDER BY "schema_migrations"."version" ASC[0m
  
ActiveRecord::PendingMigrationError (

Migrations are pending. To resolve this issue, run:

        bin/rails db:migrate RAILS_ENV=development

You have 77 pending migrations:

20230712221836_create_posts.rb
20230713193131_add_views_to_posts.rb
20230714162304_devise_create_users.rb
20230714202502_add_user_to_posts.rb
20230714213543_add_name_to_user.rb
20230714232351_add_views_to_user.rb
20230714232857_change_views_for_users.rb
20230716133433_create_comments.rb
20230716140302_create_active_storage_tables.active_storage.rb
20230716140303_create_action_text_tables.action_text.rb
20230815221100_add_service_name_to_active_storage_blobs.active_storage.rb
20230815221101_create_active_storage_variant_records.active_storage.rb
20230815221102_remove_not_null_on_active_storage_blobs_checksum.active_storage.rb
20240329223906_create_noticed_tables.noticed.rb
20240329223907_add_notifications_count_to_noticed_event.noticed.rb
20240508205056_devise_create_admin_users.rb
20240508205057_create_active_admin_comments.rb
20240508205200_add_published_at_to_posts.rb
20250720214050_add_devise_to_admin_users.rb
20250720220115_create_companies.rb
20250720220204_create_certifications.rb
20250720220246_create_reviews.rb
20250720220410_create_quotes.rb
20250720220529_create_marketing_campaigns.rb
20250720220705_create_pricing_rules.rb
20250720221154_create_pricings.rb
20250720221250_create_products.rb
20250720221400_create_feature_groups.rb
20250720221455_create_features.rb
20250720221529_create_leads.rb
20250720221646_create_assess_campaigns.rb
20250720221941_create_categories.rb
20250720222048_create_contents.rb
20250720222221_create_discussions.rb
20250720222527_create_replies.rb
20250720222606_create_saa_s_products.rb
20250720222717_create_saa_s_plans.rb
20250721033234_add_location_to_companies.rb
20250721040259_add_seo_fields_to_categories.rb
20250721154008_create_friendly_id_slugs.rb
20250721173435_create_join_table_categories_products.rb
20250721192447_remove_ancestry_from_categories.rb
20250721220000_change_status_to_integer_in_assess_campaigns.rb
20250721221000_add_constraints_and_indexes.rb
20250721231545_create_saa_s_leads.rb
20250722001659_add_role_to_users.rb
20250722002239_add_status_to_saa_s_products.rb
20250722025131_change_value_to_decimal_in_pricings.rb
20250722025147_change_annual_energy_output_to_decimal_in_companies.rb
20250722025329_change_sent_at_to_datetime_in_leads.rb
20250722025349_change_dates_to_datetime_in_assess_campaigns.rb
20250722025833_add_not_null_to_name_and_description_in_companies.rb
20250722030547_add_not_null_to_certifications_fields.rb
20250722030719_add_not_null_and_default_to_reviews_fields.rb
20250722030827_add_not_null_and_default_to_quotes_fields.rb
20250722031011_add_not_null_to_marketing_campaigns_fields.rb
20250722031137_add_not_null_to_pricing_rules_fields.rb
20250722031330_add_not_null_to_pricings_fields.rb
20250722031544_add_not_null_and_unique_index_to_products_fields.rb
20250722032046_add_not_null_and_unique_index_to_feature_groups_name.rb
20250722032205_add_not_null_and_unique_index_to_features_name.rb
20250722032552_add_conversion_state_to_leads.rb
20250722035548_add_not_null_to_assess_campaigns_fields.rb
20250722040309_update_categories_constraints.rb
20250722050605_add_not_null_and_default_to_replies_fields.rb
20250722050727_add_not_null_to_saas_products_fields.rb
20250722051620_add_not_null_to_posts_fields.rb
20250722052427_remove_old_category_foreign_key_from_discussions.rb
20250722052643_add_missing_indexes.rb
20250722053138_add_seo_fields_to_contents.rb
20250722053336_add_utm_fields_to_leads.rb
20250722053439_add_utm_fields_to_marketing_campaigns.rb
20250722053615_add_translations_to_categories.rb
20250722053811_add_translations_to_products.rb
20250722054328_create_audit_logs.rb
20250722061208_rename_changes_to_audited_changes_in_audit_logs.rb
20250723020515_add_role_to_admin_users.rb


):
  
activerecord (7.0.6) lib/active_record/migration.rb:627:in `check_pending!'
activerecord (7.0.6) lib/active_record/migration.rb:592:in `block (2 levels) in call'
activesupport (7.0.6) lib/active_support/file_update_checker.rb:83:in `execute'
activerecord (7.0.6) lib/active_record/migration.rb:597:in `block in call'
activerecord (7.0.6) lib/active_record/migration.rb:589:in `synchronize'
activerecord (7.0.6) lib/active_record/migration.rb:589:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/callbacks.rb:27:in `block in call'
activesupport (7.0.6) lib/active_support/callbacks.rb:99:in `run_callbacks'
actionpack (7.0.6) lib/action_dispatch/middleware/callbacks.rb:26:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/executor.rb:14:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/actionable_exceptions.rb:17:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/debug_exceptions.rb:28:in `call'
web-console (4.2.0) lib/web_console/middleware.rb:132:in `call_app'
web-console (4.2.0) lib/web_console/middleware.rb:19:in `block in call'
web-console (4.2.0) lib/web_console/middleware.rb:17:in `catch'
web-console (4.2.0) lib/web_console/middleware.rb:17:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/show_exceptions.rb:29:in `call'
railties (7.0.6) lib/rails/rack/logger.rb:40:in `call_app'
railties (7.0.6) lib/rails/rack/logger.rb:25:in `block in call'
activesupport (7.0.6) lib/active_support/tagged_logging.rb:99:in `block in tagged'
activesupport (7.0.6) lib/active_support/tagged_logging.rb:37:in `tagged'
activesupport (7.0.6) lib/active_support/tagged_logging.rb:99:in `tagged'
railties (7.0.6) lib/rails/rack/logger.rb:25:in `call'
sprockets-rails (3.4.2) lib/sprockets/rails/quiet_assets.rb:13:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/remote_ip.rb:93:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/request_id.rb:26:in `call'
rack (2.2.7) lib/rack/method_override.rb:24:in `call'
rack (2.2.7) lib/rack/runtime.rb:22:in `call'
activesupport (7.0.6) lib/active_support/cache/strategy/local_cache_middleware.rb:29:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/server_timing.rb:61:in `block in call'
actionpack (7.0.6) lib/action_dispatch/middleware/server_timing.rb:26:in `collect_events'
actionpack (7.0.6) lib/action_dispatch/middleware/server_timing.rb:60:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/executor.rb:14:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/static.rb:23:in `call'
rack (2.2.7) lib/rack/sendfile.rb:110:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/host_authorization.rb:137:in `call'
rack-cors (2.0.2) lib/rack/cors.rb:102:in `call'
railties (7.0.6) lib/rails/engine.rb:530:in `call'
puma (5.6.6) lib/puma/configuration.rb:252:in `call'
puma (5.6.6) lib/puma/request.rb:77:in `block in handle_request'
puma (5.6.6) lib/puma/thread_pool.rb:340:in `with_force_shutdown'
puma (5.6.6) lib/puma/request.rb:76:in `handle_request'
puma (5.6.6) lib/puma/server.rb:443:in `process_client'
puma (5.6.6) lib/puma/thread_pool.rb:147:in `block in spawn_thread'
Started GET "/" for 172.20.0.1 at 2025-07-25 19:42:29 +0000
Cannot render console from 172.20.0.1! Allowed networks: 127.0.0.0/127.255.255.255, ::1
  [1m[36mActiveRecord::SchemaMigration Pluck (0.0ms)[0m  [1m[34mSELECT "schema_migrations"."version" FROM "schema_migrations" ORDER BY "schema_migrations"."version" ASC[0m
  [1m[36mCACHE ActiveRecord::SchemaMigration Pluck (0.0ms)[0m  [1m[34mSELECT "schema_migrations"."version" FROM "schema_migrations" ORDER BY "schema_migrations"."version" ASC[0m
  
ActiveRecord::PendingMigrationError (

Migrations are pending. To resolve this issue, run:

        bin/rails db:migrate RAILS_ENV=development

You have 77 pending migrations:

20230712221836_create_posts.rb
20230713193131_add_views_to_posts.rb
20230714162304_devise_create_users.rb
20230714202502_add_user_to_posts.rb
20230714213543_add_name_to_user.rb
20230714232351_add_views_to_user.rb
20230714232857_change_views_for_users.rb
20230716133433_create_comments.rb
20230716140302_create_active_storage_tables.active_storage.rb
20230716140303_create_action_text_tables.action_text.rb
20230815221100_add_service_name_to_active_storage_blobs.active_storage.rb
20230815221101_create_active_storage_variant_records.active_storage.rb
20230815221102_remove_not_null_on_active_storage_blobs_checksum.active_storage.rb
20240329223906_create_noticed_tables.noticed.rb
20240329223907_add_notifications_count_to_noticed_event.noticed.rb
20240508205056_devise_create_admin_users.rb
20240508205057_create_active_admin_comments.rb
20240508205200_add_published_at_to_posts.rb
20250720214050_add_devise_to_admin_users.rb
20250720220115_create_companies.rb
20250720220204_create_certifications.rb
20250720220246_create_reviews.rb
20250720220410_create_quotes.rb
20250720220529_create_marketing_campaigns.rb
20250720220705_create_pricing_rules.rb
20250720221154_create_pricings.rb
20250720221250_create_products.rb
20250720221400_create_feature_groups.rb
20250720221455_create_features.rb
20250720221529_create_leads.rb
20250720221646_create_assess_campaigns.rb
20250720221941_create_categories.rb
20250720222048_create_contents.rb
20250720222221_create_discussions.rb
20250720222527_create_replies.rb
20250720222606_create_saa_s_products.rb
20250720222717_create_saa_s_plans.rb
20250721033234_add_location_to_companies.rb
20250721040259_add_seo_fields_to_categories.rb
20250721154008_create_friendly_id_slugs.rb
20250721173435_create_join_table_categories_products.rb
20250721192447_remove_ancestry_from_categories.rb
20250721220000_change_status_to_integer_in_assess_campaigns.rb
20250721221000_add_constraints_and_indexes.rb
20250721231545_create_saa_s_leads.rb
20250722001659_add_role_to_users.rb
20250722002239_add_status_to_saa_s_products.rb
20250722025131_change_value_to_decimal_in_pricings.rb
20250722025147_change_annual_energy_output_to_decimal_in_companies.rb
20250722025329_change_sent_at_to_datetime_in_leads.rb
20250722025349_change_dates_to_datetime_in_assess_campaigns.rb
20250722025833_add_not_null_to_name_and_description_in_companies.rb
20250722030547_add_not_null_to_certifications_fields.rb
20250722030719_add_not_null_and_default_to_reviews_fields.rb
20250722030827_add_not_null_and_default_to_quotes_fields.rb
20250722031011_add_not_null_to_marketing_campaigns_fields.rb
20250722031137_add_not_null_to_pricing_rules_fields.rb
20250722031330_add_not_null_to_pricings_fields.rb
20250722031544_add_not_null_and_unique_index_to_products_fields.rb
20250722032046_add_not_null_and_unique_index_to_feature_groups_name.rb
20250722032205_add_not_null_and_unique_index_to_features_name.rb
20250722032552_add_conversion_state_to_leads.rb
20250722035548_add_not_null_to_assess_campaigns_fields.rb
20250722040309_update_categories_constraints.rb
20250722050605_add_not_null_and_default_to_replies_fields.rb
20250722050727_add_not_null_to_saas_products_fields.rb
20250722051620_add_not_null_to_posts_fields.rb
20250722052427_remove_old_category_foreign_key_from_discussions.rb
20250722052643_add_missing_indexes.rb
20250722053138_add_seo_fields_to_contents.rb
20250722053336_add_utm_fields_to_leads.rb
20250722053439_add_utm_fields_to_marketing_campaigns.rb
20250722053615_add_translations_to_categories.rb
20250722053811_add_translations_to_products.rb
20250722054328_create_audit_logs.rb
20250722061208_rename_changes_to_audited_changes_in_audit_logs.rb
20250723020515_add_role_to_admin_users.rb


):
  
activerecord (7.0.6) lib/active_record/migration.rb:627:in `check_pending!'
activerecord (7.0.6) lib/active_record/migration.rb:592:in `block (2 levels) in call'
activesupport (7.0.6) lib/active_support/file_update_checker.rb:83:in `execute'
activerecord (7.0.6) lib/active_record/migration.rb:597:in `block in call'
activerecord (7.0.6) lib/active_record/migration.rb:589:in `synchronize'
activerecord (7.0.6) lib/active_record/migration.rb:589:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/callbacks.rb:27:in `block in call'
activesupport (7.0.6) lib/active_support/callbacks.rb:99:in `run_callbacks'
actionpack (7.0.6) lib/action_dispatch/middleware/callbacks.rb:26:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/executor.rb:14:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/actionable_exceptions.rb:17:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/debug_exceptions.rb:28:in `call'
web-console (4.2.0) lib/web_console/middleware.rb:132:in `call_app'
web-console (4.2.0) lib/web_console/middleware.rb:19:in `block in call'
web-console (4.2.0) lib/web_console/middleware.rb:17:in `catch'
web-console (4.2.0) lib/web_console/middleware.rb:17:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/show_exceptions.rb:29:in `call'
railties (7.0.6) lib/rails/rack/logger.rb:40:in `call_app'
railties (7.0.6) lib/rails/rack/logger.rb:25:in `block in call'
activesupport (7.0.6) lib/active_support/tagged_logging.rb:99:in `block in tagged'
activesupport (7.0.6) lib/active_support/tagged_logging.rb:37:in `tagged'
activesupport (7.0.6) lib/active_support/tagged_logging.rb:99:in `tagged'
railties (7.0.6) lib/rails/rack/logger.rb:25:in `call'
sprockets-rails (3.4.2) lib/sprockets/rails/quiet_assets.rb:13:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/remote_ip.rb:93:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/request_id.rb:26:in `call'
rack (2.2.7) lib/rack/method_override.rb:24:in `call'
rack (2.2.7) lib/rack/runtime.rb:22:in `call'
activesupport (7.0.6) lib/active_support/cache/strategy/local_cache_middleware.rb:29:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/server_timing.rb:61:in `block in call'
actionpack (7.0.6) lib/action_dispatch/middleware/server_timing.rb:26:in `collect_events'
actionpack (7.0.6) lib/action_dispatch/middleware/server_timing.rb:60:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/executor.rb:14:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/static.rb:23:in `call'
rack (2.2.7) lib/rack/sendfile.rb:110:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/host_authorization.rb:137:in `call'
rack-cors (2.0.2) lib/rack/cors.rb:102:in `call'
railties (7.0.6) lib/rails/engine.rb:530:in `call'
puma (5.6.6) lib/puma/configuration.rb:252:in `call'
puma (5.6.6) lib/puma/request.rb:77:in `block in handle_request'
puma (5.6.6) lib/puma/thread_pool.rb:340:in `with_force_shutdown'
puma (5.6.6) lib/puma/request.rb:76:in `handle_request'
puma (5.6.6) lib/puma/server.rb:443:in `process_client'
puma (5.6.6) lib/puma/thread_pool.rb:147:in `block in spawn_thread'
Started GET "/" for 172.20.0.1 at 2025-07-25 19:42:30 +0000
Cannot render console from 172.20.0.1! Allowed networks: 127.0.0.0/127.255.255.255, ::1
  [1m[36mActiveRecord::SchemaMigration Pluck (0.0ms)[0m  [1m[34mSELECT "schema_migrations"."version" FROM "schema_migrations" ORDER BY "schema_migrations"."version" ASC[0m
  [1m[36mCACHE ActiveRecord::SchemaMigration Pluck (0.0ms)[0m  [1m[34mSELECT "schema_migrations"."version" FROM "schema_migrations" ORDER BY "schema_migrations"."version" ASC[0m
  
ActiveRecord::PendingMigrationError (

Migrations are pending. To resolve this issue, run:

        bin/rails db:migrate RAILS_ENV=development

You have 77 pending migrations:

20230712221836_create_posts.rb
20230713193131_add_views_to_posts.rb
20230714162304_devise_create_users.rb
20230714202502_add_user_to_posts.rb
20230714213543_add_name_to_user.rb
20230714232351_add_views_to_user.rb
20230714232857_change_views_for_users.rb
20230716133433_create_comments.rb
20230716140302_create_active_storage_tables.active_storage.rb
20230716140303_create_action_text_tables.action_text.rb
20230815221100_add_service_name_to_active_storage_blobs.active_storage.rb
20230815221101_create_active_storage_variant_records.active_storage.rb
20230815221102_remove_not_null_on_active_storage_blobs_checksum.active_storage.rb
20240329223906_create_noticed_tables.noticed.rb
20240329223907_add_notifications_count_to_noticed_event.noticed.rb
20240508205056_devise_create_admin_users.rb
20240508205057_create_active_admin_comments.rb
20240508205200_add_published_at_to_posts.rb
20250720214050_add_devise_to_admin_users.rb
20250720220115_create_companies.rb
20250720220204_create_certifications.rb
20250720220246_create_reviews.rb
20250720220410_create_quotes.rb
20250720220529_create_marketing_campaigns.rb
20250720220705_create_pricing_rules.rb
20250720221154_create_pricings.rb
20250720221250_create_products.rb
20250720221400_create_feature_groups.rb
20250720221455_create_features.rb
20250720221529_create_leads.rb
20250720221646_create_assess_campaigns.rb
20250720221941_create_categories.rb
20250720222048_create_contents.rb
20250720222221_create_discussions.rb
20250720222527_create_replies.rb
20250720222606_create_saa_s_products.rb
20250720222717_create_saa_s_plans.rb
20250721033234_add_location_to_companies.rb
20250721040259_add_seo_fields_to_categories.rb
20250721154008_create_friendly_id_slugs.rb
20250721173435_create_join_table_categories_products.rb
20250721192447_remove_ancestry_from_categories.rb
20250721220000_change_status_to_integer_in_assess_campaigns.rb
20250721221000_add_constraints_and_indexes.rb
20250721231545_create_saa_s_leads.rb
20250722001659_add_role_to_users.rb
20250722002239_add_status_to_saa_s_products.rb
20250722025131_change_value_to_decimal_in_pricings.rb
20250722025147_change_annual_energy_output_to_decimal_in_companies.rb
20250722025329_change_sent_at_to_datetime_in_leads.rb
20250722025349_change_dates_to_datetime_in_assess_campaigns.rb
20250722025833_add_not_null_to_name_and_description_in_companies.rb
20250722030547_add_not_null_to_certifications_fields.rb
20250722030719_add_not_null_and_default_to_reviews_fields.rb
20250722030827_add_not_null_and_default_to_quotes_fields.rb
20250722031011_add_not_null_to_marketing_campaigns_fields.rb
20250722031137_add_not_null_to_pricing_rules_fields.rb
20250722031330_add_not_null_to_pricings_fields.rb
20250722031544_add_not_null_and_unique_index_to_products_fields.rb
20250722032046_add_not_null_and_unique_index_to_feature_groups_name.rb
20250722032205_add_not_null_and_unique_index_to_features_name.rb
20250722032552_add_conversion_state_to_leads.rb
20250722035548_add_not_null_to_assess_campaigns_fields.rb
20250722040309_update_categories_constraints.rb
20250722050605_add_not_null_and_default_to_replies_fields.rb
20250722050727_add_not_null_to_saas_products_fields.rb
20250722051620_add_not_null_to_posts_fields.rb
20250722052427_remove_old_category_foreign_key_from_discussions.rb
20250722052643_add_missing_indexes.rb
20250722053138_add_seo_fields_to_contents.rb
20250722053336_add_utm_fields_to_leads.rb
20250722053439_add_utm_fields_to_marketing_campaigns.rb
20250722053615_add_translations_to_categories.rb
20250722053811_add_translations_to_products.rb
20250722054328_create_audit_logs.rb
20250722061208_rename_changes_to_audited_changes_in_audit_logs.rb
20250723020515_add_role_to_admin_users.rb


):
  
activerecord (7.0.6) lib/active_record/migration.rb:627:in `check_pending!'
activerecord (7.0.6) lib/active_record/migration.rb:592:in `block (2 levels) in call'
activesupport (7.0.6) lib/active_support/file_update_checker.rb:83:in `execute'
activerecord (7.0.6) lib/active_record/migration.rb:597:in `block in call'
activerecord (7.0.6) lib/active_record/migration.rb:589:in `synchronize'
activerecord (7.0.6) lib/active_record/migration.rb:589:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/callbacks.rb:27:in `block in call'
activesupport (7.0.6) lib/active_support/callbacks.rb:99:in `run_callbacks'
actionpack (7.0.6) lib/action_dispatch/middleware/callbacks.rb:26:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/executor.rb:14:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/actionable_exceptions.rb:17:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/debug_exceptions.rb:28:in `call'
web-console (4.2.0) lib/web_console/middleware.rb:132:in `call_app'
web-console (4.2.0) lib/web_console/middleware.rb:19:in `block in call'
web-console (4.2.0) lib/web_console/middleware.rb:17:in `catch'
web-console (4.2.0) lib/web_console/middleware.rb:17:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/show_exceptions.rb:29:in `call'
railties (7.0.6) lib/rails/rack/logger.rb:40:in `call_app'
railties (7.0.6) lib/rails/rack/logger.rb:25:in `block in call'
activesupport (7.0.6) lib/active_support/tagged_logging.rb:99:in `block in tagged'
activesupport (7.0.6) lib/active_support/tagged_logging.rb:37:in `tagged'
activesupport (7.0.6) lib/active_support/tagged_logging.rb:99:in `tagged'
railties (7.0.6) lib/rails/rack/logger.rb:25:in `call'
sprockets-rails (3.4.2) lib/sprockets/rails/quiet_assets.rb:13:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/remote_ip.rb:93:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/request_id.rb:26:in `call'
rack (2.2.7) lib/rack/method_override.rb:24:in `call'
rack (2.2.7) lib/rack/runtime.rb:22:in `call'
activesupport (7.0.6) lib/active_support/cache/strategy/local_cache_middleware.rb:29:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/server_timing.rb:61:in `block in call'
actionpack (7.0.6) lib/action_dispatch/middleware/server_timing.rb:26:in `collect_events'
actionpack (7.0.6) lib/action_dispatch/middleware/server_timing.rb:60:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/executor.rb:14:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/static.rb:23:in `call'
rack (2.2.7) lib/rack/sendfile.rb:110:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/host_authorization.rb:137:in `call'
rack-cors (2.0.2) lib/rack/cors.rb:102:in `call'
railties (7.0.6) lib/rails/engine.rb:530:in `call'
puma (5.6.6) lib/puma/configuration.rb:252:in `call'
puma (5.6.6) lib/puma/request.rb:77:in `block in handle_request'
puma (5.6.6) lib/puma/thread_pool.rb:340:in `with_force_shutdown'
puma (5.6.6) lib/puma/request.rb:76:in `handle_request'
puma (5.6.6) lib/puma/server.rb:443:in `process_client'
puma (5.6.6) lib/puma/thread_pool.rb:147:in `block in spawn_thread'
Started GET "/" for 172.20.0.1 at 2025-07-25 19:42:37 +0000
Cannot render console from 172.20.0.1! Allowed networks: 127.0.0.0/127.255.255.255, ::1
  [1m[36mActiveRecord::SchemaMigration Pluck (0.1ms)[0m  [1m[34mSELECT "schema_migrations"."version" FROM "schema_migrations" ORDER BY "schema_migrations"."version" ASC[0m
  [1m[36mCACHE ActiveRecord::SchemaMigration Pluck (0.0ms)[0m  [1m[34mSELECT "schema_migrations"."version" FROM "schema_migrations" ORDER BY "schema_migrations"."version" ASC[0m
  
ActiveRecord::PendingMigrationError (

Migrations are pending. To resolve this issue, run:

        bin/rails db:migrate RAILS_ENV=development

You have 77 pending migrations:

20230712221836_create_posts.rb
20230713193131_add_views_to_posts.rb
20230714162304_devise_create_users.rb
20230714202502_add_user_to_posts.rb
20230714213543_add_name_to_user.rb
20230714232351_add_views_to_user.rb
20230714232857_change_views_for_users.rb
20230716133433_create_comments.rb
20230716140302_create_active_storage_tables.active_storage.rb
20230716140303_create_action_text_tables.action_text.rb
20230815221100_add_service_name_to_active_storage_blobs.active_storage.rb
20230815221101_create_active_storage_variant_records.active_storage.rb
20230815221102_remove_not_null_on_active_storage_blobs_checksum.active_storage.rb
20240329223906_create_noticed_tables.noticed.rb
20240329223907_add_notifications_count_to_noticed_event.noticed.rb
20240508205056_devise_create_admin_users.rb
20240508205057_create_active_admin_comments.rb
20240508205200_add_published_at_to_posts.rb
20250720214050_add_devise_to_admin_users.rb
20250720220115_create_companies.rb
20250720220204_create_certifications.rb
20250720220246_create_reviews.rb
20250720220410_create_quotes.rb
20250720220529_create_marketing_campaigns.rb
20250720220705_create_pricing_rules.rb
20250720221154_create_pricings.rb
20250720221250_create_products.rb
20250720221400_create_feature_groups.rb
20250720221455_create_features.rb
20250720221529_create_leads.rb
20250720221646_create_assess_campaigns.rb
20250720221941_create_categories.rb
20250720222048_create_contents.rb
20250720222221_create_discussions.rb
20250720222527_create_replies.rb
20250720222606_create_saa_s_products.rb
20250720222717_create_saa_s_plans.rb
20250721033234_add_location_to_companies.rb
20250721040259_add_seo_fields_to_categories.rb
20250721154008_create_friendly_id_slugs.rb
20250721173435_create_join_table_categories_products.rb
20250721192447_remove_ancestry_from_categories.rb
20250721220000_change_status_to_integer_in_assess_campaigns.rb
20250721221000_add_constraints_and_indexes.rb
20250721231545_create_saa_s_leads.rb
20250722001659_add_role_to_users.rb
20250722002239_add_status_to_saa_s_products.rb
20250722025131_change_value_to_decimal_in_pricings.rb
20250722025147_change_annual_energy_output_to_decimal_in_companies.rb
20250722025329_change_sent_at_to_datetime_in_leads.rb
20250722025349_change_dates_to_datetime_in_assess_campaigns.rb
20250722025833_add_not_null_to_name_and_description_in_companies.rb
20250722030547_add_not_null_to_certifications_fields.rb
20250722030719_add_not_null_and_default_to_reviews_fields.rb
20250722030827_add_not_null_and_default_to_quotes_fields.rb
20250722031011_add_not_null_to_marketing_campaigns_fields.rb
20250722031137_add_not_null_to_pricing_rules_fields.rb
20250722031330_add_not_null_to_pricings_fields.rb
20250722031544_add_not_null_and_unique_index_to_products_fields.rb
20250722032046_add_not_null_and_unique_index_to_feature_groups_name.rb
20250722032205_add_not_null_and_unique_index_to_features_name.rb
20250722032552_add_conversion_state_to_leads.rb
20250722035548_add_not_null_to_assess_campaigns_fields.rb
20250722040309_update_categories_constraints.rb
20250722050605_add_not_null_and_default_to_replies_fields.rb
20250722050727_add_not_null_to_saas_products_fields.rb
20250722051620_add_not_null_to_posts_fields.rb
20250722052427_remove_old_category_foreign_key_from_discussions.rb
20250722052643_add_missing_indexes.rb
20250722053138_add_seo_fields_to_contents.rb
20250722053336_add_utm_fields_to_leads.rb
20250722053439_add_utm_fields_to_marketing_campaigns.rb
20250722053615_add_translations_to_categories.rb
20250722053811_add_translations_to_products.rb
20250722054328_create_audit_logs.rb
20250722061208_rename_changes_to_audited_changes_in_audit_logs.rb
20250723020515_add_role_to_admin_users.rb


):
  
activerecord (7.0.6) lib/active_record/migration.rb:627:in `check_pending!'
activerecord (7.0.6) lib/active_record/migration.rb:592:in `block (2 levels) in call'
activesupport (7.0.6) lib/active_support/file_update_checker.rb:83:in `execute'
activerecord (7.0.6) lib/active_record/migration.rb:597:in `block in call'
activerecord (7.0.6) lib/active_record/migration.rb:589:in `synchronize'
activerecord (7.0.6) lib/active_record/migration.rb:589:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/callbacks.rb:27:in `block in call'
activesupport (7.0.6) lib/active_support/callbacks.rb:99:in `run_callbacks'
actionpack (7.0.6) lib/action_dispatch/middleware/callbacks.rb:26:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/executor.rb:14:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/actionable_exceptions.rb:17:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/debug_exceptions.rb:28:in `call'
web-console (4.2.0) lib/web_console/middleware.rb:132:in `call_app'
web-console (4.2.0) lib/web_console/middleware.rb:19:in `block in call'
web-console (4.2.0) lib/web_console/middleware.rb:17:in `catch'
web-console (4.2.0) lib/web_console/middleware.rb:17:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/show_exceptions.rb:29:in `call'
railties (7.0.6) lib/rails/rack/logger.rb:40:in `call_app'
railties (7.0.6) lib/rails/rack/logger.rb:25:in `block in call'
activesupport (7.0.6) lib/active_support/tagged_logging.rb:99:in `block in tagged'
activesupport (7.0.6) lib/active_support/tagged_logging.rb:37:in `tagged'
activesupport (7.0.6) lib/active_support/tagged_logging.rb:99:in `tagged'
railties (7.0.6) lib/rails/rack/logger.rb:25:in `call'
sprockets-rails (3.4.2) lib/sprockets/rails/quiet_assets.rb:13:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/remote_ip.rb:93:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/request_id.rb:26:in `call'
rack (2.2.7) lib/rack/method_override.rb:24:in `call'
rack (2.2.7) lib/rack/runtime.rb:22:in `call'
activesupport (7.0.6) lib/active_support/cache/strategy/local_cache_middleware.rb:29:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/server_timing.rb:61:in `block in call'
actionpack (7.0.6) lib/action_dispatch/middleware/server_timing.rb:26:in `collect_events'
actionpack (7.0.6) lib/action_dispatch/middleware/server_timing.rb:60:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/executor.rb:14:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/static.rb:23:in `call'
rack (2.2.7) lib/rack/sendfile.rb:110:in `call'
actionpack (7.0.6) lib/action_dispatch/middleware/host_authorization.rb:137:in `call'
rack-cors (2.0.2) lib/rack/cors.rb:102:in `call'
railties (7.0.6) lib/rails/engine.rb:530:in `call'
puma (5.6.6) lib/puma/configuration.rb:252:in `call'
puma (5.6.6) lib/puma/request.rb:77:in `block in handle_request'
puma (5.6.6) lib/puma/thread_pool.rb:340:in `with_force_shutdown'
puma (5.6.6) lib/puma/request.rb:76:in `handle_request'
puma (5.6.6) lib/puma/server.rb:443:in `process_client'
puma (5.6.6) lib/puma/thread_pool.rb:147:in `block in spawn_thread'
```

### rails-solar/public/404.html
```
<!DOCTYPE html>
<html>
<head>
  <title>The page you were looking for doesn't exist (404)</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
  .rails-default-error-page {
    background-color: #EFEFEF;
    color: #2E2F30;
    text-align: center;
    font-family: arial, sans-serif;
    margin: 0;
  }

  .rails-default-error-page div.dialog {
    width: 95%;
    max-width: 33em;
    margin: 4em auto 0;
  }

  .rails-default-error-page div.dialog > div {
    border: 1px solid #CCC;
    border-right-color: #999;
    border-left-color: #999;
    border-bottom-color: #BBB;
    border-top: #B00100 solid 4px;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    background-color: white;
    padding: 7px 12% 0;
    box-shadow: 0 3px 8px rgba(50, 50, 50, 0.17);
  }

  .rails-default-error-page h1 {
    font-size: 100%;
    color: #730E15;
    line-height: 1.5em;
  }

  .rails-default-error-page div.dialog > p {
    margin: 0 0 1em;
    padding: 1em;
    background-color: #F7F7F7;
    border: 1px solid #CCC;
    border-right-color: #999;
    border-left-color: #999;
    border-bottom-color: #999;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-color: #DADADA;
    color: #666;
    box-shadow: 0 3px 8px rgba(50, 50, 50, 0.17);
  }
  </style>
</head>

<body class="rails-default-error-page">
  <!-- This file lives in public/404.html -->
  <div class="dialog">
    <div>
      <h1>The page you were looking for doesn't exist.</h1>
      <p>You may have mistyped the address or the page may have moved.</p>
    </div>
    <p>If you are the application owner check the logs for more information.</p>
  </div>
</body>
</html>
```

### rails-solar/public/422.html
```
<!DOCTYPE html>
<html>
<head>
  <title>The change you wanted was rejected (422)</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
  .rails-default-error-page {
    background-color: #EFEFEF;
    color: #2E2F30;
    text-align: center;
    font-family: arial, sans-serif;
    margin: 0;
  }

  .rails-default-error-page div.dialog {
    width: 95%;
    max-width: 33em;
    margin: 4em auto 0;
  }

  .rails-default-error-page div.dialog > div {
    border: 1px solid #CCC;
    border-right-color: #999;
    border-left-color: #999;
    border-bottom-color: #BBB;
    border-top: #B00100 solid 4px;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    background-color: white;
    padding: 7px 12% 0;
    box-shadow: 0 3px 8px rgba(50, 50, 50, 0.17);
  }

  .rails-default-error-page h1 {
    font-size: 100%;
    color: #730E15;
    line-height: 1.5em;
  }

  .rails-default-error-page div.dialog > p {
    margin: 0 0 1em;
    padding: 1em;
    background-color: #F7F7F7;
    border: 1px solid #CCC;
    border-right-color: #999;
    border-left-color: #999;
    border-bottom-color: #999;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-color: #DADADA;
    color: #666;
    box-shadow: 0 3px 8px rgba(50, 50, 50, 0.17);
  }
  </style>
</head>

<body class="rails-default-error-page">
  <!-- This file lives in public/422.html -->
  <div class="dialog">
    <div>
      <h1>The change you wanted was rejected.</h1>
      <p>Maybe you tried to change something you didn't have access to.</p>
    </div>
    <p>If you are the application owner check the logs for more information.</p>
  </div>
</body>
</html>
```

### rails-solar/public/500.html
```
<!DOCTYPE html>
<html>
<head>
  <title>We're sorry, but something went wrong (500)</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
  .rails-default-error-page {
    background-color: #EFEFEF;
    color: #2E2F30;
    text-align: center;
    font-family: arial, sans-serif;
    margin: 0;
  }

  .rails-default-error-page div.dialog {
    width: 95%;
    max-width: 33em;
    margin: 4em auto 0;
  }

  .rails-default-error-page div.dialog > div {
    border: 1px solid #CCC;
    border-right-color: #999;
    border-left-color: #999;
    border-bottom-color: #BBB;
    border-top: #B00100 solid 4px;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    background-color: white;
    padding: 7px 12% 0;
    box-shadow: 0 3px 8px rgba(50, 50, 50, 0.17);
  }

  .rails-default-error-page h1 {
    font-size: 100%;
    color: #730E15;
    line-height: 1.5em;
  }

  .rails-default-error-page div.dialog > p {
    margin: 0 0 1em;
    padding: 1em;
    background-color: #F7F7F7;
    border: 1px solid #CCC;
    border-right-color: #999;
    border-left-color: #999;
    border-bottom-color: #999;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-color: #DADADA;
    color: #666;
    box-shadow: 0 3px 8px rgba(50, 50, 50, 0.17);
  }
  </style>
</head>

<body class="rails-default-error-page">
  <!-- This file lives in public/500.html -->
  <div class="dialog">
    <div>
      <h1>We're sorry, but something went wrong.</h1>
    </div>
    <p>If you are the application owner check the logs for more information.</p>
  </div>
</body>
</html>
```

### rails-solar/public/robots.txt
```
# See https://www.robotstxt.org/robotstxt.html for documentation on how to use the robots.txt file
```

### rails-solar/spec/models/admin_user_spec.rb
```
require 'rails_helper'

RSpec.describe AdminUser, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email).case_insensitive }
    it { should allow_value('test@example.com').for(:email) }
    it { should_not allow_value('invalid-email').for(:email) }
    it { should validate_presence_of(:role) }
  end

  describe 'enums' do
    it { should define_enum_for(:role).with_values(admin: 0, super_admin: 1) }
  end

  describe 'associations' do
    # Add associations tests here if AdminUser has any
    # it { should have_many(:some_association) }
  end

  describe 'authentication' do
    # Test Devise authentication methods
    it 'is valid with a valid password' do
      admin_user = create(:admin_user, password: 'password123', password_confirmation: 'password123')
      expect(admin_user.valid_password?('password123')).to be_truthy
    end

    it 'is not valid with an invalid password' do
      admin_user = create(:admin_user, password: 'password123', password_confirmation: 'password123')
      expect(admin_user.valid_password?('wrong_password')).to be_falsey
    end
  end
end
```

### rails-solar/spec/models/assess_campaign_spec.rb
```
require 'rails_helper'

RSpec.describe AssessCampaign, type: :model do
  describe 'associations' do
    it { should belong_to(:product) }
    it { should belong_to(:owner).class_name('User') }
  end

  describe 'enums' do
    it { should define_enum_for(:status).with_values(draft: 0, active: 1, completed: 2, cancelled: 3) }
  end

  describe 'validations' do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:code) }
    it { should validate_presence_of(:goal) }
    it { should validate_presence_of(:starts_at) }
    it { should validate_presence_of(:ends_at) }
    it { should validate_presence_of(:status) }
    it { should validate_numericality_of(:goal).is_greater_than(0) }

    it 'validates that ends_at is after starts_at' do
      campaign = build(:assess_campaign, starts_at: Time.current, ends_at: 1.day.ago)
      campaign.valid?
      expect(campaign.errors[:ends_at]).to include("cannot be before starts_at")
    end

    it 'is valid when ends_at is after starts_at' do
      campaign = build(:assess_campaign, starts_at: 1.day.ago, ends_at: Time.current)
      expect(campaign).to be_valid
    end
  end

  describe 'scopes' do
    let!(:ongoing_campaign) { create(:assess_campaign, starts_at: 1.day.ago, ends_at: 1.day.from_now) }
    let!(:completed_campaign) { create(:assess_campaign, starts_at: 2.days.ago, ends_at: 1.day.ago) }

    it '.ongoing returns campaigns that are currently active' do
      expect(AssessCampaign.ongoing).to include(ongoing_campaign)
      expect(AssessCampaign.ongoing).to_not include(completed_campaign)
    end

    it '.completed returns campaigns that have ended' do
      expect(AssessCampaign.completed).to include(completed_campaign)
      expect(AssessCampaign.completed).to_not include(ongoing_campaign)
    end
  end
end
```

### rails-solar/spec/models/audit_log_spec.rb
```
require 'rails_helper'

RSpec.describe AuditLog, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
```

### rails-solar/spec/models/category_spec.rb
```
require 'rails_helper'

RSpec.describe Category, type: :model do
  describe 'associations' do
    it { should have_and_belong_to_many(:products) }
    it { should have_ancestry }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:slug) }

    context 'slug uniqueness' do
      let!(:root_category) { create(:category, name: 'Root Category', slug: 'root-category') }
      let!(:child_category) { create(:category, name: 'Child Category', parent: root_category, slug: 'child-category') }

      it 'validates uniqueness of slug within the same level' do
        new_child = build(:category, name: 'Another Child', parent: root_category, slug: 'child-category')
        expect(new_child).to_not be_valid
        expect(new_child.errors[:slug]).to include("must be unique within its level")
      end

      it 'allows same slug in different levels' do
        another_root = create(:category, name: 'Another Root', slug: 'another-root')
        new_child = build(:category, name: 'Child Category', parent: another_root, slug: 'child-category')
        expect(new_child).to be_valid
      end
    end
  end

  describe 'callbacks' do
    it 'generates slug before validation on create' do
      category = build(:category, name: 'Test Category Name', slug: nil)
      category.valid?
      expect(category.slug).to eq('test-category-name')
    end

    it 'does not change slug if already present' do
      category = build(:category, name: 'Test Category Name', slug: 'custom-slug')
      category.valid?
      expect(category.slug).to eq('custom-slug')
    end
  end

  describe 'scopes' do
    let!(:root1) { create(:category, name: 'Root 1') }
    let!(:root2) { create(:category, name: 'Root 2') }
    let!(:child1) { create(:category, name: 'Child 1', parent: root1) }
    let!(:child2) { create(:category, name: 'Child 2', parent: root1) }
    let!(:grandchild) { create(:category, name: 'Grandchild', parent: child1) }

    it '.roots returns only root categories' do
      expect(Category.roots).to match_array([root1, root2])
    end

    it '.leaves returns only leaf categories' do
      expect(Category.leaves).to match_array([root2, child2, grandchild])
    end
  end
end
```

### rails-solar/spec/models/certification_spec.rb
```
require 'rails_helper'

RSpec.describe Certification, type: :model do
  describe 'associations' do
    it { should belong_to(:company) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:issued_by) }
    it { should validate_presence_of(:issued_at) }
    it { should validate_presence_of(:expires_at) }

    it 'validates that issued_at is before expires_at' do
      certification = build(:certification, issued_at: Time.current, expires_at: 1.day.ago)
      certification.valid?
      expect(certification.errors[:issued_at]).to include("must be before expires_at")
    end

    it 'is valid when issued_at is before expires_at' do
      certification = build(:certification, issued_at: 1.day.ago, expires_at: Time.current)
      expect(certification).to be_valid
    end
  end
end
```

### rails-solar/spec/models/comment_spec.rb
```
require 'rails_helper'

RSpec.describe Comment, type: :model do
  describe 'associations' do
    it { should belong_to(:post) }
    it { should belong_to(:user) }
  end

  describe 'enums' do
    it { should define_enum_for(:status).with_values(pending: 0, approved: 1, rejected: 2) }
  end

  describe 'validations' do
    it { should validate_presence_of(:body) }
    it { should validate_length_of(:body).is_at_least(5) }

    it 'validates against curse words' do
      # Assuming CURSE_WORDS is defined globally or in an initializer
      stub_const('CURSE_WORDS', ['badword'])
      comment = build(:comment, body: 'This is a badword comment')
      comment.valid?
      expect(comment.errors[:base]).to include('Your comment contains inappropriate language and cannot be saved.')
    end

    it 'is valid without curse words' do
      stub_const('CURSE_WORDS', ['badword'])
      comment = build(:comment, body: 'This is a good comment')
      expect(comment).to be_valid
    end
  end

  describe 'callbacks' do
    it 'sets default status to pending before creation' do
      comment = create(:comment, status: nil)
      expect(comment.status).to eq('pending')
    end

    it 'notifies recipient after creation' do
      ActiveJob::Base.queue_adapter = :test
      expect { create(:comment) }.to have_enqueued_job(ActionMailer::MailDeliveryJob)
    end
  end
end
```

### rails-solar/spec/models/company_spec.rb
```
require 'rails_helper'

RSpec.describe Company, type: :model do
  describe 'associations' do
    it { should belong_to(:user) }
    it { should have_many(:certifications).dependent(:destroy) }
    it { should have_many(:reviews).dependent(:destroy) }
    it { should have_many(:quotes).dependent(:destroy) }
  end

  describe 'enums' do
    it { should define_enum_for(:target_segment).with_values(residential: 0, commercial: 1, industrial: 2, public_sector: 3) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:description) }
    it { should validate_presence_of(:location) }
    it { should validate_presence_of(:target_segment) }
  end

  # describe 'geocoding' do
  #   # Add tests for geocoding if a concern is implemented
  # end
end
```

### rails-solar/spec/models/content_spec.rb
```
require 'rails_helper'

RSpec.describe Content, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:short_description) }
    it { should validate_presence_of(:format) }
    it { should validate_presence_of(:level) }

    it { should validate_inclusion_of(:format).in_array(%w[article video infographic podcast]) }
    it { should validate_inclusion_of(:level).in_array(%w[beginner intermediate advanced]) }
  end

  describe 'scopes' do
    let!(:published_content) { create(:content, active: true) }
    let!(:unpublished_content) { create(:content, active: false) }

    it '.published returns only active content' do
      expect(Content.published).to include(published_content)
      expect(Content.published).to_not include(unpublished_content)
    end
  end

  # describe 'versioning' do
  #   # Add tests for versioning if a concern is implemented
  # end
end
```

### rails-solar/spec/models/discussion_spec.rb
```
require 'rails_helper'

RSpec.describe Discussion, type: :model do
  describe 'associations' do
    it { should belong_to(:user) }
    it { should belong_to(:product) }
    it { should belong_to(:category) }
  end

  describe 'enums' do
    it { should define_enum_for(:status).with_values(open: 0, closed: 1, archived: 2) }
  end

  describe 'validations' do
    it { should validate_presence_of(:subject) }
    it { should validate_length_of(:subject).is_at_least(5) }
    it { should validate_presence_of(:body) }
    it { should validate_length_of(:body).is_at_least(10) }
    it { should validate_presence_of(:status) }
  end

  describe 'scopes' do
    let!(:old_discussion) { create(:discussion, created_at: 2.days.ago) }
    let!(:recent_discussion) { create(:discussion, created_at: 1.hour.ago) }

    it '.recent returns discussions ordered by creation date and limited to 10' do
      # Create more than 10 discussions to test the limit
      15.times { create(:discussion) }
      expect(Discussion.recent.count).to eq(10)
      expect(Discussion.recent.first).to be_within(1.minute).of(Discussion.order(created_at: :desc).first)
    end
  end
end
```

### rails-solar/spec/models/feature_group_spec.rb
```
require 'rails_helper'

RSpec.describe FeatureGroup, type: :model do
  describe 'associations' do
    it { should have_many(:features).dependent(:destroy) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_uniqueness_of(:name) }
  end

  describe 'dependent destroy' do
    let!(:feature_group) { create(:feature_group) }
    let!(:feature) { create(:feature, feature_group: feature_group) }

    it 'destroys associated features when destroyed' do
      expect { feature_group.destroy }.to change(Feature, :count).by(-1)
    end
  end
end
```

### rails-solar/spec/models/feature_spec.rb
```
require 'rails_helper'

RSpec.describe Feature, type: :model do
  describe 'associations' do
    it { should belong_to(:feature_group) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }

    context 'uniqueness scoped to feature_group_id' do
      let!(:feature_group) { create(:feature_group) }
      let!(:existing_feature) { create(:feature, name: 'Existing Feature', feature_group: feature_group) }

      it 'validates uniqueness of name within the same feature group' do
        new_feature = build(:feature, name: 'Existing Feature', feature_group: feature_group)
        expect(new_feature).to_not be_valid
        expect(new_feature.errors[:name]).to include("has already been taken")
      end

      it 'allows same name in different feature groups' do
        another_feature_group = create(:feature_group)
        new_feature = build(:feature, name: 'Existing Feature', feature_group: another_feature_group)
        expect(new_feature).to be_valid
      end
    end
  end
end
```

### rails-solar/spec/models/lead_spec.rb
```
require 'rails_helper'

RSpec.describe Lead, type: :model do
  describe 'associations' do
    it { should belong_to(:user) }
    it { should belong_to(:product) }
  end

  describe 'enums' do
    it { should define_enum_for(:conversion_state).with_values(new_lead: 0, contacted: 1, qualified: 2, unqualified: 3, converted: 4) }
  end

  describe 'validations' do
    it { should validate_presence_of(:email) }
    it { should allow_value('test@example.com').for(:email) }
    it { should_not allow_value('invalid-email').for(:email) }
    it { should validate_presence_of(:role) }
    it { should validate_presence_of(:conversion_state) }
  end

  describe 'scopes' do
    let!(:qualified_lead) { create(:lead, conversion_state: :qualified) }
    let!(:new_lead) { create(:lead, conversion_state: :new_lead) }

    it '.qualified returns only qualified leads' do
      expect(Lead.qualified).to include(qualified_lead)
      expect(Lead.qualified).to_not include(new_lead)
    end
  end

  # describe 'lead assignment flows' do
  #   # Add tests for lead assignment logic here
  # end
end
```

### rails-solar/spec/models/marketing_campaign_spec.rb
```
require 'rails_helper'

RSpec.describe MarketingCampaign, type: :model do
  describe 'enums' do
    it { should define_enum_for(:channel).with_values(email: 0, sms: 1, push: 2) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:channel) }
    it { should validate_presence_of(:template) }
    it { should validate_presence_of(:scheduled_at) }

    it 'validates that scheduled_at is in the future' do
      campaign = build(:marketing_campaign, scheduled_at: 1.day.ago)
      campaign.valid?
      expect(campaign.errors[:scheduled_at]).to include("must be in the future")
    end

    it 'is valid when scheduled_at is in the future' do
      campaign = build(:marketing_campaign, scheduled_at: 1.day.from_now)
      expect(campaign).to be_valid
    end
  end

  describe 'scopes' do
    let!(:upcoming_campaign) { create(:marketing_campaign, scheduled_at: 1.day.from_now) }
    let!(:past_campaign) { create(:marketing_campaign, scheduled_at: 1.day.ago) }

    it '.upcoming returns campaigns scheduled in the future' do
      expect(MarketingCampaign.upcoming).to include(upcoming_campaign)
      expect(MarketingCampaign.upcoming).to_not include(past_campaign)
    end

    it '.past returns campaigns scheduled in the past' do
      expect(MarketingCampaign.past).to include(past_campaign)
      expect(MarketingCampaign.past).to_not include(upcoming_campaign)
    end
  end
end
```

### rails-solar/spec/models/post_spec.rb
```
require 'rails_helper'

RSpec.describe Post, type: :model do
  describe 'associations' do
    it { should belong_to(:user) }
    it { should have_many(:comments).dependent(:destroy) }
  end

  describe 'validations' do
    it { should validate_presence_of(:title) }
    it { should validate_length_of(:title).is_at_least(5).is_at_most(50) }
    it { should validate_presence_of(:body) }
    it { should validate_length_of(:body).is_at_least(10).is_at_most(1000) }

    it 'validates against curse words in title' do
      stub_const('CURSE_WORDS', ['badword'])
      post = build(:post, title: 'This is a badword title')
      post.valid?
      expect(post.errors[:title]).to include('contains inappropriate language')
    end

    it 'validates against curse words in body' do
      stub_const('CURSE_WORDS', ['badword'])
      post = build(:post, body: 'This is a badword body')
      post.valid?
      expect(post.errors[:body]).to include('contains inappropriate language')
    end
  end

  describe 'scopes' do
    let!(:published_post) { create(:post, published_at: Time.current) }
    let!(:draft_post) { create(:post, published_at: nil) }

    it '.published returns only published posts' do
      expect(Post.published).to include(published_post)
      expect(Post.published).to_not include(draft_post)
    end

    it '.draft returns only draft posts' do
      expect(Post.draft).to include(draft_post)
      expect(Post.draft).to_not include(published_post)
    end
  end

  # describe 'auto-publishing tests' do
  #   # Add tests for auto-publishing logic here if applicable
  # end
end
```

### rails-solar/spec/models/pricing_rule_spec.rb
```
require 'rails_helper'

RSpec.describe PricingRule, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:condition) }
    it { should validate_presence_of(:discount_pct) }

    it { should validate_numericality_of(:discount_pct).is_greater_than_or_equal_to(0) }
    it { should validate_numericality_of(:discount_pct).is_less_than_or_equal_to(100) }

    it 'validates condition format with valid regex' do
      should allow_value('price > 100').for(:condition)
      should allow_value('category == "Electronics"').for(:condition)
      should_not allow_value('invalid; code').for(:condition)
    end
  end
end
```

### rails-solar/spec/models/pricing_spec.rb
```
require 'rails_helper'

RSpec.describe Pricing, type: :model do
  describe 'associations' do
    it { should belong_to(:product) }
  end

  describe 'validations' do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:currency) }
    it { should validate_presence_of(:value) }
    it { should validate_presence_of(:charge_type) }
    it { should validate_presence_of(:frequency) }
    it { should validate_numericality_of(:value).is_greater_than(0) }
  end

  describe 'scopes' do
    let!(:active_pricing) { create(:pricing, state: :active) }
    let!(:inactive_pricing) { create(:pricing, state: :inactive) }
    let!(:usd_pricing) { create(:pricing, currency: 'USD') }
    let!(:eur_pricing) { create(:pricing, currency: 'EUR') }

    it '.active returns only active pricings' do
      expect(Pricing.active).to include(active_pricing)
      expect(Pricing.active).to_not include(inactive_pricing)
    end

    it '.by_currency returns pricings for a specific currency' do
      expect(Pricing.by_currency('USD')).to include(usd_pricing)
      expect(Pricing.by_currency('USD')).to_not include(eur_pricing)
    end
  end
end
```

### rails-solar/spec/models/product_spec.rb
```
require 'rails_helper'

RSpec.describe Product, type: :model do
  describe 'associations' do
    it { should have_and_belong_to_many(:categories) }
    it { should have_many(:feature_groups).dependent(:destroy) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:status) }
    it { should validate_presence_of(:kind) }

    it { should validate_uniqueness_of(:seo_url).allow_blank(true) }
    it { should validate_presence_of(:seo_title).allow_blank(true) }
    it { should validate_length_of(:seo_title).is_at_most(60).allow_blank(true) }
  end

  describe 'callbacks' do
    it 'generates seo_url before validation on create' do
      product = build(:product, name: 'Test Product Name', seo_url: nil)
      product.valid?
      expect(product.seo_url).to eq('test-product-name')
    end

    it 'does not change seo_url if already present' do
      product = build(:product, name: 'Test Product Name', seo_url: 'custom-seo-url')
      product.valid?
      expect(product.seo_url).to eq('custom-seo-url')
    end
  end
end
```

### rails-solar/spec/models/quote_spec.rb
```
require 'rails_helper'

RSpec.describe Quote, type: :model do
  describe 'associations' do
    it { should belong_to(:company) }
    it { should belong_to(:user).optional(true) }
  end

  describe 'enums' do
    it { should define_enum_for(:status).with_values(pending: 0, responded: 1, closed: 2) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:phone) }
    it { should validate_presence_of(:message) }
  end

  describe 'scopes' do
    let!(:pending_quote) { create(:quote, status: :pending) }
    let!(:responded_quote) { create(:quote, status: :responded) }

    it '.pending returns only pending quotes' do
      expect(Quote.pending).to include(pending_quote)
      expect(Quote.pending).to_not include(responded_quote)
    end
  end

  describe 'create' do
    it 'creates a valid quote' do
      quote = build(:quote)
      expect(quote).to be_valid
      expect { quote.save }.to change(Quote, :count).by(1)
    end
  end
end
```

### rails-solar/spec/models/reply_spec.rb
```
require 'rails_helper'

RSpec.describe Reply, type: :model do
  describe 'associations' do
    it { should belong_to(:user) }
    it { should belong_to(:discussion) }
  end

  describe 'validations' do
    it { should validate_presence_of(:body) }
    it { should validate_length_of(:body).is_at_least(5) }
  end

  # describe 'callbacks' do
  #   it 'notifies discussion author after creation' do
  #     # Implement and test notification logic here
  #   end
  # end
end
```

### rails-solar/spec/models/review_spec.rb
```
require 'rails_helper'

RSpec.describe Review, type: :model do
  describe 'associations' do
    it { should belong_to(:user) }
    it { should belong_to(:company) }
  end

  describe 'enums' do
    it { should define_enum_for(:status).with_values(pending: 0, approved: 1, rejected: 2) }
  end

  describe 'validations' do
    it { should validate_inclusion_of(:rating).in_array(1..5) }
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:content) }
  end

  describe 'scopes' do
    let!(:top_rated_review) { create(:review, rating: 5) }
    let!(:low_rated_review) { create(:review, rating: 2) }

    it '.top_rated returns reviews with rating 4 or 5' do
      expect(Review.top_rated).to include(top_rated_review)
      expect(Review.top_rated).to_not include(low_rated_review)
    end
  end

  # describe 'callbacks' do
  #   it 'notifies company about new review after creation' do
  #     # Implement and test notification logic here
  #   end
  # end
end
```

### rails-solar/spec/models/saa_s_plan_spec.rb
```
require 'rails_helper'

RSpec.describe SaaSPlan, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
```

### rails-solar/spec/models/saa_s_product_spec.rb
```
require 'rails_helper'

RSpec.describe SaaSProduct, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
```

### rails-solar/spec/models/saas_lead_spec.rb
```
require 'rails_helper'

RSpec.describe SaasLead, type: :model do
  describe 'associations' do
    it { should belong_to(:user) }
    it { should belong_to(:saas_product) }
  end

  describe 'enums' do
    it { should define_enum_for(:status).with_values(new_lead: 0, contacted: 1, qualified: 2, unqualified: 3, converted: 4) }
  end

  describe 'validations' do
    it { should validate_presence_of(:email) }
    it { should allow_value('test@example.com').for(:email) }
    it { should_not allow_value('invalid-email').for(:email) }
    it { should validate_presence_of(:phone) }
    it { should validate_presence_of(:status) }

    context 'contacted_at presence based on status' do
      it 'requires contacted_at if status is contacted' do
        lead = build(:saas_lead, status: :contacted, contacted_at: nil)
        lead.valid?
        expect(lead.errors[:contacted_at]).to include("can't be blank")
      end

      it 'does not require contacted_at if status is new_lead' do
        lead = build(:saas_lead, status: :new_lead, contacted_at: nil)
        expect(lead).to be_valid
      end
    end
  end

  describe 'scopes' do
    let!(:recent_lead) { create(:saas_lead, created_at: 1.hour.ago) }
    let!(:old_lead) { create(:saas_lead, created_at: 2.days.ago) }

    it '.recent_leads returns leads ordered by creation date and limited to 10' do
      # Create more than 10 leads to test the limit
      15.times { create(:saas_lead) }
      expect(SaasLead.recent_leads.count).to eq(10)
      expect(SaasLead.recent_leads.first).to be_within(1.minute).of(SaasLead.order(created_at: :desc).first)
    end
  end
end
```

### rails-solar/spec/models/saas_plan_spec.rb
```
require 'rails_helper'

RSpec.describe SaaSPlan, type: :model do
  describe 'associations' do
    it { should belong_to(:saas_product) }
  end

  describe 'enums' do
    it { should define_enum_for(:tier).with_values(basic: 0, standard: 1, premium: 2) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:price) }
    it { should validate_presence_of(:tier) }
    it { should validate_numericality_of(:price).is_greater_than(0) }

    it 'validates features as valid JSON' do
      plan = build(:saas_plan, features: '{"key": "value"}')
      expect(plan).to be_valid

      plan = build(:saas_plan, features: 'invalid json')
      plan.valid?
      expect(plan.errors[:features]).to include("must be a valid JSON string")
    end
  end

  describe 'scopes' do
    let!(:basic_plan) { create(:saas_plan, tier: :basic) }
    let!(:premium_plan) { create(:saas_plan, tier: :premium) }

    it '.by_tier returns plans for a specific tier' do
      expect(SaaSPlan.by_tier(:basic)).to include(basic_plan)
      expect(SaaSPlan.by_tier(:basic)).to_not include(premium_plan)
    end
  end
end
```

### rails-solar/spec/models/saas_product_spec.rb
```
require 'rails_helper'

RSpec.describe SaasProduct, type: :model do
  describe 'associations' do
    it { should have_many(:saas_plans) }
    it { should have_many(:saas_leads) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:description) }
    it { should validate_presence_of(:price) }
    it { should validate_presence_of(:billing_cycle) }
    it { should validate_numericality_of(:price).is_greater_than_or_equal_to(0) }
    it { should validate_inclusion_of(:billing_cycle).in_array(%w[monthly annually one_time]) }
  end

  describe 'scopes' do
    let!(:active_product) { create(:saas_product, active: true) }
    let!(:inactive_product) { create(:saas_product, active: false) }

    it '.active_products returns only active products' do
      expect(SaasProduct.active_products).to include(active_product)
      expect(SaasProduct.active_products).to_not include(inactive_product)
    end
  end

  describe 'association integration' do
    let!(:saas_product) { create(:saas_product) }
    let!(:saas_plan) { create(:saas_plan, saas_product: saas_product) }
    let!(:saas_lead) { create(:saas_lead, saas_product: saas_product) }

    it 'has associated saas plans' do
      expect(saas_product.saas_plans).to include(saas_plan)
    end

    it 'has associated saas leads' do
      expect(saas_product.saas_leads).to include(saas_lead)
    end
  end
end
```

### rails-solar/spec/models/user_spec.rb
```
require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'Devise modules' do
    it { should have_db_column(:email).of_type(:string).with_options(null: false, default: '') }
    it { should have_db_column(:encrypted_password).of_type(:string).with_options(null: false, default: '') }
    it { should have_db_column(:reset_password_token).of_type(:string) }
    it { should have_db_column(:reset_password_sent_at).of_type(:datetime) }
    it { should have_db_column(:remember_created_at).of_type(:datetime) }
  end

  describe 'enums' do
    it { should define_enum_for(:role).with_values(regular: 0, admin: 1, super_admin: 2) }
  end

  describe 'associations' do
    it { should have_many(:posts).dependent(:destroy) }
    it { should have_many(:comments).dependent(:destroy) }
    it { should have_many(:reviews).dependent(:destroy) }
    it { should have_many(:quotes).dependent(:destroy) }
    it { should have_many(:leads).dependent(:destroy) }
    it { should have_many(:saas_leads).dependent(:destroy) }
    it { should have_many(:notifications).dependent(:destroy) }
    it { should have_many(:notification_mentions).dependent(:destroy) }
  end

  describe 'validations' do
    it { should validate_uniqueness_of(:email).case_insensitive }
    it { should validate_presence_of(:role) }
  end

  describe 'authentication' do
    it 'is valid with a valid password' do
      user = create(:user, password: 'password123', password_confirmation: 'password123')
      expect(user.valid_password?('password123')).to be_truthy
    end

    it 'is not valid with an invalid password' do
      user = create(:user, password: 'password123', password_confirmation: 'password123')
      expect(user.valid_password?('wrong_password')).to be_falsey
    end
  end

  # describe 'onboarding' do
  #   # Add tests for onboarding flows here
  # end
end
```

### rails-solar/spec/requests/api/v1/categories_spec.rb
```
require 'rails_helper'

RSpec.describe "Api::V1::Categories", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/api/v1/categories/index"
      expect(response).to have_http_status(:success)
    end
  end

end
```

### rails-solar/spec/requests/api/v1/companies_spec.rb
```
require 'rails_helper'

RSpec.describe "Api::V1::Companies", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/api/v1/companies/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/api/v1/companies/show"
      expect(response).to have_http_status(:success)
    end
  end

end
```

### rails-solar/spec/requests/api/v1/marketing_campaigns_spec.rb
```
require 'rails_helper'

RSpec.describe "Api::V1::MarketingCampaigns", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/api/v1/marketing_campaigns/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/api/v1/marketing_campaigns/create"
      expect(response).to have_http_status(:success)
    end
  end

end
```

### rails-solar/spec/requests/api/v1/products_spec.rb
```
require 'rails_helper'

RSpec.describe "Api::V1::Products", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/api/v1/products/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/api/v1/products/show"
      expect(response).to have_http_status(:success)
    end
  end

end
```

### rails-solar/spec/requests/api/v1/quotes_spec.rb
```
require 'rails_helper'

RSpec.describe "Api::V1::Quotes", type: :request do
  describe "GET /create" do
    it "returns http success" do
      get "/api/v1/quotes/create"
      expect(response).to have_http_status(:success)
    end
  end

end
```

### rails-solar/spec/requests/api/v1/reviews_spec.rb
```
require 'rails_helper'

RSpec.describe "Api::V1::Reviews", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/api/v1/reviews/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/api/v1/reviews/create"
      expect(response).to have_http_status(:success)
    end
  end

end
```

### rails-solar/spec/rails_helper.rb
```
# This file is copied to spec/ when you run 'rails generate rspec:install'
require 'spec_helper'
ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
# Prevent database truncation if the environment is production
abort("The Rails environment is running in production mode!") if Rails.env.production?
# Uncomment the line below in case you have `--require rails_helper` in the `.rspec` file
# that will avoid rails generators crashing because migrations haven't been run yet
# return unless Rails.env.test?
require 'rspec/rails'
# Add additional requires below this line. Rails is not loaded until this point!

# Requires supporting ruby files with custom matchers and macros, etc, in
# spec/support/ and its subdirectories. Files matching `spec/**/*_spec.rb` are
# run as spec files by default. This means that files in spec/support that end
# in _spec.rb will both be required and run as specs, causing the specs to be
# run twice. It is recommended that you do not name files matching this glob to
# end with _spec.rb. You can configure this pattern with the --pattern
# option on the command line or in ~/.rspec, .rspec or `.rspec-local`.
#
# The following line is provided for convenience purposes. It has the downside
# of increasing the boot-up time by auto-requiring all files in the support
# directory. Alternatively, in the individual `*_spec.rb` files, manually
# require only the support files necessary.
#
# Rails.root.glob('spec/support/**/*.rb').sort_by(&:to_s).each { |f| require f }

# Checks for pending migrations and applies them before tests are run.
# If you are not using ActiveRecord, you can remove these lines.
begin
  ActiveRecord::Migration.maintain_test_schema!
rescue ActiveRecord::PendingMigrationError => e
  abort e.to_s.strip
end
RSpec.configure do |config|
  # Remove this line if you're not using ActiveRecord or ActiveRecord fixtures
  config.fixture_path = Rails.root.join('spec/fixtures')

  # If you're not using ActiveRecord, or you'd prefer not to run each of your
  # examples within a transaction, remove the following line or assign false
  # instead of true.
  config.use_transactional_fixtures = true

  # You can uncomment this line to turn off ActiveRecord support entirely.
  # config.use_active_record = false

  # RSpec Rails uses metadata to mix in different behaviours to your tests,
  # for example enabling you to call `get` and `post` in request specs. e.g.:
  #
  #     RSpec.describe UsersController, type: :request do
  #       # ...
  #     end
  #
  # The different available types are documented in the features, such as in
  # https://rspec.info/features/7-1/rspec-rails
  #
  # You can also this infer these behaviours automatically by location, e.g.
  # /spec/models would pull in the same behaviour as `type: :model` but this
  # behaviour is considered legacy and will be removed in a future version.
  #
  # To enable this behaviour uncomment the line below.
  # config.infer_spec_type_from_file_location!

  # Filter lines from Rails gems in backtraces.
  config.filter_rails_from_backtrace!
  # arbitrary gems may also be filtered via:
  # config.filter_gems_from_backtrace("gem name")
end
```

### rails-solar/spec/spec_helper.rb
```
# This file was generated by the `rails generate rspec:install` command. Conventionally, all
# specs live under a `spec` directory, which RSpec adds to the `$LOAD_PATH`.
# The generated `.rspec` file contains `--require spec_helper` which will cause
# this file to always be loaded, without a need to explicitly require it in any
# files.
#
# Given that it is always loaded, you are encouraged to keep this file as
# light-weight as possible. Requiring heavyweight dependencies from this file
# will add to the boot time of your test suite on EVERY test run, even for an
# individual file that may not need all of that loaded. Instead, consider making
# a separate helper file that requires the additional dependencies and performs
# the additional setup, and require it from the spec files that actually need
# it.
#
# See https://rubydoc.info/gems/rspec-core/RSpec/Core/Configuration
RSpec.configure do |config|
  # rspec-expectations config goes here. You can use an alternate
  # assertion/expectation library such as wrong or the stdlib/minitest
  # assertions if you prefer.
  config.expect_with :rspec do |expectations|
    # This option will default to `true` in RSpec 4. It makes the `description`
    # and `failure_message` of custom matchers include text for helper methods
    # defined using `chain`, e.g.:
    #     be_bigger_than(2).and_smaller_than(4).description
    #     # => "be bigger than 2 and smaller than 4"
    # ...rather than:
    #     # => "be bigger than 2"
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  # rspec-mocks config goes here. You can use an alternate test double
  # library (such as bogus or mocha) by changing the `mock_with` option here.
  config.mock_with :rspec do |mocks|
    # Prevents you from mocking or stubbing a method that does not exist on
    # a real object. This is generally recommended, and will default to
    # `true` in RSpec 4.
    mocks.verify_partial_doubles = true
  end

  # This option will default to `:apply_to_host_groups` in RSpec 4 (and will
  # have no way to turn it off -- the option exists only for backwards
  # compatibility in RSpec 3). It causes shared context metadata to be
  # inherited by the metadata hash of host groups and examples, rather than
  # triggering implicit auto-inclusion in groups with matching metadata.
  config.shared_context_metadata_behavior = :apply_to_host_groups

# The settings below are suggested to provide a good initial experience
# with RSpec, but feel free to customize to your heart's content.
=begin
  # This allows you to limit a spec run to individual examples or groups
  # you care about by tagging them with `:focus` metadata. When nothing
  # is tagged with `:focus`, all examples get run. RSpec also provides
  # aliases for `it`, `describe`, and `context` that include `:focus`
  # metadata: `fit`, `fdescribe` and `fcontext`, respectively.
  config.filter_run_when_matching :focus

  # Allows RSpec to persist some state between runs in order to support
  # the `--only-failures` and `--next-failure` CLI options. We recommend
  # you configure your source control system to ignore this file.
  config.example_status_persistence_file_path = "spec/examples.txt"

  # Limits the available syntax to the non-monkey patched syntax that is
  # recommended. For more details, see:
  # https://rspec.info/features/3-12/rspec-core/configuration/zero-monkey-patching-mode/
  config.disable_monkey_patching!

  # This setting enables warnings. It's recommended, but in some cases may
  # be too noisy due to issues in dependencies.
  config.warnings = true

  # Many RSpec users commonly either run the entire suite or an individual
  # file, and it's useful to allow more verbose output when running an
  # individual spec file.
  if config.files_to_run.one?
    # Use the documentation formatter for detailed output,
    # unless a formatter has already been configured
    # (e.g. via a command-line flag).
    config.default_formatter = "doc"
  end

  # Print the 10 slowest examples and example groups at the
  # end of the spec run, to help surface which specs are running
  # particularly slow.
  config.profile_examples = 10

  # Run specs in random order to surface order dependencies. If you find an
  # order dependency and want to debug it, you can fix the order by providing
  # the seed, which is printed after each run.
  #     --seed 1234
  config.order = :random

  # Seed global randomization in this process using the `--seed` CLI option.
  # Setting this allows you to use `--seed` to deterministically reproduce
  # test failures related to randomization by passing the same `--seed` value
  # as the one that triggered the failure.
  Kernel.srand config.seed
=end
end
```

### rails-solar/storage/.keep
```

```

### rails-solar/test/channels/application_cable/connection_test.rb
```
require "test_helper"

class ApplicationCable::ConnectionTest < ActionCable::Connection::TestCase
  # test "connects with cookies" do
  #   cookies.signed[:user_id] = 42
  #
  #   connect
  #
  #   assert_equal connection.user_id, "42"
  # end
end
```

### rails-solar/test/controllers/.keep
```

```

### rails-solar/test/controllers/comments_controller_test.rb
```
require "test_helper"

class CommentsControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
end
```

### rails-solar/test/controllers/pages_controller_test.rb
```
require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get pages_home_url
    assert_response :success
  end

  test "should get about" do
    get pages_about_url
    assert_response :success
  end
end
```

### rails-solar/test/controllers/posts_controller_test.rb
```
require "test_helper"

class PostsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @post = posts(:one)
  end

  test "should get index" do
    get posts_url
    assert_response :success
  end

  test "should get new" do
    get new_post_url
    assert_response :success
  end

  test "should create post" do
    assert_difference("Post.count") do
      post posts_url, params: { post: { body: @post.body, title: @post.title } }
    end

    assert_redirected_to post_url(Post.last)
  end

  test "should show post" do
    get post_url(@post)
    assert_response :success
  end

  test "should get edit" do
    get edit_post_url(@post)
    assert_response :success
  end

  test "should update post" do
    patch post_url(@post), params: { post: { body: @post.body, title: @post.title } }
    assert_redirected_to post_url(@post)
  end

  test "should destroy post" do
    assert_difference("Post.count", -1) do
      delete post_url(@post)
    end

    assert_redirected_to posts_url
  end
end
```

### rails-solar/test/controllers/users_controller_test.rb
```
require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get profile" do
    get users_profile_url
    assert_response :success
  end
end
```

### rails-solar/test/fixtures/action_text/rich_texts.yml
```
# one:
#   record: name_of_fixture (ClassOfFixture)
#   name: content
#   body: <p>In a <i>million</i> stars!</p>
```

### rails-solar/test/fixtures/files/.keep
```

```

### rails-solar/test/fixtures/admin_users.yml
```
# Read about fixtures at https://api.rubyonrails.org/classes/ActiveRecord/FixtureSet.html

# This model initially had no columns defined. If you add columns to the
# model remove the "{}" from the fixture names and add the columns immediately
# below each fixture, per the syntax in the comments below
#
one: {}
# column: value
#
two: {}
# column: value
```

### rails-solar/test/fixtures/comments.yml
```
# Read about fixtures at https://api.rubyonrails.org/classes/ActiveRecord/FixtureSet.html

one:
  post: one
  user: one

two:
  post: two
  user: two
```

### rails-solar/test/fixtures/posts.yml
```
# Read about fixtures at https://api.rubyonrails.org/classes/ActiveRecord/FixtureSet.html

one:
  title: MyString
  body: MyText

two:
  title: MyString
  body: MyText
```

### rails-solar/test/fixtures/users.yml
```
# Read about fixtures at https://api.rubyonrails.org/classes/ActiveRecord/FixtureSet.html

# This model initially had no columns defined. If you add columns to the
# model remove the "{}" from the fixture names and add the columns immediately
# below each fixture, per the syntax in the comments below
#
one: {}
# column: value
#
two: {}
# column: value
```

### rails-solar/test/helpers/.keep
```

```

### rails-solar/test/integration/.keep
```

```

### rails-solar/test/mailers/.keep
```

```

### rails-solar/test/models/.keep
```

```

### rails-solar/test/models/admin_user_test.rb
```
require "test_helper"

class AdminUserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
```

### rails-solar/test/models/comment_test.rb
```
require "test_helper"

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
```

### rails-solar/test/models/post_test.rb
```
require "test_helper"

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
```

### rails-solar/test/models/user_test.rb
```
require "test_helper"

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
```

### rails-solar/test/system/.keep
```

```

### rails-solar/test/system/posts_test.rb
```
require "application_system_test_case"

class PostsTest < ApplicationSystemTestCase
  setup do
    @post = posts(:one)
  end

  test "visiting the index" do
    visit posts_url
    assert_selector "h1", text: "Posts"
  end

  test "should create post" do
    visit posts_url
    click_on "New post"

    fill_in "Body", with: @post.body
    fill_in "Title", with: @post.title
    click_on "Create Post"

    assert_text "Post was successfully created"
    click_on "Back"
  end

  test "should update Post" do
    visit post_url(@post)
    click_on "Edit this post", match: :first

    fill_in "Body", with: @post.body
    fill_in "Title", with: @post.title
    click_on "Update Post"

    assert_text "Post was successfully updated"
    click_on "Back"
  end

  test "should destroy Post" do
    visit post_url(@post)
    click_on "Destroy this post", match: :first

    assert_text "Post was successfully destroyed"
  end
end
```

### rails-solar/test/application_system_test_case.rb
```
require "test_helper"

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  driven_by :selenium, using: :chrome, screen_size: [1400, 1400]
end
```

### rails-solar/test/test_helper.rb
```
ENV["RAILS_ENV"] ||= "test"
require_relative "../config/environment"
require "rails/test_help"

class ActiveSupport::TestCase
  # Run tests in parallel with specified workers
  parallelize(workers: :number_of_processors)

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
end
```

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/00/0e56c960ec4598 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/00/14b26ca3692d77 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/00/218dfc09d5ee33 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/00/64f4506964d074 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/00/75dc184283fe7c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/00/7d49eb4c838e36 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/00/932e59ad48ecb9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/00/aced2689922aa1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/00/e45fe1aa545dc2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/00/ebc356f77176bf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/00/f88ba20e0734fd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/01/18e07d4aa22b5c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/01/6358f2c48849ee (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/01/7169850c90f58e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/01/7484e8f1a22a16 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/01/7f0c70c39a9c34 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/01/84393687b02c15 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/01/8d197b08d71637 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/01/8e4f0a09e1c427 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/01/b67cad15538b5d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/01/bc49ad6040487f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/01/d22521980106a2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/01/f624ed2cceb638 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/02/1dcc7be82e9c58 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/02/21b9ad0bc5b2ce (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/02/2ebc20c2861366 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/02/33e8fba1a1add1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/02/5eb6260f520c0f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/02/67f565796532ab (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/02/95f454b2b2ca3a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/02/ff8e7a53258b21 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/03/03a4679360ab33 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/03/04c749d4f5773a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/03/5b0b42a13be047 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/03/6aed00670f7fce (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/03/91bb6da2307727 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/03/9e88ffbe76b324 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/03/a5fe9ec28a0810 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/03/c32dff16c802d1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/03/fc4955d3b42bc8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/03/ff1cb03347b2b6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/04/71e685703c10f6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/04/cf845a64f27b39 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/05/198ce40584e7cb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/05/1b2147b7ce669d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/05/277993854c3b67 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/05/32c80dfff2c563 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/05/3893671496cd7b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/05/3c0d7521dd53ef (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/05/5c9d0429436d58 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/05/6a074e7464d150 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/05/ac52f951e25c2b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/05/b36ea5ae26bead (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/05/c1104a4ba1cbf0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/05/d7237a89179abd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/06/0a535e0f42d8fa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/06/2079067eb64919 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/06/23b4f95867f709 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/06/4c1640ed25f295 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/06/5eb3a5972fba64 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/06/8793c66dda090a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/06/b4abc78ddd18bf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/06/c4a14444db2883 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/07/00f877629b17ac (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/07/048bd6a84c9ab1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/07/0bdd90f90bb144 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/07/35f69dbc2a8f14 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/07/90e8a4e40a8196 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/07/bc127574854ddf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/07/ca1cac9c2f8758 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/08/0c67473e6af036 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/08/1f0699d0ff0c73 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/08/47108c58a80a7b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/08/6ffb666b44c8c4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/08/73d9f70de7478a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/08/8faafa69ebef81 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/08/b9d76bc09b9168 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/08/c4abe0f901cc51 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/08/d75bff06b87b31 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/09/3bc22c9eed9874 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/09/4059fad79dbe57 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/09/41e2e8fdb67b35 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/09/659c7e2f6f50b2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/09/6b32a775b0033e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/09/6f6d378d004235 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/09/70a8e8985e3110 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/09/816b08135e65ff (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/09/91a281e5f3a62f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/09/ac472d04d050fb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/09/c9aa791192dca5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/09/d87a8d54afde4d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/09/f17bda40d6c303 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/09/f6b2d779d0b7d8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0a/2f4b0403cd73f2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0a/457225b1ec6152 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0a/5c8513ed7bbb5a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0a/676491e812993d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0a/8df2f3527dca23 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0a/cac17af8b5ec1a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0a/d1ca4b74d5af90 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0a/d790c79b2f9322 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0a/faf45c1dae2a11 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0b/19a2c6b14b2608 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0b/2beffe845fc7bc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0b/3bcfa664e8e18b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0b/4e949229f589e6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0b/62d22146ae9d20 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0b/7dbfda22d05524 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0b/a8605aad7fa44d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0b/cfbe2621f82f18 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0b/d0980d0c213bf3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0b/db401b5bee9977 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0b/efbac178f50dc9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0c/1c9077c774c467 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0c/251833ee46fd04 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0c/3a7bc3e1d34d10 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0c/4f9b1d6c816f31 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0c/cf8558bdd3daea (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0c/eadf3dfdc67179 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0c/f85a0e0c21684d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0d/09a9bc33977b49 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0d/0d4cd83764fee6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0d/52d75089aacb10 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0d/71af0b57ed367e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0d/76f6affbc023ba (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0d/87e439863d49b0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0d/b586b3cb52c064 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0d/da65e76b1f251a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0d/df4c02f5e64c7a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0d/e16b6a617a7974 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0d/e3668a0e2e101c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0d/f05e73e782ceb9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0d/f31f1666b64c3c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0d/fa0742b91ba528 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0e/4d977d01ac2e4d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0e/557031d9f73615 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0e/ced477513efe3e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0e/d21a897298c072 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0f/08e3249bbabf07 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0f/1aa30c246f1cae (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0f/1c6dc97f2283f2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0f/37bb5ff4411a49 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0f/56aac5add9963e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0f/82360e250c9a4d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0f/990083b2a26028 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0f/9d94e7382ac3fa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0f/9dfb0d8d46e902 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0f/c6c8d5d54794aa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/0f/d5e924ff950ce2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/10/193729ddc7ce59 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/10/3136035a198f61 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/10/383079116de0e0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/10/3a4c017395e5df (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/10/410e3998689260 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/10/43122ed3b33f40 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/10/6bf2e0e3397541 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/10/aedd0b1e190e10 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/10/e339814ef5b374 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/11/1f62102ab910f8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/11/57dc81134c59c4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/11/7505329b7e903b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/11/7646702bbd7373 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/11/8fa36876fa7db8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/11/930b12cbfef8af (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/11/a80500c0391e6c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/11/c1db624f5456ed (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/11/d67c16564e348d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/11/dc496d72a51768 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/11/e9f57a0365935b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/11/f853c6bbf86c6b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/12/15eb2a0e22445d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/12/1dc6645b6c02a5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/12/234b76d67b702f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/12/296c3b0a8135c2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/12/2b6fde1ca87af9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/12/2eef11141b7e56 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/12/62bcca8e45e123 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/12/63368a16e67d47 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/12/9745164d90f2e6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/12/a2f99655564901 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/12/a54d5e69c1d51b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/13/a7f6ada8147d1c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/13/b6f0e7deb5716f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/13/c59aa1367edfad (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/13/fe62d3c110fd74 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/14/02f4e02ca062bf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/14/0ca7d7f8e0444e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/14/12860ddee63791 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/14/487f65beb05607 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/14/48e7e9c8ab56aa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/14/79d0d6190d0679 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/14/a5daf18dd0e699 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/14/f82eb724cd0740 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/15/274bf74b6df553 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/15/2c364afaaeca82 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/15/40eeca39f0049d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/15/5657c78968a6f4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/15/9cd674e544988c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/15/c14eed71ca5d3c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/15/c55121d11638c8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/15/d18b0a489cf084 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/15/d5b0a8ddf403aa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/15/d93d2f788830dc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/16/823a779c5dc769 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/16/8299cb7a30684a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/16/83049ddab2ec85 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/16/d459a9de699b77 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/16/f6557f83bf752c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/16/fe5ab9bd8413be (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/17/380f1a17243b35 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/17/6be1341bd577d4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/17/787967789a3d32 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/17/be09d62b477ea5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/17/c4e95b071b00db (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/17/cd24dde107ff48 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/17/cdc4866ce8ecf9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/17/e972d16cb8d71c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/17/e9bf057d2afda5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/17/f59c08cbad8823 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/18/1e2e46628097b7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/18/1eafde1fe706e8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/18/23c3e71ccf6d15 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/18/3450fa5100854f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/18/36902a3e4eac50 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/18/38d6ac99dab87d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/18/65942fdce999ed (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/18/9241af652cfb8f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/18/941ed58bf50c11 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/18/fee6cd8cebc2b4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/19/150e243b83759e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/19/18f083b9eb920b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/19/2199d94d86cd2d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/19/22940b73f3971f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/19/28e61a7e5350a7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/19/44e40283ba6c6b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/19/480a1035c1c0f1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/19/780102c5c8cdac (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/19/eb50a9b2bae550 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/19/f333454aa70633 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1a/85e90e4188bbba (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1a/8741feddd7651a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1b/045d8cf21cb31e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1b/09e2e28abd8061 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1b/243be61efa8f39 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1b/740d98d673fdd3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1b/a586e42e9849f8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1b/a8bd111c91e395 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1b/abab268e301c22 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1b/af7ce115e49c0e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1b/ba43a80de8bcdd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1b/e94749bb647e53 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1c/04db7982eaa61c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1c/1d32d055a71c29 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1c/4945780aa5e5e5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1c/4e05e9ede9ba27 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1c/6aac4cf319b5a2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1c/a0b9f91352f09a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1c/ad5872cf35b127 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1c/b5acae5c96ca86 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1c/bf868bf811c295 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1c/c4542e9f28f0db (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1c/caa1d078e59e4f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1c/d2fe3c0706eeb1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1d/118aa2c4f4f142 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1d/1e5ababf073d07 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1d/6f27d17cba8ee9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1d/79a066e4a2e158 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1d/e681acfb494804 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1e/06474a74e9a18c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1e/0d767f19640726 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1e/28dd24231b2a91 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1e/4b612a02355dd5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1e/8ac78657a4e198 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1e/c208cd560627fa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1e/cf3816552fcb86 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1e/d91be9b85c2539 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1f/0b972ce7e447a7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1f/0fe7c8a3f36d91 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1f/1fc67fb766dbb7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1f/214613d301773e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1f/28a1c13ae581d6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1f/53c5299b452edc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1f/552d68b3af9a2d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1f/584326b7c3d575 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1f/6740ff4cb6dfce (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1f/6946a9ca515d72 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1f/98c9074225acee (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1f/aa716d1b4f10d2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1f/ac29df4b60a53f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1f/cef7c4c1d61c7f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1f/d2db3ff8729e31 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/1f/e80ba2747462c5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/20/077c3624cc2aba (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/20/553748fa395eca (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/20/729ea13de76f4b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/20/8b306cc80e71ea (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/20/9a498674ddb1cc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/20/9f6101109b90e3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/20/baad28f8c3e8df (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/20/eeb3b98733e54e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/20/fa2d3da84c1c1a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/21/2059e5f616f352 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/21/26f1e1bf1fa233 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/21/4385d29c526356 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/21/67b918b89f0f3b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/21/72e485e43d8c7d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/21/a7657bbf22c489 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/21/c6c2ac1708e80e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/21/cdb24e2b1ce39e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/21/deb02b0fa4229d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/21/fe5953f838e434 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/22/21d06645863f96 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/22/24ad2fb87cc97a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/22/57d7cf4c690f38 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/22/73087d18574a9d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/22/8a93234d179e24 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/22/9377f10bd6f458 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/22/984b9aa6fdd9ca (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/22/c6ada35ba96d5c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/23/14df6ab43c7774 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/23/202960c126689f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/23/22c6ebe595b585 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/23/53e60de11d8fcc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/23/5bc451f1e633ea (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/23/61bb5cf995450e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/23/6aeec7e599c9ac (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/23/7370f3da1453e7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/23/96f7cffa03c49f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/23/b13247d25ccc25 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/23/bcd96ab8e629eb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/23/cf0aa4ee486e1d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/23/e35d456066d350 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/23/fc15dda1f003d8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/24/028cd25a950e52 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/24/20ebed0f933f89 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/24/5d240e01e55c47 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/24/6788a274795155 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/24/89dcdfb9892a06 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/24/93b3154f09b452 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/24/a017ce7ee8ab49 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/24/f85afd524310b1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/25/00e809031a4e27 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/25/52f3e68752f8b6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/25/6ced38844d5e44 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/25/89e30f6f7084a6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/25/9fdff14a4635fd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/25/b45d66407756bd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/25/caf6f76f3500b6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/25/ddf0ce8672710a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/26/844fb2d597d9ec (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/26/96720e2cc8c7fb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/26/97d16958a666d7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/26/9ea831a48d2c48 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/26/a094ab59adc654 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/26/d0481e0c6d2039 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/26/fff9efa7e3420b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/27/05382a269c5ba6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/27/140e0186f20b55 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/27/1701ca64c64006 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/27/33761e80434e12 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/27/70f287bb50ff00 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/27/8db15737ea2146 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/27/94af7236e31d72 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/27/b576f45ea15943 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/27/ceda432447739c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/27/e79635179cbf80 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/28/004e8786658684 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/28/4a840da58e17ae (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/28/50e6d9fceaf490 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/28/5169a00f44cf6e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/28/5b1089abe2ae52 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/28/b413e127f579ac (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/28/b648a026cd0bfd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/28/bf847cfc5cbc28 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/28/de0bbc687cbb06 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/28/e4fdb0f42aa9ef (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/29/28b65af394af9f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/29/386b587e17381a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/29/386e63b903e108 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/29/5d5878b7fd6fe5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/29/6b5d5744a5130a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/29/7c5e3579bf408d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/29/7f69cfb3635106 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/29/831db2cb082c54 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/29/b04a6e599642e2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/29/bce3b7ba1eed56 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2a/0b73b95e934392 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2a/1715e3ea71f282 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2a/24c145da2615b6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2a/83ef77934e6ced (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2a/bba378a5482711 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2a/bcf042ab25b8eb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2a/dc852026c2e711 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2b/1f7bdce18d2ff2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2b/370f9afdbe0332 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2b/4fe07b7b2f9b12 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2b/60f2df1e446b24 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2b/6d04a98f6e919a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2b/7a0f1d3303e4d6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2b/838c58d03c9ce4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2b/9582bd901eeec0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2b/c5e3d220b761b2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2b/f5b6b18037349c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2c/25b084957e11aa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2c/376b5dcf3ebb17 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2c/7a2b904d78dda5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2c/7c1e758682f70e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2c/85c59a2b39f0b9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2c/8d5821aa01b012 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2c/c37f99c99fadb6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2c/cf01ef871b41b2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2c/d6be512b356d18 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2c/d715e09ffb9a82 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2c/e91ee6810a96eb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2c/f08a0fb580b76d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2d/1702d9bd89f5bc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2d/5b8e9c75fce94a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2d/753116fc6b78c6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2d/8789871219b280 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2d/9e1bd40bc53a10 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2d/a105a5b54a1465 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2d/b80684895c493c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2e/08cb1f0efa100a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2e/209a42d8667ae9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2e/25049c2a4adc4b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2e/2e24214b146dfc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2e/531fd6a3a78b3d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2e/55d2cbf5ed1b6c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2e/57937836558bd3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2e/5d43a2613631fa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2e/74a40c542983ef (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2e/790e03e3acbad3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2e/8649576686ae17 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2e/9a409e789161cb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2e/a1cda6f6fd409c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2e/e974edda28ef6d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2f/361220732fd2cf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2f/3f29f8f4c7c091 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2f/48c417e49e6989 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/2f/8f0038a9f586bd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/30/1518685b49d9cc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/30/1f2fbc00b6b199 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/30/27f90f93b4a2cd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/30/31bf48e1d7b196 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/30/5089eedca10795 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/30/936fac1d4f5819 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/30/e026a0abbe3321 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/30/e2481c833f9d22 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/31/13068517d82db5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/31/41dd968aba93e4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/31/72e04207858f0a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/31/99ec4ba9a69950 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/31/abc0b1a3e40e1d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/31/abd8a78b6e04e8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/31/b0f934317339fa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/31/c9233e235e7546 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/31/e4944a3e5c33a8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/31/f0914f582c635d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/31/fad651674bb24d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/32/1956621049ae61 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/32/31f2cb6004fbb5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/32/5129b034860e4f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/32/5c7dea92d5d1d7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/32/7979d55dba981f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/32/80dbea1f6b4803 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/32/85d9fdc53e132e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/32/f356b33b1b3b9d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/33/05a441e3c807ce (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/33/16c32bfaa725cf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/33/251879425b6d3f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/33/2683f122de7204 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/33/65eef1dc7975a3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/33/68191c1a349a66 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/33/9bade562483b62 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/33/c3c7fa5e77e23e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/33/dbba58f0ddebb4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/33/e65896a8e9c0f1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/33/fe1f0f091e07d2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/34/0f3fb8eb2f98d3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/34/186ef9d7bcd4a2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/34/21ddb3563d75ce (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/34/6307b87ce4717a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/34/9e0dadfa6571d5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/34/cb8ed07e1b413a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/34/cd62d09d86149f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/34/de29c835926da2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/34/f1f0a27e770f6c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/35/03ffba37c9b53c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/35/05bbcf32eba1d3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/35/38c4b6d2ed2276 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/35/4bddb5733ced54 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/35/4f7afcf29c9702 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/35/664017b493c4a1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/35/aba7d5f51cbee7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/35/c55389ff861653 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/35/e0919771b9a202 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/35/f3d626888568a5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/35/f96af1a4d6d5c3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/36/2998d49893a0b1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/36/2ef6ce730d1a90 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/36/6bacf68c27fa72 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/36/9b2ccacc41c0ab (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/36/b72f7edadcef53 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/36/d298ac5bf70e91 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/36/ebc93b7d757e94 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/36/fe37351678b59d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/37/0220f59a04816a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/37/079b880ca5491a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/37/32d7102cedd7ec (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/37/4424a5c617f6ec (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/37/58dc45ca9519ae (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/37/63ea3834cb0434 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/37/b2d66849149d29 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/38/0f904773933082 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/38/10f49e48d77bc6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/38/28f622aa7c5926 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/38/3043652c32b419 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/38/54877086bc545c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/38/61a1c58ea21cf9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/38/62521d9723c9d8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/38/672eb4fbc35720 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/38/6a767c350f1c50 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/38/71b431f13e3c43 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/38/aaec598f928865 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/38/e0a5cb443ecc6a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/38/efac42c66eb660 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/38/ff4bfb8e7b6d0b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/39/058b097364c23b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/39/4bcfb3c51f7adc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/39/5f15e30662e318 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/39/a0086b7a44d3b1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/39/add8c26733b808 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/39/b1fa357738e988 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/39/f2cac99b8ff1eb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/39/f9c66646137e3a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3a/1a39bbd9fefd16 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3a/3e7025d8a544b2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3a/5e775326899b35 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3a/73dd0af3943e45 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3a/7f7aed5f00d665 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3a/c794729007c284 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3a/ff092aa911352a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3b/4d34af5c1b3d34 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3b/5385ec405211e0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3b/be2139a6418d7c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3c/0053ab08b92ab7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3c/0234d90bcf1bed (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3c/0c42a6be3f4b2a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3c/1ed68a11c03f4c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3c/390d05056e38a0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3c/3bf672d5e40725 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3c/4ec9f1da8ac478 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3c/544a47fa5953d3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3c/59e6b630b19ee1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3c/b9e6b20d20e3be (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3c/cb6cee396dea52 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3d/4a32cf3266d3ea (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3d/6c8be639c3dcb4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3d/8104f5eeebf841 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3d/9740a8e2812bdd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3d/ad22802eb2654a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3d/b597490a0921eb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3d/c56249bcef4e2a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3d/c9b993705e9454 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3d/cbd78074f7f786 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3e/0e2162d0c4fb8f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3e/103328daa37491 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3e/73c34f56e09b82 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3e/a5a9959a86185a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3e/b04ad964b20835 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3e/ca736067457069 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3e/d79aaecb246e00 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3f/049e53d4bb8e13 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3f/284934fc791baa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3f/3003817ada8506 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3f/32f068c679e049 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3f/3a49ce4a257017 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3f/51f4f82a713c7b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3f/744d815f4b4814 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3f/b8ad987b9cb9a3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3f/c347562cded02b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/3f/d98646ca21f8c3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/40/055da2f0b4b6b7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/40/14879048c3019f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/40/1d71d5505938e4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/40/2723a69d4069b8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/40/4d7ac087447bc3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/40/fab2a973ef98c8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/41/1d014b4e3fd715 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/41/29acfb3f70b847 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/41/2fb10b1d0a9751 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/41/43c278f3844af8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/41/a7db41ed3004fd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/41/c84a86dd2547bd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/41/f6bfa7a5251ac2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/42/0771fc873ec6bc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/42/0d86e94221eae5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/42/0fb173c159878b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/42/3eea2151accf50 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/42/593ac1b044bf97 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/42/73ef7edf56bee2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/42/8ed6327e84ffc4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/42/9e7f01d41a013a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/42/a622cdf0f56eab (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/42/adb6cabff37e28 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/42/e86da54acb2e6f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/42/fff5a439b45e1a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/43/26e7aad73dc1d4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/43/3ebbb6e8ae2c78 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/43/3f008a06045313 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/43/56a17172d97127 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/43/57832bbd7bfb30 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/43/5d110b9140acdd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/43/60aac751d3d415 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/43/712d47f176c2d0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/43/8122088fae933d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/43/e0ef4f97bff1f8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/43/e40085bdffa8fb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/44/00ac9cd01dff54 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/44/0abdbd07e18df0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/44/290384692e2eb4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/44/3b02f23386853b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/44/4d274817cb62c2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/44/75fb52acf77352 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/44/9f7d7795c2dc0b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/44/a0e2f32e652ba4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/44/a6a7e6aed417d3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/44/b0c10d6e1e5050 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/44/cada91812d3df8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/44/e65e983fb35059 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/44/f4580fe862d204 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/45/1a0ace80fccf07 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/45/1b1f59b6443f16 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/45/5a10574da9d950 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/45/5b26459a59e153 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/45/63e96c987fac2f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/45/6d42d3a4d0229f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/45/dcc9fc2971ac56 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/45/ddae92e2bf4123 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/46/0eb20f037553a1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/46/2020328565f677 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/46/21598125cb3972 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/46/2b456371fd7eb7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/46/393a7790b0777b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/46/4b0286996609d4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/46/4cf8eb90e034be (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/46/503c38c0350274 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/46/537eab3469aea1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/46/5edede71ec3390 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/46/88690808c9c4eb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/46/952e8455e0bd85 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/46/c15ab641cc283c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/47/1ee65711e304e6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/47/253ebc7b5dd494 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/47/44bfb4c49f6375 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/47/49beac5daca3d6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/47/5abbfebcc1d5f5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/47/899f9828895247 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/47/a59b1631c5d4fc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/47/ab4fed9ac6933e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/47/f42d5e45527bef (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/48/1abeeb366f58f1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/48/6eef74daa9fc7d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/48/87d4adaab8184d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/48/8c7d84e6955ada (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/48/95960ad5f3a386 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/48/ad008f3b0de462 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/48/bdebfd10163e41 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/48/d5549cd647138f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/48/d8bbc6ee549539 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/48/e3c5b68d210b7d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/48/e81dc0f9430021 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/49/2b94457c63d83a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/49/5b536717b28e60 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/49/77c6c1e4d9fe7d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/49/7db0bba6d01e30 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/49/aa573d71308946 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/49/b9d0804c14257e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/49/c09cdb727ad583 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/49/c50439e6d2427b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/49/d29f73f48da210 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/49/f779b83ed239e0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4a/0e6b47b4d0b762 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4a/179dffe9ce55f7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4a/1d2a36cd940ce1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4a/24b0a627739289 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4a/4a2e32f0fb138c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4a/53f02189e48537 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4a/83383bb5c52bbf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4a/a76f87dede1f80 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4a/c492a469a386e4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4a/d3d7ed580f66bd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4a/e049fcef00a634 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4b/033ea19c012b67 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4b/06c79c98d0c33b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4b/4a944d3d169069 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4b/a97a0793e67f5a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4b/e9c79b068fe5ff (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4c/09e475b26e267b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4c/10de0673bf8eeb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4c/4a8227c5b9e30f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4c/74fa21c1c9beda (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4c/7d7577716df791 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4c/96f13072d6e023 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4c/a7f1e00122358e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4c/c08342fcb3cf9a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4c/d70ed2916a212d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4c/ee788e5c78c54a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4c/ffc02ed21b520e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4d/08443d5a8cc78d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4d/2822349b53097a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4d/38110078fb5088 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4d/66bf0d411b4e8f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4d/72e1e993c52c87 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4d/84d5630bdccb24 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4d/a3a99d435d2179 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4d/b56553b4d48c8a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4d/b60a9e5b1d7f33 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4e/45ba1d33db6f63 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4e/6a1363cc86402b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4e/80d93d69446d51 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4e/9dfdff4263b3db (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4e/a07c35edf85660 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4e/cdc9de8aaec30a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4e/ce2ccd4a955bd8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4e/df9869cb0fb558 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4e/f1b98739c104c2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4f/08104fb658ef47 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4f/2ad0debb34eda9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4f/78ee1d41f411bc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4f/79444301cc5e9b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4f/91aa43db2ce6ab (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4f/9e7a07cfd35b83 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4f/a6a4f0d117c19e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/4f/aa5a5bccc1996d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/50/18938a7014526a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/50/25a905addbb296 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/50/2adc84f5af07d8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/50/3bbe626f675e49 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/50/4179e6f7d1942a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/50/47794fff9808f9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/50/a3b4b35d7557aa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/50/a8aae61ae61d45 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/50/aecae629eb08e3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/50/b3f2d8a8cd60fc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/50/ccbfbcef77d268 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/50/dab46eec4674f0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/50/dcaf2f4ed1632c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/51/1e89f036da29d6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/51/288b108b6f5f7e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/51/2b83ba5b917fa9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/51/373c2eae413267 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/51/53e759e63fa7f5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/51/98a840b336274b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/51/9efab000b59392 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/51/c89e79c39dc75b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/51/d2023faf1e1466 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/52/112a2b47b4b25a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/52/11a985e6e000dc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/52/45767f79c6a188 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/52/bc1c8a057fc15f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/52/c7239cb4e9df74 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/52/cf7da88bd74c35 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/53/03267fe753910d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/53/0bd1ccdbb77e4c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/53/10ad9e1b54b4dc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/53/1f3a54ccc3cc80 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/53/4ca3e4237825a1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/53/7954a3096ac27a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/53/acf4b2c4e098fb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/53/d22a1ef2900203 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/53/ea40c3f5ea4923 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/53/f947eae4d0c150 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/54/0443f140b8c826 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/54/33f505f2ee3053 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/54/67f15dfd569ce9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/54/870c59cc503b5e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/54/a249ded25e71b5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/54/a412a43bbb9b60 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/54/aac5e1ca9f66ee (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/54/c768b5ebc62ad0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/54/cdf8c4d059be90 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/54/dea9c8e73528b6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/54/f7a0f196e2e6e8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/55/400429553dfdb3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/55/446f675088ae8a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/55/464b678f4e565b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/55/496a3dc1d17967 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/55/4b0d37f72bfb81 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/55/7af242277483bd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/55/98770f0cc4fa55 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/55/ab4388de1f58d5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/55/d0c3666fa9f425 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/55/d41b2b83830c66 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/55/f971d64e724859 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/55/fe6b1d71867c4e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/56/02995de5ffd012 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/56/080718bf2a4e87 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/56/0db257c484fbdb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/56/176eeecc776ba3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/56/2f0e9b121382f9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/56/349b523eba19ee (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/56/66945f6df5541c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/56/94faa21e8bd5db (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/56/98736ce5c36846 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/56/a289fabcbbfbe8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/56/cb5ef869d367da (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/56/d37b538880683b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/56/efbe4633ab2db9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/57/0ed4a97e27f854 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/57/380519f9302de2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/57/654832b2d61ae4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/57/7a0d0f360f6f0c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/57/8d4fde9d90e732 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/57/a57853ed572121 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/57/a7d96a0bd5f93f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/57/d8635410c25b4e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/57/da7ba1a1170338 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/57/fc793db40ecdb8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/58/4cda07cf793407 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/58/511c0949902d20 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/58/5731b21c3255d7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/58/5c3e18cb7d05d4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/58/80b63e3da95752 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/58/82afb278331ace (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/58/8912b864bf53da (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/58/a4761c81dae57e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/58/b7f1ea17770476 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/58/c7ece49bc9dfe1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/58/d632af415a8c91 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/58/d8f87345cb5176 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/58/e46f665b21230e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/59/3664f7179931bc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/59/49aa09ca3532e1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/59/60ada42b440a57 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/59/b252565a3dd051 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/59/bdfe8e370c1f3c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5a/2954ad5756bb7d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5a/2ffa1fc1721c08 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5a/8b9e0f2cb7edfc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5a/9071d63fa8cc8c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5a/b28385dacc7fc4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5a/d3ab4b810d492c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5a/e04832e58565b6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5a/e09adf5d781d5d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5b/1845c52e2bb1d0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5b/3a156656ddd26e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5b/40128fdb33a265 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5b/4763727e2abca7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5b/79d36e5c3855b1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5b/7ef1cb40fabc26 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5b/86703d3ed9c8a6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5b/9a02f5722f3c75 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5b/be6e082002a02e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5b/e6cc3af6bb0e98 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5b/ff39cdf4035c5e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5c/14da9364ba62be (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5c/1cbc8cfcdb50d1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5c/1eac5902ba034f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5c/2e385f1f9c5750 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5c/3eb62e37eb50fa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5c/4ec51b0e16d6cd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5c/5fe0b1f91f7ff2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5c/72de6507edf1d4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5c/e6c8a7bdcf2b9b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5c/f070c25c79c211 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5d/1e99d434d19f1e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5d/401e91ac947b09 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5d/64dfb0b7956849 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5d/95f17751b479a3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5d/9c84001a5255b9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5d/9dc19451d6816f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5d/b81906376e3824 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5d/d7753a6e23ad5c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5e/0db6fe2850b749 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5e/2b1f65167f8bfd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5e/3398ee04bdfde9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5e/3fa85d586b5372 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5e/47ede5d96a0c6c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5e/acd73daa1be2b8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5e/c94b75d70d6e94 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5e/cbe459ba413b65 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5e/f61a1299d197da (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5f/0a0a884b58f612 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5f/0d4d1db5cd7e74 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5f/0e0934d0290974 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5f/27f443697ad01b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5f/4ad0736bbff501 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/5f/7e0d176d075d4f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/60/42d81f122efccf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/60/48e7ef1a43688e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/60/c5f93f3299c966 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/60/ca7691cdea7cfd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/60/ceaaca73c2c879 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/60/de595c3252e8cf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/60/e719491cb17d9c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/61/1868e9598bd188 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/61/3de6c65cd1e6c0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/61/4af988cc5352b9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/61/527341a6503336 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/61/65b5e6f1fb1a5e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/61/6a07366815d812 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/61/74aa72efc07f21 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/61/7f29062c668ae6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/61/a2e1cf746b5715 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/61/d5bb40875bdecc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/61/da3c63b176f987 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/61/e2ddb95b109c41 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/62/130ff9a70691a1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/62/1faeee66f4108f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/62/27b060fcb9f1e1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/62/3b9bcb83b8b4da (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/62/3be765641c4c62 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/62/54aead33b30029 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/62/5d10be03d4c591 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/62/a26869f7a98de5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/62/ad321295d2fce1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/62/ec9641b9e98cc2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/62/f20981dc8182f2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/63/478d21ea44c97b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/63/62a52bf97e6458 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/63/7113905c83d5eb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/63/a27bdb55c5f0d7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/63/a67c859b4f9025 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/63/a69d4fd5f11da3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/63/ab4413360e33c7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/63/bf3d2fe26a481c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/63/c6e78e19196f69 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/63/d02e8c878ef4a7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/63/d6ac8ec341b5f5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/64/02ba63c49580b5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/64/0816e0b34a823d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/64/26b9c4f5be385e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/64/6930ff7aaed023 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/64/90c59c1d946156 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/64/b44def42b5d5a5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/64/d5b812e6b06ba1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/64/f31deaecc366e9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/65/021a7aff8286bd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/65/3dcaf20de350b9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/65/631af8adeb0831 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/65/870f42610f80e8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/65/9180f1ee985ec6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/65/97c7b81d8b197b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/65/99cdf59ce0d47c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/65/b7d7df00d4c006 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/65/c9dc3ab35bfbb0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/65/df0edfa6973de1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/66/14033646a95fc1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/66/1613b394ab032e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/66/1f20964700d1f6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/66/221fd783a84bc1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/66/77b2262f3af1eb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/66/e2c86561d317fe (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/67/03befd40e4b734 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/67/a72d5099e8bb19 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/67/a991bfb53def5c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/67/c857b9a61e0192 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/67/edabeb53691384 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/68/0cbf775f799bfa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/68/13ed495a501745 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/68/30d9d5c158c3ec (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/68/5d823063234fb4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/68/77e4389a2f7db9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/68/8ffba6e0bed74a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/68/aa94cfbfd9cfbd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/68/bc413c3938ec32 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/68/c3fac3b028a19f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/68/dbb9c9a57c3172 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/68/efb3daa004f4e3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/69/4db16d18f61edb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/69/7332df59e4d68f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/69/9290c9212f156b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/69/b4cafe7b881dd5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/69/b742fc50fc80cb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/69/b860afe67cdb1c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/69/bcbb76c4de51fa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/69/e930e21eee4aae (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/69/f6e82096dee266 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6a/0371a210bf5205 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6a/0e703c6dc7f158 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6a/12d72920e0b0ea (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6a/320d793e8adccc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6a/45aa9c1e6d867b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6a/5b04068bb407bd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6a/79f917faf4ade9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6a/80b564f9092924 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6a/c9bd7fb9233e8f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6a/ed68b760857067 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6b/1556a891cbf622 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6b/243aa986f1949b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6b/7d13166c8b2478 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6b/90d83c41934e04 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6b/958c70641457ce (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6b/a5f5c28940e6f3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6b/f76574fc54146a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6c/0803943b0f40db (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6c/0d24566fd0e458 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6c/17243ac8157664 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6c/24ffc34e10cb37 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6c/2ff5f4971e8e62 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6c/5b32b0c32c1c0b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6c/8316d962b73121 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6c/cf039a6e3cb3da (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6c/f1b9836d88cccc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6d/229958d3e4b34a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6d/2a982c13b056fd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6d/34b68a9e2e9aa7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6d/5942b249cd5ef1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6d/675d16860f90e2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6d/c984c6f0c43864 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6d/d5dd982a9b9485 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6d/f7a88abd901c69 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6e/05f7add8f47202 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6e/0deea02656f2b1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6e/1a22d3a0f6406a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6e/28b8bacde6d676 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6e/2d25c59c995588 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6e/32d780939a55ed (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6e/938c9b3d20fbc9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6e/aa56a375238ef3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6e/bca62e7bad0cdc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6e/d666d3a948cd2a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6e/d980b0bd47789f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6e/dd6d264e2c32a9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6e/ff3edc4c5510ba (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6f/12c895e93a8f94 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6f/297e92ac4ab408 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6f/8e4c11de6f80dd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6f/b050ec96acce4e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6f/cd5af40a5a3768 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/6f/d38a77e3f73951 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/70/11520fb4f9794f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/70/2850a204731dca (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/70/537a1aa1e1b1da (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/70/618b1b8da64b89 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/70/656d86f6b1dfb7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/70/6aeb8ba93167cf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/70/adee5c90688bd4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/70/b9537431a1a40d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/71/679228117d49da (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/71/8fc61cca406496 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/71/d6985007c66432 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/72/191b056cb0a1a2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/72/361f6a33e6bcb9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/72/4259a1dae4637d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/72/537c8e92de42ca (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/72/54057ef9707866 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/72/5dbc970d97650b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/72/71edbd2fb5b430 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/72/7903cbdc9585a0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/72/dfdfd92fbed2a3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/73/0f82402100fc7c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/73/728b5348934503 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/73/7be205fb5c7efb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/73/984b52956494cd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/74/201b4211ece577 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/74/4f66b3c679fc22 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/74/57370c8daf4283 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/74/5be22ba2578ac4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/74/72be9ce9413d6f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/74/76b4a348c28b85 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/74/793ba4d76a7557 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/74/79ee2761791e1e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/74/7f4c31b1aca658 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/74/9bd925f462d787 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/74/9c2acfd3910da3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/74/a4a28c0e178b6f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/74/bf4ac852314c88 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/74/d35343d4bc55d2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/74/e8332d9b5802bd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/75/0fa30482ababb2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/75/200a2967df7d07 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/75/336dd41aa5e31f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/75/abfdde72bd027b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/75/b4356088412c9b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/75/c7a3c57ff9098a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/75/e0ded5ae65a48d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/76/0baf3edcf5a5a5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/76/1f24e26d8bcaa5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/76/49fdba0432d89f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/76/78dd7f60e43056 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/76/a487131a479af5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/76/e1513d6a44b31c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/76/f10fec9722ddfa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/77/06c2b51d3929bc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/77/1b76e56044441e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/77/66c612bd5a89c3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/77/789f4a2400e2ca (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/77/8a693650bc0acc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/77/fc1720ffb657de (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/78/5e2f20465ded8e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/78/6eeebd3da93bf7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/78/748de5b152c89b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/78/82ba3c81a57936 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/78/9ca376cef4a701 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/78/a0580571e1d23b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/78/b19d610a6ca7ff (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/78/b9f83340776e51 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/78/bccee8b5085ac9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/78/be52bc410d9a1a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/78/e720eb15f12e86 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/78/eab2f45ba9e48c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/79/0d302be4b5e14c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/79/20d14e5f097743 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/79/24715bd559daf6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/79/2e44c09b1e4291 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/79/49a42c6a31301d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/79/4e8d084d0743c5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/79/55c76dd135c7f4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/79/84366c4bb36e88 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/79/9bb2ce519fa454 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/79/a5b2542ac18fab (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/79/c0fa6d3259ab41 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/79/d7371451a6364b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/79/ed30c632b7f251 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/79/fbd9fb421b38ab (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/79/ffa9344a594fa0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7a/24447a510385b8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7a/499abfb049c201 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7a/66e86379739254 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7a/6eeb2a3552d96c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7a/805ac3ba1b7273 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7a/8143c08d9f70e1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7a/898e6be860bad0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7a/950c98bc976bc3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7a/9e43e7ad773c87 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7a/a5b3bb9d6fbff9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7a/c22ec5fffdb0dc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7a/db023f5555c357 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7b/1845b8bce566a9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7b/9773abfef1b372 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7b/c11b252f8d1430 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7b/df69e318d15cac (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7b/f107d4f30c3653 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7c/4f1cb7cae9576b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7c/5d259dcf316e24 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7c/7e77c40d5a4582 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7c/8d82abb4722215 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7c/8e84d9c322e1f6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7c/b04020787b5939 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7c/c18435883e46cd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7c/c4fde67ec3ad28 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7d/0ceabf23c3740e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7d/1ce8977f087585 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7d/4af7598dfb21f9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7d/5b07af38fbd513 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7d/68aa397b53d694 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7d/94c2088efb9e76 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7d/a4b353573bbcdb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7d/c3d1280b3d067e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7d/d485aedcfb630a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7e/01fc9645044c7b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7e/0627007c68a1a3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7e/41f5c10d030863 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7e/61eacfe86d0d76 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7e/916dc3c77138df (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7e/ac6f5cf0f7b6d0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7e/c17338f166f653 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7e/cec34ac87eefc7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7f/1e0a01cc08889b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7f/336733f900b822 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7f/445f71b1c1b301 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7f/47a0c3d00d2ceb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7f/5af97ab715fbbf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7f/6528b5c1899a4b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7f/864c66d88a9d0c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7f/96234e0b015974 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7f/b3fe4818863244 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7f/ed55fccc52eb92 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/7f/f9b667067b4727 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/80/03ff98c3c780e6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/80/0b8cd3dc023989 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/80/0f1fa8b633e8ee (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/80/10cf243fdb71a6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/80/1f147e1198101a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/80/529af95a56fe55 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/80/bb84df6b3552d8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/80/bbade6f358c217 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/81/0b4c0437a65b2b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/81/1d0dceed750923 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/81/209b050b0bcfdc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/81/35d8625ebe8df8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/81/3fbd7f86da1bfe (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/82/1367adc1ead6fb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/82/21a5d55f01cb5d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/82/23e1afcd174889 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/82/4d36a47e655c1d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/82/9a6dd41cc16d13 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/82/cadb41dfe7dee2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/82/db266f4bc80a3f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/82/ea53d85982b49d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/83/2c5e481eb982e2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/83/331f570a99846b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/83/53c159abdcbe6a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/83/84e55e10bfc94e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/83/89cc1f84f414fd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/83/90930a4969f156 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/83/bec6b4f5f3d087 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/83/dcc398eba6fe94 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/84/1bfd8219cc0708 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/84/2cb47b085dde22 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/84/4da92e68a0a4f3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/84/7debedbee07ac1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/84/95bcf152f56ca6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/84/9a37f5f027680e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/84/d1fba69765b60e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/84/ff2c62053a59ac (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/85/13965c46390efc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/85/1cb2ca919fc8bb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/85/36a756e44454a9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/85/3d61916eab75ca (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/85/4ba3ff24373aaa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/85/65e7898067313c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/85/6b196714f5fa80 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/85/8c20ba8555d370 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/85/9f337159c1bc46 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/85/c813b9ff7317ee (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/85/d6ea6baae16f07 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/85/da0285bfb9a5c1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/85/dc43a520490640 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/85/dd3792b5e372f4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/85/e08f7e69c2b615 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/85/f4109bd4595915 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/85/fd38b553ea9931 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/85/ffcd6f2e47297f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/86/07e8b8334ec242 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/86/3f92017afe69a8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/86/476f88212d0d89 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/86/4ad5d122886973 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/86/529383b676510d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/86/8e51c5397d04ba (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/86/96fbd34b638802 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/86/aee7f24ea5a150 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/86/b4de3ae2043f41 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/86/c89137ae0045af (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/86/ddb32d40ba2fad (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/87/2a8ea608c02ebc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/87/301c85efd49594 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/87/a43b3e85134b74 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/87/ca97b0177b0bf3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/87/d49fe31a5d77a1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/87/e746ef07791547 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/88/2c10e48a9dee3e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/88/3694bd2b0fe8a1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/88/387f1b0e052e27 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/88/40eb0c27abf3fe (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/88/4e7e5785dd7fa6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/88/74ba325b2d9c75 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/88/79f70885595ded (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/88/84eaa01e895af9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/88/9ec7e55d11700f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/88/cfa9097b849079 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/88/e2901ab9262a3a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/88/e784d0a2b38afa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/89/4ecba73706efba (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/89/61a255f0445df4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/89/a03bb24165541b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/89/a83a3a5dd26a05 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/89/ab4d093df30f18 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/89/c94a8a6e6c7ecf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/89/d7817e75a46c96 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/89/efa39bc90d955c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/89/f34be7e09112e2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8a/063ca570f8e3a2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8a/17d8cb401a5644 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8a/22f8d9cf257e36 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8a/2af2e01293db79 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8a/5238ce498bd31e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8a/643fee2e8fa686 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8a/dfab354d4a14ac (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8a/ebccac4083f12f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8b/0e0f27050305c0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8b/0ff1f69c99d1d9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8b/1a43071db8a9d0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8b/33a1167280eb7a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8b/43c29130542983 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8b/56f9636ab06c10 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8b/66a9243ccb2374 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8b/90b72dda935a65 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8b/f2979541f2c5e6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8c/0b268d0c150adc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8c/21ae98f53bd6e3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8c/2ee7f22335f230 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8c/3205e7eb75d141 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8c/435ea161112cb7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8c/abf1daef944a5a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8c/cff9c8a6ca2eeb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8c/d7c6289dffc8f9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8c/f75e2e0317f806 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8d/3dfcb054d3c63a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8d/94f2970015a7ac (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8d/cc22157f94b81b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8d/d7685a8bfbbb96 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8d/ec967a82d90a82 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8e/0986c5c1332e65 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8e/1d075b2d75d320 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8e/25425c39a8d2a6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8e/8b8fbae30e6026 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8e/be7359c2748b30 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8e/d0062869ece7a2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8e/ebdcf004287c61 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8f/30f09ede9b1f96 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8f/aaf8e78f05d5e4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8f/c29e557c70b9bb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8f/ca1405d0b1ff48 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/8f/f259c8ca4813a6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/90/03b2c44de4aae1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/90/04584123ae4011 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/90/262501ddd40f76 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/90/2ce70c7cfad77e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/90/4ef1d4d1ca9960 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/90/7d77215f9a8f53 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/90/826055d6b7e26c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/90/c404f31c52f858 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/90/db565da17fdbc2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/90/f9540c5fdcfe12 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/91/36b320f88c4d79 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/91/4411a4cc5bb0d5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/91/4c495a2c6ba469 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/91/6e7c56e0b31bd1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/91/8860e31c1d912c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/91/d5a0d7e2cf57b2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/92/151cc38011c1bc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/92/27b64a9cfecb14 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/92/2aaa4556e25eb6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/92/4008843d933468 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/92/45eb55ea10104a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/92/4ab66c9bf19a87 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/92/9c935796fe9832 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/92/aa73f8dddcbcd6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/92/b21908de8a6f20 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/92/b2397b89484189 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/92/ba84969c8f8c1e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/92/ca37a672b9f675 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/92/d4b6a1d140cfd3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/92/dc7d7ec0d4cd60 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/93/1b1da31c34f1a2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/93/3efe6f6c998194 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/93/cec181ffdf5dc2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/94/1e790832d9606f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/94/3187bd924027d0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/94/62779caeac06e3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/94/88d1964d12c7db (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/94/ba85565740b7d5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/94/c7fab708724d53 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/94/cf594df2d3f622 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/94/d30f43aee5b896 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/94/e57f9b269172cc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/95/0dddc650dffebe (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/95/1460c8cfdfa639 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/95/1c742aff35290e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/95/228c9f5ff51db0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/95/83d5aed6bae4b7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/95/8e3f615af3f990 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/95/948d3fd759a5ac (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/95/b502dc6486ac61 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/95/ce4ac69e436e44 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/95/defa3e2ccc3ef8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/95/f3726b6027fe15 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/96/09b4c279b84ccc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/96/1ad6a3e2a1fd40 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/96/290ac9676091f2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/96/2d3c5bca1f0688 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/96/34102a2d0fea1a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/96/74d753279697a2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/96/7adf4eefb6d2c8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/96/954fe6b80dec33 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/96/bf00405e91919a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/96/cd2b17197e12e5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/96/f23321a63fd565 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/96/f4395c813908f6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/97/2300455ee49fa9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/97/24685cc8f5e210 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/97/36bfe1d2ce0d28 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/97/42159ee61a935f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/97/528ee61609a85a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/97/6c45217f9ea704 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/97/75125a7c941879 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/97/814ce9fc4fe8a0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/97/90e1f5f071d826 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/97/9e43af9dbc4fbb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/97/a3f47be6f30aa5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/98/08e95d4206e9e1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/98/1437e2285510a1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/98/254fa2367f5378 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/98/365a60bac603a0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/98/52adf1b6a65682 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/98/5c8655c45d2a87 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/98/6c33a4f1b4a96d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/98/8436584a84d2cc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/98/ad5eef2ce8dcf7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/98/ad7d68e2ff33e0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/98/e4ac4ca99cfac2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/98/e6664af8b8ae6d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/98/f71f112bbab197 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/99/2d28a688821b27 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/99/acf223b6a63a3f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/99/b0346d03e99ecd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/99/b6c894e7d2a065 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/99/c7d13dca75094b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/99/eea5905c3beee9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/99/f9444904d08b09 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/99/fdea3e039bcfdc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9a/005a889d8a4fa7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9a/28f5fbb144a5d9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9a/5a0fd4fcbe5025 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9a/6fc713ed86c4c0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9a/8d279edd210faa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9a/9720100ecdada2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9a/a9f897fdef8a95 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9a/c3e6638d302094 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9a/d0d56d1f52ef51 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9a/db4481189ee45b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9a/e4aaea4dd6cb63 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9b/042bd94796df2d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9b/1083c4a87ce7c2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9b/15e6d812fa2b22 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9b/3b90b6fa367beb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9b/3d7339782b2fef (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9b/84d6559a20b5a7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9c/39f2fc677c1050 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9c/52c558773ee22c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9c/5a6198a8e4171d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9c/5bfbd06daa6eca (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9c/70aee55a52fe7e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9c/76c45f7ad9e943 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9c/a90b6d73f3d61b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9c/afcc1841573d4e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9c/e74867aeb11b7d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9d/5c0d30ee31827d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9d/849df438aec8ab (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9d/fc197d76728e73 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9e/0509a66e06ffe2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9e/0b00cf5b7c9b47 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9e/17c70c63baf4cd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9e/2639e5eab928a4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9e/2fe81254897684 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9e/37f698e78727f1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9e/424a99a0ae2fef (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9e/497ad543819571 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9e/c91839c36cfa19 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9e/fd25c2c2934c8a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9f/026870b2c2c988 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9f/4a1f7eac591e3b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9f/5b60f47e5bd6f3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9f/7869e036725eca (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9f/7d2056c186e950 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9f/94f7580fc9a625 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9f/a12c7955883177 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9f/a38d2b9a34a6a7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9f/bd20204e24fcb7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9f/d85f41b748cd52 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/9f/ebd3b2cb1d9ef8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a0/274d7070dd9593 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a0/2f78f49a6b3c70 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a0/5c7b41cf66068b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a0/6237bf2a2e4357 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a0/725e3a5e5b1ef9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a0/8edb75f53936f3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a0/a719deb08960fa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a0/bd833778a526dd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a0/d9cbe8ca122b19 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a0/e3f7039b451cde (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a0/f407929998b29e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a0/fde72fa95fc329 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a0/ff0c1981e64555 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a1/29dbb3bbe05fc5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a1/2a7f1e74761c04 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a1/40a672b7ac8e62 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a1/7a3a811dda5f24 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a1/87c62f989195b9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a1/9c1decb2e565dc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a1/b62b06d1492b21 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a1/cdfa103214524c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a1/f262dd096a6b35 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a1/f2add0ed05d58d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a2/07762f341a5221 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a2/0b66b2a14ca731 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a2/163df4bda905c4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a2/2164942b6390c2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a2/3fc50a015239f8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a2/4ced25f7641645 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a2/6ba125f0837513 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a2/7294b2457bd1f7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a2/80e0e87c68e55f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a2/9ee11d85424efa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a2/af344aa57167cf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a2/dd918a7854042e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a2/f8a842852ce79c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a3/131a93d1ced72e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a3/152870c331327e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a3/18020061d5ebb8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a3/1ca37873b71685 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a3/44dc625236f4aa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a3/4d2172da682a70 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a3/94f11309774462 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a3/a1aab698758553 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a3/a82f4d65b7beb0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a3/c74542e9b3c96a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a3/e696ba16d383e6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a3/e75d004de63ef4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a4/0de0cc2d986ef7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a4/16d63d325e693c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a4/3d7246131e0fb4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a4/4e372a0e17c701 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a4/5fb8f1bc2b3cca (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a4/7070a01207342e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a4/71cdbfc4de39ac (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a4/7c6ef162b5bcaf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a4/8ce397b4d285f4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a4/8f3ddea2a60327 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a4/d2667a8ad7d5f0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a4/efc37ac0dd769d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a5/0306df2b02022d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a5/15f18a133ef196 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a5/2625eaacfeee13 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a5/3fd53f47a128f4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a5/a7293e94e8f470 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a5/c94a8786590273 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a6/14f50c2e3319e7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a6/1f858233e03d50 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a6/2a8c350fca39e5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a6/2d43bb169a6835 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a6/31afab148f43be (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a6/3691918b202741 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a6/4b6165f7cc9a9b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a6/4d65385ae4eac3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a6/506f52e16e7e51 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a6/8f0478d20a9247 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a6/92442e7fda780e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a6/a790ef381229aa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a6/c280e1332002de (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a6/cb2fa499eafe0c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a6/d23516546ebfd4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a6/e2f153388ca527 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a6/f60da6a963679d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a7/221f8f581e13a5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a7/3e77c31ac464cc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a7/485f7764496876 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a7/5654048e8c23a1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a7/81a1a1aca2f6a7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a7/d9957605f691bf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a7/e530513ff405e9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a8/03a28ab04c1c45 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a8/050521c5dcff1e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a8/096dd07d6e4791 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a8/1ec09539985d11 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a8/26305fe9a674df (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a8/33197e7eb5af00 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a8/744351230e58d3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a8/90c34024259dc3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a8/9c660387901f70 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a8/9d2f9ed5def0bb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a8/c2edd144085290 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a8/f9be577cb588f8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a9/09e8b8afe99bcf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a9/0ebab8f5dbdd81 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a9/4fff88c06769ca (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a9/73aed53056e277 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a9/7a653a9a400b90 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a9/8db1e7522d0150 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a9/9e2c3ba214a7e5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a9/bfb2f9eaa6b19c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a9/cf55e9de493a6b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/a9/ff14be9ef35b4b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/aa/25b1615e788e07 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/aa/381fa248113407 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/aa/4396e57a55694e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/aa/4630f63a6a2115 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/aa/561ab45475ce51 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/aa/918e9bd1e03d0b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ab/1791309f3ccf7f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ab/4f90ac8389b4a2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ab/51efb895fb692b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ab/5a91718030acdc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ab/712e2c923806f0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ab/854ecc94e55139 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ab/8694ec09187705 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ab/876d39cd3e243c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ab/9e2823880b0012 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ab/b75c692cdc4ec1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ab/fcd8268190807f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ab/ffe0e10b927f01 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ac/100b5ebeb35da8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ac/1d04337d1ed6dd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ac/2d75b7ad46d6c4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ac/3b80e5e5620ffd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ac/3c98e7b5e9d0bb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ac/6219bfc0331924 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ac/7207419a8bc3b0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ac/9452026edf6f47 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ac/a1788e00a7e430 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ac/ca7cefdf025873 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ac/dcf131a8a3e1d6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ac/f60f7b20cc9842 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ad/0939a8b3b16f3f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ad/1d4f2b8e20ca3c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ad/22f4b567167146 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ad/456ce5439336d2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ad/476aa73ec15cf7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ad/5ae96f99ecc888 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ad/5e29d59225bcaf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ad/8ffd14ccffc1bd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ad/95e3e85bbefe13 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ad/a4c22abbac2643 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ad/c3eec2649e0bf5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ad/d7bcbb9eac063c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ad/d89586e64a4a42 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ae/0208884e679309 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ae/0e23c13fe18390 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ae/2343fef84b73a5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ae/94f496792fba47 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ae/a008af94a80fb2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ae/e3d5f03fa7db47 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ae/f6785985d5b862 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/af/058ca8ddedd29c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/af/0c825b2b01a059 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/af/1a4600bc09e02b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/af/43238806225cff (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/af/608f9b67f43458 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/af/cf74d9a39b5a28 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/af/cf81038f8891e6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b0/015967a17625fb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b0/045052717172ad (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b0/120b1e98ebd453 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b0/40c03a0dec8de9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b0/677fc889d4e694 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b0/bfd03661a7a26f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b0/d19e9505eeadec (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b0/dbcb8a39913c15 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b0/e482f8477cde74 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b0/fb54ce8825e8a7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b1/0188b54da7f1e4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b1/36e9a056b30774 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b1/ad012024231c50 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b1/b6ad8299b83f70 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b1/d4dec13bdca49e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b1/d512be5326ece5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b2/01e4d158e2a461 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b2/114585c2509b2e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b2/20870eb4b7992f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b2/57a4208dc78f43 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b2/723d9f2bdade91 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b2/7312476ad59af1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b2/bad9903c0abc0a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b2/f90e770d53adbc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b3/2fa6ddad4bec5f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b3/387db230a93f39 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b3/679866bab5f86a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b3/913a0defa7e4b4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b3/9253e8ac786e4b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b3/97991087fb01a9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b4/07fe50eb5a2f2d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b4/695856f703b45f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b4/95a9b1c358ff0c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b4/aa7c2d08ed2e9d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b4/b1a07bfe3604d0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b4/dca33a55d665dc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b4/e448ddc624fff0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b5/30c2a5005db0ca (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b5/412c89e8a8e9cf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b5/648beb6ef647b3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b5/8850036b1496f7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b5/df307782b795e1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b5/e5717cc9a358c6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b6/02995751e33eda (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b6/0a282899439b69 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b6/14072c3c800f01 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b6/16503b5989f709 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b6/20617ac2ad312e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b6/34d21166635237 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b6/8b1fbc1b416a46 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b6/912e99b82f69e8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b6/92b1b926001e1b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b6/aa620fefc418bf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b6/b1a8c26fd52deb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b6/b7d00d5706b466 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b6/d10522ff01e91c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b7/2b4be06379ca6b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b7/395853038eb707 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b7/73ea6e242d9bba (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b7/bad081cca7a257 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b7/bffaf39aea6fce (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b8/2a6d29c1d06294 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b8/3178f5ded273c3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b8/467895f01d8118 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b8/60f6ba9bb93bb2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b8/cba2d08bcbf781 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b9/114145a162f744 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b9/1dd03ceb25a6b7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b9/363be7ab613749 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b9/3872d8fe08ff48 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b9/466a4fc2542649 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b9/81c38ee5aceefa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b9/b85e861fb34d31 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b9/bd02ab7112647a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b9/be285313dbc1e1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b9/bf9c0d3c8ff378 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b9/c302f1965b16c4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b9/dbce0d1f3a73e2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b9/f1bdbbd6f88693 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/b9/f7a2e9fc88ffb0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ba/3ba237ca9a0201 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ba/425bdbf13d545a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ba/615fce8cf189e4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ba/6b513bc29095ff (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ba/73bc0239a5aa1e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ba/8c6b38a94ca7e1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ba/9517f290ae7b20 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ba/d31f462d1bd0b7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ba/d6a8c16863db4f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bb/007e4e92f6886c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bb/29fd4d73ae7e9f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bb/520dfa78ad24cb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bb/577d6147dac4b7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bb/628b81e64e1627 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bb/71a9f92c52c826 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bb/8fc0245fcfafa9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bb/a1622233997ac6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bb/ab83344bced98b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bb/be11f57a7339da (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bb/ccd71d48addf1f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bc/1cb4343442096c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bc/326d85fe2058ca (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bc/40860d1fdaa9bb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bc/466eec2849a658 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bc/60976da975a0d0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bc/6513ce678f47f2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bc/665a2451c113e0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bc/6bd49308adc68c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bc/9f880e85f0a9de (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bc/aeb266e94222ea (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bc/da3ff62f4fecfb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bd/0606a18216dc7a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bd/0dfe605014deae (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bd/4b7c6bfbe9766f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bd/63ccc67a9c3846 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bd/bd9c152ee20844 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bd/d9b716ba47ae18 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/be/12e649482bb1ba (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/be/23f6b5358d1446 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/be/3107fff973234d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/be/35e6c955fdd5ef (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/be/80cab2547aafe5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/be/9d174e3329cdc7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/be/bc513da07622ed (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/be/ce3252bb8598af (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/be/eac095eefdabd4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/be/ef465a237ecf77 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/be/fecfb479de9190 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bf/0424d9dbab5b9c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bf/21882cbb9eb379 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bf/2a8d3d9de81576 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bf/30b14cad2239e2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bf/519681e0269c32 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bf/73ab25f908f623 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bf/ac3ac67cc9749e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bf/e1126c335d4ddc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bf/f87db656fe8479 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/bf/fa7e9ba4d567f0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c0/01dc221926452c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c0/0673a667fafa4c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c0/0bff84142e4d3f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c0/0e8285aa1bf39f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c0/1891ea430e7399 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c0/6158a528e19044 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c0/958d0442f22495 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c0/f630e601d0769d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c1/2f937c07622589 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c1/32e724c471ef04 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c1/356415253aef60 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c1/4c12ea9711883b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c1/6cf339af4d776e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c1/6e18132ab261a2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c1/70293ca0bb412e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c1/8cedb605ec00a7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c1/aaa49486e0d0f9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c1/ad66d731a95913 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c1/bcb1ea317b3ffd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c1/e5239de82c3928 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c2/9e89ee3add8d7c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c2/b4121cd40e87b4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c2/bfd08c43382f6f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c2/bfd3b866d278ab (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c2/cdece5dacafadb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c2/d19ebe8e6fe38a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c2/d6d9c7d27cd15d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c2/e1b48ec5042222 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c2/f2c99b1fc65aff (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c3/0ad80f5dc4d835 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c3/0e1b2cb5ce0611 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c3/38b64d136e99ef (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c3/3e0a396334b98c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c3/51fdfd6f3e2645 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c3/7b80576e851777 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c3/adeeb92a3c75ab (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c3/b98896de47d0db (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c3/c1747c7e984a4a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c3/e871e527750a7f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c4/01b03954033077 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c4/0eb402c4696a62 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c4/2b90da0ec54d09 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c4/2e141043d4085d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c4/2f8c12b631c93c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c4/346f24e894710a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c4/363b4c186961c4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c4/7faed32b1b7498 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c4/a4900814c36845 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c4/ac28702615fec9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c4/b424cebb917332 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c4/d49f00d91226b3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c4/f1a0417c744e21 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c5/167d49affde9fb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c5/1d2472ece2a94d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c5/56f48b9ca6fb55 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c5/96bddae67e23ba (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c5/999dc39521572e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c5/9f169bd207f944 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c5/bdb3f4af19137b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c5/eed0b2db9d846e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c5/fe509b9315d553 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c6/0da144d70885a3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c6/192cf9930703b8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c6/1e734fefd2c80a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c6/30ea1319c4c9e5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c6/4b16e1a63dd310 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c6/7914ebcdfa6b6d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c6/aa6cff96db5058 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c6/e4b49af48981c3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c6/e6689a6843cf81 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c7/005e75f2b7f11b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c7/19b4e0244fe3b4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c7/35941c7605247d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c7/68ecbca481e065 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c7/6b5dfcee7db8c0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c7/726bc1ae9a2517 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c7/7a2adc6b92e447 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c7/c09b4961547854 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c7/da2c1e05319e7f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c7/e098d4fa3c07ca (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c7/e42cbb77bbf3ef (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c8/14613fed87bd87 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c8/1768a525295ba3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c8/17caa7e09ec5d9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c8/266aa1ae4a22f9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c8/295f3b43dd6770 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c8/4e5fc98e2f44a5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c8/5bcfa678dd17e8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c8/8a09b7d492ef84 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c8/93f6ef7eab3db5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c8/98cf211f793347 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c8/b99f0b637699bb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c8/d10951ba017111 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c8/e52fda39278638 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c8/f85deebf129fe8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c9/546040468317e2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c9/b545f9fb7d03b4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c9/d849570db38581 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c9/e62f319c8f6619 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c9/ec55331dafcd62 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/c9/eca68cc4204d19 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ca/04835a4a61f6b7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ca/3f51ced94c60f7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ca/76e597eb9e8b90 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ca/7faebb8c862476 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ca/8c4e3d0367783d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ca/8d63c8e2ce95cb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ca/ba4a6065ed6d02 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ca/cbc0f5c84e90aa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ca/d199199bdc410e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ca/dc4a244f6b9dec (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cb/05e05f1fef1d79 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cb/1fd829b3d4979d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cb/3cb05b485fd80a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cb/40864ff19b96df (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cb/4625eca3c2ff62 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cb/46b0447613d91a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cb/640a5f6322df31 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cb/a185f9bbdb8e17 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cb/b7c8f3d3741157 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cb/deb3fe07f1748d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cc/41148dde889391 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cc/6dd394b821ea65 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cc/71b7b3584452fc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cc/93ee4b1414da74 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cc/9a5426581d5679 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cc/d542f29d0d989c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cd/08f3daa391aeb3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cd/20b0ac6bd53b80 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cd/23b6bbbcbf2e0f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cd/5f4025e1cc4325 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cd/84a9d32b59f9ba (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cd/aa2cf0df7acb58 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cd/d9568ee7ec6cc7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cd/e051e4f7600ee7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cd/e84367942405a5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ce/19e57ada0ed4e7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ce/827f7ac7948aa8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ce/c4fc39a052c280 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cf/1a4ee0b840ce04 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cf/2b9f741cc3175f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cf/34773b5f5d2cf4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cf/68682d79d7f6b3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cf/7cc2648913a281 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cf/910c00e0ed8aae (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cf/b9968dfd16034e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cf/cb2f5085d2a661 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/cf/d0d03dee1ee9ce (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d0/117bf3f74ecc84 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d0/2d86b311c44e44 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d0/8db31b2e0d47a2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d0/cdb4f57086681a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d0/d390145ecab530 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d0/e73fb86d36eb89 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d1/103e079fbb4154 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d1/12d57c6250408d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d1/4e54016d156b8f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d1/5486a60fde32c5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d1/57a8c3e05e2166 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d1/7d304342b2a7aa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d1/88f05b6db1ad92 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d1/9118d6eaad21f0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d1/94b33a642fc19e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d1/b7686a7104a495 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d1/c3be771995f7bc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d1/ce5c9e531c3fd8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d1/d41a551f097a85 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d1/f5b1b09becd707 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d1/fbb6daae074480 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d2/0a014185dc5412 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d2/14b7dc627d3354 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d2/1f885898cdf5b6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d2/2fcac6f5da423d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d2/442395784db778 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d2/4eadef122fce0b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d2/607effef4bd143 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d2/6a12e100a5ecbf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d2/6f7be44b8ec3d1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d2/73a43e62bb802e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d2/73e450087ad025 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d2/767c0f4e8c97ef (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d2/76f9c23e0a49e3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d2/d299ee4ecadcd0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d2/e8b0ae2550197d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d3/0b1df93c16fae4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d3/1c6778a5eb437d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d3/1fc1e7abab7227 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d3/8e581f699da2d0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d3/abbd5ff4eeb10a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d3/b4068919ffb4c4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d3/d712f79c6364e9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d3/ee5e81b0b8fe89 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d4/0a468fd4750ad9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d4/4973091961cd91 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d4/7a8b4c26dcdbd5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d4/8eff7498f76db1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d4/e8574135117cee (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d5/00f605aad7dbd1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d5/5fde8cdbd4a516 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d5/6d4c3670ac0d3a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d5/75949135db0dcb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d5/86ca18e32757d4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d5/9e3ff06ec54085 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d5/e8b3a0ad91103e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d6/20611e78f34f8a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d6/30625ec1b3176a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d6/3eefa331dcca35 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d6/9b4f310fa7c6ac (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d6/b7dee98d26478c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d6/c3487ded5ec86d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d6/ee31db179a015c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d7/3e028ce6984a1e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d7/51d56d0e62772e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d7/6301e30f5a56af (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d7/7653de15741c24 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d7/7f95c0f40ed653 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d7/9dca2838959368 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d7/ae1dec2c875ff2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d7/bbb76c027b018c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d7/d287127efdd60c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d8/0b6b2bec57de0e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d8/1c7e71709f5fc6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d8/22f310eae98f40 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d8/2f6dd2b7f0bc8a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d8/6c1999c0a0744c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d8/8dfc04c73e1609 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d8/9215e198c0e370 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d8/a7c8240902ff31 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d8/b1bd0a85a1b6cb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d8/b4fc8811da9ba1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d8/beeace5cdd6d0c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d8/c5c1e79cfc265b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d8/fc968853657ac8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d9/0ef29d59ae87ad (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d9/3022c400c86816 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d9/6ce2a9140afaec (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d9/8b8e50c2382377 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/d9/c04f71cf318cd0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/da/706e446344e0e4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/da/7918e17156f5d0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/da/7b947be4c2a940 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/da/ad26ebe58c1cd6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/da/e63f8b67527d68 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/da/f8e6336e9facdc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/db/1dac5037a63c87 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/db/5133d33e8e58f3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/db/537dc2e1ef6ffd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/db/5cd180912da0ba (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/db/759a9e1e5adf4b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/db/88123bcf7b823d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/db/abddff900e4b34 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/db/b1795da5ea784e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/db/b659155c634424 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/dc/0578798605b9f1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/dc/3d47e5abf6412b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/dc/5532e4e9c84410 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/dc/69de34845e1fac (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/dc/796188f139f3a2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/dc/922e5a99619e0d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/dc/9c1ec3908384a6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/dc/aeb5ea3602d3c2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/dc/d100491ffb1654 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/dc/f3fec7ddf37889 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/dc/f8d0625bf41bf0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/dd/0cc3db0c71150d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/dd/11dad23d814a55 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/dd/66972b17e363b8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/dd/6c226782331fdd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/dd/88142ebc919e83 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/dd/a3c0169debca78 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/dd/ecf270ae683959 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/dd/fa8f7b2226b142 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/de/40bfca0c989699 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/de/5d4361e9b87454 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/de/d23fb0f9a1ee03 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/df/009ffa99e26646 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/df/0a7e3ef8e4843e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/df/10967372df16b9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/df/4d612cb7fae671 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/df/55f0c1267cfa3a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/df/5aaa0d9d36f62e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/df/6b1fbefe633c6b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/df/9f47bcc95cfca1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/df/a6f60082544af7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/df/b0497f743f1e7f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/df/c590e4d15c15a6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/df/d70878e4fe86ee (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/df/f16e0459dad0c7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/df/fcb7aa9dd7932f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e0/0f5e9dc113a0fa (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e0/4e15d6a82b3c1b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e0/4eb8e9733a516c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e0/59a70de2684a4b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e0/6444bf627e92c8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e0/692e4541aea62b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e0/c9a035cb963216 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e0/e368fc4df7010f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e0/e4c4aa610d08ed (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e0/efa667067bc0c1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e1/083412ed96f63f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e1/12a3932aa35a56 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e1/1b959d297e6944 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e1/2a35f42fd05df7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e1/4336bba34658dd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e1/454e2d7d4b2f4b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e1/5798ff53f87036 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e1/77dfc5465d7190 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e1/8bb5301e7ce96e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e1/98118cea5d84ac (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e1/aafd11ea1d01de (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e1/dcb54fed4f2977 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e2/0a46a45cb7f9c1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e2/711412cbe17ac7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e2/83f88c927221e8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e2/c0bec45a5f8093 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e2/ecf69ddef77e30 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e2/f337a3fc1d81a1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e3/096210c4aadabb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e3/1cb3afcf06a804 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e3/1fd5369a8fdef1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e3/3651e39ae59314 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e3/3acc5ae11c4bed (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e3/5bb319a13f0d2c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e3/6527850bfd405a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e3/7de332263760b2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e3/826cada4f89b95 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e3/85ce31f9710d2d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e3/e47ebd8effb9c5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e3/e9c44be0762865 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e4/3deddf93447297 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e4/5369749d346d35 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e4/78e682a288f221 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e4/8170d043ca8f00 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e4/88565fcbeb2c71 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e4/c97171d1352300 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e4/d891ddb4f25d33 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e4/fbb24e533fbe33 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e4/fec1591db17530 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e5/06f20f09dfab69 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e5/096cf4d8a35c26 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e5/34fba757787ca8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e5/5308846e209d6b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e5/5a52d94a725efb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e5/5bec5be039fa4c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e5/663a5993c1b9c3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e5/6d2381e8dc64e3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e5/7b862700212bf0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e5/9663f828d3db32 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e5/b89f87db64a441 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e5/d4358e1545fe7e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e6/000f8ae89316ec (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e6/3c5071144b9ccb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e6/800bf57d78d482 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e6/88c6e6e5a1be59 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e6/a6639e7009dc91 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e6/b8dccfbac38cc8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e6/dd727f60e21002 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e6/de46ed7b8596d6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e6/eb4b56bcb61095 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e6/ff8fb1da7909b7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e7/01615c0857276d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e7/0c8fe763c8939b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e7/0f3a89cebf5356 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e7/41c70b236988c6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e7/507a6f0d707f18 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e7/6147022780bffc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e7/9c7aceaa182e93 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e7/bdae5306a7e2da (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e7/ee54214de24acc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e8/147ae30f730120 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e8/361c9d5d632366 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e8/41271b8ac0ab1a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e8/5095922ca29522 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e8/5421f55d149b74 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e8/5c393aee6c54f1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e8/613fefddd28980 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e8/6a6aef8c9c34b9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e8/848cdb56e7eba1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e8/96bf8ca6b64f45 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e8/ab3a763abfc251 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e8/af4f52bb626645 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e8/d71b7c566eeae3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e8/ee4af37a753d1a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e8/f81a354e295a3b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e8/fc55e00e947fd9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e9/06a57df20b9d80 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e9/0d438137b38816 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e9/63ac46bf462fc7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e9/7b72279d0c285a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e9/8dcfb5724ca99d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e9/acb7bead8ad5c1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e9/b7e5733dfc2e99 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/e9/e0b085d73d959e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ea/214027bcc4447a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ea/30e8c023842915 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ea/3863c4b2e36cd8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ea/65af5cad27014d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ea/7d93ccdc7a1d5d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ea/c71d56d58b746e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ea/ce56a19b31229b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ea/d5d113c0045b72 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/eb/1caf1cbdf17f93 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/eb/2789391ead8e49 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/eb/4338c809a22631 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/eb/50e4de7020e110 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/eb/517b25fe32dce0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/eb/7963a6296ed598 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/eb/852d9f77b397a3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/eb/994425937fa1d0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/eb/c222f1c8ae899f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ec/0e11511615eed2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ec/8937e139246b77 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ec/92b1c4b762cd05 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ec/994d5ce50b8f09 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ec/e52870ea5eb516 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ec/eb54b50fa404f8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ec/eb5753277c137c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ed/45e5e83c8546bb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ed/89b76c2a60b954 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ed/b710bf9963acd6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ed/f5096b360ef3db (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ed/fd58ef87872b8c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ee/233f4d2a26a1b3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ee/5115bcd167a8d5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ee/60277a83bb669c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ee/7b106b45c3d64a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ee/9d955f004f70b0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ee/b72313499ae9eb (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ef/131283d392d77e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ef/148eb7452f0f29 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ef/531ed082793c81 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ef/8be9da74e17a91 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ef/994c1f83f5a23b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ef/9c1fb6fc3433dd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ef/a8e8cbaa30cca2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ef/b0357527af27d5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ef/d78149b11875da (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ef/ecfcdb707c2c82 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f0/3360cbfe95afb2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f0/5f39663a9efbc6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f0/621b3bc131731c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f0/694fa78a64da40 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f0/6e1e2145a503b3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f0/7712a7eba1ad94 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f0/7df0ad5f51b175 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f0/b8f3334665ef7b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f0/ff741cd2a0b2ed (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f1/02dd8f98bce86c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f1/0a387ff7d45e5f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f1/1c51754b1ed1f6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f1/2189ed6631a9f8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f1/32ebe061da25de (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f1/3ca3102cb20af1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f1/41eef1f7080039 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f1/47bf0ea7b5c31f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f1/5983601bea309e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f1/631a4c91b13ba2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f1/712340b574655a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f1/7e2a04daf4fed5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f1/920f1c2730686d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f1/b776dbc1a198ef (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f1/be5166f0a1876a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f1/cd77675ecfd429 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f1/d6e761ccc7af7b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f1/dcdc11e3dc1853 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f1/f56854ef8db697 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f2/047e8e68627d06 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f2/42a25eddefaf03 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f2/5de5f1ce4fe529 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f2/6c83fdf97a912f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f2/8c25c2c0af7085 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f2/95f099d03eb950 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f2/d61d41bbdac9e5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f2/f9d5e88e26cb6a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f2/fdc17f8973c8f4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f3/017305f2334e9c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f3/167c895140d59a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f3/600999afb8f2f7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f3/6880daf313f6ec (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f3/74319f1f127355 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f3/7969502bfe6856 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f3/806a699ea30c5e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f3/927a9464ae857e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f3/a4ab835178ee2d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f3/af0d2b44ef7bba (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f3/b67a5c443f033e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f3/cc6d7dee5dde5e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f4/13871ab9edec01 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f4/2092421abcbbb1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f4/85df8bc52a0338 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f4/8a4c9426b55b70 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f4/927673ef314589 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f4/96346207346940 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f4/9778ce0db71b1f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f4/eab2f2ed56b68b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f4/f691adc13a7247 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f5/100145e1f2a274 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f5/1083f16747a4bc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f5/28fd00ed1ff207 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f5/478d3f6979ecaf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f5/4804057161894f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f5/6c6cd68ae84f30 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f5/6df8b5f35c60ac (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f5/d4e10e42d51d62 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f5/e9f7c4c5ab61da (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f6/01cc86796d628c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f6/07946c5b20dd73 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f6/09de0eb2263ae7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f6/23df391e3e3607 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f6/33963e7baf4e1a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f6/520d870a504eb5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f6/90aa58cbd395c7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f6/a1ae1b065bbc67 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f6/acb9fbdad0349f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f6/bde38aada9f139 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f6/c216259605fc9f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f6/e07e01926c1112 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f6/e3eded9e10bc33 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f6/e6b5d11e40b06b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f7/04ea139571d0cf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f7/08d677472da091 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f7/0995767408e724 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f7/174871bf7301c9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f7/23b3e421fef5a8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f7/3fcfa3aa8c27b9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f7/556ab79a8ee358 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f7/aa84541d2fc619 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f7/be83bedc456017 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f7/e33247d5287049 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f8/18460f4ab6e208 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f8/554efab49e3184 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f8/5c02cd4fe558a5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f8/6770bfc3aeb748 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f8/9b99af88afc43f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f8/a0c5fc20495390 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f8/a5c9e13cb5b5af (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f9/009ecce479f64f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f9/1151547f11319f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f9/17f5c202492d60 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f9/3a2ca4ecee62fe (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f9/4648c8bd78f8cc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f9/55f3697c634531 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f9/5ee6672470da79 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f9/8fd37cc38312ec (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f9/95c9115f5a6d1f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f9/bbc5cee5fc9119 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f9/d6ad1287d08139 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/f9/f49984f4620b16 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fa/0eda59fa85be24 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fa/3b1377b6ab5c30 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fa/4471564e73a182 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fa/57867a8096684f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fa/639ac88a9c7938 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fa/6eb0dbf7bcec8b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fa/777413683f35b1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fa/b786abeccf8b73 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fa/c5388eb2eb313a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fa/f8589d08f7a64d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fb/01c10324258cd9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fb/059bafae2dc187 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fb/1dad9dbda062d3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fb/35975795d6b120 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fb/365e0b26468ed5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fb/3792b4a3dffe92 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fb/3cb33ba9a46305 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fb/703368804ac896 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fb/9114abc1db21e1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fb/ab1755d4b8938f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fb/acd7867eb4a7dd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fb/b0527a84285f4c (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fb/b0ba568a5d809d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fb/e163c476e30af7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fb/e483f99eab80b8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fb/e9d8a48a751039 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fb/f71b2f5fa97d82 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fc/030cea852ddc1a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fc/706c8392ab0839 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fc/72105168e928be (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fc/73267c069a4280 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fc/826535dd148fac (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fc/e2bf205d943672 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fc/fa1d0c7ede3ded (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fd/1a9ed6f15bf642 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fd/310f2c345db639 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fd/6d9db3385f90d7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fd/a12edd1fc77bf6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fd/a311f2ff8f4047 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fd/a7af2ef0969301 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fd/cdb84aa50a465f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fe/166e6f80b9f779 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fe/2eaf10f6a08438 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fe/3884225723cd02 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fe/5d20969e0161d6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fe/c6fa8acd321efd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/fe/da74fd38e2a869 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ff/0b7f3cc1c30c6e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ff/17e85beca8a484 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ff/1dc672519f82d5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ff/2db7251c4f9bea (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ff/6ececdee2b066e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ff/81f5eca5547fc2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ff/8273f68bf85255 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ff/cb476511f24ad9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-iseq/ff/e3f60c536a190b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/02/100e36eda43c6d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/02/7c423d4b2f1826 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/07/0e6c47397a1c15 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/0b/1ce408082486c9 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/0b/3dce02e59e80e2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/0e/ea4fddb88eb3f3 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/10/28829364438d90 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/18/55be9a51042338 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/20/1ac8b3daac9990 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/21/1d698efa899019 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/22/a1eff5d99fd222 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/24/9f72647d11602a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/26/379c03893a9d34 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/2c/f55650581e1bdd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/2e/771cd98f5583f0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/30/cb549f5be9d24d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/32/12065c0b04131b (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/3b/275f6b33615d15 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/3f/2c4120b3d593ad (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/3f/d3d820220f90d0 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/40/8095ee97a92a3a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/44/339380699270b5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/45/c5e0e5fb97b335 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/47/31dd792f2d7c17 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/48/252e1c17ae4bae (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/49/77f25a72bfd5ea (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/4d/aa26506cbcc740 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/50/a6cb57b4461f12 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/50/d0c2392738a455 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/52/f57470d546f9b7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/55/e8d8ac160cd9ea (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/55/f10712e6666576 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/5e/28339174ff35b8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/66/123a1c2f2f5535 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/68/2b8797396bc18e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/68/d78005f1577c90 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/69/f3b46d588409da (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/6d/d21e61ce8b7548 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/7a/891084a53b3986 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/7b/6518baeb34fc49 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/8c/16574efdae6bce (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/8d/90c629b932f688 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/90/38e8c85b9e9b3a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/94/49aa08dd299f38 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/94/e4a34f6cdf7254 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/97/d0d76c917a70a1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/97/d439246a0d5551 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/98/fc98807c0373d6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/9a/024c201aeffca4 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/9b/5484fe2559970f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/9c/15212e838f2ff2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/9e/6524430b86020d (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/9e/c097f23cd25097 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/9f/c8d0009769589a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/a1/4a138f29b4b528 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/a1/786bdbf126a19e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/a5/0362d7f5a30236 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/a5/9e6036bc989083 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/a6/ebc5c7cbc55f40 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/a8/9592e77f3aa912 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/aa/336611630589c6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/b4/81dc86c245ff41 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/b8/cace53ca38a549 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/b9/c70bba98077f38 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/c0/ef000a97569492 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/c1/93f823ac105eba (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/c4/c26f0a80ee4083 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/c6/155ccbe508471e (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/ca/5c2688ac024483 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/ca/dd246603fe03a7 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/d1/949d090d8b2bbd (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/d4/3d0196d13a6b14 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/dc/96a6392e11d527 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/dd/54b5df34718df2 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/df/1822f278ce5ddf (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/e7/b2a40709f5be5f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/e8/8b1fae5158c59a (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/e9/82038677a604ce (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/ea/36473cd8f6b4e5 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/ed/bc12684a52ce6f (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/ee/6a5030bcf220e6 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/f1/3f36e0379193b8 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/f5/15d9df3bb46c23 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/f6/f6fc78c2d8d8cc (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/f7/0a6f73fd138684 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/f7/f7a51299464913 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/f9/f8af93c56390ef (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/fa/f18756c80115e1 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/fc/b489635964bf98 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/fe/457c93c5554fde (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/fe/7519aca5e98583 (binary)

### rails-solar/tmp/cache/bootsnap/compile-cache-yaml/ff/1c9a3d273461b0 (binary)

### rails-solar/tmp/cache/bootsnap/load-path-cache (binary)

### rails-solar/tmp/pids/.keep
```

```

### rails-solar/tmp/storage/.keep
```

```

### rails-solar/tmp/.keep
```

```

### rails-solar/tmp/development_secret.txt
```
4451ee98d9a86233d68f84f164d0d2e20b6c7a42162d658128c1a36eb5324dff28f4889d1b498ba2d03559eadff2ce43c058260de0f30ad07d308153c8721ad3
```

### rails-solar/tmp/restart.txt
```

```

### rails-solar/.gitattributes
```
# See https://git-scm.com/docs/gitattributes for more about git attribute files.

# Mark the database schema as having been generated.
db/schema.rb linguist-generated

# Mark any vendored files as having been vendored.
vendor/* linguist-vendored
```

### rails-solar/.rspec
```
--require spec_helper
```

### rails-solar/.ruby-version
```
ruby-3.2.2
```

### rails-solar/Dockerfile
```
FROM ruby:3.2.2
WORKDIR /app
RUN apt-get update -qq && apt-get install -y --no-install-recommends \
    build-essential \
    libsqlite3-dev \
 && rm -rf /var/lib/apt/lists/*
COPY Gemfile Gemfile.lock ./
RUN gem install bundler && bundle install
COPY . .
EXPOSE 3000
CMD ["bin/rails", "server", "-b", "0.0.0.0"]
```

### rails-solar/Gemfile
```
source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.2.2'

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem 'rails', '~> 7.0.6'

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem 'sprockets-rails'

# Use the Puma web server [https://github.com/puma/puma]
gem 'puma', '~> 5.0'

# Use JavaScript with ESM import maps [https://github.com/rails/importmap-rails]
gem 'importmap-rails'

# Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
gem 'turbo-rails'

# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
gem 'stimulus-rails'

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem 'jbuilder'

# Use Redis adapter to run Action Cable in production
# gem "redis", "~> 4.0"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', require: false

# Use Sass to process CSS
# gem "sassc-rails"

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
gem "image_processing", "~> 1.2"

# Autenticação e RBAC
gem 'devise'
gem 'pundit'

# CORS para permitir chamadas do Next.js
gem 'rack-cors'

# Geolocalização e PostGIS
gem 'activerecord-postgis-adapter'

# Cache e background jobs
gem 'redis'
gem 'sidekiq'

# Testes e desenvolvimento
gem 'rspec-rails', group: [:development, :test]
gem 'factory_bot_rails', group: :test
gem 'faker', group: :test

group :development, :test do
  # Use sqlite3 as the database for Active Record
  gem 'sqlite3', '~> 1.4'
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem 'debug', platforms: %i[mri mingw x64_mingw]
end

group :production do
  gem 'pg'
end

group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem 'web-console'

  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  # gem "rack-mini-profiler"

  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end

group :test do
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem 'capybara'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end

gem "noticed", "= 2.2"
gem 'activeadmin', '~> 3.2.0'
gem 'sassc'
gem 'active_model_serializers'
gem 'ancestry'
gem 'country_select'
gem 'friendly_id', '~> 5.4'
```

### rails-solar/Gemfile.lock
```
GEM
  remote: https://rubygems.org/
  specs:
    actioncable (7.0.6)
      actionpack (= 7.0.6)
      activesupport (= 7.0.6)
      nio4r (~> 2.0)
      websocket-driver (>= 0.6.1)
    actionmailbox (7.0.6)
      actionpack (= 7.0.6)
      activejob (= 7.0.6)
      activerecord (= 7.0.6)
      activestorage (= 7.0.6)
      activesupport (= 7.0.6)
      mail (>= 2.7.1)
      net-imap
      net-pop
      net-smtp
    actionmailer (7.0.6)
      actionpack (= 7.0.6)
      actionview (= 7.0.6)
      activejob (= 7.0.6)
      activesupport (= 7.0.6)
      mail (~> 2.5, >= 2.5.4)
      net-imap
      net-pop
      net-smtp
      rails-dom-testing (~> 2.0)
    actionpack (7.0.6)
      actionview (= 7.0.6)
      activesupport (= 7.0.6)
      rack (~> 2.0, >= 2.2.4)
      rack-test (>= 0.6.3)
      rails-dom-testing (~> 2.0)
      rails-html-sanitizer (~> 1.0, >= 1.2.0)
    actiontext (7.0.6)
      actionpack (= 7.0.6)
      activerecord (= 7.0.6)
      activestorage (= 7.0.6)
      activesupport (= 7.0.6)
      globalid (>= 0.6.0)
      nokogiri (>= 1.8.5)
    actionview (7.0.6)
      activesupport (= 7.0.6)
      builder (~> 3.1)
      erubi (~> 1.4)
      rails-dom-testing (~> 2.0)
      rails-html-sanitizer (~> 1.1, >= 1.2.0)
    active_model_serializers (0.10.15)
      actionpack (>= 4.1)
      activemodel (>= 4.1)
      case_transform (>= 0.2)
      jsonapi-renderer (>= 0.1.1.beta1, < 0.3)
    activeadmin (3.2.1)
      arbre (~> 1.2, >= 1.2.1)
      csv
      formtastic (>= 3.1)
      formtastic_i18n (>= 0.4)
      inherited_resources (~> 1.7)
      jquery-rails (>= 4.2)
      kaminari (>= 1.2.1)
      railties (>= 6.1)
      ransack (>= 4.0)
    activejob (7.0.6)
      activesupport (= 7.0.6)
      globalid (>= 0.3.6)
    activemodel (7.0.6)
      activesupport (= 7.0.6)
    activerecord (7.0.6)
      activemodel (= 7.0.6)
      activesupport (= 7.0.6)
    activerecord-postgis-adapter (8.0.3)
      activerecord (~> 7.0.0)
      rgeo-activerecord (~> 7.0.0)
    activestorage (7.0.6)
      actionpack (= 7.0.6)
      activejob (= 7.0.6)
      activerecord (= 7.0.6)
      activesupport (= 7.0.6)
      marcel (~> 1.0)
      mini_mime (>= 1.1.0)
    activesupport (7.0.6)
      concurrent-ruby (~> 1.0, >= 1.0.2)
      i18n (>= 1.6, < 2)
      minitest (>= 5.1)
      tzinfo (~> 2.0)
    addressable (2.8.4)
      public_suffix (>= 2.0.2, < 6.0)
    ancestry (4.3.3)
      activerecord (>= 5.2.6)
    arbre (1.7.0)
      activesupport (>= 3.0.0)
      ruby2_keywords (>= 0.0.2)
    base64 (0.3.0)
    bcrypt (3.1.19)
    bindex (0.8.1)
    bootsnap (1.16.0)
      msgpack (~> 1.2)
    builder (3.2.4)
    capybara (3.39.2)
      addressable
      matrix
      mini_mime (>= 0.1.3)
      nokogiri (~> 1.8)
      rack (>= 1.6.0)
      rack-test (>= 0.6.3)
      regexp_parser (>= 1.5, < 3.0)
      xpath (~> 3.2)
    case_transform (0.2)
      activesupport
    concurrent-ruby (1.2.2)
    connection_pool (2.5.3)
    countries (8.0.3)
      unaccent (~> 0.3)
    country_select (11.0.0)
      countries (> 6.0, < 9.0)
    crass (1.0.6)
    csv (3.3.0)
    date (3.3.3)
    debug (1.8.0)
      irb (>= 1.5.0)
      reline (>= 0.3.1)
    devise (4.9.2)
      bcrypt (~> 3.0)
      orm_adapter (~> 0.1)
      railties (>= 4.1.0)
      responders
      warden (~> 1.2.3)
    diff-lcs (1.6.2)
    erubi (1.12.0)
    factory_bot (6.5.4)
      activesupport (>= 6.1.0)
    factory_bot_rails (6.5.0)
      factory_bot (~> 6.5)
      railties (>= 6.1.0)
    faker (3.5.2)
      i18n (>= 1.8.11, < 2)
    ffi (1.15.5)
    formtastic (5.0.0)
      actionpack (>= 6.0.0)
    formtastic_i18n (0.7.0)
    friendly_id (5.5.1)
      activerecord (>= 4.0.0)
    globalid (1.1.0)
      activesupport (>= 5.0)
    has_scope (0.8.2)
      actionpack (>= 5.2)
      activesupport (>= 5.2)
    i18n (1.14.1)
      concurrent-ruby (~> 1.0)
    image_processing (1.12.2)
      mini_magick (>= 4.9.5, < 5)
      ruby-vips (>= 2.0.17, < 3)
    importmap-rails (1.2.1)
      actionpack (>= 6.0.0)
      railties (>= 6.0.0)
    inherited_resources (1.14.0)
      actionpack (>= 6.0)
      has_scope (>= 0.6)
      railties (>= 6.0)
      responders (>= 2)
    io-console (0.6.0)
    irb (1.7.1)
      reline (>= 0.3.0)
    jbuilder (2.11.5)
      actionview (>= 5.0.0)
      activesupport (>= 5.0.0)
    jquery-rails (4.6.0)
      rails-dom-testing (>= 1, < 3)
      railties (>= 4.2.0)
      thor (>= 0.14, < 2.0)
    jsonapi-renderer (0.2.2)
    kaminari (1.2.2)
      activesupport (>= 4.1.0)
      kaminari-actionview (= 1.2.2)
      kaminari-activerecord (= 1.2.2)
      kaminari-core (= 1.2.2)
    kaminari-actionview (1.2.2)
      actionview
      kaminari-core (= 1.2.2)
    kaminari-activerecord (1.2.2)
      activerecord
      kaminari-core (= 1.2.2)
    kaminari-core (1.2.2)
    logger (1.7.0)
    loofah (2.21.3)
      crass (~> 1.0.2)
      nokogiri (>= 1.12.0)
    mail (2.8.1)
      mini_mime (>= 0.1.1)
      net-imap
      net-pop
      net-smtp
    marcel (1.0.2)
    matrix (0.4.2)
    method_source (1.0.0)
    mini_magick (4.12.0)
    mini_mime (1.1.2)
    minitest (5.18.1)
    msgpack (1.7.1)
    net-imap (0.3.6)
      date
      net-protocol
    net-pop (0.1.2)
      net-protocol
    net-protocol (0.2.1)
      timeout
    net-smtp (0.3.3)
      net-protocol
    nio4r (2.5.9)
    nokogiri (1.15.3-x64-mingw-ucrt)
      racc (~> 1.4)
    nokogiri (1.15.3-x86_64-linux)
      racc (~> 1.4)
    noticed (2.2.0)
      rails (>= 6.1.0)
    orm_adapter (0.5.0)
    pg (1.5.3)
    pg (1.5.3-x64-mingw-ucrt)
    public_suffix (5.0.1)
    puma (5.6.6)
      nio4r (~> 2.0)
    pundit (2.5.0)
      activesupport (>= 3.0.0)
    racc (1.7.1)
    rack (2.2.7)
    rack-cors (2.0.2)
      rack (>= 2.0.0)
    rack-test (2.1.0)
      rack (>= 1.3)
    rails (7.0.6)
      actioncable (= 7.0.6)
      actionmailbox (= 7.0.6)
      actionmailer (= 7.0.6)
      actionpack (= 7.0.6)
      actiontext (= 7.0.6)
      actionview (= 7.0.6)
      activejob (= 7.0.6)
      activemodel (= 7.0.6)
      activerecord (= 7.0.6)
      activestorage (= 7.0.6)
      activesupport (= 7.0.6)
      bundler (>= 1.15.0)
      railties (= 7.0.6)
    rails-dom-testing (2.1.1)
      activesupport (>= 5.0.0)
      minitest
      nokogiri (>= 1.6)
    rails-html-sanitizer (1.6.0)
      loofah (~> 2.21)
      nokogiri (~> 1.14)
    railties (7.0.6)
      actionpack (= 7.0.6)
      activesupport (= 7.0.6)
      method_source
      rake (>= 12.2)
      thor (~> 1.0)
      zeitwerk (~> 2.5)
    rake (13.0.6)
    ransack (4.1.1)
      activerecord (>= 6.1.5)
      activesupport (>= 6.1.5)
      i18n
    redis (5.4.1)
      redis-client (>= 0.22.0)
    redis-client (0.25.1)
      connection_pool
    regexp_parser (2.8.1)
    reline (0.3.6)
      io-console (~> 0.5)
    responders (3.1.0)
      actionpack (>= 5.2)
      railties (>= 5.2)
    rexml (3.2.5)
    rgeo (3.0.1)
    rgeo-activerecord (7.0.1)
      activerecord (>= 5.0)
      rgeo (>= 1.0.0)
    rspec-core (3.13.5)
      rspec-support (~> 3.13.0)
    rspec-expectations (3.13.5)
      diff-lcs (>= 1.2.0, < 2.0)
      rspec-support (~> 3.13.0)
    rspec-mocks (3.13.5)
      diff-lcs (>= 1.2.0, < 2.0)
      rspec-support (~> 3.13.0)
    rspec-rails (7.1.1)
      actionpack (>= 7.0)
      activesupport (>= 7.0)
      railties (>= 7.0)
      rspec-core (~> 3.13)
      rspec-expectations (~> 3.13)
      rspec-mocks (~> 3.13)
      rspec-support (~> 3.13)
    rspec-support (3.13.4)
    ruby-vips (2.1.4)
      ffi (~> 1.12)
    ruby2_keywords (0.0.5)
    rubyzip (2.3.2)
    sassc (2.4.0)
      ffi (~> 1.9)
    selenium-webdriver (4.10.0)
      rexml (~> 3.2, >= 3.2.5)
      rubyzip (>= 1.2.2, < 3.0)
      websocket (~> 1.0)
    sidekiq (7.3.9)
      base64
      connection_pool (>= 2.3.0)
      logger
      rack (>= 2.2.4)
      redis-client (>= 0.22.2)
    sprockets (4.2.0)
      concurrent-ruby (~> 1.0)
      rack (>= 2.2.4, < 4)
    sprockets-rails (3.4.2)
      actionpack (>= 5.2)
      activesupport (>= 5.2)
      sprockets (>= 3.0.0)
    sqlite3 (1.6.3-x64-mingw-ucrt)
    sqlite3 (1.6.3-x86_64-linux)
    stimulus-rails (1.2.1)
      railties (>= 6.0.0)
    thor (1.2.2)
    timeout (0.4.0)
    turbo-rails (1.4.0)
      actionpack (>= 6.0.0)
      activejob (>= 6.0.0)
      railties (>= 6.0.0)
    tzinfo (2.0.6)
      concurrent-ruby (~> 1.0)
    tzinfo-data (1.2025.2)
      tzinfo (>= 1.0.0)
    unaccent (0.4.0)
    warden (1.2.9)
      rack (>= 2.0.9)
    web-console (4.2.0)
      actionview (>= 6.0.0)
      activemodel (>= 6.0.0)
      bindex (>= 0.4.0)
      railties (>= 6.0.0)
    webdrivers (5.2.0)
      nokogiri (~> 1.6)
      rubyzip (>= 1.3.0)
      selenium-webdriver (~> 4.0)
    websocket (1.2.9)
    websocket-driver (0.7.5)
      websocket-extensions (>= 0.1.0)
    websocket-extensions (0.1.5)
    xpath (3.2.0)
      nokogiri (~> 1.8)
    zeitwerk (2.6.8)

PLATFORMS
  x64-mingw-ucrt
  x86_64-linux

DEPENDENCIES
  active_model_serializers
  activeadmin (~> 3.2.0)
  activerecord-postgis-adapter
  ancestry
  bootsnap
  capybara
  country_select
  debug
  devise
  factory_bot_rails
  faker
  friendly_id (~> 5.4)
  image_processing (~> 1.2)
  importmap-rails
  jbuilder
  noticed (= 2.2)
  pg
  puma (~> 5.0)
  pundit
  rack-cors
  rails (~> 7.0.6)
  redis
  rspec-rails
  sassc
  selenium-webdriver
  sidekiq
  sprockets-rails
  sqlite3 (~> 1.4)
  stimulus-rails
  turbo-rails
  tzinfo-data
  web-console
  webdrivers

RUBY VERSION
   ruby 3.2.2p53

BUNDLED WITH
   2.6.9
```

### rails-solar/README.md
```
## Noticed V2
Hi, this is all about [Noticed v2](https://github.com/excid3/noticed) , a remarkable gem developed by [Chris Oliver](https://github.com/excid3)!
This is Working Code! :tada: :rocket:

In case you’re not yet familiar, Noticed V2 is a remarkable gem developed by Chris Oliver. It simplifies the transmission of notifications of various types through different channels to diverse recipients within your application.

You're more than welcome to visit my Web Pages: 

 [Jungletronics](https://medium.com/jungletronics) (Arduino, RPi, PIC, Eagle, Blender, Unity3D, Pixy, and more) 
 [KidsTronics](https://medium.com/kidstronics) (MIT App Inventor, LEGO, Arduino For Kids, and more)
 

Here, the emphasy lies on:
```
Learning By Doing!
``` 
### Project Inventory Leading Up to Version 8 :ant:

01# **[Quick Start](https://medium.com/jungletronics/a-rails-blog-in-vs-code-quick-start-5c3173191a64)** — **Part I** — Get started with a very simple rails 7 frame;

02# **[Styling](https://medium.com/jungletronics/a-rails-blog-in-vs-code-quick-start-ea2124ca2de0#85e2)** — **Part II** — Learn Bootstrap in a simply way;


03# **[Create Posts](https://medium.com/jungletronics/a-rails-blog-in-vs-code-create-posts-caf527a932e4)** — **Part III** — Learn how scaffold works; 

04# **[Posts Tips&Tricks](https://medium.com/jungletronics/a-rails-blog-in-vs-code-posts-tips-tricks-770402c76556)** — **Part IV** — Learn how make a custom migration;

05# **[Devise](https://medium.com/jungletronics/a-rails-blog-in-vs-code-devise-47532d9f5e0f)** — **Part V** — Learn how to use the Devise;

06# **[Add Comments to Post](https://medium.com/jungletronics/rails-blog-in-vs-code-post-comments-1df7ecf1edcb)**  — **Part VI** — Set up Action Text;

07# **[Using Stimulus](https://medium.com/jungletronics/rails-blog-in-vs-code-using-stimulus-9d21f7a910f1)** — **Part VII** — Learn about Hotwire Turbo Family 

08# **[Noticed V1](https://medium.com/jungletronics/rails-blog-in-vs-code-noticed-v1-78f67a002f27)**  — **Part VIII** — Learn Noticed v1- An alert system gem developed by [Chris Oliver](https://github.com/excid3);

09# **[Noticed V2](https://medium.com/jungletronics/rails-blog-in-vs-code-noticed-v2-7ab37f9d5cc4)** — **Part IX**
 — Get Noticed v2 running smoothly on our blog.


## Screenshots


```
You won't find a graphic like this anywhere on the internet
```
![Noticed v2](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*NaultE0FbjmWqCRhIOEo6w.png)

Download the [PNG](https://drive.google.com/file/d/1Wt21u-Kelk3PCVeSF9ckGIwkr2J5EL67/view)
or [SVG](https://drive.google.com/file/d/1x8QgbI96EoeD-NxaGoE1fr-iZR5v1BHm/view?usp=drive_link) Images from my drive.

```
This graphic illustrates all the relationships within 
the business and the Noticed v2 models. 

Here are some key points about the graphics I'd like to discuss:

1. Business Tables Relationships:

Users have many posts, and each post belongs to one user.
Posts have many comments, and each comment belongs to one post.
Users also have many comments, and each comment belongs to one user.

2. The Noticed system:

comprises two tables: noticed_notifications table: Which tracks recipients and whether they've seen or read notifications.
noticed_events table: Stores events and comments about what happened, including the type of comments (e.g., bug notes, release notes, improvements notes).
The polymorphic attribute is set to true, allowing a model to belong to multiple parent models. For instance, the Notification model can be associated
with various entities like User, Post, Admin or Comment dynamically.

3. Relationships and Glue Logic:

In the noticed_events table, events belong to records, and in noticed_notifications, records belong to events, creating an augmented relationship.
Recipients, defined in the Users table, are linked to notifications, serving as the glue logic for our business logic framework.

4. Notification Handling:

There are two types of notifications: one directly associated with users and another through delegations to posts.
The Comments table has many 'notification_mentions', connecting to the Noticed library through 'has_noticed_notifications' linked with the Noticed::Event model.
The Posts table also has many 'notification_mentions', linked through user delegation.

5. MVC Architecture:

The controller, represented by 'application_controller.rb', always sets notifications if the user is authenticated via 'Devise'.
The view, represented by '_notifications.html.erb' file, presents the UI interface (a simple Bootstrap bell badge) and renders
the system encapsulating the business logic.

6. Olive's Framework:

We should further investigate Olive's framework, though I currently lack specific details. Understanding how Olive's framework integrates
with or enhances our existing system could offer valuable insights into our overall architecture and functionality.
Let's explore how Olive's framework interacts with or enhances our current setup.

That summarizes the key aspects of the observed graphics.

If there's more you'd like to discuss about Olive's framework or any other aspect, feel free to share!
```
## Installation

Clone my-project in linux terminal:

```bash
git clone -b rails_blog_v7 git@github.com:giljr/rails_blog_demo.git
cd rails_blog_v7
```
Go To vscode:
```bash
code .
```
Here are Git Commands:
```
git checkout -b use_noticed_gem_2
bundle add noticed -v 2.2
bundle install
rails noticed:install:migrations
bundle install
rails db:migrate
rails g noticed:notifier CommentNotifier
rails s
rails c
rails s
rails db:drop
rails db:migrate
rails s
git status
git add -A
git commit -m ":lipstick: Upload to Noticed v2"
git push
git push --set-upstream origin use_noticed_gem_2
```
Go To your GIT REPO and Merge the Request:
```
git checkout master
git status
git fetch
git pull
rails s
```
Run and hope for the best!
## Run Locally


#### Tutorial

Rails Blog In VS Code - **Noticed V2 - 
How To Create A Blog in VS Code** — [Part IX](https://medium.com/jungletronics/rails-blog-in-vs-code-noticed-v2-7ab37f9d5cc4
)— Notifications for your Ruby on Rails app — RailsSeries#Episode 11


## Acknowledgements

 - [Chris Oliver](https://github.com/excid3) Rails Luminary. Building GoRails.com, JumpstartRails.com, Hatchbox.io, and host of the Remote Ruby Podcast


## Authors

 - [@giljr](https://www.linkedin.com/in/giljrx/)
## Contributing

 - [@jeovan.farias](https://www.linkedin.com/in/jeovan-f-6283b8145/)

 - [@bruno.vichinheski](https://www.linkedin.com/in/brunovichinheski/)
 


Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## License

[MIT](https://choosealicense.com/licenses/mit/)
```

### rails-solar/Rakefile
```
# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative "config/application"

Rails.application.load_tasks
```

### rails-solar/config.ru
```
# This file is used by Rack-based servers to start the application.

require_relative "config/environment"

run Rails.application
Rails.application.load_server
```

### rails-solar/docker-compose.yml
```
version: '3.8'
services:
  web:
    build: .
    volumes:
      - .:/app
    ports:
      - "3000:3000"
    environment:
      - RAILS_ENV=development
    command: bundle exec rails server -b 0.0.0.0
```

### rails-solar/history.txt
```
    1  git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.12.0
    2  sudo apt install git
    3  clear
    4  git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.12.0
    5  asdf plugin add ruby https://github.com/asdf-vm/asdf-ruby.git
    6  sudo nano ~/.bashrc
    7  asdf plugin add ruby https://github.com/asdf-vm/asdf-ruby.git
    8  asdf install ruby 3.0.2
    9  sudo apt update
   10  apt show openssl
   11  sudo apt install openssl -y
   12  openssl version
   13  asdf plugin add ruby https://github.com/asdf-vm/asdf-ruby.git
   14  asdf install ruby 3.0.2
   15  rails new rails-blog-demo
   16  asdf install ruby 3.0.2
   17  rails -v
   18  gem install rubocop
   19  ruby -v
   20  clear
   21  rails new rails-blog-demo
   22  rails g controller pages home about
   23  cd rails-blog-demo/
   24  rails g controller pages home about
   25  rails s
   26  bundle install
   27  rails s
   28  clear
   29  git init
   30  git checkout -b master
   31  git branch -D main
   32  git branch -d main
   33  ssh-keygen -t ed25519 -C "giljr.2009@gmail.com"
   34  eval "$(ssh-agent -s)"
   35  ssh-add ~/.ssh/id_ed25519
   36  cat ~/.ssh/id_ed25519.pub
   37  git remote add origin git@github.com:giljr/rails_blog_demo.git
   38  heroku create
   39  heroku rename j3_rails_blog_demo
   40  git remote -v
   41  heroku rename j3-rails-blog-demo
   42  git remote -v
   43  heroku stack:set heroku-20
   44  git push -u origin master
   45  git status
   46  git add -A
   47  git commit -m ":tada: Initial Commit"
   48  git push -u origin master
   49  git push
   50  git push -u origin master
   51  git push --set-upstream origin master
   52  git push
   53  git push --set-upstream origin master
   54  git push --set-upstream --force origin master
   55  git checkout master
   56  git fetch origin
   57  git push -u origin master
   58  git push --set-upstream --force origin master
   59  git config --global user.name "giljr.2009@gamil.com"
   60  git config --global user.email "giljr.2009@gmail.com"
   61  git config --global user.name "jaythree"
   62  git push --set-upstream --force origin master
   63  git push -u origin master
   64  git pull --rebase
   65  git push
   66  git pull master master
   67  git branch -M master
   68  git push -u origin master 
   69  git pull master master
   70  git pull master origin
   71  git pull origin  master
   72  git push --set-upstream --force origin master
   73  git push
   74  git remote -v
   75  git remote add origin git@github.com:giljr/rails_blog_demo.git
   76  git remote -v
   77  git push
   78  git remote add origin git@github.com:giljr/rails_blog_demo.git
   79  git push --set-upstream origin master
   80  git push --set-upstream origin master --force
   81  git push --set-upstream --force origin master
   82  git 
   83  git status
   84  git commit -m ":tada: Initial Commit"
   85  git push -u origin master
   86  git push heroku master
   87  heroku open
   88  history
   89  heroku open
   90  sudo apt install postgresql postgresql-contrib libpq-dev
   91  heroku -v
   92  git remote -v
   93  ls
   94  cd Documents/
   95  LS
   96  ls
   97  rails_projects/
   98  cd rails_projects/
   99  cd rails-blog-demo/
  100  remote -v
  101  git remote -v
  102  clear
  103  git tag -a rails_blog_v1 -m "Blog in Rails 7 - v1.0:  Go to  https://j3-rails-blog-demo-5a0a55d44e12.herokuapp.com/" -m "0- Setting up dependencies on Ubuntu 23.04 (Lunar Lobster);" -m "1- Create a new project, use generate controller;" -m "2- Config routes.rb, change Gemfile;" -m "3- Running Heroku CLI and git commands;" -m "4- Upload Rails 7 project to heroku." -m "Thank you for downloading this project 😍️" 
  104  git push origin rails_blog_v1
  105  clear
  106  git checkout -b styling
  107  rails s
  108  cd rails-blog-demo/
  109  rails s
  110  gem install htmlbeautifier
  111  rails s
  112  cd rails-blog-demo/
  113  rails s
  114  de rails-blog-demo/
  115  cd rails-blog-demo/
  116  rails s
  117  cler
  118  clear
  119  git status
  120  git add -A
  121  git commit -m ":lipstick: feat: Add Styling"
  122  git push --set-ipstream origin styling
  123  git status
  124  git fetch
  125  git status
  126  history
  127  rails s
  128  git checkout master
  129  git commit -m ":lipstick: feat: Insert Emoji"
  130  git add -A
  131  git commit -m ":lipstick: feat: Insert Emoji"
  132  git checkout master
  133  git pull
  134  clear
  135  git push heroku master
  136  heroku open
  137  history
  138  git tag -a rails_blog_v2 -m "Blog in Rails 7 - v1.0:  Go to  https://j3-rails-blog-demo-5a0a55d44e12.herokuapp.com/" -m "0- Creating a new feature branch: styling;" -m "1- Use Bootstrap 5 CDN & Navbar;" -m "2- Modify Home & About pages;" -m "3- Making adjustments on layout app - wrap around yield;" -m "4- Upload Rails 7 project to heroku." -m "Thank you for downloading this project 😍️" 
  139  git push origin rails_blog_v2
  140  cd rails-blog-demo/
  141  git checkout -b add_blog_posts
  142  rails g scaffold post title:string body:text
  143  rails db:migrate
  144  clear
  145  rails c
  146  rails s
  147  rails db:drop
  148  rails db:migrate
  149  rails db:seed
  150  rails s
  151  rails db:drop
  152  rails db:migrate
  153  rails db:seed
  154  rails s
  155  clear
  156  git status
  157  git add -A
  158  git commit -m ":lipstick: feat: Add Blog Posts"
  159  git push --set-upstream origin add_blog_posts
  160  git status
  161  git fetch
  162  git status
  163  git pull
  164  git push heroku master
  165  git branch checkout master
  166  git branch -v
  167  git checkout master
  168  git pull
  169  git push heroku master
  170  heroku run rails db:migrate
  171  heroku run rails db:seed
  172  heroku open
  173  history
  174  git tag -a rails_blog_v3 -m "Blog in Rails 7 - v1.0:  Go to  https://j3-rails-blog-demo-5a0a55d44e12.herokuapp.com/" -m "0- Creating a new feature branch: styling;" -m "1- Use Bootstrap 5 CDN & Navbar;" -m "2- Learn how to use console;" -m "3- Learn about db:seed;" -m "4- Upload Rails 7 project to heroku." -m "Thank you for downloading this project 😍️" 
  175  git push origin rails_blog_v3
  176  git push --delete origin rails_blog_v3
  177  git tag -a rails_blog_v3 -m "Blog in Rails 7 - v1.0:  Go to  https://j3-rails-blog-demo-5a0a55d44e12.herokuapp.com/" -m "0- Scaffolding to create Posts;" -m "1- Use Bootstrap 5 CDN & Navbar;" -m "2- Modify Home & About pages;" -m "3- Making adjustments on layout app - yield wrap around ;" -m "4- Upload Rails 7 project to heroku." -m "Thank you for downloading this project 😍️" 
  178  git push origin rails_blog_v3
  179  git push --delete origin rails_blog_v3
  180  git tag -a rails_blog_v3 -m "Blog in Rails 7 - v1.0:  Go to  https://j3-rails-blog-demo-5a0a55d44e12.herokuapp.com/" -m "0- Creating a new feature branch: add_blog_posts;"  -m "1- Scaffolding to create Posts;" -m "2- Use Bootstrap 5 CDN & Navbar;" -m "3- Modify Home & About pages;" -m "4- Making adjustments on layout app - yield wrap around ;" -m "5- Upload Rails 7 project to heroku." -m "Thank you for downloading this project 😍️" 
  181  git push --delete origin rails_blog_v3
  182  cd rails-blog-demo/
  183  git tag -a rails_blog_v3 -m "Blog in Rails 7 - v1.0:  Go to  https://j3-rails-blog-demo-5a0a55d44e12.herokuapp.com/" -m "0- Creating a new feature branch: add_blog_posts;" -m "1- Scaffolding to create Posts;" -m "2- Use Bootstrap 5 CDN & Navbar;" -m "3- Modify Home & About pages;" -m "4- Making adjustments on layout app - yield wrap around ;" -m "5- Upload Rails 7 project to heroku." -m "Thank you for downloading this project 😍️" 
  184  git tag -l | xargs git tag -d
  185  git tag -a rails_blog_v3 -m "Blog in Rails 7 - v1.0:  Go to  https://j3-rails-blog-demo-5a0a55d44e12.herokuapp.com/" -m "0- Creating a new feature branch: add_blog_posts;" -m "1- Scaffolding to create Posts;" -m "2- Use Bootstrap 5 CDN & Navbar;" -m "3- Modify Home & About pages;" -m "4- Making adjustments on layout app - yield wrap around ;" -m "5- Upload Rails 7 project to heroku." -m "Thank you for downloading this project 😍️" 
  186  git push origin rails_blog_v3
  187  ifconfig
  188  sudo apt install net-tools
  189  clear
  190  ifconfig
  191  clear.
  192  clear
  193  rails s
  194  clear
  195  rails g migration add_viewa_to_posts views:integer
  196  rails db:migrate
  197  rails s
  198  history
  199  rails s
  200  git push
  201  git add -A
  202  git commit -m ":sparkles: feat: add views to posts"
  203  git push
  204  git push heroku master
  205  heroku open
  206  heroku db:migrate
  207  heroku run rails db:migrate
  208  heroku open
  209  history
  210  git tag -a rails_blog_v4 -m "Blog in Rails 7 - v1.0:  Go to  https://j3-rails-blog-demo-5a0a55d44e12.herokuapp.com/" -m "0- Set JavaScript to bootstrap head;" -m "1- make a custom migration;" -m "2- Metrics: learn the basics of counting post and page views;" -m "3- Modify routes, dropdowns, and the like." -m "4- Making adjustments to post controller show method ;" -m "5- Upload Rails 7 project to heroku." -m "Thank you for downloading this project 😍️" 
  211  git push origin rails_blog_v4
  212  clear
  213  git checkout -b add_devise
  214  bundle install
  215  rails g devise:install
  216  rails g devise User
  217  rails db:migrate
  218  rails s
  219  rails g migration add_user_to_posts user:belongs_to
  220  rails db:migrate
  221  rails c
  222  rails db:migrate
  223  rails s
  224  rails db:seed
  225  rails s
  226  rails c
  227  rails s
  228  rails g migration add_name_to_user name:string
  229  rails db:migrate
  230  rails s
  231  rails g devise:views
  232  rails s
  233  rails g devise:controllers users
  234  rails s
  235  rails c
  236  rails s
  237  rails c
  238  rails s
  239  clear
  240  rails g controller users profile
  241  rails g migration add_views_to_user views:integer
  242  rails db:migrate
  243  rails g migration change_views_for_users
  244  rails s
  245  rails c
  246  rails s
  247  git status
  248  git add -A
  249  git commit -m ":lipstick: feat: Add Devise"
  250  git push --set-upstream origin add_devise
  251  git checkout master
  252  git status
  253  git fetch
  254  git pull
  255  git status
  256  git push heroku master
  257  heroku run rails db:drop
  258  heroku run rails db:migrate
  259  heroku addons:destroy
  260  heroku run rails db:migrate
  261  heroku opn
  262  heroku open
  263  clear
  264  history
  265  git tag -a rails_blog_v5 -m "Blog in Rails 7 - v1.0:  Go to  https://j3-rails-blog-demo-5a0a55d44e12.herokuapp.com/" -m "0- Add Devise to the Gemfile & Run bundle install;" -m "1- Generate the Devise configuration files;" -m "2- Generate a Devise model;" -m "3- Run the database migration;" -m "4- Customize the Devise views;" -m "5- Mount Devise routes;" -m "5- Restart your Rails server;" -m "5- Upload Rails 7 project to heroku." -m "Thank you for downloading this project 😘️👌️👋️😍️" 
  266  git push origin rails_blog_v5
  267  lear
  268  clear
  269  git checkout add_post_comments
  270  git checkout -b add_post_comments
  271  clear
  272  rails g model comment post:belong_to user:belongs_to
  273  rails g model comment post:belongs_to user:belongs_to
  274  rails db:migrate
  275  rails action_text:install
  276  rails db:migrate
  277  bundle install --gemfile /home/j3/Documents/rails_projects/rails-blog-demo/Gemfile
  278  rails db:migrate
  279  rails s
  280  rails g controller comments
  281  rails s
  282  rails c
  283  rails db:reset
  284  rails s
  285  clear
  286  rails db:drop
  287  rails db:migrate
  288  rails db:seed
  289  rails s
  290  rails db:migrate
  291  rails s
  292  rails db:drop
  293  rails db:migrate
  294  rails s
  295  rails db:migrate
  296  rails s
  297  clear
  298  rails db:drop
  299  rails db:migrate
  300  rails s
  301  bundle install
  302  rails s
  303  clear
  304  history
  305  rails s
  306  rails db:seed
  307  rails s
  308  rails db:drop
  309  rails db:migrate
  310  rails db:seed
  311  rails s
  312  rails db:drop
  313  rails db:migrate
  314  rails db:seed
  315  rails s
  316  rails db:drop
  317  rails db:migrate
  318  rails db:seed
  319  rails s
  320  history
  321  clear\
  322  clear
  323  git status
  324  git add -A
  325  git commit -m ":lipstick: feat: Add Post Comments"
  326  git push --set-upstream origin add_post_comments
  327  git checkout master
  328  git status
  329  git fetch
  330  git pull
  331  git status
  332  git push heroku master
  333  heroku run rails db:migrate
  334  heroku run bundle install
  335  heroku run rails db:migrate
  336  heroku run rails db:seed
  337  heroku open
  338  clear
  339  git tag -a rails_blog_v6 -m "Blog in Rails 7 - v1.0:  Go to  https://j3-rails-blog-demo-5a0a55d44e12.herokuapp.com/" -m "0- Add Comments to Each Post;" -m "1- Set up Action Text, which is a framework in Ruby on Rails for handling rich text content;" -m "2- Upload Rails 7 project to Heroku." -m "Thank you for downloading this project 😘️👌️👋️😍️" 
  340  git push origin rails_blog_v6
  341  rails s
  342  sudo obs
  343  sudo apt update
  344  sudo apt install obs-studio
  345  sudo apt update && sudo apt install snapd -y
  346  sudo snap install core
  347  sudo systemctl restart snapd
  348  sudo apt update && sudo apt install flatpak
  349  sudo apt install gnome-software-plugin-flatpak
  350  flatpak remote-add --if-not-exists flathub
  351  https://flathub.org/repo/flathub.flatpakrepo
  352  flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
  353  udo add-apt-repository ppa:obsproject/obs-studio
  354  sudo add-apt-repository ppa:obsproject/obs-studio
  355  bundle install
  356  celar
  357  clear
  358  rails s
  359  clear
  360  rails -v
  361  ls
  362  cd Desktop/
  363  ls
  364  mkdir RAILS_PROJECTS
  365  CD RAILS_PROJECTS/
  366  cd RAILS_PROJECTS/
  367  lsls
  368  ls
  369  cd ..
  370  ls
  371  clear
  372  rails -v
  373  ls
  374  cd RAILS_PROJECTS/
  375  clear
  376  rails new rails-blog-demo
  377  clear
  378  cd rails-blog-demo/
  379  ls
  380  clear
  381  rails g controller pages home about
  382  code .
  383  clear
  384  sudo apt install postgresql postgresql-contrib libpq-dev
  385  clear
  386  cd ..
  387  cd ~
  388  ls
  389  cd Desktop/
  390  claet
  391  clear
  392  rails -v
  393  clear
  394  rails new rails-blog-demo
  395  clear
  396  cd RAILS_PROJECTS/
  397  cd rails
  398  ls
  399  cd ..
  400  ls
  401  rm -rf RAILS_PROJECTS/
  402  ls
  403  rm -rf rails-blog-demo/
  404  ls
  405  clear
  406  cat ~/.ssh/id_ed25519.pub
  407  heroku -v
  408  rails c
  409  rails s
  410  clear
  411  git checkout -b add_turbo 
  412  rails c
  413  rails s
  414  rails app:update
  415  rails s
  416  rails kill 38313
  417  rails s
  418  clear
  419  bundle exec rails active_storage:install
  420  bundle exec rails db:migrate
  421  rails db:migrate
  422  rails s
  423  sudo apt-get install -y libvips
  424  rails s
  425  hystory >> history.txt
  426  history >> history.txt
```

### rails-solar/pdr_integration.md
```
# PDR Integration Guide

This document outlines the steps to integrate the Rails API with a Next.js front‑end.

## 1. Setup Ruby/Rails dependencies

1. Install Ruby 3.2 and Bundler.
2. Install gems:
   ```bash
   bundle install
   ```
3. Prepare the database:
   ```bash
   rails db:create
   rails db:migrate
   rails db:seed   # loads demo data
   ```

## 2. Start the Rails API

Run the development server:
```bash
rails server
```
The API will be accessible at `http://localhost:3000`.

## 3. Create or connect a Next.js app

You can generate a new Next.js project:
```bash
npx create-next-app frontend
```
Inside the front‑end project, configure the API base URL (e.g. in `.env.local`):
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api/v1
```
Use this variable when fetching data from the Rails API.

If CORS errors occur, add a `rack-cors` initializer in `config/initializers`:
```ruby
# config/initializers/cors.rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'localhost:3000', 'http://localhost:3001'
    resource '*', headers: :any, methods: [:get, :post, :options]
  end
end
```
Restart the server after editing this file.

## 4. Verify demo data

After seeding, confirm the API returns the sample records:
```bash
curl http://localhost:3000/api/v1/companies    # expect 5 companies
curl http://localhost:3000/api/v1/categories   # expect 10 categories
```
If the correct counts are returned, the integration is working.
```

### rails-solar/step.md
```
# Passo a Passo para Rodar o Projeto

Este guia descreve como configurar o ambiente e executar a aplicação Rails.

## 1. Pré-requisitos

- Ruby 3.2.2 instalado (pode usar rbenv, rvm ou asdf).
- SQLite3 instalado para o banco de dados.
- Bundler (`gem install bundler`).

## 2. Clonar o repositório

```bash
git clone <URL-do-repositorio>
cd rails-solar
```

## 3. Instalar dependências

Execute:

```bash
bundle install
```

Opcionalmente, rode o script de configuração padrão do projeto:

```bash
bin/setup
```

## 4. Preparar o banco de dados

```bash
bin/rails db:create    # cria o banco
bin/rails db:migrate   # aplica as migrações
bin/rails db:seed      # (opcional) carrega dados de exemplo
```

## 5. Iniciar o servidor

```bash
bin/rails server
```

A aplicação estará disponível em `http://localhost:3000`.

## 6. Executar os testes

- Testes RSpec: `bundle exec rspec`
- Testes padrão do Rails: `bin/rails test`
```

# Instructions

No need to analyze anything right now. 
Just wait for questions.
