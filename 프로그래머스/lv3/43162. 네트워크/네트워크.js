function solution(n, computers) {
    var answer = 0;
    let array = new Array(n).fill(false)
       for(let i=0;i<n;i++){
           if(!array[i]){
                dfs(i)
               answer++
           }
       }
    function dfs(num){
        if(!array[num]){
                   array[num]=true;
        for(let i=0; i<n ;i++){
            if(computers[num][i] === 1 && !array[i]) 
               dfs(i)
            }
        }
    }
    return answer
}