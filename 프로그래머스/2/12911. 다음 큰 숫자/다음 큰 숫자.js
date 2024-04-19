
const mathOneCount = (number) => {
     const newOneCount = number.reduce((acc, cur) =>{
       if(cur === "1"){
          return acc+= 1
       } else{
           return acc
       }
    },0)
     
     return newOneCount
}


function solution(n) {
    var answer = 0;
    
    const num = [...n.toString(2)]
    const oneCount = num.reduce((acc, cur) =>{
       if(cur === "1"){
          return acc+= 1
       } else{
           return acc
       }
    },0)
    
    
    while(true){
        n++
        if(oneCount === mathOneCount([...n.toString(2)])){
            break
        }
        
        
        
    }
    
    
    
    
    
    return answer = n;
}