#Server

FROM node:staging

USER root


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . ./
COPY entrypoint.sh ./
#COPY package-server.json ./package.json

RUN chmod -R 777 ./

#RUN rm -R node_modules 
#RUN rm package-lock.json 
#RUN npm install express -S \
#    npm install
    #npm install express \
    #socket.io \
    #mysql \
    #cookie-parser \
    #express-session 

#CMD [ "node", "index.js", "&&", "nodemon", "index.js"]
CMD ["/usr/src/app/entrypoint.sh"]
