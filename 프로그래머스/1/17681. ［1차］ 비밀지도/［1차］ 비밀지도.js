function solution(n, arr1, arr2) {
    var answer = [];
    for(i=0 ; i < arr1.length ; i++ ){
       answer.push(arr1[i] | arr2[i])
    }
    answer = answer.map((e)=>{
              e = [...e.toString(2)]
        if((e.length < n)){
            for(i = e.length ; e.length < n ; i++ ){
                e.unshift(0)
            }
        }
        return e.join("")
    })
    answer = answer.map((e)=>{
                       e = e.replace(/0/g," ")
                       e = e.replace(/1/g,"#")
                    return e})
        
    return answer;
}