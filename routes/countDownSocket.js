var db = require('../mysql.js');
var connection = db();

module.exports = function(io) {
  io.on('connection', function(socket) {
    console.log('a user connected, from ' + socket.handshake.address);

    socket.on('message', function(msg) {
      socket.broadcast.emit('message', msg);
      connection.query('INSERT INTO MESSAGE(ip, content) VALUES(?, ?)', [socket.handshake.address, msg], function(err, result) {
        if(err)
	  throw err;
      });
    });

  });


}
