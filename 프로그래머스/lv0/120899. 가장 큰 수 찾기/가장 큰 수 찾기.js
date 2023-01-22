function solution(array) {
    var answer = []
    var max
    var index
    for (i=0 ; i <array.length ; i++)
        if (array[i] < array[i+1]){
            max = array[i+1]
            index = i+1
            
        }
    answer.push(max)
    answer.push(index)

    return answer;
}