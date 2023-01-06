function solution(want, number, discount) {
    var answer = 0;
    let count = 0
    let total = 0
    for(i = 0 ; i < discount.length-9 ; i++ ){
        for(j = 0 ; j < number.length ; j++){
            for(k = i ; k < i+10 ; k++){
                discount[k] === want[j] ? count++ : count
            }
            count >= number[j] ? total++ : total
            count = 0
        }
        total >=number.length ? answer++ : answer
        total = 0
    }
    return answer;
}