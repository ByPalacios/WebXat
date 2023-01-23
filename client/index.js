/*var express = require('express');
var index = express();index.get('/', function (req, res) {
  res.send('Hello World!    maaaicmic');
});index.listen(3000, function () {
  console.log('hola owo 3000!');
});*/
/*
socket.on("logged_in", function(name){
  $("#n_log_in").hide();
  $("#log_in").html("Welcome back " + name + ", nice to see you again!");
  $("#log_in").show();
});

socket.on("invalid", function(){
  alert("Username / Password Invalid, Please try again!");
});

socket.on("error", function(){
  alert("Error: Please try again!");
});
*/
const io = require('socket.io-client');
const socket = io();

// Enviar una solicitud de registro al servidor
socket.emit('register', { username, password});

// Escuchar la respuesta del servidor
socket.on('register', (data) => {
  console.log(data);
});

// Enviar una solicitud de inicio de sesión al servidor
socket.emit('login', { username, password });

// Escuchar la respuesta del servidor
socket.on('login', (data) => {
  console.log(data);
});

// Escuchar el mensaje de bienvenida enviado por el servidor
socket.on('login', (data) => {
  console.log(data.message);
});
