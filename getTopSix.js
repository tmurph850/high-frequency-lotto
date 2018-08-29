let allFont = document.getElementsByTagName("font");
let numObj = {};

const findNums = () => {
    let nums = [];
    for ( let i = 0; i < allFont.length; i++ ) {
        let trimmedNum = allFont[i].innerText.trim();
        if ( isNaN(allFont[i].innerText) === false ) {
            nums.push(allFont[i].innerText);
        }
    }
    return iterateNums(nums);
};

const iterateNums = (nums) => {
    nums.forEach(n => {
        let properNumber = n.trim();
        if ( numObj.hasOwnProperty(properNumber) ) {
            numObj[properNumber].push("I");
        } else {
            numObj[properNumber] = [];
            numObj[properNumber].push("I");
        }
    });
    return findTopSix();
};

const findTopSix = () => {
    let topSix = [];

    for ( let i = 0; i <= 6; i++ ) {
        let highNum = {};
        let len = [];
        for ( const prop in numObj ) {
            if ( prop !== "" && numObj[prop].length > len.length && doesContainNumber(topSix, prop) === false ) {
                len = numObj[prop];
                highNum.len = numObj[prop];
                highNum.number = prop;
            }
        }
        topSix.push(highNum);
    }

    console.log(topSix);
    console.log(numObj);

};

const doesContainNumber = (arr, num) => {
    let contains = false;
    arr.forEach(element => {
        if ( element.number === num ) {
            contains = true;
        }
    });
    return contains;
};

findNums();


