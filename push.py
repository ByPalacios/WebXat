import os

info = os.system("docker cp client/* client-socket-io:/usr/src/app ")
info = os.system("docker cp server/* server-socket-io:/usr/src/app ")

info = os.system("docker exec -it client-socket-io ")
info = os.system("docker exec -it server-socket-io ")

