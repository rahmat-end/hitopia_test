function weightedStrings(input, queriesString) {
    const getWeight = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

    const queries = JSON.parse(queriesString.replace(/'/g, '"'));

    const weights = new Set();
    let currentChar = '';
    let repeatCount = 0;

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        const weight = getWeight(char);

        if (char === currentChar) {
            repeatCount++;
        } else {
            currentChar = char;
            repeatCount = 1;
        }

        const currentWeight = weight * repeatCount;
        weights.add(currentWeight);
    }

    const result = queries.map(query => (weights.has(query) ? "Yes" : "No"));

    return `[${result.join(', ')}]`;
}

// Example usage:
console.log(weightedStrings("abbcccd", "[1, 3, 9, 8]"));