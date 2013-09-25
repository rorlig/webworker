  var app = require('http').createServer(handler)
    , io = require('socket.io').listen(app)
    , fs = require('fs')

  console.log('starting socket.io server started on port 8080');

  app.listen(8080);

  // usernames which are currently connected to the chat
  var usernames = {};
  var newDate = new Date();

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
    socket.on('map_event', function (data) {
      console.log('map_event received' + data);
      var latlng = data.split(',')
      //for the purposes of data collection and building paths for demo
      console.log(newDate.getTime(), latlng[0], latlng[1]);
      io.sockets.emit('map_event', data);
    });
  });