function solution(citations){
    citations.sort((a,b)=>b-a);
    let answer = 0;
    citations.forEach((el,idx)=>{
        if(idx+1 === el){
            answer = Math.max(answer,el);
        }
    });
    return answer;
}
const c = [3,0,6,1,5];
console.log(solution(c));