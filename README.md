# Instructions

1 - on the root of the project, run `yarn install` and `yarn dev`

2 - on the app dir, run `yarn install`, `yarn build:vscode` and `yarn generate:vscode` to build the app.js

3 - then go to Debug on VS Code and click on the play button

4 - When vscode start, create a file called `anything.cls`, open it, then on the right top hand corner click on the `Database Icon` to open the webview.

5 - open the inspector for webview and verify that the request to `http://localhost:5000/vscode/fingerprint` does not work. On my machine it took 5.2min for the request to timeout.

6 - with the extension still running, open your browser and paste this in the search `http://localhost:5000/vscode/fingerprint` and verify that the server returns your machine's fingerprint.

7 - conclude that with VS Code 1.56.0 webviews are not able to request a localhost server anymore. On V 1.55.2 it was possible.