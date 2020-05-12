#!/bin/bash

npm run build
if ! [[ -d ../cohenchris.github.io ]]; then
    cd ..
    git clone https://github.com/cohenchris/cohenchris.github.io.git
    cd ..
fi

rm -rf ../cohenchris.github.io/*
mv ./build/* ../cohenchris.github.io
cp ./CNAME ../cohenchris.github.io/CNAME
rm -rf ./build
cd ../cohenchris.github.io
curr_date=$(date +"%m-%d-%Y_%T")
git add .
git commit -m "website build $curr_date"
git push
