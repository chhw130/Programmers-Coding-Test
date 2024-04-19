def solution(n):
    answer = 0

    stringN = str(n)
    
    for i in range(0, len(str(n)) ) :
        num = stringN[i]
        answer += int(num)

    return answer