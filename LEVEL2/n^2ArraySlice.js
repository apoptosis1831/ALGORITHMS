function solution(n,left,right){
    let map = Array.from(Array(n), ()=> new Array(n));
    for(let i=0; i<n ; i++){
        for(let k=0; k<n ; k++){
            if(k<i) map[i][k]=i+1;
            else map[i][k]=k+1;
        }
    }
    map = map.flat().slice(left,right+1);
    return map
}
const n=3;
const left = 2;
const right=5;
console.log(solution(n,left,right));