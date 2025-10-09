all: clean package

clean:
	@rm -rf dist/

package:
	@mkdir -p dist/
	@cp README.md src/
	@cd src/; vsce package --allow-missing-repository
	@cd src/; mv appetit*.vsix ../dist/