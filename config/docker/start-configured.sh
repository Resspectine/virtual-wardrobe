#!/bin/sh

export WEBPACK_MAIN_JS_FILE=$(find /usr/share/nginx/html/ -name "main.js")

{ rm $WEBPACK_MAIN_JS_FILE && envsubst "$(cat /usr/share/frontend-config.json.dist)" > $WEBPACK_MAIN_JS_FILE; } < $WEBPACK_MAIN_JS_FILE

exec nginx -g "daemon off;"
