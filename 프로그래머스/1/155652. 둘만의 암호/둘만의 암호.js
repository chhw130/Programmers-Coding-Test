function solution(s, skip, index) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const alphabetArr = [...alphabet, ...alphabet, ...alphabet]
    const skippArr = [...skip]
    var answer = '';
    
    for(let i = 0 ; i < s.length ; i ++){
        const ele = s[i]
        const indexArr = []
        let alphabetIdx = alphabetArr.indexOf(ele)
        
        while(indexArr.length < index){
            alphabetIdx++
            const targetEle = alphabetArr[alphabetIdx]
            
            if(skippArr.includes(targetEle)){
               continue
            }
            indexArr.push(targetEle)
        }
        
        answer += indexArr[index-1]
        // const skippIdx = alphabetArr.slice(alphabetIdx + 1, alphabetIdx + 6)
    }
    
    
    return answer;
}