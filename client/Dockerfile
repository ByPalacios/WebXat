#Client

FROM node:staging

USER root

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . ./
COPY entrypoint.sh ./

#COPY package-client.json ./package.json

RUN chmod -R 777 ./entrypoint.sh
#RUN rm -R node_modules 
#RUN rm package-lock.json 
#RUN npm install express -S \
#    npm install
    #apk add --update nodejs npm \
    #npm install socket.io-client \
    #npm init

#CMD [ "node", "index.js" ]
CMD ["/usr/src/app/entrypoint.sh"]
