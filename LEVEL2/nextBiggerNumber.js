function solution(n) {
    function countingOne(num){
        return num.toString(2).split('').reduce((prev,cur)=>+prev + +cur,0);
    }
    const NoneCnt = countingOne(n);
    let answer = n+1;
    while(NoneCnt !== countingOne(answer)){
        answer++;
    }
    return answer;
}
const n=78;
console.log(solution(n));