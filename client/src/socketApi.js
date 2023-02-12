import io from 'socket.io-client';

let socket;

export const init = () => {
    socket = io('https://oe-chat.onrender.com', {
        transports: ['websocket'],
    });
}

export const sendMessage = (message) => {
    if(socket) socket.emit('new-message', message);
}

export const subscribeChat = (cb) => {
    if(!socket) return;
        socket.on('receive-message', cb);
}
