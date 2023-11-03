function solution(maps) {
    var answer = -1;
    const queue = [[0, 0, 1]]
    
    
    while(queue.length){
        
        const [xPos, yPos, progress] = queue.shift()
        
//          //**현재 위치 못가도록 false 처리 */
//                 maps[xPos][yPos] = 0
        
        if(xPos === maps.length-1 && yPos === maps[0].length-1) {
            answer = progress
            break
        }
        
       
        
        
         //**상하좌우 이동할 수 있는 범위*/
        const newPos = [ [xPos -1 , yPos], [xPos + 1 , yPos], [xPos, yPos -1], [xPos, yPos+1]  ]
        
        
        /**상하좌우 중 갈수 있는 범위 push*/
        for(let i = 0 ; i < 4 ; i ++){
            const [newXPos, newYPos] = newPos[i]
            
           
            if(maps[newXPos]?.[newYPos]){
                maps[newXPos][newYPos] = 0
                queue.push([newXPos, newYPos, progress+1])
            }
        }
        
    }
    
    return answer  ;
}