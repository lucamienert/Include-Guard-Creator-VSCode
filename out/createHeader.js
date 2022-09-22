"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class HeaderCreator {
    constructor() { }
    insertHeader() {
        const editor = vscode.window.activeTextEditor;
        if (!editor)
            return;
        const filename = editor.document.fileName;
        // if(filename.endsWith('.h') || filename.endsWith('.hpp') || filename.endsWith('.hh'))
        //     return
        if (this.hasHeader(editor.document))
            return;
        const fileHeader = `#ifndef ${filename.toUpperCase()}_H_
#define ${filename.toUpperCase()}_H_

#pragma once

// insert you code here


#endif
`;
        editor.edit(edit => {
            let startLine = 0;
            edit.insert(new vscode.Position(startLine, 0), fileHeader);
        });
    }
    hasHeader(document) {
        return false;
    }
}
exports.default = HeaderCreator;
//# sourceMappingURL=createHeader.js.map