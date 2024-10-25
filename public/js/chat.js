const socket = io();

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.querySelector('#message').value;
    socket.emit('chatMessage', msg);
    document.querySelector('#message').value = '';
});

socket.on('chatMessage', (msg) => {
    const div = document.createElement('div');
    div.textContent = msg;
    document.querySelector('.chat-messages').appendChild(div);
});
