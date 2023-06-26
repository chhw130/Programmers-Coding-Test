function solution(cacheSize, cities) {
    var answer = 0;
    const cacheArr = [];
    const citiesLength = cities.length;
    
    if(cacheSize === 0){
        return citiesLength * 5
    }

    for(let i = 0 ; i < citiesLength ; i++){
        const data = cities.shift().toUpperCase()
        cacheArr.includes(data) ? answer += 1 : answer += 5
       
        if(cacheArr.length === cacheSize ){
            if(cacheArr.includes(data)){
                cacheArr.splice(cacheArr.indexOf(data), 1)

            } else{
            cacheArr.shift()
            }
        }
         cacheArr.push(data)
    }
    return answer;
}