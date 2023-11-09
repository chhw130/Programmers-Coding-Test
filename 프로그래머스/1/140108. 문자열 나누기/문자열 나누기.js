function solution(s) {
    var answer = 0;
    
    const stringArr = [...s]
    let x
    let notX
    let xArr = []
    let notXArr = []
    
    
    for(let i = 0 ; i < stringArr.length ; i++){
        const firstEle = stringArr[i]    
        
        
        
        x = !x ? firstEle : x
        
        if(x === firstEle){
            xArr.push(firstEle)
        }else{
            notXArr.push(firstEle)
        }
        

        
        if(xArr.length === notXArr.length){
            // console.log(xArr, notXArr)
            xArr = []
            notXArr = []
            answer++
            x = null
        }
    }
    
    
    if(xArr.length || notXArr.length) return answer +1
     
  
        
    return answer;
}