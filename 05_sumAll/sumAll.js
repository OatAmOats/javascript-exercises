const sumAll = function(a , b) {
    let sum = 0;
    if((typeof a) === 'number' && (typeof b) === 'number'){
        if(a>=0 && b>=0){
            if(a>b){
                for(let i = 0; i <= (a-b); i++){
                    sum += b+i;
                }
            }
            else{
                for(let i = 0; i<= (b-a); i++){
                    sum += a+i;
                }
            }
        }
        else{
            return("ERROR");
        }
        return(sum);
    }
    else{
        return("ERROR");
    }
};

// Do not edit below this line
module.exports = sumAll;
