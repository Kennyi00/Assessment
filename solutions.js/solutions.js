//What is the diffrence between a parameter and an argument\\
    
    // 1. A paramater is a variable in a function or method.
    // 2. An argument is the actual value that is passed to a function or method when it is called.

    //Within a function, what is the difference between return and console.log\\
    
    // 1. Return is used to specify the value that a function should output or produce.
    // 2. Console.log is used for logging or printing info.




    //PALINDROME\\
//Convert the input string to lowercase to ensure the comparison is case-insensitive.
//Split the string into an array of characters, reverse the array, and then join it back into a string.
//Compare the original lowercase string with the reversed string.
//If they are the same, the function should return true; otherwise, it returns false.
//Commit your work with the message "palindrome completed".
    const palindrome = (string) => string.toLowerCase() === string.toLowerCase().split('').reverse().join('') ? true:false
    console.log(palindrome("racecare"))
    
   
   
    //SUM ARRAY\\
 //Initialize a variable to store the sum of the array elements.
//Use a for loop to iterate through the array.
//In each iteration, add the current element to the sum variable.
//After the loop, return the sum variable.
//Commit your work with the message "sum array complete

    function sumArray(num) {
        let sum = 0
        for(let i = 0; i < num.length; i++) {
            sum += num[1]
        }
        return sum
    }
        console.log(sumArray([5,6,7,8]))



    //PRIME NUMBERS\\
//Check if the number is less than or equal to 1. If so, return falsebecause it's not prime.
//Use a for loop to iterate from 2 up to the square root of the number.
//If the number is divisible by any number in this range, return false.
//If no divisors are found, return true.

    function checkPrime(num) {
        if(num <= 1) {
            return false
        }
        for(let i = 2; i < num; i++) {
            if(num % i === 0 ){
                return false
            }
        }
    }

//PRINT PRIME NUM\\
//Use a for loop to iterate through numbers from 2 up to the specified limit.
//For each number, use the checkPrimefunction to check if it's prime.
//If checkPrimereturns true, console.log the number.
//Commit your work with the message "prime numbers completed".

function printPrimes(num) {
    for(let i = 2; i <= num; i++){
        if(checkPrime(i)){
            console.log(i)
        }
    }
}
printPrimes(19)


//Calculate the cube of the number by multiplying the number by itself twice.
//Return the result.
//Commit your work with the message "calculate the cube completed".

const calculateCube = num => Math.pow(num, 3)
console.log(calculateCube(2))



//IS A VOWEL\\
//Check if the input character is included in a string of vowels (both lowercase and uppercase).
//Return trueif the character is a vowel, otherwise return false.
//Commit your work with the message "is a vowel completed".

const cheVowel = (char) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i <= vowels.length; i++) {
        if(char.toLowerCase() === vowels[i]){
            return true
        }
    }
    return false
}
console.log(cheVowel('a'))


//GET TWO LENGTHS\\
//Return an array containing the lengths of the two input strings.
//Commit your work with the message "get two lengths completed".

    function twoLengths(str) {
    const words = str.split(" ")
    return words.map(str => $(words), $(words.length))
}

console.log(twoLengths("pepperoni pizza"))