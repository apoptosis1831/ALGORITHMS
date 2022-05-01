solution = (k,dungeons)=>{
    let answer =0;
    let check = new Array(dungeons.length).fill(false);
    
    function dfs(power, depth){
        console.log(power);
        answer=Math.max(answer, depth);
        for(let i=0;i<dungeons.length; i++){
            if(power >= dungeons[i][0] && !check[i]){
                check[i]=true;
                dfs(power-dungeons[i][1],depth+1);
                check[i]=false;
            }
        }
    }

    dfs(k,0);
    return answer;
}
const k=80;
const d=[[80,20],[50,40],[30,10]];
console.log(solution(k,d));