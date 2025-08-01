# -*- encoding: utf-8 -*-
# stub: country_select 11.0.0 ruby lib

Gem::Specification.new do |s|
  s.name = "country_select".freeze
  s.version = "11.0.0".freeze

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "bug_tracker_uri" => "http://github.com/countries/country_select/issues", "changelog_uri" => "https://github.com/countries/country_select/blob/master/CHANGELOG.md", "rubygems_mfa_required" => "true", "source_code_uri" => "https://github.com/countries/country_select" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Stefan Penner".freeze]
  s.date = "1980-01-02"
  s.description = "Provides a simple helper to get an HTML select list of countries. \\\n                   The list of countries comes from the ISO 3166 standard. \\\n                   While it is a relatively neutral source of country names, it will still offend some users.".freeze
  s.email = ["stefan.penner@gmail.com".freeze]
  s.homepage = "https://github.com/countries/country_select".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 3.2".freeze)
  s.rubygems_version = "3.6.8".freeze
  s.summary = "Country Select Plugin".freeze

  s.installed_by_version = "3.7.1".freeze

  s.specification_version = 4

  s.add_development_dependency(%q<pry>.freeze, ["~> 0".freeze])
  s.add_development_dependency(%q<rake>.freeze, ["~> 13".freeze])
  s.add_development_dependency(%q<rspec>.freeze, ["~> 3".freeze])
  s.add_development_dependency(%q<simplecov>.freeze, ["~> 0.22".freeze])
  s.add_runtime_dependency(%q<countries>.freeze, ["> 6.0".freeze, "< 9.0".freeze])
end
