#!/bin/bash

set -e

echo "Installing node modules... Requires NPM"
npm install --loglevel=error > /dev/null

echo "Installing Bower libraries... Requires Bower (installed by NPM)"
$(npm bin)/bower --allow-root install > /dev/null

echo "Build completed!"
