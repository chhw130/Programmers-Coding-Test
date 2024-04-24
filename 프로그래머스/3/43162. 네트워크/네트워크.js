function solution(n, computers) {
    var answer = 0;
    
    const arr = Array(n).fill(0)
    
    const dfs = (node) => {
        arr[node] = 1
        
        for(let j = 0 ; j < n ; j++){
            const ele = computers[node][j]
            if(ele && !arr[j] ) {
                console.log(arr, node ,j)    
                dfs(j)
            }
        }
    }
    
    for(let i = 0 ; i < n ; i++){
        if(arr[i]) continue
        dfs(i)
        answer++
    }
    

    
    return answer;
}