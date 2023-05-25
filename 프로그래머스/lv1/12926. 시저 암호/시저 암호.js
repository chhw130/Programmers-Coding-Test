function solution(s, n) {
    var answer = '';
     var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    
    for(i of s){
        if(upper.includes(i) ){
            if(upper.indexOf(i) + n >= 25){
               answer += upper[(upper.indexOf(i) + n) %  26]

            }else{
            answer += upper[(upper.indexOf(i)+n)]
                
            }
        }
        if(lower.includes(i)){
            if(lower.indexOf(i) + n >= 25){
              answer += lower[(lower.indexOf(i) + n) % 26]
            }else{
                  answer+=lower[(lower.indexOf(i)+n)]
            }
     
        }
        
        if(i === " "){
            answer += " "
        }
        
        
        
    }
    return answer;
}