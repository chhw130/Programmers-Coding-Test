function solution(N, road, K) {
    var answer = 0;

    const check = Array(N+1).fill(Number.MAX_SAFE_INTEGER)
    const arr = Array.from(Array(N + 1), () => []);
    
    road.forEach((ele,idx) => {
        const [a,b,c] = ele
        arr[a].push({to : b, dis : c})
        arr[b].push({to : a, dis : c})
    })
    
    
    
    const queue = [{to : 1 , dis : 0}]
    check[1] = 0
    
    while(queue.length){
        const { to } = queue.shift()
        
        arr[to].forEach(ele => {
            if(check[ele.to] > check[to] + ele.dis){
                check[ele.to] = check[to] + ele.dis
                queue.push(ele)
            }
        })
    }
    
    
    answer = check.reduce((acc, cur) => {
        if(cur <= K){
            acc++
        }
        return acc
    }, 0)
    

    return answer;
}