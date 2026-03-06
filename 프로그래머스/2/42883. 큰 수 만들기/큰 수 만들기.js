function solution(number, k) {
    var answer = '';
    
    const stack = []
    
    for(const n of number){
        while(k > 0 && stack.length && n > stack[stack.length-1]){
            stack.pop()
            k--
        }
        
        stack.push(n)
    }
    
    
    
    if(stack.length > number.length - k){
       return stack.slice(0, stack.length - k).join('')
    }
    
    return answer = stack.join('');
}