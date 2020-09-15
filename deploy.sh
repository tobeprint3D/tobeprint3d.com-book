#!/usr/bin/env sh
# EECUTE THIS LOCALLY with
# sh deploy.sh
# abort on errors
set -e

# build
yarn vuepress build book

# navigate into the build output directory
cd book/.vuepress/dist

# Creating CNAME file for domain
echo "tobeprinted.com" > CNAME

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:tobeprint3D/tobeprint3d.com-book master:gh-pages

cd -


# One liner: while read in; do yarn "$in"; done < oneliner.sh
# or: tail -1 | xargs