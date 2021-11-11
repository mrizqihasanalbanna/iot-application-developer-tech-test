const http = require('http');
const app = require('./app/app');

const port = 3001;
const rest = http.createServer(app);

rest.listen(port, () => {
  console.log('listening to port ' + port);
});
