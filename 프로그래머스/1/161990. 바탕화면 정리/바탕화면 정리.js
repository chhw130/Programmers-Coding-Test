function solution(wallpaper) {
    var answer = [];
    const obj = {}
    for(let i = 0  ; i < wallpaper.length ; i++){
        for(let j = 0 ; j < wallpaper[i].length ; j++){
            const ele = wallpaper[i][j]
            if(ele === "#") {
                !obj["x"] ? obj["x"] = [i] : obj["x"].push(i)
                !obj["y"] ? obj["y"] = [j] : obj["y"].push(j)
            }
        }
    }
    obj.x.sort((a,b) => a-b)
    obj.y.sort((a,b) => a-b)
    
    
    answer.push(obj.x[0], obj.y[0], obj.x.pop() +1 , obj.y.pop() + 1)
    
    return answer;
}