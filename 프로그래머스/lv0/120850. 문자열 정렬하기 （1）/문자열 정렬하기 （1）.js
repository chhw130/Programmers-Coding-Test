function solution(my_string) {
    var answer = [];
    const arr = [...my_string]
    for (i = 0 ; i < arr.length ; i++){
        if(parseInt(arr[i]) > -1 )
        answer.push(parseInt(arr[i]))
        
    }
    answer.sort(function(a, b){
                return a- b
                })
    return answer;
}