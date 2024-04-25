function solution(maps) {
    var answer = -1;
    
    const queue = [[0,0,1]]
    const targetX = maps.length - 1 
    const targetY = maps[0].length - 1
    
    while(queue.length){
        const [curX, curY, progress] = queue.shift()
        
        const canGo = [[curX+1, curY], [curX-1, curY], [curX, curY+1], [curX, curY-1]];
                       
        for(let i = 0 ; i < 4 ; i++){
            const [nextX, nextY] = canGo[i]
            
            if(maps[nextX]?.[nextY]){
                maps[nextX][nextY] = 0
                if(nextX === targetX && nextY === targetY){
                    answer = progress + 1
                    break
                }
                queue.push([nextX, nextY, progress+1])
            }
        }
    }
    
    return answer;
}