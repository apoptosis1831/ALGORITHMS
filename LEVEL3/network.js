function solution(n, computers){
    const check = new Array(n).fill(false);
    let answer =0;

    function dfs(target){
        check[target]=true;
        for(let i=0; i<computers[target].length; i++){
            if(target===i) continue;
            if(computers[target][i]){
                if(!check[i]){
                    dfs(i)
                }
            }
        }
    }
    for(let i=0; i<n; i++){
        if(!check[i]){
            answer++;
            dfs(i);
        }
        if(check.every((el)=>el)) break;
    }
    return answer;
}
const n=3;
const computers = [[1, 1, 0], [1, 1, 1], [0, 1, 1]]

console.log(solution(n,computers))