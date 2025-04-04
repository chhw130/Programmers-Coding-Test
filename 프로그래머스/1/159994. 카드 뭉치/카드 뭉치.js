function solution(cards1, cards2, goal) {
    var answer = 'Yes';

    for(let target of goal){
        
        const card1Ele = cards1[0]
        const card2Ele = cards2[0]
        
        if(card1Ele === target){
            cards1.shift()
            continue
        }
        if(card2Ele === target){
            cards2.shift()
            continue
        }
        
        return 'No'
    }
    
    return answer;
}