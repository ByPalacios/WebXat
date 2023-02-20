#import subprocess
import platform
import os

if platform.system() == "Windows":

    WINDOWS_LINE_ENDING = b'\r\n'
    UNIX_LINE_ENDING = b'\n'

    file_path = r"server/entrypoint.sh"
    with open(file_path, 'rb') as open_file:
        content = open_file.read()  
    # Windows ➡ Unix
    content = content.replace(WINDOWS_LINE_ENDING, UNIX_LINE_ENDING)
    with open(file_path, 'wb') as open_file:
        open_file.write(content)

    file_path = r"client/entrypoint.sh"
    with open(file_path, 'rb') as open_file:
        content = open_file.read()  
    # Windows ➡ Unix
    content = content.replace(WINDOWS_LINE_ENDING, UNIX_LINE_ENDING)
    with open(file_path, 'wb') as open_file:
        open_file.write(content)
    
    info = os.system("echo ---------------------------------------------")
    info = os.system("echo Build Node Image:")
    info = os.system("echo ---------------------------------------------")
    command1 = os.system("cd node & docker build . -t node:staging --no-cache")
    command2 = os.system("cd ..")
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

#if platform.system() == "Linux":
