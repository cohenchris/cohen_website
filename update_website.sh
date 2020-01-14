npm run build
rm -rf ../cohenchris.github.io/*
mv ./build/* ../cohenchris.github.io
cp ./CNAME ../cohenchris.github.io/CNAME
cd ../cohenchris.github.io
curr_date=$(date +"%m-%d-%Y_%T")
git add .
git commit -m "website build $curr_date"
git push
