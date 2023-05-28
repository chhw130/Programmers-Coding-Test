function solution(answers) {
    var answer = [];
    const arr = [];
    let oneCount = 0;
    let twoCount = 0;
    let threeCount = 0;
    const student ={
        one : [1,2,3,4,5],
        two : [2,1,2,3,2,4,2,5],
        three : [3,3,1,1,2,2,4,4,5,5]
    }
    for(i = 0 ; i < answers.length ;  i++){
        if(student.one[i %(student.one.length)] === answers[i]) ++oneCount
        if(student.two[i %(student.two.length)] === answers[i]) ++twoCount
        if(student.three[i %(student.three.length)] === answers[i]) ++threeCount
        
    }
    answer.push(oneCount, twoCount, threeCount)
    const max = Math.max(...answer)
   
    for(i = 0 ;  i< answer.length ; i ++ ){
        if(max <= answer[i] ) arr.push(i+1)
    }
    
    return arr
}