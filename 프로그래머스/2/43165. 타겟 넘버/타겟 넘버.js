function solution(numbers, target) {
    var answer = 0;

    
    let sumNode = 0
    let checkCount = 0

    
    const sumFunc = (arr , sum, count) => {
        const minus = -arr[count]
        const plus = arr[count]
        count++
        
        if(arr.length === count - 1){
            return sum === target ? answer++ : false
        }
        
        sumFunc(numbers, sum+minus, count )
        sumFunc(numbers, sum+plus, count)
    }
    
    sumFunc(numbers, sumNode, checkCount)
    
    
    return answer;
}