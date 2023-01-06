/*
    5n^3 = O(n^3)
    5n^2 + 2n + 10 = O(n^2)
    1000n = O(n)
    2n + 2 = O(n)
    10n^3 + 2n^2 + n + 125 = O(n^3)
    1 = O(1)
    10,000 = O(1)

    
*/

// #1 
const wordOccurrence = (word, phrase) => {
    let result = 0;                                             // O(1)
    const array  = phrase.split(' ');                           // O(1)
    for (let i = 0; i < array.length; i++) {                    // O(n)
        if (word.toLowerCase() === array[i].toLowerCase()) {    // O(1)
        result += 1;                                            // O(1)
        }
    }
    return result;
}

// answer: O(n)

// #2 
const bubble_sort = list => {
  for (let i = 0; i < list.length - 1; i++) {       // O(n^2)
    for (let j  = 0; j < list.length - 2; j++) {
      if (list[j+1] < list[j]) {
        const temp = list[j];
        list[j] = list[j+1];
        list[j+1] = temp;
      }
    }
  }
  return list;
}

// answer: O(n^2)

// # 3

const factorial = n => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}

// answer: O(1)

// # 4

const bobIsFirst = people => {
  return people[0] == 'bob';
}

// answer: O(1)

// # 5

const isPalindrome = input => {
  const stack = [];
  let output = "";
  for (let i = 0; i < input.length; i++){
    stack.push(input[i]);
  }
  while (stack.length) {
    output += stack.pop();
  }
  return output == input;
}

// answer: O(n)

// # 6

const sumOfDivisors = n => {
  let result = 0;
  let i = 1;
  while (i < n) {
    if (n % i == 0) {
      result += i;
    }
  }
  return result;
}

// answer: O(n)

// # 7

const printAllNumbersThenSumPairs = numArray => {
  numArray.forEach(num => console.log(num));
  numArray.forEach((num, index)=>{
    if (index < numArray.length - 1) {
      console.log(num + numArray[index+1]);
    }
  });
}

// answer: O(n)

// # 8

const isPrime = num => {
  if (num == 1 || num == 2) {
    return false;
  }
  for (let i = 2; i < num - 1; i++){
    if (num % 1 == 0) {
      return false;
    }
  }
  return true;
}

// answer: O(n)
