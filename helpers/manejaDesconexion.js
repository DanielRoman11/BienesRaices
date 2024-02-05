export async function manejarDesconexion(socket) {
  await socket.connectionManager.getConnection()
    .then(connection => {
      socket.connectionManager.releaseConnection(connection);
    })
    .catch(err => {
      console.log('\nRe-connecting lost connection: ' + err.stack);
      setTimeout(manejarDesconexion, 2000, socket);
    });
}