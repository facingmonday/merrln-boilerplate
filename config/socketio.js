/**
 * Socket.io configuration
 */

'use strict';

const config = require('./environment');

// When the user disconnects.. perform this

//const ExampleService = require('../services/room');
  
module.exports = function (io) {
  

  //ExampleService.setConnection(io);
  
  io.on('connection', function (socket) {
    //console.log('io.sockets.adapter.rooms', io.sockets.adapter.rooms);
    socket.address = socket.handshake.address !== null ?
            socket.handshake.address.address + ':' + socket.handshake.address.port :
            process.env.DOMAIN;

    socket.connectedAt = new Date();
    socket.connection = io;
    // Call onDisconnect.
    

    //Register the sockets with service handlers
    //ExampleService.register(socket);
    
    socket.on('disconnect', function () {
      ///onDisconnect(socket);
      //console.info('[%s] DISCONNECTED', socket.address);
    });

    console.info('CONNECTED', socket.id);
  });
};