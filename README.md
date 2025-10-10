## Appetit Visual Studio Code Extension
This is a simple extension for Visual Studio Code that adds some basic syntax highlighting and snippet support to the editor.

### Features
The following is available in the extension.
* Syntax highlighting support.
* Snippet support for each implemented statement, often accessible via the first two letters of each statement.
* Actions for Command Palette:
    * Commenting for selected text (Appetit: Comment Line(s))
    * Remove commenting for selected text (Appetit: Uncomment Line(s))

### Packaging

#### Making the Extension
If vsce isn't installed, get it first:

    npm install -g @vscode/vsce

Run the following:

    mkdir -p dist/
	cd src/
    vsce package --allow-missing-repository
	mv appetit*.vsix ../dist/

There's also a Makefile available. Simply run `make` to clean up any lingering artefacts (like an old build) and package a fresh version which is output to `dist/`.

#### Installing the Extension
In Visual Studio Code:

1. Open the Command Palette
2. Select "Extensions: Install from VSIX..."
3. Select the VSIX file in dist/
4. Profit


