function checkOne(number){
    let oneCount = 0
    let data = [...(number.toString(2))]
    data.map((e)=>{
        if (e === "1"){
            oneCount++
        }
    })
    return oneCount
}

function solution(n) {
    let answer = 0
    const initOne = checkOne(n)
    while(true){
        ++n
        if (initOne === checkOne(n)){
            break;
            }
        
    }
    return n
}