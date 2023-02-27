/*var express = require('express');
var index = express();index.get('/', function (req, res) {
  res.send('Hello World!    maaaicmic');
});index.listen(3000, function () {
  console.log('hola owo 3000!');
});*/
/*
var user = prova;
var passwd = prova;
*/
/*const config = {
  "host": "mysql-socket-io",
  "user": "root",
  "password": "password",
  "base": "users"
};

const db = mysql.createConnection({
  host: "mysql-socket-io",
  user: "root",
  password: "password",
  database: "users",
});*/

const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'mysql-socket-io',
  user: 'root',
  password: 'password',
  database: 'socket_io'
});

db.connect();

app.use(express.static('public'));

server.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});

io.on('connection', socket => {
  console.log('Nueva conexión:', socket.id);
  let room;
  // Manejar evento de unión a una sala privada
  socket.on('join room', data => {
    console.log('Uniendo a la sala:', data);
    room = data.room;
    socket.join(room);
  });

  // Manejar evento de envío de mensaje privado
  socket.on('send private message', data => {
    console.log('Mensaje privado recibido:', data);
    // guardando mensaje en la base de datos
    const query = `INSERT INTO messages (sender, receiver, message) VALUES ('${data.sender}','${data.receiver}','${data.message}')`;
    db.query(query, (error, results) => {
      if (error) throw error;
      console.log('Mensaje guardado en la base de datos');
    });
    // Emitir el mensaje solo a la persona que está en esa sala
    io.to(room).emit('new private message', data);
  });
});
