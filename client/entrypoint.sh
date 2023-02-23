#!/bin/sh

rm -R node_modules 
rm package-lock.json 
cd app
npx create-react-app ./
npm install -S express
npm install -gS nodemon
npm install -S socket.io-client
npm install
nodemon --legacy-watch index.js
