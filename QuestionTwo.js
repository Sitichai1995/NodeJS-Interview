//Question2
function getHandScore (str){
    let sScore = 0
    let cScore = 0
    let dScore = 0
    let hScore = 0
    let sameScore = 0
    let aceScore = 0 
    
    let items = str.split(" ");
    for (let item of items) {
        const num = parseInt(item.slice(1));
        if(!isNaN(num)){
            if(item.charAt(0) === 'S'){
                sScore += num
            }
            if(item.charAt(0) === 'C'){
                cScore += num
            }
            if(item.charAt(0) === 'D'){
                dScore += num
            }
            if(item.charAt(0) === 'H'){
                hScore += num
            }
        }else if (item.slice(1) === "J" || item.slice(1) === "Q" || item.slice(1) === "K"){
            if(item.charAt(0) === 'S'){
                sScore += 10
            }
            if(item.charAt(0) === 'C'){
                cScore += 10
            }
            if(item.charAt(0) === 'D'){
                dScore += 10
            }
            if(item.charAt(0) === 'H'){
                hScore += 10
            }
        }else if (item.slice(1) === "A"){
            if(item.charAt(0) === 'S'){
                sScore += 11
            }
            if(item.charAt(0) === 'C'){
                cScore += 11
            }
            if(item.charAt(0) === 'D'){
                dScore += 11
            }
            if(item.charAt(0) === 'H'){
                hScore += 11
            }
        }
      }
    let max = sScore
    if (cScore > max){max = cScore}
    if (dScore > max){max = dScore}
    if (hScore > max){max = hScore}
    if (sameScore > max){max = hScore}
    if (aceScore > max){max = hScore}
    return max
}

console.log(getHandScore("S8 H8 H8"))