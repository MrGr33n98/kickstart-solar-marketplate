# -*- encoding: utf-8 -*-
# stub: railties 7.0.6 ruby lib

Gem::Specification.new do |s|
  s.name = "railties".freeze
  s.version = "7.0.6".freeze

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "bug_tracker_uri" => "https://github.com/rails/rails/issues", "changelog_uri" => "https://github.com/rails/rails/blob/v7.0.6/railties/CHANGELOG.md", "documentation_uri" => "https://api.rubyonrails.org/v7.0.6/", "mailing_list_uri" => "https://discuss.rubyonrails.org/c/rubyonrails-talk", "rubygems_mfa_required" => "true", "source_code_uri" => "https://github.com/rails/rails/tree/v7.0.6/railties" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["David Heinemeier Hansson".freeze]
  s.bindir = "exe".freeze
  s.date = "2023-06-29"
  s.description = "Rails internals: application bootup, plugins, generators, and rake tasks.".freeze
  s.email = "david@loudthinking.com".freeze
  s.executables = ["rails".freeze]
  s.files = ["exe/rails".freeze]
  s.homepage = "https://rubyonrails.org".freeze
  s.licenses = ["MIT".freeze]
  s.rdoc_options = ["--exclude".freeze, ".".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.7.0".freeze)
  s.rubygems_version = "3.4.13".freeze
  s.summary = "Tools for creating, working with, and running Rails applications.".freeze

  s.installed_by_version = "3.7.1".freeze

  s.specification_version = 4

  s.add_runtime_dependency(%q<activesupport>.freeze, ["= 7.0.6".freeze])
  s.add_runtime_dependency(%q<actionpack>.freeze, ["= 7.0.6".freeze])
  s.add_runtime_dependency(%q<rake>.freeze, [">= 12.2".freeze])
  s.add_runtime_dependency(%q<thor>.freeze, ["~> 1.0".freeze])
  s.add_runtime_dependency(%q<method_source>.freeze, [">= 0".freeze])
  s.add_runtime_dependency(%q<zeitwerk>.freeze, ["~> 2.5".freeze])
  s.add_development_dependency(%q<actionview>.freeze, ["= 7.0.6".freeze])
end
