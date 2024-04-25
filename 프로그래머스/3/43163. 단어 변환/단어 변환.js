const checkCount = (currentWord,word) => {
    
   return  word.reduce((acc, cur, i) => {
        if(cur === currentWord[i]){
            acc += 1
            return acc
        }else{
            return acc
        }
        
    },0)
}

function solution(begin, target, words) {
    var answer = 0;
    
    if(!words.includes(target)){
        return answer
    }
    

    const arr = Array(words.length).fill(0)
    
    const queue = [[begin, 0]]
    
    
    while(queue.length){
        const [currentWord, count] = queue.shift()

        if(currentWord === target){
            answer = count
            break
        }
        
        
        for(let i = 0 ; i < words.length ; i++){
            if(arr[i]) continue
            
            const word = words[i].split("")
            const correct = checkCount(currentWord ,word)
            
            
            if(correct === words[0].length -1 ){
                queue.push([words[i], count+1])
                arr[i] = 1
                
            }
        }
    }
    
    return answer;
}