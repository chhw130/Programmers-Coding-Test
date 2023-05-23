function solution(s){
    var answer = true;

    let pCount = 0
    let yCount = 0
    
    for(let e of s){
        if(e==="P" || e === "p")  ++pCount
    else if (e=== "y" || e === "Y") ++yCount   
    }
   
    answer = pCount === yCount ? true : false
    
    return answer;
}