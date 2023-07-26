const repeatString = function(str, num) {
    let out = "";
    for(let i = 0; i < num; i++){
        out += str;
    }
    if(num < 0){
        out = "ERROR";
    }
    return(out);
};

// Do not edit below this line
module.exports = repeatString;
