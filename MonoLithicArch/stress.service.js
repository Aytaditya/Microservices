const express = require('express');
const morgan = require('morgan');
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
    console.log(`Master ${process.pid} is running`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });

} else {
    const app = express();
    app.use(morgan('dev'));

    console.log(`Worker ${process.pid} started`);

    app.get('/stress', (req, res) => {
        for (let i = 0; i < 10000000000; i++) {}
        res.send('Another API Endpoint');
    });

    app.listen(3002, () => {
        console.log(`Server is running on port 3002 by worker ${process.pid}`);
    });
}
