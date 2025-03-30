function solution(people, limit) {
    var answer = 0;
    
    people.sort((a,b) => a-b)
   
    let left = 0
    let right = people.length -1
    
    while(left <= right){
        const leftPeople = people[left]
        const rightPeople = people[right]
        
        if(leftPeople + rightPeople > limit){
            right -= 1
            answer++
            continue
        }
        
        left += 1
        right -= 1
        answer++
        
       
    }
       
    
    return answer;
}