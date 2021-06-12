const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

server.listen(process.env.PORT || 3333, () => {
  console.log('API ONLINE');
});