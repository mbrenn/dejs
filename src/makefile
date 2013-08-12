SHELL = /bin/sh

SOURCE_FILES = js/dejs.gallery.ts js/dejs.string.ts js/dejs.table.ts

all: $(SOURCE_FILES)
	mkdir -p ../bin
	mkdir -p ../bin/js
	mkdir -p ../bin/js/lib
	mkdir -p ../bin/js/init
	mkdir -p ../bin/tests
	
	nodejs /usr/local/bin/tsc js/dejs.string.ts --module amd
	nodejs /usr/local/bin/tsc js/dejs.gallery.ts --module amd
	nodejs /usr/local/bin/tsc js/dejs.table.ts --module amd
	nodejs /usr/local/bin/tsc js/dejs.number.ts --module amd
	
	cp index.html ../bin/index.html
	cp js/*.js ../bin/js/
	cp -r js/init/* ../bin/js/init/
	cp -r js/lib/* ../bin/js/lib/
	cp -r tests/* ../bin/tests/

.PHONY: clean
clean:
	rm *.js

run: all
	firefox http://127.0.0.1:8080/ & 
	xsp2 --root ../bin/

