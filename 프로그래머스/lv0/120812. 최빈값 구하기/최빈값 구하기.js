function solution(array) {
    var answer = 0;
    const set = [...new Set(array)]  //배열 중복 제거
    let result = []             //새 배열 추가
    for (i = 0 ; i < set.length ; i++){
        let count = 0
        for ( j = 0 ; j < array.length ; j++){
            if (set[i] === array[j]){       //원래배열 요소와 중복 제거된 배열 요소 비교
                count++ 
            }
        }result.push([set[i], count])
    }
    result.sort((a,b) =>
        b[1] - a[1])
    if(result.length >= 2 && result[0][1] === result[1][1]){
        answer = -1
    }else{
         answer = result[0][0]
    
    }
    return answer;    
    }

    