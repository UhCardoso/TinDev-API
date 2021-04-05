const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "*"
    }
});

const connectedUsers = {} 

io.on('connection', socket => {
    console.log('nova conexao', socket.id);
    const {user} = socket.handshake.query;

    connectedUsers[user] = socket.id;
})

mongoose.connect('mongodb+srv://<user>:<password>cluster0.umpgp.mongodb.net/<db_name>?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

app.use(cors());
app.use(express.json());

app.use(routes);

const PORT = process.env.PORT || 3333;
server.listen(PORT ,() => {
    console.log("Servidor em execução");
});
