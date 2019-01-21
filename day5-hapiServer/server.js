const Hapi = require('hapi');
/** 
const server = new Hapi.Server({  
  host: 'localhost',
  port: 3000
})
**/
// defining our routes


async function ser() {
    const server = Hapi.server({ port: 3000 });
    await server.start((err) => {
    if (err) {
        throw err;    }
    });
    console.log('Server started at: ' + server.info.uri);

    server.route({ method: 'GET', path: '/', handler: () => 'Hello coders to the amazing world of HAPI' });
}

ser();