const autocannon = require('autocannon');

const duration = 30;
const endpoints = [
    'http://localhost:3000',
    'http://localhost:3000/stress',
];

function runTest(url) {
    const instance = autocannon({
        url,
        duration,
        connections: 10, // Tune based on your requirement
    }, (err, result) => {
        if (err) {
            console.error(`Error testing ${url}:`, err);
            return;
        }

        console.log(`URL: ${url}`);
        console.log(`Number of requests: ${result.requests.total}`);
        console.log(`Duration (seconds): ${result.duration.toFixed(2)}`);
        console.log(); // blank line for readability
    });

}

// Run sequentially with a small delay
(async () => {
    for (let url of endpoints) {
        await new Promise(resolve => {
            runTest(url);
            setTimeout(resolve, (duration + 2) * 1000); // wait for test to complete
        });
    }
})();
