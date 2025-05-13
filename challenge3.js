const fs = require('fs');

function challenge3() {
    const data = JSON.parse(fs.readFileSync('revenue.json', 'utf8'));

    const validDays = data.filter(entry => entry.value > 0);
    const values = validDays.map(entry => entry.value);

    const min = Math.min(...values);
    const max = Math.max(...values);
    const average = values.reduce((a, b) => a + b, 0) / values.length;
    const aboveAverageDays = values.filter(value => value > average).length;

    console.log(`Lowest revenue: ${min.toFixed(2)}`);
    console.log(`Highest revenue: ${max.toFixed(2)}`);
    console.log(`Days with revenue above average: ${aboveAverageDays}`);
}

challenge3();