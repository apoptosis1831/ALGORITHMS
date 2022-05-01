function solution(p){
    let answer = new Array(p.length).fill(0);
    for(let i=0; i<p.length; i++){
        let k=i+1;
        for(; k<p.length; k++){
            if(p[i]>p[k]){
                answer[i] = k-i;
                break;
            }
        }
        if(k===p.length){
            answer[i]=k-i-1;
        }
    }
    //console.log(answer);
    return answer;
}
const p = [1,2,3,2,3];
console.log(solution(p));