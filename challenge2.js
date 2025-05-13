function challenge2(number) {
    let a = 0, b = 1;

    while (b < number) {
        [a, b] = [b, a + b];
    }

    if (b === number || number === 0) {
        console.log(`${number} belongs to the Fibonacci sequence.`);
    } else {
        console.log(`${number} does NOT belong to the Fibonacci sequence.`);
    }
}

challenge2(21);