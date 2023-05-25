function solution(s)
{
    var answer = -1;
    const stackArr = []

   const arr = s.split("")
   
    
    for(let i = 0 ; i < arr.length; i++ ){
      if(stackArr.length === 0 || stackArr[stackArr.length-1] !== s[i] ){
          stackArr.push(s[i])
      }
        else{
            stackArr.pop()
        }

        
    }

    answer = stackArr.length  ? 0 : 1

    return answer
}