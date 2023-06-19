const checkPrime = (num) =>{
    let result = 0
        let arr = Array(num + 1).fill(true).fill(false,0,2);
    for(let i = 2 ; i*i < arr.length ; i++){
       
        for(let j = i*i ; j < arr.length ; j+=i){
            arr[j] = false
        }
    }
    arr.forEach((data) =>{
        if(data){ return ++result}
    })
    
    return result
}

function solution(n) {
    var answer = 0;
   
    answer = checkPrime(n)
    
    return answer;
}