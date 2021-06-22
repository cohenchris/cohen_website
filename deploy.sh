#!/bin/bash

GREEN='\033[0;32m'
NC='\033[0m' # No Color

npm i
npm audit fix

# Grab updated resume from github repository
wget https://raw.githubusercontent.com/cohenchris/resume/master/ChrisCohen_resume.pdf
rm -f ./public/files/ChrisCohen_resume.pdf
mv ChrisCohen_resume.pdf ./public/files/

# Convert resume to png for display on resume page
rm -f ./public/images/ChrisCohen_resume.png
pdftoppm ./public/files/ChrisCohen_resume.pdf ./public/images/ChrisCohen_resume -png -singlefile

# Create optimized build for upload
npm run build

# Move to build folder on webserver
mv build/ html/
scp -r html/ root@chriscohen.dev:/root/vps/nginx/config/www/chriscohen.dev/
rm -rf ./html

echo -e "${GREEN}Don't forget to commit to cohenchris/website!${NC}"
