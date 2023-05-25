function solution(food) {
    var answer = '';
    const arr = []
    food.shift()
    
    food = food.map(e => Math.floor(e/2))
    
    food.forEach((data,i) => {
        for(j = 0 ; j < data ; j++){
            arr.push(i+1)
        }
    })
    
    
    const reverseArr = [...arr].reverse()
    
    arr.push(0)
    
   answer = arr.join("") + reverseArr.join("")
    
    
    // console.log(arr)
    
    return answer
}