function solution(name, yearning, photo) {
    var answer = [];
    
    const scoreMap = {};
    
    for(let i = 0 ; i < name.length ; i++){
        const curName = name[i]
        const curYearning = yearning[i]
        scoreMap[curName] = curYearning
    }
    
    answer = photo.map(pho => {
        return pho.reduce((acc,cur) => {
            if(!scoreMap[cur]){
                return acc
            }
            acc += scoreMap[cur]
            return acc
        }, 0)
    })
    
    
    return answer;
}