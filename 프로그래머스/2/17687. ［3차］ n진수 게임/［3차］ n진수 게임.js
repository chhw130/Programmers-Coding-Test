  const callNum = (transNum, people, turn, length ) => {
      let answer = ""
      for(let i = 0 ; i < transNum.length ; i ++){
          
          if((i % people)+1 === turn){
            answer += transNum[i]
          }
          if(answer.length === length) return answer
      }
      
      return answer
    }

function solution(n, t, m, p) {
    var answer = '';
    let transNum = ""
    
    for(let i = 0 ; i < t*m ; i++){
        
        const num = i.toString(n).toUpperCase()
        
       transNum += num
        
    }
    
    transNum = transNum.split("")
    answer = callNum(transNum, m, p, t)
    
    
    return answer;
}