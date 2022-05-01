solution = (n,words)=>{
    let set = new Set();
    set.add(words[0]);
    for(let i=0; i<words.length-1; i++){
        let curData = words[i];
        let nextData = words[i+1];
        if(set.has(nextData) || curData[curData.length-1]!==nextData[0] || nextData.length===1){
            return [(i+1)%n+1, Math.floor((i+n+1)/n)];
        }
        set.add(nextData);
    }
    return [0,0];
}
// const n=3;
// const w=["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];
const n=2;
const w=['qwe','eqwe','eqwe'];
console.log(solution(n,w));