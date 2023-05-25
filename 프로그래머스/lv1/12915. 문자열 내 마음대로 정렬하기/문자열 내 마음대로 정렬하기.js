

function solution(strings, n) {
    var answer = [];
    
  
    
    answer = strings.sort((a,b) => a[n] !== b[n] ? a[n].localeCompare(b[n]) : a.localeCompare(b))
    
    
    
    return answer;
}