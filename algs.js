

// reversing a string.

function reverseString(str) {
    // pull the str down flip it and reverse it.
    return str.split('').reverse().join('');
}

reverseString("hello");




// factorials

function factorialize(num) {
    // give us a starting point to begin subtracting from.
    var factoring = num;
    // obvious yeah?
    if (num === 1 || num === 0) {
        return 1;
    }
    // while through, shrink num each iteration, and stack em up.
    while (num > 1){
        num--;
        factoring = factoring * num;

    }
    return factoring;
}




factorialize(5);




//