const vscode = require('vscode');

class OutputChannel{
    
    constructor(name){
        this._name = name;
        this._context;
        this._outputChannel;
    }

    activate(context){
        this._context = context;
        this._outputChannel = vscode.window.createOutputChannel(this._name);
    }

    append(message){
        this._outputChannel.append(message);
    }

    appendLine(message){
        this._outputChannel.appendLine(message);
    }

    deactivate(){
        this._outputChannel.dispose();
    }
}

module.exports = OutputChannel;