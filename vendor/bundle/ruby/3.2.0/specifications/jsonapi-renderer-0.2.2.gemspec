# -*- encoding: utf-8 -*-
# stub: jsonapi-renderer 0.2.2 ruby lib

Gem::Specification.new do |s|
  s.name = "jsonapi-renderer".freeze
  s.version = "0.2.2".freeze

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Lucas Hosseini".freeze]
  s.date = "2019-06-13"
  s.description = "Efficiently render JSON API documents.".freeze
  s.email = "lucas.hosseini@gmail.com".freeze
  s.homepage = "https://github.com/jsonapi-rb/jsonapi-renderer".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.7.8".freeze
  s.summary = "Render JSONAPI documents.".freeze

  s.installed_by_version = "3.7.1".freeze

  s.specification_version = 4

  s.add_development_dependency(%q<rake>.freeze, ["~> 11.3".freeze])
  s.add_development_dependency(%q<rspec>.freeze, ["~> 3.5".freeze])
  s.add_development_dependency(%q<simplecov>.freeze, [">= 0".freeze])
end
