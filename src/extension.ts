import * as vscode from 'vscode'
import HeaderCreator from './createHeader'

export const activate = (context: vscode.ExtensionContext) => {
	console.log('[Header Creator]: Extension Active')
	
	const headerCreator = new HeaderCreator()
	const disposable = vscode.commands.registerCommand('header-creator.create', () => headerCreator.insertHeader())

	context.subscriptions.push(disposable)
}

export const deactivate = () => {}
