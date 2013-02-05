var http = require('http');
var httpProxy = require('http-proxy');


var options = {
  hostnameOnly: true,
  router: {
    'moveinatlanta.com': '0.0.0.0:3000',
    'lndmrk.co': '0.0.0.0:3001',
    'citycoasters.com' : '0.0.0.0:3001'
  }
}

var proxyServer = httpProxy.createServer(options);
proxyServer.listen(80);


