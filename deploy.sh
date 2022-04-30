#!/bin/bash

GREEN='\033[0;32m'
NC='\033[0m' # No Color

npm i
npm audit fix

# Grab updated resume from github repository
wget https://raw.githubusercontent.com/cohenchris/resume/master/ChrisCohen_resume.pdf
mkdir ./public/{files,images}
mv ChrisCohen_resume.pdf ./public/files/

# Convert resume to png for display on resume page
rm -f ./public/images/ChrisCohen_resume.png
pdftoppm ./public/files/ChrisCohen_resume.pdf ./public/images/ChrisCohen_resume -png -singlefile

# Create optimized build for upload
rm -rf ./build
npm run build

# Move to build folder on webserver
mv build/ html/

# Remove existing html from server
ssh phrog@192.168.24.3 'rm -r /home/phrog/server/config/swag/www/chriscohen.dev/html/*'
# Copy new html over
scp -r html/ phrog@192.168.24.3:/home/phrog/server/config/swag/www/chriscohen.dev/
rm -rf ./html

echo -e "${GREEN}Don't forget to commit to cohenchris/website!${NC}"
