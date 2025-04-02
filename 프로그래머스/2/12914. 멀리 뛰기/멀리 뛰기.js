function solution(n) {
    var answer = 0;
    
    const cache = [1n,2n]
    
    for(let i = 2 ; i < n ; i++){
        const ele1 = cache[i-2]
        const ele2 = cache[i-1]
        const sum = ele1+ele2
        cache.push(sum)
    }
    
    
    return cache[n-1] % 1234567n;
}