function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0 ;  i< arr1.length ; i++){
        const element = []
       
        for(let j = 0 ; j < arr2[0].length ; j++){
            let mul = 0
            for(let k = 0 ; k < arr2.length ; k++){
                 mul += arr1[i][k] * arr2[k][j]
                
            }
            element.push(mul)
        }
        
        answer.push(element)
    }
    return answer;
}