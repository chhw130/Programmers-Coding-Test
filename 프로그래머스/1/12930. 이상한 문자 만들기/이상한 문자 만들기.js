function solution(s) {
    var answer = '';
    
    const arr = s.split(" ")
    
    
    const newArr = arr.map(word => {
      return  word.split('').map((ele,idx) => idx % 2 !== 0 ? ele.toLowerCase() : ele.toUpperCase()).join("")
    })
    
    answer = newArr.join(" ")
    
   
    
    return answer;
}