def solution(s):
    answer = True
    countP = 0
    countY = 0
    
    for i in s :
        if(i.lower() == "p"):
            countP+=1
        elif(i.lower() == 'y'):
            countY+=1
    
    
    
    

    return True if countP == countY else False