#Server

FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY Client/index.js ./

RUN npm install express \
    socket.io \
    mysql \
    cookie-parser \
    express-session 

CMD [ "node", "server.js"]