#Server

FROM node:staging

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#COPY package.json ./
#COPY package-server.json ./package.json

RUN npm install 
    #npm install express \
    #socket.io \
    #mysql \
    #cookie-parser \
    #express-session 

CMD [ "node", "index.js"]
