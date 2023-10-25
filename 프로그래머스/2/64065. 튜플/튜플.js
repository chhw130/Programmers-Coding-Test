function solution(s) {
    var answer = [];
    
    const removeStr = s.replace("{{", "").replace("}}", "").split("},{")
    
    const newArr = removeStr.map((arr) => arr.split(","))
    
    
    const sortArr = newArr.sort((a,b) => a.length - b.length)
    
    
    for(let i = 0 ; i < sortArr.length ; i ++){
        for(let j = 0 ; j < i +1 ; j ++){
            const num = sortArr[i][j]
            if(answer.includes(num)){
              continue  
            
            } 
            answer.push(num)
        }
    }
    
    
    
    
    return answer.map((n)=> parseInt(n));
}