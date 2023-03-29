const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const { Sessions } = require('./utils/sessions');
const { Members } = require('./utils/members');

const publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
var sessions = new Sessions();
var members = new Members();

var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/";


app.use(express.static(publicPath));

//Starting server on port 3000
server.listen(3000, () => {
    console.log("Server started on port 3000");
});

io.on('connection', (socket) => {
    console.log("i am in here")
    //When host connects for the first time
    socket.on('host-join', (data) => {

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("ReelDeal");
            var query = { id: parseInt(data.id) };
            dbo.collection('sessions').find(query).toArray(function (err, result) {
                if (err) throw err;

                //A kahoot was found with the id passed in url
                if (result[0] !== undefined) {
                    var sessionPin = Math.floor(Math.random() * 90000) + 10000; //new pin for game

                    sessions.addSession(sessionPin, socket.id, false, { playersAnswered: 0, questionLive: false, gameid: data.id, question: 1 }); //Creates a game with pin and host id

                    var session = sessions.getSession(socket.id); //Gets the game data

                    socket.join(session.pin);//The host is joining a room based on the pin

                    console.log('Session Created with pin:', session.pin);

                    //Sending game pin to host so they can display it for players to join
                    socket.emit('showSessionPin', {
                        pin: session.pin
                    });
                } else {
                    socket.emit('noSessionFound');
                }
                db.close();
            });
        });

    });

});