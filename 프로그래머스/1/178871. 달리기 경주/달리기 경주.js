function solution(players, callings) {
    var answer = [];
    const rank = {}
    const rankPeople = {}
    
    players.forEach((e, idx) => {
        rankPeople[e] = idx
        rank[idx] = e
    })
     
    
    for(let i = 0 ; i < callings.length ; i++){
        const target = callings[i]
        rankPeople[target] = rankPeople[target] - 1
        const beforeTarget = rank[rankPeople[target]]
        rank[rankPeople[target]+1] = beforeTarget
        rank[rankPeople[target]] = target
        rankPeople[beforeTarget] = rankPeople[beforeTarget] + 1
    }
    
    answer = Object.values(rank).map((e) =>
        e
    )
    

   
    
    return answer 
}