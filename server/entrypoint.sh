#!/bin/sh

rm -R node_modules 
rm package-lock.json 
npm install -S express
npm install -gS nodemon
npm install -S socket.io
npm install -S mysql
npm install -S cookie-parser
npm install -S express-session
npm install
nodemon --legacy-watch index.js
