function solution(s) {
    var answer = '';
    const numArr = s.split(" ").map(ele => ele).sort((a,b) => a-b)
    
    const min = numArr[0]
    const max = numArr[numArr.length -1]
    
    
    return min + " " + max;
}