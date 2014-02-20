#!/usr/bin/env sh

SCRIPT="$(dirname "$(readlink "$0")")/../lib/index.js"
node $SCRIPT &
