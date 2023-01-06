function solution(A,B){
    var answer = 0;
    let dataA = A.sort((a,b)=>
                    a-b  )
    let dataB = B.sort((a,b)=>
                      b-a)
    for(i = 0 ; i< A.length ; i++){
        answer += dataA[i]*dataB[i]
    }
    return answer;
}