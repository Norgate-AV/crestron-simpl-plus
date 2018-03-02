# crestron-simpl-plus README

VSCode Extension which adds syntax highlighting and provides commands in the command pallete for compiling.

The bulk of the tmLanguage file provided Copyright (c) 2013 Alex McLain - MIT License.

Port to VSCode, updates to the tmLanguage file, and all compiler interactions provided Copyright (c) 2018 Michael Gustin and MitreboxAV. 

## Features

Syntax highlighting. Compiler. 

TODO: Code snippets, code file-type icons, maybe better intellisense and autocompletes.

This extension contributes the following commands:
* `extension.simplCC_Series3`: Compiles the currently opened file if it is a SIMPL+ .usp. Targeted at the 3series processors.
* `extension.simplCC_Series2and3`: Compiles the currently opened file if it is a SIMPL+ .usp. Targeted at both the 2series and 3series processors.
* `extension.simplCC_Series3All`: Finds all .usp files in the open folder and compiles them all. Targeted at 3series processors only.



## Extension Settings

This extension contributes the following settings:

* `simpl.compiler`: sets the path of the Simpl+ compiler. Can be set to a custom path via the user settings. Please use the double \ to specify directory paths.

## Recomended keybinding settings

This extension makes no changes to the keybindings, but some suggested ones are included below. These can be added by opening the command palette (ctrl+shift+p), and type "Open Keyboard Shortcuts File" to open the keybindings.json file. 

```
[
    { "key": "ctrl+F12", "command": "extension.simplCC_Series3", "when": "editorLangId == 'simpl+'" },
    { "key": "ctrl+F1", "command": "extension.simpl_help", "when": "editorLangId == 'simpl+'" }
]
```

## Known Issues

N/A

## Release Notes

### 1.0.0

Initial release 

