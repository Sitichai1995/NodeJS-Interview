// Question1 
function isDigisible (digit) { 
    let num = digit.toString()
    for (let i = 0; i <num.length; i++) {
        for ( j = i+1; j < num.length; j++ ) {
            if (num[i] === digit[j]) {
                return false;
            }
        }
     if(num[i] == "0"){
        return false;
     }else if (num % num[i] > 0){
        return false
     }
    }
    return true;
}

console.log(isDigisible(12))
