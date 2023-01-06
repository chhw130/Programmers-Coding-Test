function solution(s) {
    var answer = '';
    const data = s.split(' ')
     answer = data.map((props) =>{
       if(props === ""){
          return props 
       }else {
          return props[0].toUpperCase() + props.slice(1,props.length).toLowerCase();
       }
     }) 
    return answer.join(" ");
}