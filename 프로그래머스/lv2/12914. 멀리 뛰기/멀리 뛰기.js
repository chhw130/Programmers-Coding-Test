function solution(n) {
    var answer = 0;
    const arr = [1,2]
    for(i = 0 ; i < n-2 ; i++){
        arr.push(arr[i] %1234567 + arr[i+1] %1234567)
    }
    answer = arr[n-1] %1234567
    return answer;
}