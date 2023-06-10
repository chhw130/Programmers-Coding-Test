function solution(cards1, cards2, goal) {
    var answer = '';
    let num = 0
    
    for(data of goal){
        if(cards1[0] !== data && cards2[0] !== data){
            return "No"
        }
        if(cards1[0] === data){
            cards1.shift()
            num += 1
        }
        if(cards2[0] === data){
            cards2.shift()
            num += 1
        }
        
        
    }

    if(num === goal.length){
        answer = "Yes"
    }

    
    return answer
}