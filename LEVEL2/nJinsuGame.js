function solution(n, t,m,p){
    let words = '';
    let number=0;
    let answer = '';
    while(words.length < t*m){
        const word = number.toString(n).toUpperCase();
        words += word;
        number++;
    }
    for(let i=0; i<t;i++){
        let idx = i*m + (p-1);
        answer += (words[idx]);
    }
    return answer;
}
const n=2;
const t=4;
const m=2;
const p=1;
console.log(solution(n,t,m,p));