import * as vscode from 'vscode'

export default class HeaderCreator {
    constructor(){}

    public insertHeader(): void {
        
        const editor = vscode.window.activeTextEditor
        if(!editor)
            return
        
        const filename = editor.document.fileName
        // if(filename.endsWith('.h') || filename.endsWith('.hpp') || filename.endsWith('.hh'))
        //     return

        if(this.hasHeader(editor.document))
            return

        const fileHeader: string = `#ifndef ${filename.toUpperCase()}_H_
#define ${filename.toUpperCase()}_H_

#pragma once

// insert you code here


#endif
`
        editor.edit(edit => {
            let startLine: number = 0

            edit.insert(new vscode.Position(startLine, 0), fileHeader)
        })
    }

    private hasHeader(document: vscode.TextDocument): boolean {
        return false
    }
}