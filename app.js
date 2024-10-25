const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Configuración del directorio público para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de rutas
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Socket.io para el chat en tiempo real
io.on('connection', (socket) => {
    console.log('Nuevo usuario conectado');

    socket.on('chatMessage', (msg) => {
        io.emit('chatMessage', msg);
    });

    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

// Puerto de la aplicación
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
