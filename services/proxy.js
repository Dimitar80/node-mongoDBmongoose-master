const express = require('express');
const proxy = require('http-proxy');

var api = express();
var apiProxy = proxy.createProxyServer();


api.all('/api/v1/auth/*', (req, res) => {
    apiProxy.web(req, res, {target: 'http://localhost:8081'});
});

api.all('/api/v1/files/*', (req, res) => {
    apiProxy.web(req, res, {target: 'http://localhost:8002'});
});

api.all('/api/v1/filmovi/*', (req, res) => {
    apiProxy.web(req, res, {target: 'http://localhost:8084'});
});

api.all('/api/v1/products/*', (req, res) => {
    apiProxy.web(req, res, {target: 'http://localhost:8082'});
});






api.listen(5000);