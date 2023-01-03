---
title: The vscode setup 2021
date: '2021-12-03T16:43:56.113Z'
slug: the-vscode-setup-2021
author: Ryan Setiagi
git: https://github.com/masbossun/masbossun-site/blob/main/src/lib/posts/the-vscode-setup-2021.md
preview: I want to share my vscode setup, this one is updated and it is different compare to the previous one that I wrote two years ago. Have been coding while using this setup for about a year now, and I feel so comfortable and have no complaints whatsoever.
---

I want to share my vscode setup, this one is updated and it is different compare to the previous one that I wrote two years ago. Have been coding while using this setup for about a year now, and I feel so comfortable and have no complaints whatsoever. This setup includes vscode settings, keyboard shortcuts, and some of the extensions to help me code faster and efficient.

## Settings

For settings mostly inspired by [Dan Abramov](https://twitter.com/dan_abramov), I like his vscode settings in terms of simplicity to achieve minimum distractions.

```json
{
	"editor.cursorBlinking": "solid",
	"editor.minimap.enabled": false,
	"editor.fontFamily": "JetBrainsMono Nerd Font Mono",
	"editor.fontSize": 13,
	"editor.lineHeight": 22,
	"editor.fontWeight": "500",
	"editor.fontLigatures": true,
	"editor.formatOnSave": true,
	"editor.folding": false,
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	},
	"editor.hideCursorInOverviewRuler": true,
	"editor.lineNumbers": "off",
	"editor.matchBrackets": "never",
	"editor.occurrencesHighlight": false,
	"editor.overviewRulerBorder": false,
	"editor.renderLineHighlight": "none",
	"editor.padding.top": 20,
	"editor.padding.bottom": 20,
	"editor.tabSize": 8,
	"editor.cursorStyle": "line",
	"editor.insertSpaces": false,
	"editor.wordSeparators": "/\\()\"':,.;<>~!@#$%^&*|+=[]{}`?-",
	"editor.wordWrap": "off",
	"editor.suggestSelection": "first",
	"editor.scrollBeyondLastLine": false,
	"editor.guides.indentation": false,
	"workbench.editor.enablePreview": false,
	"workbench.colorTheme": "Base16 Tomorrow",
	"workbench.list.openMode": "doubleClick",
	"workbench.iconTheme": null,
	"workbench.editor.showIcons": false,
	"workbench.startupEditor": "newUntitledFile",
	"workbench.statusBar.visible": true,
	"workbench.activityBar.visible": false,
	"workbench.panel.defaultLocation": "right",
	"explorer.openEditors.visible": 0,
	"terminal.integrated.fontFamily": "JetBrainsMono Nerd Font Mono",
	"terminal.integrated.lineHeight": 1.2,
	"terminal.integrated.tabs.enabled": false,
	"git.autofetch": true,
	"git.ignoreMissingGitWarning": true,
	"scm.diffDecorations": "overview",
	"search.exclude": {
		"**/node_modules": false
	},
	"vim.statusBarColorControl": false,
	"vim.easymotion": true,
	"vim.incsearch": true,
	"vim.useSystemClipboard": true,
	"vim.hlsearch": true,
	"vim.leader": "<space>",
	"vim.smartcase": true,
	"vim.normalModeKeyBindingsNonRecursive": [
		{
			"before": ["<esc><esc>"],
			"commands": [":noh"]
		}
	],
	"todohighlight.keywords": [{ "text": "HACK", "color": "#FFFFFF", "backgroundColor": "#872608" }]
}
```

What I mean by simple is that these settings declutter visual distractions, I have no mini-map, no line numbers, no icons, no activity bar, no folding, and no match-brackets. One that I want to hide but can't is the status bar because I need it to see the vim command and vim mode 😢.

I usually keep my vscode view separated horizontally, so I have more space to scroll vertically. On the first column is a sidebar, the second column is the code editor, and the third column is the panel/terminal. So when I toggle to show the terminal panel on the right and the sidebar on the left, I have more space for code in the middle, no distraction from above or bottom, everything is aligned side-by-side horizontally.

<figure>
  <img
    alt="me, viewing the previous vscode setup article inside vscode"
    src="/images/post/vscode-ryan.webp"
  />
  <figcaption>
    me, viewing the previous vscode setup article inside vscode
  </figcaption>
</figure>

## Keyboard Shortcuts

To modify or add a new shortcut, open shortcut settings via `cmd + shift + p` search for "Preferences: Open Keyboard Shortcuts" then press `enter`. One thing I like about the shortcut settings is the feature to search by key combination, it helps me a lot to modify and find the correct shortcuts. On vscode shortcuts, we can assign one key combination for multiple usages, based on the condition.

I am a keyboard person, I feel like my movement is faster and more accurate if I move around using keyboard shortcuts rather than a mouse.

### Activity window movements

As I mention earlier in the settings section, I have no activity bar, I hide it to make more room for sidebar, code, and terminal panel. So how do I manage to move between activities like a file explorer, search, git, even to the extension activity? the answer is shortcuts, and most of it is already defined on the default settings.

| Action                | Keyboard Shortcut |
| --------------------- | ----------------- |
| View: Show Explorer   | `cmd + shift + e` |
| View: Show Git        | `cmd + shift + g` |
| View: Show Search     | `cmd + shift + f` |
| View: Show Extensions | `cmd + shift + x` |
| Toggle Terminal       | `cmd + shift + a` |
| Toggle Sidebar        | `cmd + b`         |
| Go to File...         | `cmd + p`         |
| Show all commands     | `cmd + shift + p` |

### Editor movements

For editor shortcuts, I don't have that many favourites since I use vim keybinding (i will explain more about vim down below). But one of the vscode shortcuts I like is to open definition on the side. That shortcut is like a treasure for me, I like how fast it is to open the definition and compare it side by side right away just only using one keystroke which is `t`.

| Action                      | Keyboard Shortcut | Condition                                                                                     |
| --------------------------- | ----------------- | --------------------------------------------------------------------------------------------- |
| Split Editor                | `cmd + \`         |                                                                                               |
| Open definition on the side | `t`               | editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor && vim.mode == 'Normal' |

<figure>
  <img
    alt="open definition to side"
    src="/images/post/shortcut-open-to-side.gif"
  />
  <figcaption>open definition to side</figcaption>
</figure>

### Tabs movements

I don't like to have a lot of tabs/editor open, that is why my favourite tabs shortcut is a close current editor which `cmd + w`. If I feel don't need the file to be opened I never let it open and stay. If I need I can always use `cmd + p` again to search & open the file and close it if I'm done.

| Action             | Keyboard Shortcut |
| ------------------ | ----------------- |
| Close Tabs/Editor  | `cmd + w`         |
| Reopen Closed Tabs | `cmd + shift + t` |

### Terminal movements

In the same case like tabs, I don't keep my terminal open. I usually toggle the terminal to show if I need it and toggle again to hide. One feature that I use the most is split terminal since I mainly working on react native and need to open multiple terminals. Inside the terminal/panel column, I do split the view vertically, to keep the visual difference from the code editor.

| Action         | Keyboard Shortcut | Condition                                 |
| -------------- | ----------------- | ----------------------------------------- |
| Split Terminal | `cmd + \`         | terminalFocus && terminalProcessSupported |

### Vim Keybindings

Vim is my daily text editor, I have been using it for 3 years and it's amazing, I love its quickness and simplicity. For most people, it's a nightmare because of how hard it is to just exit from vim, but for me, being able to move, modify and select around texts or codes with vim is so much fun. I can't go back to the basic text editor just because of how fun vim is.

So, why do I use vscode instead of a terminal with vim to code as a daily driver? the answer is because I love the source control management in vscode. I do code review a lot, and seeing changes in the source control inside vscode help me identify code smell faster. Even when I code for myself, I usually go back and forth from Explorer to Source control just because I do care about code changes a lot. Luckily, since vim is popular technology, there are extensions to run and use vim inside vscode editor, thanks to [vim by vscodevim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) ✨

Vim itself has its shortcut or keybinding, but these are some of my favourites. Before that, I want to share another thing that I like from vim, which is how clever the key combinations were sets, it's like every key combination have a reason. For example, `caw` is the keybinding to change around words, notice that `caw` is the acronym of the actions itself. See, cool right? It is also compatible to work on parentheses like curly braces, round braces, square braces, etc.

| Action                         | Vim Keybinding                             | Condition                                                                                                                  |
| ------------------------------ | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Change around words            | `caw`                                      | In normal mode, the cursor should be placed at the specific word                                                           |
| Delete around words            | `daw`                                      | In normal mode, the cursor should be placed at the specific word                                                           |
| Yank(copy) around words        | `yaw`                                      | In normal mode, the cursor should be placed at the specific word                                                           |
| Delete around parentheses      | the pattern is `da`-parentheses, e.g `da{` | In normal mode, the cursor should be placed in between curly parentheses, "around" means the parentheses is also included. |
| Delete inside parentheses      | the pattern is `di`-parentheses, e.g `di{` | In normal mode, the cursor should be placed in between parentheses, "inside" means only the text inside the parentheses.   |
| Yank(copy) around parentheses  | the pattern is `ya`-parentheses, e.g `ya{` | In normal mode, the cursor should be placed in between curly parentheses, "around" means the parentheses is also included. |
| Yank(copy) inside parentheses  | the pattern is `yi`-parentheses, e.g `yi{` | In normal mode, the cursor should be placed in between parentheses, "inside" means only the text inside the parentheses.   |
| Move between parentheses pairs | `%`                                        | In normal mode, the cursor should be placed above the parentheses character                                                |

<figure>
  <img alt="vim in action" src="/images/post/vim-in-action.gif" />
  <figcaption>vim in action</figcaption>
</figure>

## Extensions

My installed extensions are primarily used for coding usages, such as framework or language helper. For visualization, since I keep it as minimal as I can, I only install a type of theme for each light and dark mode. For the dark theme, I choose [Base16 Tomorrow from o4x](https://github.com/o4x/base16-tomorrow-vscode), I love the colours because it's not too vibrant and easy to distinguish, I also use this kind of theme on iTerm and I love to have the same mood on every app. For light mode I install a theme from the [GitHub team](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme), I only use it whenever the sunlight on my room is too bright.

Other than that, vim extensions, and then some basic code helpers like auto rename, auto-close tag, colour highlight, git blame, svg viewer and todo highlight.

## Final Thoughts

I found that vscode can do anything nowadays, it is accessible via web browser and I like how vscode was integrated with Github, we can inspect the public repositories with ease via vscode remote directly. Also, a collaborative feature like live sharing for code pair sessions helps us get the job done in this situation where we can't work together in the same room physically. Customization is also a great plus, I love how unlimited the customizations are. From changing a line of the border to the complex functionality.
