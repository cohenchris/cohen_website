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
# For use with custom 404 page
cp ./error_pages/* ./build/error_pages/

# Move 
scp -r build/* chris@chriscohen.dev:/var/www/chriscohen.dev/html
rm -rf ./build

# Commit to development repository
read -p "Commit message for ReactJS repository: " msg
git add .
git commit -m "${msg}"
git push origin master