// Thanks to https://www.youtube.com/watch?v=q5V4T3o3CXE for a good chunk of this.
const vscode = require("vscode");

function activate(context) {
    // Set up the comment insertion
    let line_commenter = vscode.commands.registerCommand(
        'bryansmith.appetit.commentlines', function() {
            // Get the active editor
            const editor = vscode.window.activeTextEditor;
            
            // Get the edit builder
            editor.edit(editBuilder => {
                // For each selection
                for (const selection of editor.selections) {
                    // For each line in the selection
                    for (let i = selection.start.line; i <= selection.end.line; i++) {
                        // Get the beginning of the line
                        const line_start = new vscode.Position(i, 0);
                        // Add the comment symbol
                        editBuilder.insert(line_start, "- ")
                    }
                }
            })
        });

    // Set up the comment deletion
    let line_uncommenter = vscode.commands.registerCommand(
        'bryansmith.appetit.uncommentlines', function() {
            // Get the active editor
            const editor = vscode.window.activeTextEditor;
            // Get the edit builder
            editor.edit(editBuilder => {
                // For each selection
                for (const selection of editor.selections) {
                    // For each line in the selection
                    for (let i = selection.start.line; i <= selection.end.line; i++) {
                        // Get the line that we're working with
                        const line = editor.document.lineAt(i)
                        // Get the text of that line
                        const line_text = line.text
                        // Get the range of the line for later as the contents of that line will be replaced
                        const range = new vscode.Range(line.range.start, line.range.end)
                        // Replace the dash at the beginning with nothing (ie. remove it)
                        let uncommented_line = line_text.replace(/^-?\s*/, '');
                        // Trim any lingering empty spaces at the beginning
                        uncommented_line = uncommented_line.trimStart();
                        // Replace the line with the uncommented version
                        editBuilder.replace(range, uncommented_line)
                    }
                }
            })
        });
    
    // Register the commands from above
    context.subscriptions.push(line_commenter)
    context.subscriptions.push(line_uncommenter)
}

exports.activate = activate

module.exports = {
    activate
}