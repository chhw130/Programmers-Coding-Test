

function solution(numbers, target) {
    var answer = 0;
    
    const findTarget = (index, num) =>{
        ++index
    if(numbers.length === index ){
        if(num === target){
            ++answer
        }
    }else{
        findTarget(index, num + numbers[index])
        findTarget(index, num - numbers[index])
        
    }
        
    }
    
    findTarget(-1, 0)
    
    
    return answer;
}