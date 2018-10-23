function freqQuery(queries) {
    const frequencies = [];
    const result = [];

    queries.map(query => {
        const action = query[0];
        const value = query[1];

        switch(action) {
            case 1:
                frequencies[value] = !frequencies[value] ? 1 : ++frequencies[value];
                break;
            case 2:
                if (frequencies[value]) --frequencies[value];
                break;
            case 3:
                result.push(frequencies.indexOf(value) === -1 ? 0 : 1);
                break;
        }
    });

    return result;
}