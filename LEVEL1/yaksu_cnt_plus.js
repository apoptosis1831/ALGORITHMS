function countFunc(num){
    let cnt=0;
    for(let i=1; i<=num; i++){
        if(num%i===0) cnt++;
    }
    return cnt;
}

function solution(left, right) {
    var answer = 0;
    for(let n =left; n<=right; n++){
        let count = countFunc(n);
        if(count%2==0) answer+=n;
        else answer-=n;
    }
    return answer;
}

console.log(solution(13,17));