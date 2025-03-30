const checkBlock = (x, y , yellow) => {
    console.log(x-2,y-2,yellow)
    return (x -2) * (y-2) === yellow
}

function solution(brown, yellow) {
    var answer = [];
    
    const sum = brown + yellow
    
    let sqrt = 0
    
    for(let i = 1 ; i <= Math.floor(Math.sqrt(sum)) ; i ++){
        if(sum % i ===0 ){
            if(checkBlock(sum / i, i , yellow)){
                sqrt = i
                break
            }
        }
    }
    
    answer[0] = sum / sqrt
    answer[1] = sqrt
    
    return answer;
}
