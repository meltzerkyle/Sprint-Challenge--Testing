const { server, gamesArr } = require('./server.js');

console.log(gamesArr);

server.listen(7000, () => console.log("running"));
 