# -*- encoding: utf-8 -*-
# stub: rack 2.2.7 ruby lib

Gem::Specification.new do |s|
  s.name = "rack".freeze
  s.version = "2.2.7".freeze

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "bug_tracker_uri" => "https://github.com/rack/rack/issues", "changelog_uri" => "https://github.com/rack/rack/blob/master/CHANGELOG.md", "documentation_uri" => "https://rubydoc.info/github/rack/rack", "source_code_uri" => "https://github.com/rack/rack" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Leah Neukirchen".freeze]
  s.date = "2023-04-24"
  s.description = "Rack provides a minimal, modular and adaptable interface for developing\nweb applications in Ruby. By wrapping HTTP requests and responses in\nthe simplest way possible, it unifies and distills the API for web\nservers, web frameworks, and software in between (the so-called\nmiddleware) into a single method call.\n".freeze
  s.email = "leah@vuxu.org".freeze
  s.executables = ["rackup".freeze]
  s.extra_rdoc_files = ["README.rdoc".freeze, "CHANGELOG.md".freeze, "CONTRIBUTING.md".freeze]
  s.files = ["CHANGELOG.md".freeze, "CONTRIBUTING.md".freeze, "README.rdoc".freeze, "bin/rackup".freeze]
  s.homepage = "https://github.com/rack/rack".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.3.0".freeze)
  s.rubygems_version = "3.4.10".freeze
  s.summary = "A modular Ruby webserver interface.".freeze

  s.installed_by_version = "3.7.1".freeze

  s.specification_version = 4

  s.add_development_dependency(%q<minitest>.freeze, ["~> 5.0".freeze])
  s.add_development_dependency(%q<minitest-sprint>.freeze, [">= 0".freeze])
  s.add_development_dependency(%q<minitest-global_expectations>.freeze, [">= 0".freeze])
  s.add_development_dependency(%q<rake>.freeze, [">= 0".freeze])
end
