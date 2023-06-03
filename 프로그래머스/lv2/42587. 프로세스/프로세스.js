function solution(priorities, location) {
    var answer = []
    const index = priorities.map((e,i) => i)
    const newIndex = []
    
     // let max = Math.max(...priorities)
    
   while(true){
       let max = Math.max(...priorities)
       const num = priorities.shift()
       const indexNum = index.shift()
       
       if(num === max){
           answer.push(num)
           newIndex.push(indexNum)
       }else{
           priorities.push(num)
           index.push(indexNum)
       }
       
       if(priorities.length === 0){
           break
       }
       
   }
    
    return newIndex.indexOf(location) + 1;
}