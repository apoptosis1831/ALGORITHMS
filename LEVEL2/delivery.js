function solution(N,road,K){
    let check = new Array(N+1).fill(false);
    let minDistance = new Array(N+1).fill(500001);
    let que = [];
    let answer = 0;
    que.push(1);
    minDistance[1]=0;
    while(que.length !== 0){
        let town = que[0];
        if(!check[town] && minDistance[town]<=K){
            check[town] = true;
            answer++;
        }
        road.forEach(([town1, town2, dis])=>{
            if(town1===town && minDistance[town2]>dis+minDistance[town]){
                que.push(town2);
                minDistance[town2]=dis+minDistance[town];
            }
            if(town2===town && minDistance[town1]> dis+minDistance[town]){
                que.push(town1);
                minDistance[town1]=dis+minDistance[town];
            }
        })
        que.shift();
    }
    return answer;
}
const N = 5;
const road = [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]];
const K = 3;
console.log(solution(N,road,K));