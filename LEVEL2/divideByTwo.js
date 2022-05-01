function solution(n, wires) {
    let cnt = 0;
    let map = Array.from(Array(n + 1), () => new Array());
    let visit = new Array(n + 1).fill(false);
    function dfs(curr, s, e) {
        cnt++;
        visit[curr] = true;
        for (let i = 0; i < map[curr].length; i++) {
            let next = map[curr][i];
            if ((s === curr && next === e) || (e === curr && next === s)) continue;
            else {
                if (!visit[next]) dfs(next, s, e);
            }
        }
    }

    let answer = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < wires.length; i++) {
        let s = wires[i][0];
        let e = wires[i][1];
        map[s].push(e);
        map[e].push(s);
    }
    for (let i = 0; i < wires.length; i++) {
        let s = wires[i][0];
        let e = wires[i][1];
        let cycles = new Array(2);
        let cycle = 0;
        visit.fill(false);
        for (let i = 1; i < n; i++) {
            if (!visit[i]) {
                cnt = 0;
                dfs(i, s, e);
                cycles[cycle] = cnt;
                cycle++;
            }
        }
        if(cycles[0]!==undefined && cycles[1]!==undefined){
            answer = Math.min(answer, Math.abs(cycles[0] - cycles[1]));    
        }
    }
    return answer;
}
const n = 9;
const wires = [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]];
console.log(solution(n, wires));