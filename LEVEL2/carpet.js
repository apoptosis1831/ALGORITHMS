function solution(brown, yellow){
    let sum = brown+yellow;
    let s = sum-1;
    while(s!==0){
        
        if(sum%s===0){
            //console.log(s,sum/s);
            if((s-2)*(sum/s-2)===yellow){
                return [s,sum/s];
            }
        }
        s = s-1;
    }
}
const b=10;
const y=2;
console.log(solution(b,y));