SHELL = /bin/sh

SOURCE_FILES = src/js/dejs.gallery.ts src/js/dejs.string.ts src/js/dejs.table.ts src/js/dejs.number.ts

all: bin/js/dejs.ajax.js bin/js/dejs.gallery.js bin/js/dejs.string.js bin/js/dejs.table.js bin/js/dejs.number.js
	mkdir -p bin
	mkdir -p bin/js
	mkdir -p bin/js/lib
	mkdir -p bin/js/init
	mkdir -p bin/tests

	cp src/index.html bin/index.html
	cp src/js/*.js bin/js/
	cp -r src/js/init/* bin/js/init/
	cp -r src/js/lib/* bin/js/lib/
	cp -r src/tests/* bin/tests/

bin/js/dejs.ajax.js: src/js/dejs.ajax.ts
	tsc src/js/dejs.ajax.ts --module amd
	mkdir -p bin
	mkdir -p bin/js
	cp src/js/dejs.ajax.js bin/js

bin/js/dejs.gallery.js: src/js/dejs.gallery.ts
	tsc src/js/dejs.gallery.ts --module amd
	mkdir -p bin
	mkdir -p bin/js
	cp src/js/dejs.gallery.js bin/js

bin/js/dejs.string.js: src/js/dejs.string.ts
	tsc src/js/dejs.string.ts --module amd
	mkdir -p bin
	mkdir -p bin/js
	cp src/js/dejs.string.js bin/js

bin/js/dejs.table.js: src/js/dejs.table.ts
	tsc src/js/dejs.table.ts --module amd
	mkdir -p bin
	mkdir -p bin/js
	cp src/js/dejs.table.js bin/js

bin/js/dejs.number.js: src/js/dejs.number.ts
	tsc src/js/dejs.number.ts --module amd
	mkdir -p bin
	mkdir -p bin/js
	cp src/js/dejs.number.js bin/js

.PHONY: clean
clean:
	rm -rf bin
	rm src/js/*.js

run: all
	firefox http://127.0.0.1:8080/ & 
	xsp2 --root $(abspath bin/)

