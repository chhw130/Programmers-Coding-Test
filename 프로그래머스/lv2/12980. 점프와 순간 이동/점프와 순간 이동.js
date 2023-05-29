function solution(n)
{
    var ans = 0;

    while(true){
        if(n % 2 === 0 ){
            n /= 2
        }else{
            n = (n-1)/2
            ++ans
        }
        if(n ===1 ){
            ++ans
            break
        } else if(n === 0){
            break
        }
    }
    

    return ans;
}