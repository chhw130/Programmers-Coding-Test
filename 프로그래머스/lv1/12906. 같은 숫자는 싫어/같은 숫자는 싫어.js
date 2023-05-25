function solution(arr)
{
  
    var answer = "";
    const stack = []
    
    arr.forEach((e, index) => {
        if(e !== arr[index+1]){
            stack.push(e)
        }
    })
   
    
    return stack;
}