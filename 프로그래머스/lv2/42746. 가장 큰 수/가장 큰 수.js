function solution(numbers) {
    
    if(numbers.every(number => number === 0)) return "0"
    
    const data = numbers.map(number => String(number))
    const newArr =data.sort((a,b) => (b+a) - (a+b))
    
    

    return newArr.join("")
}