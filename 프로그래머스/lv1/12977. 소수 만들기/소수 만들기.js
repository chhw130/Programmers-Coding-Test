const checkPrime = (num) =>{
    
    for(let i = 2 ; i <= num /2 ; i++){
        if(num % i === 0) return false
    }
    return true
}

function solution(nums) {
    var answer = 0
    let length = nums.length
    const arr = []
    
    for(let i = 0 ; i < length-2 ; i++){
        for(let j = i+1 ; j < length -1 ; j++){
            for(let k = j+1 ; k < length ; k++){
              const num = checkPrime(nums[i]+nums[j]+nums[k])
              answer += num
            }
        }
    }
    
    return answer;
}