# crestron-simpl-plus

<div align="center">
 <img src="./assets/img/simpl_plus_icon.png" alt="logo" width="150" />
</div>

---

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

VSCode Extension which adds syntax highlighting and provides commands in the command palette for compiling.

Note: To take advantage of the compiler operations, you must have the Crestron provided Simpl+ Compiler installed.

## Contents :book:

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

-   [Features :package:](#features-package)
-   [Settings :wrench:](#settings-wrench)
-   [Keybindings :keyboard:](#keybindings-keyboard)
-   [Snippets :pencil:](#snippets-pencil)
-   [Known Issues :bug:](#known-issues-bug)
-   [Team :soccer:](#team-soccer)
-   [Contributors :sparkles:](#contributors-sparkles)
-   [LICENSE :balance_scale:](#license-balance_scale)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Features :package:

Syntax highlighting. Compiler.

TODO: code file-type icons, maybe better intellisense + autocompletion.

This extension contributes the following commands:

-   `extension.simplCC_Series3`: Compiles the currently opened file if it is a SIMPL+ .usp. Targeted at the 3series processors.
-   `extension.simplCC_Series2and3`: Compiles the currently opened file if it is a SIMPL+ .usp. Targeted at both the 2series and 3series processors.
-   `extension.simplCC_Series3All`: Finds all .usp files in the open folder and compiles them all. Targeted at 3series processors only.
-   `extension.simpl_help`: Opens the Crestron SIMPL+ help reference file.
-   `extension.simpl_visualize`: Opens a preview window and lets you preview the signal layout in real time. Note: this will automatically fully expand your module signals to their maximum available size.

## Settings :wrench:

This extension contributes the following settings:

-   `simpl.compiler`: sets the path of the Simpl+ compiler. Can be set to a custom path via the user settings. Please use the double \ to specify directory paths.
-   `simpl.helpLocation`: sets the path of the SIMPL+ reference guide. Can be set to a custom path via the user settings. Please use the double \ to specify directory paths.
-   `simpl.terminalLocation`: sets path of the default windows cmd.exe. Can be set to a custom path via the user settings. Please use the double \ to specify directory paths.

## Keybindings :keyboard:

All commands are added to the right click context menu of the editor tab, and the following keybindings have been added.

-   `ctrl+F1`: Opens Simpl+ Help.
-   `ctrl+F12`: Compiles current file for Series3.
-   `ctrl+alt+F12`: Compiles current file for Series2 and Series3
-   `ctrl+shift+F12`: Compiles all .usp files in the open working folder for Series3.

## Snippets :pencil:

So users can utilize their own snippets if desired, code snippets are available in a separate extension named "Crestron Simpl+ Code Snippets".

## Known Issues :bug:

-   API files - if CLZ is recently generated, the API file opened or generated may not be the newest available. If this happens, try a compile and then attempt opening the API file again.

## Team :soccer:

This project is maintained by the following person(s) and a bunch of [awesome contributors](https://github.com/Norgate-AV-Solutions-Ltd/crestron-simpl-plus/graphs/contributors).

<table>
  <tr>
    <td align="center"><a href="https://github.com/damienbutt"><img src="https://avatars.githubusercontent.com/damienbutt?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Damien Butt</b></sub></a><br /></td>
  </tr>
</table>

## Contributors :sparkles:

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Thanks go to these awesome people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mwgustin"><img src="https://avatars.githubusercontent.com/u/2281255?v=4?s=100" width="100px;" alt="Mike Gustin"/><br /><sub><b>Mike Gustin</b></sub></a><br /><a href="https://github.com/Norgate-AV-Solutions-Ltd/crestron-simpl-plus/commits?author=mwgustin" title="Code">💻</a> <a href="#design-mwgustin" title="Design">🎨</a> <a href="https://github.com/Norgate-AV-Solutions-Ltd/crestron-simpl-plus/commits?author=mwgustin" title="Documentation">📖</a> <a href="#maintenance-mwgustin" title="Maintenance">🚧</a> <a href="https://github.com/Norgate-AV-Solutions-Ltd/crestron-simpl-plus/commits?author=mwgustin" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/javitu"><img src="https://avatars.githubusercontent.com/u/5091755?v=4?s=100" width="100px;" alt="javitu"/><br /><sub><b>javitu</b></sub></a><br /><a href="https://github.com/Norgate-AV-Solutions-Ltd/crestron-simpl-plus/commits?author=javitu" title="Code">💻</a> <a href="https://github.com/Norgate-AV-Solutions-Ltd/crestron-simpl-plus/commits?author=javitu" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://allcontributors.org) specification.
Contributions of any kind are welcome!

## LICENSE :balance_scale:

[MIT](LICENSE)
