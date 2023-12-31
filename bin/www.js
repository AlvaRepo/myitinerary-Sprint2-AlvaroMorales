
import { log } from 'console';
import app from '../app.js';
import debug from 'debug';
import http from 'http';
import { connect } from 'mongoose';        //método par conectarme a la DB

//PORT
// process.env guarda las confugraciones de la variables de entorno
// variables que nececsitan ser protegidas,
// Se configuran con modulo DOTENV
let port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// START SERVEING
let server = http.createServer(app);
let ready = () => {
  console.log('server ready on port '+port);
  connect(process.env.LINK_DB)
    .then(()=>console.log('Base de Datos conectada...'))
    .catch(err=>console.log(err))    
}
server.listen(port, ready);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
