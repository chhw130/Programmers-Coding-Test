function solution(s) {
    var answer = '';
    
    const stringArr = s.split(" ").map(ele => {
        const formattingWord =  ele.toLowerCase()
        if(ele.length){
            return formattingWord.charAt().toUpperCase() + formattingWord.substring(1)
        }
        return formattingWord
                                            
                                              })
    
    
    return stringArr.join(" ")
}