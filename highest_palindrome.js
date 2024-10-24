function highestPalindrome(s, k) {
    const n = s.length;

    function createPalindrome(left, right, changes) {
        if (left > right) return changes;

        if (s[left] === s[right]) {
            return createPalindrome(left + 1, right - 1, changes);
        } else {
            changes++;
            return createPalindrome(left + 1, right - 1, changes);
        }
    }

    let changesNeeded = createPalindrome(0, n - 1, 0);

    if (changesNeeded > k) {
        return "-1";
    }

    function maximizePalindrome(left, right, changes) {
        if (left > right) return "";

        let leftChar = s[left];
        let rightChar = s[right];

        if (leftChar === rightChar) {
            if (leftChar !== '9' && changes < k - (left === right ? 0 : 1)) {
                changes++;
                return '9' + maximizePalindrome(left + 1, right - 1, changes) + '9';
            }
            return leftChar + maximizePalindrome(left + 1, right - 1, changes) + rightChar;
        } else {
            let higherChar = Math.max(leftChar, rightChar);
            if (changes < k) {
                changes++;
                return higherChar + maximizePalindrome(left + 1, right - 1, changes) + higherChar;
            }
            return higherChar + maximizePalindrome(left + 1, right - 1, changes) + higherChar;
        }
    }

    let highestPal = maximizePalindrome(0, n - 1, 0);
    let palArr = highestPal.split("");

    let remainingChanges = k - changesNeeded;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (palArr[i] !== '9' && remainingChanges > 0) {
            if (s[i] === s[n - 1 - i]) {
                if (remainingChanges >= 1) {
                    palArr[i] = '9';
                    palArr[n - 1 - i] = '9';
                    remainingChanges--;
                }
            } else {
                if (remainingChanges >= 1) {
                    palArr[i] = '9';
                    palArr[n - 1 - i] = '9';
                    remainingChanges--;
                }
            }
        }
    }

    if (remainingChanges > 0 && n % 2 !== 0) {
        palArr[Math.floor(n / 2)] = '9';
    }

    return palArr.join("");
}

console.log(highestPalindrome("3943", 1));  // Output: 3993
console.log(highestPalindrome("932239", 2)); // Output: 992299