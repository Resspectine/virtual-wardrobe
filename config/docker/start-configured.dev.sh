#!/bin/sh

npm install -g envsub

envsub ./config.json.dist ./config.json

npm run start