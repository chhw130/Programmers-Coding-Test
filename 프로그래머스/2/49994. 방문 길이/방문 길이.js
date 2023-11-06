const goNewPos = (currentPos, haveToGo) => {
    const [x, y] = currentPos
    let newPos = []
    switch(haveToGo) {
            
        case "U" :
            if(y+1 > 5) return currentPos
            newPos = [x, y+1]
            break;
        case "D" :
            if(y-1 < -5) return currentPos
            newPos = [x , y-1]
            break;
        case "L" :
            if(x-1 < -5) return currentPos
            newPos = [x-1, y];
            break;
        case "R" :
            if(x+1 > 5) return currentPos
            newPos = [x+1, y];
            break;
    }
                    
    return newPos
}

function solution(dirs) {
    var answer = 0;
    const posArr = [[0,0]]
    const set = new Set()
    const arr = []
    for(let i = 0 ; i < dirs.length ; i ++){
        const currentPos = posArr[i]
        const newPos = goNewPos(currentPos, dirs[i])
        posArr.push(newPos)
        
        if(newPos === currentPos) continue
        
        set.add(`${currentPos}  ${newPos}`)
        set.add(`${newPos}  ${currentPos}`)
        
        arr.push([newPos, currentPos])
        
    }
    

    
    
    console.log(arr)
    console.log(set)
    
    return answer = set.size / 2
}