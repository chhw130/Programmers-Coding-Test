function solution(n) {
    var answer = 0;
    const arr = Array.from({length : 100000}, () => 0)
    arr[1] = 1
    
    for(let i = 0 ; i < n ; i++){
        arr[i+2] = (arr[i] + arr[i+1]) % 1234567
    }
    
    
    
    return answer = arr[n];
}