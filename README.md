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
* `extension.simpl_help`: Opens the Crestron SIMPL+ help reference file. 



## Extension Settings

This extension contributes the following settings:

* `simpl.compiler`: sets the path of the Simpl+ compiler. Can be set to a custom path via the user settings. Please use the double \ to specify directory paths.

## Keybindings and Menus
All commands are added to the right click context menu of the editor tab, and the following keybindings have been added.
* `ctrl+F1`: Opens Simpl+ Help.
* `ctrl+F12`: Compiles current file for Series3.
* `ctrl+alt+F12`: Compiles current file for Series2 and Series3
* `ctrl+shift+F12`: Compiles all .usp files in the open working folder for Series3.


## Known Issues

N/A

## Release Notes

### 1.0.0

Initial release 

