jekyll=bundle exec jekyll

site: install
	$(jekyll) serve --incremental

build: install
	$(jekyll) build

install:
	bundle install