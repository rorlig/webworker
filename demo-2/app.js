var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(8080);

// usernames which are currently connected to the chat
var usernames = {};

function handler (req, res) {
  fs.readFile(__dirname + '/views/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('map_event', function (data) {
    console.log('map_event received');
    io.sockets.emit('map_event', data);
    // console.log(data);
  });
  socket.on('streetview_event', function (data) {
    console.log('streetview_event received');
    io.sockets.emit('streetview_event', data);
    // console.log(data);
  });
});