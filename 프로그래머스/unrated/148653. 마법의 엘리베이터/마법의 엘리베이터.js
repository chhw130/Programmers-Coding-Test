function remain(data){
    let count = 0
    let data_set = data
    for(i = 1 ; i <= 10 ; i++){
        while(data % (10**i) !== 0){
        if(data % (10**i) > 5*(10**(i-1))){
            data = data+(10**(i-1))
            count++   
        }else if(data % 10>=5 && parseInt(data/10) >=5){
            data = data+(10**(i-1))
            count++
        }else{
            data = data-(10**(i-1))
            count++
        }
    }
}
    return count
}

function solution(storey) {
    var answer = 0;
    
    return remain(storey);
}