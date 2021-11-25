const addToZero = arr => {
    for (let i = 0; i < arr.length -1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true;
            }
        }
    }
    return false;
}
//addToZero runtime: O(n^2)
//addToZero space complexity: O(n^2)


const hasUniqueChars = string => {
    stringSplit = string.split('');
    stringSet = [...new Set(string)];
    if (stringSet.length === stringSplit.length) {
        return true;
    } else {
        return false;
    }
}
//hasUniqueChars runtime: O(n)
//hasUniqueChars space complexity: O(n)


const isPangram = string => string.toLowerCase().match(/([a-z])(?!.*\1)/g).length == 26
//isPangram runtime: O(n)
//isPangram space complexity: O(n)


const findLongestWord = arr => {
    longestWord = ''
    arr.forEach(elem => {
        if (elem.length > longestWord.length) {
            longestWord = elem
        }
    })
    return longestWord.length
}
//findLongestWord runtime: O(n)
//findLongestWord space complexity: O(n)