#Client

FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY Server/server.js ./

RUN npm install socket.io-client 

CMD [ "node", "index.js" ]