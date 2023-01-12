require("dotenv").config();
const WebSocket = require('ws');

const PORT = process.env.PORT || 8080;
const server = new WebSocket.Server({ port: PORT }, () => {
    console.log(`Server started on port ${PORT}`);
});

const users = [];

function sendMessage(message) {
    users.forEach((user) => {
        user.ws.send(JSON.stringify(message));
    });
}

server.on('connection', (ws) => {
    users.push({ ws });

    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message);
            sendMessage(data.message);
        } catch (e) {
            console.error('Error passing message!', e)
        }
    });

    ws.on('close', (code, reason) => {
        users[ws].delete();
    });
});