function solution(a, b, n) {
    var answer = 0;
    while(a <= n)
        {
            answer+= parseInt(n/a)*b; // 빈병을 가져다 주고 받은 콜라의 갯수
            n = parseInt(n/a)*b + n % a; // 새로 남은 빈병의 갯수
        }
    return answer;
}