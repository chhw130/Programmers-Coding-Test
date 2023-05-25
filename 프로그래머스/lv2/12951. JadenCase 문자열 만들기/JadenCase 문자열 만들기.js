function solution(s) {
    var answer = '';
    let newAnswer = [];
    answer =s.split(" ")
    for(data of answer){
       if(data.length > 0){
         const newData =  data[0].toUpperCase() + data.substring(1).toLowerCase()
        newAnswer.push(newData)
       }else{
           const newData = ""
        newAnswer.push(newData)
           
           
       }
    }
    return newAnswer.join(" ")
}