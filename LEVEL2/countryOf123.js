function solution(n){
    let answer ='';
    while(n>0){
        let div = n%3;
        if(div===0){
            answer = '4'+answer;
            n = n/3 -1;
        }
        else if(div ===1){
            answer = '1'+answer;
            n=Math.floor(n/3);
        }
        else{
            answer = '2'+answer;
            n=Math.floor(n/3);
        }
    }
    return answer;
}
console.log(solution(7));