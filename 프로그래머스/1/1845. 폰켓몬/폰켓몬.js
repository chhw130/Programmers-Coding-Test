function solution(nums) {
    var answer = 0;
    const monsterObj ={}
    
    nums.map((num) =>
            monsterObj[num] = !monsterObj[num] ? 1 : monsterObj[num] +1
            )
    
    const monsterKey = Object.keys(monsterObj)
    const selectNum = nums.length / 2 
    
    
    return answer = monsterKey.length > selectNum ?  selectNum : monsterKey.length ;
}