FROM alpine:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY *.js ./
COPY *.json ./

RUN apk update

RUN apk add nodejs npm

RUN npm install

RUN npm install --save-dev nodemon

CMD [ "node", "index.js" ]

