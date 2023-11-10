function solution(triangle) {
    var answer = 0;
   
    for(let i = triangle.length - 1 ; i >= 0 ; i--){
        for(let j = 0 ; j < triangle[i].length - 1 ; j++){
            const leftNode = triangle[i][j]
            const rightNode = triangle[i][j+1]
            const parentNode = triangle[i-1][j]
            
            triangle[i-1][j] = Math.max(leftNode + parentNode , rightNode + parentNode)
        }
    }
    
    
    return answer = triangle[0][0];
}