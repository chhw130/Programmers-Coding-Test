function solution(n, lost, reserve) {
    var answer = n-lost.length;
    
    
    let lostItem=lost.filter((l)=>!reserve.includes(l));
    reserve=reserve.filter((r)=>!lost.includes(r));
    answer+=lost.length-lostItem.length;
    console.log(lostItem)
    console.log(reserve)
    
//     let datas = lost.concat(reserve)
//     datas = datas.sort((a,b)=>
//                     a-b)
//     console.log(datas)
//     for(i = 0 ; i< datas.length ;){
//         if(datas[i] === datas[i+1]){
//             lost.splice(lost.indexOf(datas[i]),1)
//             datas.splice(datas.indexOf(datas[i]),2)
//             answer++
//             i = i-1
//         }
//         i++
//     }
    lostItem.sort((a,b)=>a-b);

    for(i of lostItem){
         if(reserve.includes(i-1)){
            reserve=reserve.filter((r)=>r!==i-1);
            answer++;
        }
        else if(reserve.includes(i+1)){
            reserve=reserve.filter((r)=>r!==i+1);
            answer++;
        }
    }
    
   // for(i of lost){ 
   //     if(datas.includes(i-1)){
   //         datas.splice(datas.indexOf(i-1),2)
   //         answer++
   //     }else if(datas.includes(i+1)){
   //         datas.splice(datas.indexOf(i),2)
   //         answer++
   //     }
   // }
   //      console.log(datas)
    // console.log(data)
    return answer;
}