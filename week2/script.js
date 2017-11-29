// 1.Say you would like to write a program that doubles the odd numbers in an array and throws away the even number.

// Your solution could be something like this:
/*
let numbers = [1, 2, 3, 4];
let newNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers.push(numbers[i] * 2);
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]
*/

let numbers = [1, 2, 3, 4];
console.log("The original array is: ", numbers);              // The original array is: [ 1, 2, 3, 4 ]
let filteredNumbers = numbers.filter(num => num % 2 !== 0); 
console.log("The filtered array is: ", filteredNumbers);     // The filtered array is: [ 1, 3 ]
let newArr = filteredNumbers.map(num => num * 2);            
console.log("The doubled array is : ", newArr);             // The doubled array is : [ 2, 6 ]

 
// 2.Write a program that does the following below. Use map and filter. You will also need a forEach or a for loop for the 'summing up' part.

let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

let tasks = monday.concat(tuesday);

// Collect two days' worth of tasks.

let worthOfTasks = 0

tasks.forEach(collect => worthOfTasks += collect.duration)

console.log("The total time that has been spent on tasks:", worthOfTasks, "minutes")


// Convert the task durations to hours, instead of minutes.

let taskDurationsToHours = tasks.map(convert => {

    return {
        name: convert.name,
        duration: convert.duration / 60
    };
})

console.log("The task durations are converted from minutes to hours:", taskDurationsToHours)

// Filter out everything that took two hours or more

let moreThenOrEqualTwoHours = taskDurationsToHours.filter(compare => {
    return (compare.duration > 2 || compare.duration == 2) ? true : false
})

console.log("There are the tasks that has been completed in two hours or more than two hours:", moreThenOrEqualTwoHours)


// Multiply the each duration by a per-hour rate for billing and sum it all up. Output a formatted Euro amount.

let MaartjeBill = 0;
let MaartjeTakePerHour = 25;

taskDurationsToHours.forEach(bill => MaartjeBill += MaartjeTakePerHour * bill.duration)

console.log("If Maartje makes 25.00 € per hour then for two days, she makes:", MaartjeBill, "€")