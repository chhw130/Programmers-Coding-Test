function solution(s) {
    var answer = s
     let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    numbers.forEach((string, index) =>{
    let data = answer.split(string)
    answer = data.join(index);
       console.log(answer, data, index)
    })
    

    return Number(answer)
}