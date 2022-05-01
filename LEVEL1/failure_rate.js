function solution(N, stages){
    let rate = new Array(N).fill(0);
    let count=0;
    let length = stages.length;
    
    stages.forEach((cur)=>{
        rate[cur-1]++;
    });
    // 해당 index의 rate 값 추가

    if(rate.length===N+1) rate.pop();
    // N보다 큰 인덱스면 pop

    rate = rate.map((cur)=>{
        rate = cur/length;
        length -= cur;
        return rate
    });
    // 실패율 계산해서 rate에 다시 넣기

    let rateObj = [];
    rate.forEach((r,i)=>{
        rateObj.push({index:i+1,value:r});
    });
    // 배열 -> 객체배열 옮기기

    const answer = rateObj.sort((a,b)=> b.value-a.value).map(a=>a.index);
    // value(실패율) 기준 내림차순 정렬
    // 정렬된 객체배열의 index를 answer로 push

    return answer;
}

let N = 5;
let stages = [2, 1, 2, 6, 2, 4, 3, 3];
console.log(solution(N,stages));