---
title: Basic nvm (Node Version Manager)
date: "2021-12-03T12:19:37.498Z"
slug: basic-nvm-node-version-manager
author: Ryan Setiagi
git: https://github.com/masbossun/masbossun-next/blob/main/_posts/basic-nvm-node-version-manager.mdx
preview: Javascript has been the most favourite programming language since it can be run outside web browsers thanks to NodeJS. Like any other programming language, javascript and NodeJS is also evolving that comes with new features and fixes.
---

Javascript has been the most favourite programming language since it can be run outside web browsers thanks to NodeJS. Like any other programming language, javascript and NodeJS is also evolving that comes with new features and fixes.

As a programmer, sometimes we usually work on many projects, and we cannot depend on the same NodeJS version, as a best practice, we always have an environment for specific projects that we have been working on. To achieve those requirements, we need tools to manage the NodeJS version called nvm (Node Version Manager).

## Installing nvm

nvm can be installed via CLI using `curl`

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

or, using `wget`

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

to let nvm start on shell login, put this script to load and setup the nvm on your shell profile (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`)

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

After installation success, you can check it by running

```bash
command -v nvm
```

if the installation is correct, it will prompt `nvm` as a result

## Basic commands

Some commands for daily usages. Also, something to keep in mind, on nvm there is a feature called **alias** to make an alias for a specific nodejs version, for example, `node` is an alias for the latest NodeJS version, `default` is an alias for the default NodeJS version and many more. We also can create a custom alias.

##### Installing NodeJS

To install NodeJS we use the command `install`

```bash
nvm install node  # installing latest nodejs version
nvm install 16.6.1  # installing specific nodedjs version
```

##### List NodeJS Versions

To see the list of NodeJS versions that are currently installed on the machine, we can use command `ls`. But if you want to see a list of NodeJS versions that are currently active on remote, we can use the command `ls-remote`.

```bash
nvm ls
nvm ls-remote
```

##### Switch or use specific NodeJS Version

If we don't specify the NodeJS version, nvm will use NodeJS that currently set as the `default` alias. To switch between specific NodeJS versions we can call the `use` command.

```bash
nvm use node  # using latest nodejs version
nvm use 16.6.1  # using specific nodejs version
nvm use  # using the specific nodejs version provided on .nvmrc file
```

nvm can detect whether NodeJS version is installed or not, after calling `use` command, if there is no NodeJS version installed on the machine, nvm will installing the version and switch to it.

## .nvmrc

We can specify per-project NodeJS version via `.nvmrc` file, as you can see on the example command above, if we already have `.nvmrc` we can call `use` without specify the version, nvm will read the variables inside `.nvmrc`, specific version and alias can be work on this file. This is an example of `.nvmrc`.

```
v16.6.1
```

## Auto-use Script

nvm provides the auto-use script by detecting `.nvmrc` file and performing the `use` command. If you are using **zsh,** edit and put this script into your shell profile

```bash
# place this after nvm initialization!
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

for another shell, you can see another integration at the official nvm documentation [here](https://github.com/nvm-sh/nvm#deeper-shell-integration).

I think that is all for basic nvm, for more information you can always rely on the official documentation. As I mentioned earlier in this post, nvm is the proper way to install and manage NodeJS versions on the same machine, from basic to advance features that it gives should be enough for such a scenario.
