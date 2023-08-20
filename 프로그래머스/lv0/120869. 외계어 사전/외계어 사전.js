function solution(spell, dic) {
    var answer = 0;
    
    for(data of dic){
        const dicData = data.split("")
        let temp = 0
        for(let i = 0 ; i < spell.length ; i++){
            if(dicData.includes(spell[i])){
                temp += 1
            }
        }
        if(temp >= spell.length) return 1
    }
    
    return 2;
}