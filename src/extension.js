// @ts-nocheck
const vscode = require("vscode");
const nuxt = require("./main");

const activate = async (context) => {
  await nuxt.activate(context);
  vscode.window.showInformationMessage("Nuxt extension is Ready");
};

const deactivate = () => {
  nuxt.deactivate();
};

module.exports = {
  activate,
  deactivate,
};
