function solution(keymap, targets) {
    var answer = [];
    
    const key = {}
    
    // const abc =  keymap.map((e) => [...new Set(e.split(""))]) 
    
    for(let i = 0 ; i < keymap.length ; i++){
        for(let j = 0 ; j < keymap[i].length ; j++){
            const ele = keymap[i][j]
            key[ele] = !key[ele] ? j+1 : j+1 > key[ele] ? key[ele] : j+1
        }
    }
    
    for(let i = 0 ; i < targets.length ; i ++){
        let answerEle = 0
        for(let j = 0 ; j < targets[i].length ; j++){
            const ele = targets[i][j]
            
            if(!key[ele]){
                answerEle = -1
                break
            }
            answerEle += key[ele] || 0
           
        }
        answer.push(answerEle || -1)
    }
    
    
    return answer;
}