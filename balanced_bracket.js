function isBalanced(input) {
    const stack = [];
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of input) {
        // Ignore whitespace
        if (char.trim() === '') {
            continue;
        }
        
        if (bracketMap[char]) {
            stack.push(char);
        } else if (Object.values(bracketMap).includes(char)) {
            if (stack.length === 0 || bracketMap[stack.pop()] !== char) {
                return "NO";
            }
        }
    }

    return stack.length === 0 ? "YES" : "NO";
}

console.log(isBalanced("{ [ ( ) ] }")); // With whitesapce
console.log(isBalanced("{ [ ( ] ) }")); // With whitesapce
console.log(isBalanced("{ ( ( [ ] ) [ ] ) [ ] }")); // With whitesapce

// console.log(isBalanced("{[()]}")); // Without whitesapce
// console.log(isBalanced("{[(])}")); // Without whitesapce
// console.log(isBalanced("{(([])[])[]}")); // Without whitesapce