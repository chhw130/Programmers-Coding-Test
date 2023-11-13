const calculateFee = (element, fees) => {
    const [basicMin, basicFee, unitMin, unitFee] = fees
    const totalMin = element.reduce((a,b) => a+b,0)
    if(totalMin <= basicMin) return basicFee
    const sum = basicFee + Math.ceil((totalMin - basicMin) / unitMin) * unitFee
    return sum    
}

function solution(fees, records) {
    var answer = [];
    const feeObj = {}
    const carObj = {}
    
    for(let i = 0 ; i < records.length ; i ++){
        const [time, carNumber, entrace] = records[i].split(" ")
        const [hour, minute] = time.split(":")
        const newTime = parseInt(hour) * 60 + parseInt(minute)
        
        carObj[carNumber] = carObj[carNumber] + 1 || 1
        
        if(entrace === "IN"){
            if(!feeObj[carNumber]){
                feeObj[carNumber] = [newTime]
            }else{
                feeObj[carNumber].push(newTime) 
            }
        }
        if(entrace === "OUT"){
            const length = feeObj[carNumber].length - 1
            feeObj[carNumber][length] = newTime - feeObj[carNumber][length]
        }
    }
    
    
    Object.entries(feeObj).forEach(([key, value]) => {
        if(carObj[key] % 2 === 1){
            value[value.length - 1] =  (23 * 60 + 59) - value[value.length -1]
        }
        const sum = calculateFee(value, fees)
        feeObj[key] = sum
    })
    
    const key = Object.keys(feeObj).sort((a,b) => a-b)
    
    
    
   key.forEach((ele) => answer.push(feeObj[ele]))
    
    return answer;
}