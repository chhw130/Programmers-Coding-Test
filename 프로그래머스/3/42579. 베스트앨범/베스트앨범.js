function solution(genres, plays) {
    var answer = [];
    const obj = {}; 
    const info = {}; 

      for (let i = 0; i < genres.length; i++) {
        obj[genres[i]] = (obj[genres[i]] || 0) + plays[i];
        info[i] = { play: plays[i], genre: genres[i] };
      } 
    

    const sortObj = Object.keys(obj).sort((a,b) => obj[b]-obj[a])
    
    sortObj.forEach(genre =>{
        
        
        const arr = Object.values(info).filter(ele => ele.genre === genre).sort((a,b) => b.play - a.play).slice(0,2)
        
         arr.forEach((gs) => {
          const idx = Object.values(info).indexOf(gs);
          answer.push(idx);
    });
        
    })
    
    
    
    return answer;
}




