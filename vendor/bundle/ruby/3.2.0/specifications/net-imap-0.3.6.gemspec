# -*- encoding: utf-8 -*-
# stub: net-imap 0.3.6 ruby lib

Gem::Specification.new do |s|
  s.name = "net-imap".freeze
  s.version = "0.3.6".freeze

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "homepage_uri" => "https://github.com/ruby/net-imap", "source_code_uri" => "https://github.com/ruby/net-imap" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Shugo Maeda".freeze, "nicholas a. evans".freeze]
  s.bindir = "exe".freeze
  s.date = "2023-06-12"
  s.description = "Ruby client api for Internet Message Access Protocol".freeze
  s.email = ["shugo@ruby-lang.org".freeze, "nick@ekenosen.net".freeze]
  s.homepage = "https://github.com/ruby/net-imap".freeze
  s.licenses = ["Ruby".freeze, "BSD-2-Clause".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.6.0".freeze)
  s.rubygems_version = "3.4.10".freeze
  s.summary = "Ruby client api for Internet Message Access Protocol".freeze

  s.installed_by_version = "3.7.1".freeze

  s.specification_version = 4

  s.add_runtime_dependency(%q<net-protocol>.freeze, [">= 0".freeze])
  s.add_runtime_dependency(%q<date>.freeze, [">= 0".freeze])
  s.add_development_dependency(%q<digest>.freeze, [">= 0".freeze])
  s.add_development_dependency(%q<strscan>.freeze, [">= 0".freeze])
end
