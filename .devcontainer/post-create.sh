#! /bin/bash

set -e  # Stop on error

echo "🔧 Setting up development environment..."

# Create ~/.ssh directory with correct permissions
echo "Creating ~/.ssh directory"
mkdir -p ~/.ssh && chmod 700 ~/.ssh

# Install fzf if not already installed
if [ ! -d ~/.fzf ]; then
  echo "Installing fzf"
  git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
  ~/.fzf/install --key-bindings --completion --no-update-rc --no-bash --no-fish
else
  echo "fzf already installed, skipping."
fi

# List of ZSH plugins to install
PLUGINS=(
  "you-should-use https://github.com/MichaelAquilina/zsh-you-should-use.git"
  "zsh-autosuggestions https://github.com/zsh-users/zsh-autosuggestions.git"
  "zsh-completions https://github.com/zsh-users/zsh-completions.git"
  "zsh-syntax-highlighting https://github.com/zsh-users/zsh-syntax-highlighting.git"
)

# Ensure the custom plugins directory exists
ZSH_CUSTOM="${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}"
mkdir -p "$ZSH_CUSTOM/plugins"

for plugin in "${PLUGINS[@]}"; do
  NAME=$(echo "$plugin" | awk '{print $1}')
  REPO=$(echo "$plugin" | awk '{print $2}')
  PLUGIN_DIR="$ZSH_CUSTOM/plugins/$NAME"

  if [ ! -d "$PLUGIN_DIR" ]; then
    echo "Installing $NAME"
    git clone "$REPO" "$PLUGIN_DIR"
  else
    echo "$NAME already installed, skipping."
  fi
done

echo "✅ Zsh plugins installed."
