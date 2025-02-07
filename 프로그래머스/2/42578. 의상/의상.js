function solution(clothes) {
    var answer = 0;
    
    const clothObj = {};
    
    clothes.forEach(ele => {
        const [cloth, category] = ele;
        
        
        if(clothObj[category]){
            clothObj[category].push(cloth)
            return
        }
        
        
        clothObj[category] =  [cloth]
    })
  
    
    const categories = Object.keys(clothObj)
  
    const sum = categories.length === 1 ? clothes.length : Object.values(clothObj).reduce((acc, cur, idx, arr) => {
        return acc * (cur.length + 1)
    }, 1) -1
    
 
    
   
    
    return answer = sum;
} 