function solution(elements) {
    var answer = [];
    const circleArr = [...elements, ...elements]
    const set = new Set()
    
    
    
    for(let i = 0 ; i < elements.length ; i++){
        
        const element = elements[i]
        let sum = 0
        
        for(let j = i ; j < elements.length + i ; j++){
            const circleElement = circleArr[j]
            sum += circleElement
            set.add(sum)
        }
    }
    
//     answer = [... new Set(answer)].length
    
    return set.size;
}