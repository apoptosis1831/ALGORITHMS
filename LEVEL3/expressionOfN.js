function solution(n,number){
    function makingNumber(len){
        return +n.toString().repeat(len);
    }
    if(n===number) return 1;
    let DP = Array.from(Array(9), () => new Set());
    
    for(let k=1 ; k<9 ; k++){
        DP[k].add(makingNumber(k));
        for(let j=1; j<k; j++){
            for(let f of DP[j]){
                for(let s of DP[k-j]){
                    DP[k].add(f+s);
                    DP[k].add(f*s);
                    DP[k].add(f-s);
                    DP[k].add(f/s);
                }
            }
        }
        if(DP[k].has(number)) return k;
    }
    return -1;
}
const n=5;
const num = 12;
console.log(solution(n,num));