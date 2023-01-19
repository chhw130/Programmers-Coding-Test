function sosu(data){
    let answer = []
    let result = data.map((e)=>
            parseInt(e))
    let cnt = 0;
    for(i of result){
        for(j= 2 ; j<= Math.sqrt(i) ; j++){
            if(i % j === 0){
                cnt++
            }
            if(cnt > 0){
                break;
            }
        }
        cnt === 0 ? answer.push(1) : answer
    }
    return answer.length
}

function solution(n, k) {
    var answer = -1;
    answer = n.toString(k).split("0")
    answer = answer.filter((e)=>
                 e!==""&& e!=="1" )
    answer = sosu(answer)
    
    return answer;
}