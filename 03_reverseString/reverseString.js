const reverseString = function(str) {
    const arr = str.split("");
    let out = "";
    for(let i = 0; i < str.length; i++){
        out = out + arr.pop();
    }
    return(out);
};

// Do not edit below this line
module.exports = reverseString;
