function solution(phone_book) {
    var answer = true;
    const phoneHash ={}
    
    phone_book.forEach((number)=>{
        phoneHash[number] = true
    })
    
    for(number of phone_book){
        for(let i = 1 ; i < number.length ; i++){
           const target = number.slice(0, i)
          if  (phoneHash[target]) return false
        }
    }
    
    return answer;
}