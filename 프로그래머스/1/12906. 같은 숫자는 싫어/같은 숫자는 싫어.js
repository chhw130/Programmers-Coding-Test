function solution(arr)
{
    var answer = [];

  
    
    for(let i = 0 ; i < arr.length ; i ++){
        const ele = arr[i]
        if(answer.at(-1) === ele){
            continue
        }
        answer.push(ele)
    }
    
    
    
    return answer;
}