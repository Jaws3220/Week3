let array1 = [1, 5, 6, 9, 10, 14];

// print the 3rd element in array1

console.log (array1 [2])

// print the last element in array1

console.log(array1 [5])

// add 16 and 3 to array1

array1.push(16, 3)

// sort the array, then print the 3rd element again
// did it change?

array1.sort()
console.log(array1[2])
//after the sort the new element in the 3rd position instead of the 6

// create a variable called myTodoList that holds an empty array

let myTodoList = []

// add three todo items to the array using a built-in array method

myTodoList.push('sort')
myTodoList.push('clean')
myTodoList.push('wash')

// remove the second item in the array

myTodoList.splice(1)

// create another array, yourTodoList, and add two todo items

let yourTodoList = ['cook', 'study']

// create another array, ourTodoList

let ourTodoList = []

// combine myTodoList and yourTodoList into ourTodoList

ourTodoList = myTodoList.concat(yourTodoList)

// sort the following array from Z-A

ourTodoList.sort = []

// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed

function reverse {
if(typeof(x) === "boolean"){
    return !x;
} else if(typeof(x) === "string" || typeof(x) === "number"){
    let splitX = x.split("");
    
    let reverseX = splitX.reverse();
    
    let rejoinX = reverseX.join("");
  
    return rejoinX;

} else {
    console.log("Passed argument must be a boolean, string, or number");
}
}

// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed



// You just signed a contract as an estimator for a restoration company. 
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin


