const checkWord = (firstCharOfCurrent, lastCharOfNext, wordArr, nextWord) => {
    
    if(firstCharOfCurrent !== lastCharOfNext || wordArr.includes(nextWord)) return false
    
    return true  
}


function solution(n, words) {
    var answer = [];
    const wordArr = []

    for(let i = 0 ; i < words.length + 1 ; i++){
        
        if(i === words.length - 1 ) return [0, 0]
        
        
        const currentWord = words[i]
        const nextWord = words[i +1]
        wordArr.push(currentWord, i+2)
        
        const isCollect = checkWord(currentWord[currentWord.length -1], nextWord[0], wordArr, nextWord)
        
        const person = (i+2) % n === 0 ? n : (i+2) % n
        if(!isCollect)  return [person  , Math.ceil((i+2) / n)]  
        
    }
    
    

    return answer;
}