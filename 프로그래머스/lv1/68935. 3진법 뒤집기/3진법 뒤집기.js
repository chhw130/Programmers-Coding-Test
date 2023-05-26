function solution(n) {
    var answer = 0;
    let third = n.toString(3)
    let arr = [...third]
    let rev = arr.reverse().join("")
    answer = parseInt(rev,3)
    return answer;
}