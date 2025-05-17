const express = require('express');
const proxy = require('express-http-proxy');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));


app.use('/stress', proxy('http://localhost:3002'));
app.use('/', proxy('http://localhost:3001')); // generic route at the end

app.listen(3000, () => {
    console.log('Gateway is running on port 3000');
});
