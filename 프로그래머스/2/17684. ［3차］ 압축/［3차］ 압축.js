function solution(msg) {
    var answer = [];
    
    const array =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
     let message = msg
    
    while(true){

        let dict = ''
        let idxData
        
        for(let i = 0 ; i < message.length ; i++){
            
             dict += message[i]
            if(!array.includes(dict)){
                idxData = dict.slice(0, dict.length-1)
                answer.push(array.indexOf(idxData) + 1)
                break
            }
        }
        if(message === dict){
            
            if(!idxData){
                answer.push(array.indexOf(message) + 1)
                break
            }
        } 
        message = message.slice(idxData.length) 
        array.push(dict)
    }
    
    
    return answer;
}