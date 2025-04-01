function solution(s){
    var answer = true;

    s = s.split('')
    let openCnt = 0
    
    for(let i = 0 ; i < s.length  ; i++){
        
        const ele = s[i]
        
        if(ele === '('){
            openCnt++
            continue
        }
        
        if(!openCnt){
            return false
        }
        
        if(ele === ')'){
            openCnt--
            continue
        }

        
        
    }
    
    
    

    return openCnt === 0
}