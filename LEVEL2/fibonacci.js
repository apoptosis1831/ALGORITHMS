function solution(n) {
    let prev=0;
    let cur=1;
    let answer=0;
    for(let i=1; i<n; i++){
        answer = prev%1234567+cur%1234567;
        prev= cur;
        cur = answer;
    }
    return answer%1234567;
}