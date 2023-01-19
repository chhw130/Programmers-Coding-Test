function solution(record) {
    var answer = [];
    let user = {}
    record = record.map((e)=>
                       e.split(" "))
    
    for(i of record){
        if(i[0] === "Enter"){
            user[i[1]] = i[2]
           }else if(i[0] === "Change"){
            user[i[1]] = i[2]
        }
    }
    
    for(i of record){
            let props =i[1]
            
        if(i[0] === "Enter"){
            answer.push(user[props] + "님이 들어왔습니다.")
            
        }else if(i[0]==="Leave"){
            answer.push(user[props] + "님이 나갔습니다.")
        }else{
            continue
        }
    }
    
    return answer;
}