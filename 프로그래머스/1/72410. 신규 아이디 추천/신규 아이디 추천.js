function level2(id){
    let user = ""
    let data = [...id]
    let exp = "~!@#$%^&*()=+[{]}:?,<>/"
    for(i of data){
        for(j of exp){
            if (i === j){
                id = id.replace(i,"")
            }
        }
    }
    return id
}
function level3(id){
    let user = ""
    user = id.replace(/\.+/g, '.')
    return user
}
function level4(id){
    let user = [...id]
    if(user[0] === "."){
        user.shift()
    }else if (user[user.length-1] === "."){
        user.pop()
    }
    return user.join("")
}
function level5(id){
    if (id === ""){
        id += "a"
    }
    return id
}
function level6(id){
    let user = ""
    let newuser = ""
    if(id.length >= 16){
        for(i=0 ; i<15 ; i++){
            user+= id[i]
        }
    }else{
        user = id
    }
    if(user[user.length-1] === "."){
        for(i=0 ; i< user.length-1 ; i++){
            newuser += user[i]
        }
    }else{
        newuser = user
    }
    return newuser
}
function level7(id){
    while(id.length < 3){
        id += id[id.length-1]
    }
    return id   
}

function solution(new_id) {
    var answer = '';
    new_id = new_id.toLowerCase()
    new_id = level2(new_id)
    new_id = level3(new_id)
    new_id = level4(new_id)
    new_id = level5(new_id)
    new_id = level6(new_id)
    new_id = level7(new_id)

    return new_id;
}