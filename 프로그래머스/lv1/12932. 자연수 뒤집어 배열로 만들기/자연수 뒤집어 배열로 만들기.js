function solution(n) {
    var answer = [];
    var data = []
    const arr = [...String(n)]
    for (i = 0 ; i < arr.length ; i++){
        data.push(Number(arr[i]))   
    }
    answer = data.reverse()
    return answer;
}