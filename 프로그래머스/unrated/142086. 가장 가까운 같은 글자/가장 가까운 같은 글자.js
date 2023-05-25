function solution(s) {
    var answer = [];
    const arr = []
    
    for(i = 0 ; i < s.length ; i++){
        if(!arr.includes(s[i])){
           
            answer.push(-1)
        }else{
            const arrIndex =  arr.lastIndexOf(s[i])
            answer.push(i - arrIndex)
        }
         arr.push(s[i])
    }
    
    console.log(arr)
    return answer;
}