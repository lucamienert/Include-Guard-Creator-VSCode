"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const createHeader_1 = require("./createHeader");
const activate = (context) => {
    console.log('[Header Creator]: Extension Active');
    const headerCreator = new createHeader_1.default();
    const disposable = vscode.commands.registerCommand('header-creator.create', () => headerCreator.insertHeader());
    context.subscriptions.push(disposable);
};
exports.activate = activate;
const deactivate = () => { };
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map