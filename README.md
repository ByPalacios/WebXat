docker build .\server\ -t socket.io-server:staging --no-cache
docker build .\client\ -t socket.io-client:staging --no-cache
docker-compose -p "socket-io" up -d