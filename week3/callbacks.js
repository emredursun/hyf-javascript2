//  CALLBACKS

var emptyArr = [];

//  Create a function that pushes all the numbers of multiple of three into an empty array!

function multipleOfThree(num) {

    if (num % 3 === 0) {

        emptyArr.push(num);
    }

}

//  Create a function that pushes all the numbers of multiple of five into an empty array!

function multipleOfFive(num) {

    if (num % 5 === 0) {

        emptyArr.push(num);
    }

}


function checkNumbers(startIndex, stopIndex, threeCallback, fiveCallback) {

    for (var index = startIndex; index <= stopIndex; index++) {

        if (index % 3 === 0) {

            threeCallback(index);

        }
        else if (index % 5 === 0) {

            fiveCallback(index);

        }
        else if (index % 3 === 0 && index % 5 === 0) {


            threeCallback(index);
            fiveCallback(index);

        }

    }


}
checkNumbers(3, 25, multipleOfThree, multipleOfFive);

console.log(emptyArr);