const solution = (N, stages) => {
    const rate = stages.reduce((acc,cur)=>{
        acc[cur-1] += 1;
        return acc;
    },Array(N).fill(0));
    // 해당 index의 rate 값 추가

    let length = stages.length;

    console.log(rate);

    if(rate.length===N+1) rate.pop();
    // N보다 큰 인덱스면 pop

    const answer = rate.map((cur) => {
        const failureRate =cur/length;
        length -= cur;
        return failureRate // 실패율 계산
    }).map(( value, idx ) => {
        return { index: idx+1, value }; // [숫자] -> [객체]로 변경
    }).sort((a,b) => b.value-a.value) // 정렬 ( 이미 index 로 정렬되어있어서 value 기준으로만 정렬하면 된다.
    .map((item) => item.index); // item => { index, value} 인데 이중에 index만 반환해주는 부분
    
    return answer;
}

let N = 5;
let stages = [2, 1, 2, 6, 2, 4, 3, 3];
console.log(solution(N,stages));