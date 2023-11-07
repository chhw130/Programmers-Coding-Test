function solution(elements) {
    var answer = [];
    const circleArr = [...elements, ...elements]
    
    for(let i = 0 ; i < elements.length ; i++){
        
        const element = elements[i]
        let sum = 0
        
        for(let j = i ; j < elements.length + i ; j++){
            const circleElement = circleArr[j]
            sum += circleElement
            answer.push(sum)
        }
    }
    
    answer = [... new Set(answer)].length
    
    return answer;
}