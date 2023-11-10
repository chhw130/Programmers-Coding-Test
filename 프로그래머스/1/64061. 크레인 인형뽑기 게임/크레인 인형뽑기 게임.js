function solution(board, moves) {
    var answer = 0;
    const stackArr = []
    
    for(let i = 0 ; i < moves.length ; i++){
        let targetDoll = 0
        
        for(let j = 0 ; j < board[0].length ; j++){
            const idx = moves[i] - 1
            if(!board[j][idx]){
                continue
            }else{
                targetDoll = board[j][idx]
                board[j][idx] = 0
                break
            }
        }
        
     
        
        if(targetDoll === stackArr[stackArr.length-1] ){
            stackArr.pop()
            answer++
        }else{
            if(!targetDoll) continue
            stackArr.push(targetDoll)
        }
 
        
      
    }
    return answer*2;
}