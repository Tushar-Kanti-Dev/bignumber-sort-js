const numbers = [2, 7, 4, 6, 8, 3, 1, 9, 5];
const sortNumbers = numbers.sort();
// console.log(sortNumbers);



// words sort in an array 
const words = ['f', 'a', 't', 'y', 'q', 'i', 'b', 'm'];
const sortWords = words.sort();
// console.log(sortWords);
const friends = ['Masrafi', 'Sakib', 'Abou', 'Roni', 'Dipu', 'Fajil', 'Yias'];
const sortfriends = friends.sort();
// console.log(sortfriends);

// if we are trying to doing an random number to sort it take an error 

const bigNumbers = [22, 1, 66, 33, 88, 3, 5, 8, 34, 77, 9, 0, 54, 100];
// const sortBigNumbers = bigNumbers.sort();
// console.log(sortBigNumbers);
// to solve the array sort random big numbers 
const sortingBigNumbers = bigNumbers.sort(function(a, b) {
    return a - b;
})
console.log(sortingBigNumbers);