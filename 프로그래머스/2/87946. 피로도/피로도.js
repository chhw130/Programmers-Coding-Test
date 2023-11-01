function solution(k, dungeons) {
    var answer = -1;
    
    const dfs = (fatigue, newDun, pro) => {
        for(let i = 0 ; i < dungeons.length ; i++){
            const[a,b] = newDun[i]
            
            if(fatigue < a || !a) continue
           
        
            const copyDungeon = [...newDun]
            
            copyDungeon[i] = [null, null]
            
            
            dfs(fatigue - b, copyDungeon , pro+1)
            
           
        
        }
    
        answer = Math.max(answer, pro)
        return  answer
    }
    
    dfs(k, dungeons, 0)
    
    
    return answer;
}