#import subprocess
import platform
import os

system = platform.system()

if system == "Windows":
    
    info = os.system("echo ---------------------------------------------")
    info = os.system("echo Build socket.io-server:")
    info = os.system("echo ---------------------------------------------")
    command1 = os.system("cd node & docker build . -t node:staging --no-cache")
    command2 = os.system("cd ..")
    #command1 = os.system("docker load -i node.tar")
    command1 = os.system("cd server & docker build . -t socket.io-server:staging --no-cache")
    info = os.system("echo ---------------------------------------------")
    info = os.system("echo Build socket.io-client:")
    info = os.system("echo ---------------------------------------------")
    command2 = os.system("cd ..")
    command2 = os.system("cd client & docker build . -t socket.io-client:staging --no-cache")
    info = os.system("echo ---------------------------------------------")
    info = os.system("echo Build socket.io-server:")
    info = os.system("echo ---------------------------------------------")
    command2 = os.system("cd ..")
    command3 = os.system("docker-compose -p \"socket-io\" up -d")
