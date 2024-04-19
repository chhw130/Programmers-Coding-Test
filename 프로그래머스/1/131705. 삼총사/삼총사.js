function solution(number) {
    var answer = 0;
    
    
    const length = number.length
    
    
    for(let i = 0 ; i < length ; i++){
        const first = number[i]
        for(let j = i+1 ; j < length ;j++ ){
            const second = number[j]
            for(let k = j+1 ; k < length ;k++){
                const third = number[k]
                
                const sum = first + second + third 
                sum === 0 ? answer++ : 0
            }
        }
        
    }
    
    return answer;
}