
const getPassword = (num1, num2) => {
    
    let password = ""
    
    for(let i = 0 ; i < num1.length ; i ++){
        const temp1 = num1[i]
        const temp2 = num2[i]
        
        if(temp1 === "1" || temp2 === "1"){
            password += '#'
            continue
        }
        
        password += " "
        
    }
    
    return password
    
}



function solution(n, arr1, arr2) {
    var answer = [];
    
    for(let i = 0 ; i < arr1.length ; i++){
      const ele1 = arr1[i].toString(2).padStart(String(n), 0)
      const ele2 = arr2[i].toString(2).padStart(String(n), 0)
      
      const password = getPassword(ele1, ele2)
      
        answer.push(password)
    }
    
    
    return answer;
}