// autocannon is used to test the performance of the server by loading it for some duration(specified by user)
const autocannon = require('autocannon');


// const url - 'http://localhost:3000'; 442k requests in 30.01s, 105 MB read handled at this endpoint
const url = 'http://localhost:3000/api'; // URL of the server to be tested  89k requests in 30.01s, 21.3 MB read
const duration = 30; // Duration of the test in seconds

const instance = autocannon({
    url,
    //connections: 100, // Number of concurrent connections
    duration,
    }, (err, result) => {
    if (err) {
        console.error('Error during test:', err);
        return;
    }
    console.log('Test completed:', result);
    });

    autocannon.track(instance);