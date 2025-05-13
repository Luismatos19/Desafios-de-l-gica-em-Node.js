function challenge4() {
    const revenue = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Others: 19849.53
    };

    const total = Object.values(revenue).reduce((sum, value) => sum + value, 0);

    for (const state in revenue) {
        const percentage = (revenue[state] / total) * 100;
        console.log(`${state}: ${percentage.toFixed(2)}%`);
    }
}

challenge4();