function solution(n, vertex){
    const check = new Array(n+1).fill(false);
    // 노드 방문 체크
    const que = [];
    const map = new Map();
    vertex.forEach(([start, end])=>{
        if(!map.get(start)) map.set(start, [end]);
        else map.get(start).push(end);
        if(!map.get(end)) map.set(end, [start]);
        else map.get(end).push(start);
    }); // key : node , value : [key node에서 갈수있는 node들]
    que.push({node:1, min:0});
    check[1]=true;
    let maxDistance = -1; // 1번에서 가장 먼 노드의 거리
    let answer = []; // 1번에서 가장 먼 노드 번호들

    while(que.length !==0){
        let target = que.shift();
        let next = map.get(target.node);
        if(target.min > maxDistance){ // maxDistance 갱신됐다
            answer = [target.node];
            maxDistance = target.min;
        } else if(target.min === maxDistance){ // maxDistance 같은 거리의 node
            answer.push(target.node);
        }
        next.forEach((el)=>{ // next 중에 방문 아직 안한 노드만 que에 넣어줌
            if(!check[el]){
                que.push({node:el, min:target.min+1});
                check[el]=true;
            }
        });
    }
    return answer.length;
}
const n=6;
const vertex = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];
console.log(solution(n,vertex));