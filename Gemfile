# Necessária para Windows e ambientes sem zoneinfo
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
# Para acelerar o boot do Rails em desenvolvimento
gem 'bootsnap', require: false
# Gemfile para Rails 7 com ActiveAdmin, Devise, Pundit, GraphQL, JWT, etc.
source 'https://rubygems.org'

gem 'rails', '~> 7.0.6'
gem 'pg', group: :production
gem 'sqlite3', group: [:development, :test]
gem 'puma', '~> 5.0'
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 5.0'
gem 'turbo-rails'
gem 'jbuilder'
gem 'redis'
gem 'bcrypt'
gem 'jwt'
gem 'activeadmin'
gem 'devise'
gem 'pundit'
gem 'friendly_id', '~> 5.4'
gem 'image_processing', '~> 1.2'
gem 'importmap-rails'
gem 'rack-cors'
gem 'rack-attack'
gem 'graphql'
gem 'graphiql-rails', group: :development

group :development, :test do
  gem 'rspec-rails'
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'capybara'
  gem 'selenium-webdriver'
  gem 'webdrivers'
  gem 'debug', platforms: %i[mri mingw x64_mingw]
end

group :development do
  gem 'listen', '~> 3.3'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# gem 'dotenv-rails', groups: [:development, :test] # variáveis de ambiente