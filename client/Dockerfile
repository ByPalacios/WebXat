#Client

FROM node:staging

RUN mkdir -p /usr/src/app
WORKDIR /home/node/app

#COPY package.json ./
COPY package-client.json ./package.json

RUN npm install 
    #apk add --update nodejs npm \
    #npm install socket.io-client \
    #npm init

CMD [ "node", "index.js" ]
