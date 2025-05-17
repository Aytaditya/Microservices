const autocannon = require('autocannon');

const duration = 30; // Duration of the test in seconds
const url=['http://localhost:3000/api','http://localhost:3000/stress'];  // 211 requests in 30.03s, 48.9 kB read when multiple endpoints are used
// 40 requests in 30.06s, 0 B read  30 errors (30 timeouts) when i value is increase by 2 more zeros hence showing only 40 requests when too much load is given hence down side of monolithic architecture

const instance = autocannon({
    url,
    duration,
    }, (err, result) => {
    if (err) {
        console.error('Error during test:', err);
        return;
    }
    console.log('Test completed:', result);
    });

    autocannon.track(instance);