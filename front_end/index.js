const http = require('http');
const app = require('./app');

const port = 3000;
const rest = http.createServer(app);

rest.listen(port, () => {
  console.log('listening to port ' + port);
});
