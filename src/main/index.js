// @ts-nocheck
const vscode = require('vscode');
const hasYarn = require('has-yarn');
const open = require('open');
const CommandRunner = require('../utilities/command-runner');
const OutputChannel = require('../utilities/output-channel');
const PreviewAppWebview = require('./preview-app-webview');

const nuxtOutputChannel = new OutputChannel('Nuxt');
const commandRunner = new CommandRunner(nuxtOutputChannel);
const previewAppWebview = new PreviewAppWebview('App', 'Nuxt.openApp');

//stores the workspace the user currently has open.
const WORKSPACE_CWD = vscode.workspace.workspaceFolders[0].uri.fsPath;

//stores messages. We can apply i18n later.
const MESSAGES = require('../../assets/messages.json')

const activate = async (context) => {
  nuxtOutputChannel.activate(context);
  previewAppWebview.activate(context);

  statusBarButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
  statusBarButton.command = 'Nuxt.startDevServer';
  statusBarButton.text = MESSAGES.statusBarButton.startDev.text;
  statusBarButton.tooltip = MESSAGES.statusBarButton.startDev.tooltip;
  statusBarButton.show();

  context.subscriptions.push(vscode.commands.registerCommand('Nuxt.startDevServer', () => {
    if(statusBarButton.text === MESSAGES.statusBarButton.open.text){
      //need to find a way to get nuxt's current port because some users dont use this one
      if(vscode.workspace.getConfiguration('nuxt').get('openInTheBrowser')){
        open(`http://localhost:3000`);
      }else{
        vscode.commands.executeCommand("Nuxt.openApp");
      }
    }else if(statusBarButton.text === MESSAGES.statusBarButton.startDev.text){
      commandRunner.exec(hasYarn(WORKSPACE_CWD) ? 'yarn dev' : 'npm run dev');
      statusBarButton.text = MESSAGES.statusBarButton.open.text;
    }
    
    //there is a regression in this line. Previously when we called show(), it would focus on the tab. But it is no longer doing it.
    //the developer has to manually change it.
    statusBarButton.show();
  }));
	
	context.subscriptions.push(statusBarButton);
};

const deactivate = () => {
  previewAppWebview.deactivate();
};

module.exports = {
  activate,
  deactivate
};
