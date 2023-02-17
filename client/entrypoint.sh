#!/bin/sh

rm -R node_modules 
rm package-lock.json 
npm install -S express
npm install -gS nodemon
npm install -S socket.io-client
npm install
nodemon --legacy-watch index.js
