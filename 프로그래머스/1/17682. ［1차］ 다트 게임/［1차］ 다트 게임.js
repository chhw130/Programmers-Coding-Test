
const calculateScore = (num, string, resultScore, i) => {
    let score = parseInt(num)
    const option = string.split("")    
    
    for(let j = 0; j < option.length ; j++){
        const optionEle = option[j]
        switch(optionEle){
            case "S" :
                score = score ** 1;
                break;
            case "D" :
                score = score ** 2;
                break
            case "T" :
                score = score ** 3;
                break
                
            case "#" :
                score = score * -1;
                break;
            case "*" :
                score = score * 2
                resultScore[i-1] *= 2
                break;
                
                
        }
    }
    resultScore.push(score)
    return [score, resultScore]
}

const resultFunction = (arr) => {
    
    const resultScore = []
    for(let i = 0 ; i < arr.length ; i++){
        const [num, string] = arr[i]
        const [score , resultArr] = calculateScore(num, string, resultScore, i)
    }
    return resultScore.reduce((a,b) => a+b, 0)
}

function solution(dartResult) {
    const arr = []

    let numEle = ""
    let stringEle = ""
    
    
    for(let i = 0 ; i < dartResult.length ; i++){
        const element = dartResult[i]
        parseInt(element) || parseInt(element) === 0 ? numEle += element : stringEle += element
        
        if(!parseInt(element) && (parseInt(dartResult[i+1]) || dartResult[i+1] === "0")){
            arr.push([numEle, stringEle])
            numEle = ""
            stringEle = ""
        }else if(i === dartResult.length -1){
            arr.push([numEle, stringEle])
        }
    }
    
    return resultFunction(arr)
}