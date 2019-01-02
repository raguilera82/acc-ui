#!/bin/bash

#$1 --> devVersion

npm run build -- --prod
npm --no-git-tag-version version $1
git commit -am $1
git push origin develop
git push --tags
