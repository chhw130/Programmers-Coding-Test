function solution(n, works) {
    var answer = 0;
    const sortWorks = works.sort((a,b) => b-a)
    const sum = sortWorks.reduce((a,b) => a+b, 0)
    if(sum <= n) return answer = 0
    
    while(n > 0){
        const maxEle = sortWorks[0] - 1
        
        for(let i = 0 ; i < sortWorks.length ; i++ ){
            const targetEle = sortWorks[i]
            if(targetEle >= maxEle){
                n--
                sortWorks[i]--
                if(n === 0) break
            }
        }
    }
    
    
    sortWorks.forEach((a) => answer += a**2)
    
    return answer;
}