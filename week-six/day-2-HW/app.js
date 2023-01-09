// checks if the first array squared holds the same values as the second array
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }

    let counter1 = {};
    let counter2 = {};

    for(let val of arr1) {
        counter1[val] = (counter1[val] || 0) +1;
    }

    for(let val of arr2) {
        counter2[val] = (counter2[val] || 0) +1;
    }

    for (let key in counter1) {
        if(!(key ** 2 in counter2)){
            return false;
        }
        if(counter2[key ** 2] !== counter1[key]) {
            return false;
        }
    }

    return true;
}

console.log(same([1,2,3], [4,1,9]));
console.log(same([1,2,3], [1,9]));
console.log(same([1,2,1], [4,4,1]));


// returns most commonly used character
function maxChar(str){
    const charFrequency = {};

    for(let char of str){
        if(!charFrequency[char]){
            charFrequency[char] = 1;
        } else {
            charFrequency[char]++
        }
    }

    let maxChar = '';
    let maxFrequency = 0;

    for(let char in charFrequency) {
        if(charFrequency[char] > maxFrequency) {
            maxChar = char;
            maxFrequency = charFrequency[char];
        }
    }

    return maxChar;
}

console.log(maxChar("abcccccccd"));
console.log(maxChar("apple 1231111"));


/*  !!! HOMEWORK !!! */


function validAnagram (a, b) {
    // lowercases all chars
    // replaces all punctuation with an empty string
    // splits incoming strings to an array of single letters
    // sorts array by alphabetical order
    // joins and the "" indicate to join elements without anything separating 
    // them, so it deletes the commas and quotes in the array
    var y = a.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split("").sort().join(""),
        z = b.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split("").sort().join("");
    // if z(a) === y(b)
    console.log(z === y
        // true
        ? a + " and " + b + " are anagrams! " + true
        // false
        : a + " and " + b + " are not anagrams. " + false
    );
}


validAnagram('', ''), // true
validAnagram('aaz', 'zza'), // false
validAnagram('anagram', 'nagaram'), // true
validAnagram("rat","car"), // false
validAnagram('awesome', 'awesom'), // false
validAnagram('qwerty', 'qeywrt'), // true
validAnagram('texttwisttime', 'timetwisttext'); // true 
validAnagram('TEXTTWISTTIME', 'TIMETEXTTWIST'); // true

validAnagram('rail safety', 'fairy tales') // True
validAnagram('RAIL! SAFETY!', 'fairy tales') // True
validAnagram('Hi there', 'Bye there') // False