function solution(gems) {
    let map = new Map();
    let objCnt = new Set(gems).size;
    let answer = [0, gems.length-1];
    gems.forEach((gem,idx)=>{
        map.delete(gem);
        map.set(gem,idx+1);
        if(map.size === objCnt){
            const tmp = [map.values().next().value, idx+1];
            if(answer[1]-answer[0] > tmp[1]-tmp[0]) answer = tmp;
        }
    })
    return answer;
}

const g = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"];
console.log(solution(g))