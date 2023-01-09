function solution(people, limit) {
    var answer = people.length;
    const data = people.sort((a,b)=>
                           a-b )
    for(i = 0, j = data.length-1 ; i < j;){
        if(data[i]+data[j] <= limit){
            answer --
            i++
        }
        j--
    }
    return answer;
}