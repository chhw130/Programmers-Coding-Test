function solution(prices) {
    var answer = [];
    const length = prices.length
    const dp = Array.from({length : prices.length}, (_, i) => prices.length - i - 1);
    
    const stack = []
  
    prices.forEach((price, index) =>{
        while(stack.length && prices[stack[stack.length -1]] > price){
            dp[stack[stack.length-1]] = index- stack[stack.length-1] 
            stack.pop()
        }
        
        stack.push(index)
    })
    
    return dp;
}