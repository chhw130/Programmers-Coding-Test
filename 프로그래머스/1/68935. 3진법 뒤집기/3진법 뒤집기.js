function solution(n) {
    const third = n.toString(3).split("").reverse().join("")
    const num = parseInt(third, 3)
    return num;
}