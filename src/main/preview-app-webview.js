// @ts-nocheck
const vscode = require('vscode');
const path = require('path');

class PreviewAppWebview {

  constructor(name, contributeCommand) {
    this._name = name;
    this._contributeCommand = contributeCommand;
  }

  activate(context) {
    vscode.commands.registerCommand(this._contributeCommand, async() => {
        this.showPanel(context);
    })
  }

  deactivate(){
    this._panel.dispose();
  }

  didChangeViewState(){
    this._editor.setEditor();
  };

  didDispose(){
    this._panel = null;
  }

  showPanel(context) {
    if (this._panel) {
        this._panel.reveal(vscode.ViewColumn.Three);
    } else {
      const distFolderPath = path.dirname(path.join(context.extensionPath, 'web', 'dist', '_nuxt'));

      this._panel = vscode.window.createWebviewPanel(
        this._name,
        this._name,
        vscode.ViewColumn.Three,
        {
          enableScripts: true,
          retainContextWhenHidden: true,
          enableFindWidget: true,
          localResourceRoots: [vscode.Uri.file(distFolderPath)],
        }
      );

      this._panel.iconPath = {
        light: vscode.Uri.file(path.join(context.extensionPath, 'assets', 'icon.png')),
        dark: vscode.Uri.file(path.join(context.extensionPath, 'assets', 'icon.png')),
      };

      this._panel.webview.html = this.prepareView(`
        <!DOCTYPE html>
            <html>
                <head>
                    <style>
                        body {
                            margin: 0;
                        }
                    </style>
                </head>
                <body>
                    <iframe src="http://localhost:3000" frameBorder="0" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>
                </body>
            </html>
        `, distFolderPath);
      this._panel.onDidDispose( () => this.didDispose(), undefined, context.subscriptions);
      this._panel.onDidChangeViewState((state) => this.didChangeViewState(state), undefined, context.subscriptions);
    }
  }

  prepareView(html, distFolderPath) {
    html = html.replace(/(href=|src=)(.+?)(\ |>)/g, (m, $1, $2, $3) => {
      let uri = $2;
      uri = uri.replace('"', '').replace("'", '');
      uri.indexOf('/_nuxt') === 0 && (uri = `.${uri}`);
      if (uri.substring(0, 1) == '.') {
        const resourceUriOnDisk = vscode.Uri.file(path.resolve(distFolderPath, uri));
        const resourceUri = this._panel.webview.asWebviewUri(resourceUriOnDisk);
        uri = `${$1}${resourceUri}${$3}`;
        return uri.replace('%22', '');
      }
      return m;
    });
    return html;
  }

}

module.exports = PreviewAppWebview;
