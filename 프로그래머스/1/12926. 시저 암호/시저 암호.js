function solution(s, n) {
    var answer = '';
    
    answer = s.split('').map(ele => {
        
        if(ele.charCodeAt() === 32){
            return ele
        }
        
        let newEle = ele.charCodeAt() + n 
        
        console.log(ele.charCodeAt())
        
        
        if(ele.charCodeAt() <= 90 && newEle > 90){
            newEle -= 26
        }
        
        if(ele.charCodeAt() <= 122 && newEle > 122){
            newEle -= 26
        }
        
        
        return String.fromCharCode(newEle)
    })
    
    
    
    return answer.join('');
}