function solution(n, results){
    let graph = Array.from(Array(n+1), ()=>Array(n+1).fill(false));
    
    // 행 인덱스가 열 인덱스 이길 경우 1, 질 경우 -1
    results.map(([win,lose])=>{
        graph[win][lose]=1;
        graph[lose][win]=-1;
        graph[win][win]=0;
        graph[lose][lose]=0;
    });

    // mid가 a를 이기고, b가 mid를 이길 때 b가 a를 이김
    // 지는 경우도 동일 적용
    for(let mid = 1; mid<=n; mid++){
        for(let a=1; a<=n; a++){
            for(let b=1; b<=n; b++){
                if(graph[a][mid]===1 && graph[mid][b]===1) graph[a][b]=1;
                if(graph[a][mid]===-1 && graph[mid][b]===-1) graph[a][b]=-1;
            }
        }
    }

    // false가 행에 포함 안 된 경우 순위가 지정됨
    let answer=0;
    for(let i=1; i<=n; i++){
        let j=1;
        for(; j<=n; j++){
            if(graph[i][j]===false) break;
        }
        if(j===n+1) answer++;
    }
    return answer;
}
const n=5;
const results = [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]];
console.log(solution(n,results));