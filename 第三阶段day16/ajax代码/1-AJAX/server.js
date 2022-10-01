const express = require('express');

const app = express();

app.all('/songs', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Content-Type','application/json;charset=utf-8');
    response.end(require('fs').readFileSync('./data.json'));
});

app.all("*", (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('404');
});

app.listen(80, () => {
    console.log('服务已经启动....');
});