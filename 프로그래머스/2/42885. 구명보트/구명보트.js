function solution(people, limit) {
    var answer = 0;
    
    people.sort((a,b) => b-a)
    
    let left = 0
    let right = people.length - 1
    
    while(left <= right){
        
        const people1 = people[left]
        const people2 = people[right]
        
        if(people1 + people2 <= limit){
            left++
            right--
            
            answer++
            continue
        }
        
        left++
        
        answer++
      
        
    }
    
    
    
    return answer;
}