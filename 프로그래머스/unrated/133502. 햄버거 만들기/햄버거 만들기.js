function solution(ingredient) {
    var answer = 0;
    const stack = []
    
    for(ing of ingredient){
        stack.push(ing)
        if(stack[stack.length-1] === 1 && stack[stack.length-2] === 3 &&
          stack[stack.length-3] === 2 && stack[stack.length-4] === 1){
            stack.splice(stack.length-4, 4)
            ++answer
        }
    }
   
   
      
    return answer;
}