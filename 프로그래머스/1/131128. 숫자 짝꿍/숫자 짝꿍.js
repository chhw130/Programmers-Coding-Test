function solution(X, Y) {
    var answer = '';
    const Xarr = [...X]
    const Yarr = [...Y]
    
    const Xobj = {}
    const Yobj = {}
    
    Xarr.forEach(x => {
      return  Xobj[x] = Xobj[x]+1 || 1
    })
    
    Yarr.forEach(y => {
        return Yobj[y] = Yobj[y]+1 || 1
    })
    
    const answerObj = {}
    Object.entries(Xobj).forEach(([key,value]) => {
        if(Yobj[key]){
            answerObj[key] = (Math.min(value, Yobj[key]))
        }
    })
    
    console.log(answerObj)
    
    Object.entries(answerObj).forEach(([key,value]) => {
        for(let i = 0 ; i < value ; i++){
            answer += key
        }
    })
    
    if(parseInt(answer) === 0) return "0"
    
    answer = answer.split("").sort((a,b) => b-a).join("") || "-1"
    
    
    return answer;
}