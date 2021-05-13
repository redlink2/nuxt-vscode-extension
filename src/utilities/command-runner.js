const { exec } = require('child_process');
const vscode = require('vscode');


class CommandRunner {

    constructor(outputChannel){
        this._outputChannel = outputChannel;
        this._cwd = vscode.workspace.workspaceFolders[0].uri.fsPath;
    }

    exec(command, options, callback){
        const spawnedCommand = exec(command, { ...options, cwd: this._cwd }, (error, stdout, stderr) => callback(error, stdout, stderr));

        spawnedCommand.stdout.on('data', data => {
            console.log(data);
            this._outputChannel.append(data);
        });

        spawnedCommand.stderr.on('data', data => {
            console.log(data);
            this._outputChannel.append(data);
        });

        spawnedCommand.on('close', code => {
            console.log(code);
            this._outputChannel.append(`exited with code ${code}`);
        });
    }
}

module.exports = CommandRunner;


        