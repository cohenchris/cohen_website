#!/bin/bash

GREEN=`tpu setaf 2`

npm i
npm audit fix

# Upload updated resume from github repository
git clone git@github.com:cohenchris/website.git
rm -f ./src/files/ChrisCohen_resume.pdf
mv resume/ChrisCohen_resume.pdf ./src/files/

# Convert resume to png for display on resume page
rm -f ./src/images/ChrisCohen_resume.png
pdftoppm ./src/files/ChrisCohen_resume.pdf ./src/images/ChrisCohen_resume -png -singlefile
rm -rf resume/

# Create optimized build for upload
npm run build
# Move 
mv build/ html/
scp -r html/ root@chriscohen.dev:/root/vps/nginx/config/www/chriscohen.dev/
rm -rf ./html

echo "${GREEN}Don't forget to commit to cohenchris/website!"
