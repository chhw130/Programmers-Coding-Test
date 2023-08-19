function solution(bridge_length, weight, truck_weights) {
    var answer = 1;
    const bridgeStatus =  Array.from({length: bridge_length}, () => 0);
    let bridgeWeight = 0

    const firstTruck = truck_weights.shift()
    bridgeWeight += firstTruck
    bridgeStatus.push(firstTruck)
    bridgeStatus.shift()
    
    while(bridgeWeight > 0){
        ++answer
        const passTruck = bridgeStatus.shift()
        bridgeWeight -= passTruck
        
        if(bridgeWeight + truck_weights[0] <= weight){
            bridgeStatus.push(truck_weights[0])
            bridgeWeight += truck_weights[0]
            truck_weights.shift()
        }else{
            bridgeStatus.push(0)
        }
        
    }
    
   
    
    return answer;
}