#!/bin/bash

# Upload updated resume from github repository
git clone https://github.com/cohenchris/resume.git
rm -f ./src/files/ChrisCohen_resume.pdf
mv resume/ChrisCohen_resume.pdf ./src/files/

# Convert resume to png for display on resume page
rm -f ./src/images/ChrisCohen_resume.png
pdftoppm ./src/files/ChrisCohen_resume.pdf ./src/images/ChrisCohen_resume -png -singlefile
rm -rf resume/

# Create optimized build for upload
npm run build

# # Old commands for deploying to GitHub Pages
# if ! [[ -d ../cohenchris.github.io ]]; then
#     cd ..
#     git clone https://github.com/cohenchris/cohenchris.github.io.git
#     cd website
# fi

# Add required files to build repository stage
scp -r build/* chris@chriscohen.dev:/var/www/chriscohen.dev/html
rm -rf ./build

# # Old commands for deploying to GitHub Pages
# rm -rf ../cohenchris.github.io/*
# mv ./build/* ../cohenchris.github.io
# cp ./CNAME ../cohenchris.github.io/CNAME
# cp ./404.* ../cohenchris.github.io/
# rm -rf ./build
# cd ../cohenchris.github.io

# # Commit to build repository (old for deploying to GitHub Pages)
# curr_date=$(date +"%m-%d-%Y_%T")
# git add .
# git commit -m "website build $curr_date"
# git push origin master

# cd ../website
# rm -rf ../cohenchris.github.io

# Commit to development repository
read -p "Commit message for ReactJS repository: " msg
git add .
git commit -m "${msg}"
git push origin master