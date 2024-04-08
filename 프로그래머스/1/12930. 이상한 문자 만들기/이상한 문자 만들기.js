function solution(s) {
    var answer = '';
    let format = s.split(" ")
    format = format.map(word => word.split(""))
    const upper = format.map(word => word.map((ele, idx) => idx % 2 !== 1 ? ele.toUpperCase() : ele.toLowerCase() ).join("")).join(" ")
    
    
    return upper
}