// 1.
console.log("hello, world!");
// 2
function func(a, b) {
  return a + b;
}
// 3
function check(number) {
  if (number % 2 === 0) {
    console.log(number);
  } else {
    console.log(number);
  }
}
// 4
function factorial_func(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
}
// 5
function celsius(Celsius) {
  return (Celsius * 9) / 5 + 32;
}

// Convert Fahrenheit to Celsius
function fahrenheit(Fahrenheit) {
  return ((Fahrenheit - 32) * 5) / 9;
}
// 6
function randomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
// 7
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = cleanedStr.split("").reverse().join("");
  if (cleanedStr === reversedStr) {
    return true;
  } else {
    return false;
  }
}
// 8
function findElement(array) {
  let largest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}
// 9
function Vowels(str) {
  const vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}
// 10
function reverse(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}
// 11
function calculate(numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;
  return average;
}
// 12
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
// 13
function sorting(numbers) {
  return numbers.sort((a, b) => a - b);
}
// 14
function calculate(number) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  return sum;
}

// 15
function secondLargest_1(array) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] > secondLargest && array[i] < largest) {
      secondLargest = array[i];
    }
  }

  return secondLargest;
}
// 16
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}
// 17
function factorial(number) {
  if (number === 0) {
    return 1;
  }

  return number * factorial(number - 1);
}
// 18
function calculateSum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
// 19
function findSmallestElement(array) {
  return Math.min(...array);
}
// 20
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
// 21
function generateRandomPassword(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}
// 23
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
// 24
function isPerfectSquare(number) {
  const squareRoot = Math.sqrt(number);
  return squareRoot % 1 === 0;
}
// 25
function fibonacciSequence(number) {
  const sequence = [0, 1];

  while (
    sequence[sequence.length - 1] + sequence[sequence.length - 2] <=
    number
  ) {
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
  }

  return sequence;
}
// 26
function sumOfDigits(number) {
  let sum = 0;
  const numberString = number.toString();

  for (let i = 0; i < numberString.length; i++) {
    sum += parseInt(numberString[i]);
  }

  return sum;
}
