function solution(s){
    let answer = [0,0];
    s=s.split('');
    while(s.length!==1){
        let idx = s.sort().findIndex((el)=>el==='1');
        answer[1]+=idx;
        s = s.slice(idx).length.toString(2).split('');
        answer[0]++;
    }
    return answer;
}
const s = "01110";
console.log(solution(s));