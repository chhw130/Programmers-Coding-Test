import math

def solution(n):
    answer = 0
    
    for i in range(1, math.trunc(math.sqrt(n))+1) :
        
        if(n % i == 0) :
            quot = n / i
            if(quot == i) :
                answer += quot
            else:
                answer += quot + i
            
        
    return answer