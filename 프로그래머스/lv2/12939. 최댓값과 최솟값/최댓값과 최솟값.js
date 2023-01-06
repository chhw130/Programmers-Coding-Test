function solution(s) {
    var answer = [];
    let data = s.split(" ")
    let data2 = data.sort((a,b)=>
                 a-b )
    let data3 = data2.map((e)=>
                         parseInt(e))
    let max = data3[0]
    let min = data3[data3.length-1]
    answer.push(max, min)
    return answer.join(" ");
}