function solution(t, p) {
    var answer = 0;
    const numP = Number(p)
    const numArr = []
    for(let i = 0 ; i < t.length - p.length + 1 ; i ++){
        let num = ""
        for(let j = i+1  ; j < p.length+i+1 ; j ++){
           num += t[j-1] 
        }
        numArr.push(Number(num))
    }
    
    
    numArr.reduce((acc, ele, idx) => {
        numP >= ele ? answer++ : answer
    }, 0)
    
    return answer;
}