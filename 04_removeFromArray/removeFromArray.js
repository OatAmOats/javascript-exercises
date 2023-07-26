const removeFromArray = function(arr, ...args) {
    const myArray = [];

    arr.forEach((item) =>{
        if(!args.includes(item)){
            myArray.push(item);
        }

    });
    return(myArray);
};

// Do not edit below this line
module.exports = removeFromArray;
