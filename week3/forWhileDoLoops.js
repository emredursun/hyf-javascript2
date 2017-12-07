// FOR LOOP

function repeatStringNumTimes(str, num) {
    var repeatString = "";
    for (var i = 0; i < num; i++) {
        repeatString += str;
    } return repeatString;
}
console.log(repeatStringNumTimes("HI", 3));

// WHILE LOOP

function repeatStringNumTimes(str, num) {
    var repeatString = "";
    while (num > 0) {
        repeatString += str;
        num--;
    } return repeatString;
}
console.log(repeatStringNumTimes(":)", 3));

// DO LOOP

function repeatStringNumTimes(str, num) {
    var repeatString = "";
    do {
        repeatString += str;
        num--;
    } while (num > 0);
    return repeatString;
}
console.log(repeatStringNumTimes("Xx", 3));