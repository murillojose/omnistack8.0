const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');
const keys = require('./config/keys')
const server = express();

mongoose.connect(keys.connectionString, { useNewUrlParser: true });

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);