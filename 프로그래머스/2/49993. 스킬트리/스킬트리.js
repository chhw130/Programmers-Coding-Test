
const checkSkillIndex = (skillArr,skill, skillOrder ) => {
    
    const checkArr = []
    
    skill.forEach((s) => {
        if(skillArr.includes(s)){
            return checkArr.push(s)
        }
    })
    
    const isTrue = skillOrder.startsWith(checkArr.join(""))
    
    
    return isTrue
}

function solution(skill, skill_trees) {
    var answer = 0;
    const skillArr = skill.split("")
    
    
    for(let i = 0 ; i < skill_trees.length ; i ++){
    
        const skillElementArr = skill_trees[i].split("")
        const isCheck = checkSkillIndex(skillArr, skillElementArr, skill)
        
        
        isCheck ? answer ++ : null
        
    }
    
    return answer;
}