function solution(clothes) {
    var answer = 1
    const object = {}
    for(clothe of clothes){
       object[clothe[1]] = (object[clothe[1]] || 0) + 1
      
    }
    
    
    const objectKeyArr = Object.keys(object)
    
    console.log(object[objectKeyArr[0]])
   for(i = 0 ; i < objectKeyArr.length ; i ++){
       answer *= (object[objectKeyArr[i]]+1)
   }
   
    
    
    return answer -1;
}