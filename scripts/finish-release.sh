#!/bin/bash

# $1 --> newVersion

git flow release finish -m $1 $1
git push origin master
npm publish
npm run build
firebase deploy