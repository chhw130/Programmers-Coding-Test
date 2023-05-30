function solution(a, b) {
    var answer = '';
    let dayNum = 0
    const arr = [31, 29 , 31, 30, 31 ,30,31,31,30, 31,30,31]
    const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]
    
    for(i =0 ; i < a-1 ; i++){      
       dayNum += arr[i]    
    }
    
    dayNum += b
    answer = (dayNum % 7 ) === 0 ? day[6] : day[(dayNum % 7 )-1]
    return answer
}