const choiceCharacter = (survey,choice) => {
    let characterTarget
    
    if(choice > 4){
        characterTarget = survey[1]
    }else if(choice < 4){
        characterTarget = survey[0]
    }else{
        characterTarget = survey[0] < survey[1] ? survey[0] : survey[1]
    }
    
    return characterTarget
}

const resultCharacter = (scoreObj) =>{
    let answer = ""
    
    if(scoreObj["R"] >= scoreObj["T"] || !scoreObj["T"]){
        answer+= "R"
    }else{
        answer += "T"
    }
    
    if(scoreObj["C"] >= scoreObj["F"] || !scoreObj["F"]){
        answer+= "C"
    }else{
        answer += "F"
    }
    
    if(scoreObj["J"] >= scoreObj["M"] || !scoreObj["M"]){
        answer+= "J"
    }else{
        answer += "M"
    }
    
    if(scoreObj["A"] >= scoreObj["N"] || !scoreObj["N"]){
        answer+= "A"
    }else{
        answer += "N"
    }

    return answer
}

function solution(survey, choices) {
    var answer = '';
    const scoreArr = [null, 3, 2, 1, 0 , 1, 2, 3]
    
    const scoreObj = {}
    
    for(let i = 0 ; i < survey.length ; i ++){
        const score = scoreArr[choices[i]]
        const character = choiceCharacter(survey[i], choices[i])
        
        scoreObj[character] = !scoreObj[character] ? score : scoreObj[character]+score
    }
    
    answer = resultCharacter(scoreObj)
    
    return answer;
}