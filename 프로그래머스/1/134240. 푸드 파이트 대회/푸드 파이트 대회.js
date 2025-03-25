function solution(food) {
    var answer = '';
    let halfAnswer = ''
    for(let i = 0 ; i < food.length ; i++){
        if(i === 0 ) {
            continue
        }
        
        const foodCount = Math.floor(food[i] / 2)
        
        for(let j = 0 ; j < foodCount ; j++){
            answer += (i)
        }
        
    }
    
    halfAnswer = answer
    
    
    halfAnswer = halfAnswer.split('').reverse().join('')
    
    answer += 0
    
    
    
    
    return answer + halfAnswer;
}