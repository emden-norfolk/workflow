.PHONY: all npm resources pip migrate routes run ctags install

all: pip migrate ctags npm resources

npm:
	npm install
resources:
	npm run build
	rm -rf static/dist
	mv dist static/dist

pip: requirements.txt venv
	. venv/bin/activate; pip install -U pip
	. venv/bin/activate; pip install -Ur $<

venv:
	python3 -m venv venv

bash:
	. venv/bin/activate; bash

ctags:
	ctags -R --languages=+Python app/

dnf:
	dnf install postgresql postgresql-server postgresql-contrib \
		libpq python3-devel python3-devtools gcc nodejs nodejs-npm pcre-devel \
		rabbitmq-server
