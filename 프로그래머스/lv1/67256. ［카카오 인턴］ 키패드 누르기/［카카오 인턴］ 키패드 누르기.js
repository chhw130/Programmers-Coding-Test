
const caculateDistance = (leftIndex , rightIndex, numberIndex) => {
    
    const leftDistance = Math.abs(leftIndex[0]-numberIndex[0]) + Math.abs(leftIndex[1]-numberIndex[1])
    const rightDistance = Math.abs(rightIndex[0]-numberIndex[0]) + Math.abs(rightIndex[1]-numberIndex[1])
    return {leftDistance, rightDistance}
}

function solution(numbers, hand) {
    var answer = '';
    const currentHand = ["*", "#"]
    const leftNum = [1,4,7]
    const rightNum = [3,6,9]
     const phoneNumberIdx = {
        1 : [0,0],
        2 : [0,1],
        3 : [0,2],
        4 : [1,0],
        5 : [1,1],
        6 : [1,2],
        7 : [2,0],
        8 : [2,1],
        9 : [2,2],
        0 : [3,1],
         "*" : [3, 0],
         "#" : [3,2]
    }
    
    for(number of numbers){
        console.log(currentHand)
        if(leftNum.includes(number)){
            currentHand[0] = number
            answer += "L"
        }else if(rightNum.includes(number)){
            currentHand[1] = number
            answer += "R"
        }else{
            const leftIndex = phoneNumberIdx[currentHand[0]]
            const rightIndex = phoneNumberIdx[currentHand[1]]
            const numberIndex = phoneNumberIdx[number]
         const { leftDistance, rightDistance}  = caculateDistance(leftIndex, rightIndex, numberIndex)
         
         
         if(leftDistance < rightDistance){
              currentHand[0] = number
            answer += "L"
         }else if(rightDistance < leftDistance){
               currentHand[1] = number
            answer += "R"
         }else if(rightDistance === leftDistance){
             if(hand === "left"){
                 currentHand[0] = number
            answer += "L"
             }else{
                  currentHand[1] = number
            answer += "R"
             }
         }
        }
    }
    
    return answer;
}