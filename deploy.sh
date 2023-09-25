#!/bin/bash

WEBSITE_STATIC_HTML_DIR="/home/phrog/server/config/swag/www/chriscohen.dev/html"

rm -rf ./out
npm run build

# Delete old HTML, move new HTML to serving directory
rm -rf $WEBSITE_STATIC_HTML_DIR
mv ./out $WEBSITE_STATIC_HTML_DIR

/home/phrog/scripts/website-listening-progress-json.py
