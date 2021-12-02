#!/usr/bin/env bash
set -e
echo $#
cli_message="$*"
message=${cli_message:-Deploy storybook}

npx build-storybook
cd storybook-static
git init .
git remote add origin git@github.com:vast-coding/vast-coding.github.io.git
git fetch
git reset origin/master
git add .
git commit -m "$message"
git push --set-upstream origin master