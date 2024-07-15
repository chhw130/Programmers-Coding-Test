const calculate = (arr, number) =>{
    const stack = []
        for(let i = 0 ; i < arr.length ; ++i){
           
            if(arr[i] === "(" || arr[i] === "[" || arr[i] === "{" ){
                stack.push(arr[i])       
        }else if(arr[i] === ")" && stack[stack.length-1] === "("){
            stack.pop()
        }else if (arr[i] === "]" && stack[stack.length-1] === "["){
            stack.pop()
        }else if (arr[i] === "}" && stack[stack.length-1] === "{"){
            stack.pop()
        }
            
    }
    return stack.length === 0 ? 1 : 0
}

function solution(s) {
    var answer = 0;
    if(s.length % 2 === 1) return answer = 0
    
    const newArr = s.split("")
    
 for(let i = 0 ; i < newArr.length ; ++i){
    
    const result = calculate(newArr,i) 
    answer += result
    const string = newArr.shift()
    newArr.push(string)

 }
 

    return answer;
}