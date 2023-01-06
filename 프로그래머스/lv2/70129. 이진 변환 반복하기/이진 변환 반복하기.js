function binary(num){
    const data = [...num]
    const reset = data.filter((e)=>
               e !== "0")
    return reset.length.toString(2)
}

function solution(s) {
    var answer = [];
    let count = 0
    let zerocount = 0
    while(s != "1"){
        for(i = 0 ; i < s.length ; i++){
            s[i] === "0" ? zerocount++ : zerocount
        }
        s = binary(s)
        count++
        
    }
    answer.push(count,zerocount)
    return answer;
}