#!/bin/bash

# $1 --> newVersion

git flow init -d -f
git flow release start $1
npm --no-git-tag-version version $1
git commit -am $1
git push origin release/$1
