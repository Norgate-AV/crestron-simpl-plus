'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
// import * as fs from "fs";
// import * as path from "path";

import * as svg from "./visualizer";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "crestron-simpl-plus" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json

    let previewUri = vscode.Uri.parse('simpl-visualize://authority/simpl-visualize');

    class TextDocumentContentProvider implements vscode.TextDocumentContentProvider {
        private _onDidChange = new vscode.EventEmitter<vscode.Uri>();

        public update (uri: vscode.Uri) {
            this._onDidChange.fire(uri);
        }
        public provideTextDocumentContent(uri: vscode.Uri): string {
			return this.createVisualizer();
        }

        private createVisualizer() {
            let editor = vscode.window.activeTextEditor;
            if (editor){
                if (!(editor.document.languageId === 'simpl+')) {
                    return this.errorSnippet("A SIMPL+ file is not open.");
                }
                else {
                    return this.extractVisualizer();
                }
            }
            else {
                return this.errorSnippet("A SIMPL+ file is not open.");
            }
        }
        private extractVisualizer(): string {
            // let readResource = (filename: string) => fs.readFileSync(path.join(__dirname, "..", "resources", filename), "UTF-8");
            // let viewer = readResource("test.html");
            // return viewer;
            let viewer = new svg.SVGCreator();
            let parser = new svg.VisualizerParse();
            parser.returnSignals();
            console.log(viewer.returnSVG());
            return viewer.returnSVG();
        }
        private errorSnippet(error: string): string {
			return `
				<body>
					${error}
				</body>`;
		}
        
        get onDidChange(): vscode.Event<vscode.Uri> {
			return this._onDidChange.event;
        }
        

    }
    let provider = new TextDocumentContentProvider();
    let registration = vscode.workspace.registerTextDocumentContentProvider('simpl-visualize', provider);

    let series3_compile = vscode.commands.registerCommand('extension.simplCC_Series3', () => {
        console.log('extension compiling....');
        processSimpl("\\target series3");
    });

    let series2and3_compile = vscode.commands.registerCommand('extension.simplCC_Series2and3', () => {
        processSimpl("\\target series2 series3");
    });

    let series3_compileAll = vscode.commands.registerCommand("extension.simplCC_Series3All", () => {
        let foundFiles = vscode.workspace.findFiles('*.usp');
        let term = vscode.window.createTerminal('simplCC', vscode.workspace.getConfiguration("simpl").terminalLocation);
        let compiler = new SimplCompiler();

        term.show();
        foundFiles.then(files => {
            if(files.length) {
                files.forEach(e => {
                    compiler.filepaths.push(e.fsPath);
                });
                term.sendText(compiler.buildCommand("\\target series3"));
            } else {
                vscode.window.showErrorMessage("No .usp files found");
            }
        });
    });

    let simpl_visualize = vscode.commands.registerCommand("extension.simpl_visualize", () => {
        console.log('in simpl visualize');
        return vscode.commands.executeCommand('vscode.previewHtml', previewUri, vscode.ViewColumn.Two, 'SIMPL Preview').then((success) => {
		}, (reason) => {
			vscode.window.showErrorMessage(reason);
        });
        
        // let uri = vscode.Uri.parse('file:///resources/test.html');

        // return vscode.commands.executeCommand('vscode.previewHtml', uri );
    });

    let help_command = vscode.commands.registerCommand("extension.simpl_help", () => {
        let helpLocation = vscode.workspace.getConfiguration("simpl").helpLocation;

        let term = vscode.window.createTerminal('simpl', vscode.workspace.getConfiguration("simpl").terminalLocation);
        term.sendText("\"" + helpLocation + "\"");
        
    });

    context.subscriptions.push(series3_compile);
    context.subscriptions.push(series2and3_compile);
    context.subscriptions.push(series3_compileAll);
    context.subscriptions.push(help_command);
    context.subscriptions.push(simpl_visualize);
    context.subscriptions.push(registration);
}

function processSimpl(args: string){
    let editor = vscode.window.activeTextEditor;
    if (!editor){
        vscode.window.showErrorMessage("Please open a valid USP file.");
        return;
    }

    let doc = editor.document;
    if(doc.languageId === "simpl+"){
        let savedDoc = doc.save();
        savedDoc.then(()=> {
            let compiler = new SimplCompiler(); 
            compiler.filepaths.push(doc.fileName);
            let term = vscode.window.createTerminal('simplCC', vscode.workspace.getConfiguration("simpl").terminalLocation);
            term.show();
            term.sendText(compiler.buildCommand(args)); 
        });
    }
    else {
        vscode.window.showErrorMessage("Please open a valid USP file.");
        return;
    }
}

class SimplCompiler {
    public filepaths: string[] = [];

    public compilerPath: string;
    
    constructor() {
        this.compilerPath = "\"" + vscode.workspace.getConfiguration("simpl").compiler + "\"";
        console.log(this.compilerPath);
    }

    public buildCommand(args: string): string {
        let filepathConcat = "";
        this.filepaths.forEach(element => {
            filepathConcat += "\"" + element + "\" ";
        });

        return this.compilerPath + 
            " \\rebuild " + 
            filepathConcat + " " + 
            args; 
    }

}

// this method is called when your extension is deactivated
export function deactivate() {
}