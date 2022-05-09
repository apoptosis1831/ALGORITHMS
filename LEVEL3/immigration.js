function solution(n, times){
    times.sort((a,b)=>a-b);
    let right = n * times[times.length-1]; // 최대 걸리는 시간
    let left = 1;
    let answer = right;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        let cnt=0;
        for(let i=0; i<times.length ; i++){
            cnt += Math.floor(mid/times[i]);
            if(cnt >= n) {
                answer = Math.min(answer,mid);
                break;
            }
        }
        if(cnt >= n) right = mid-1;
        else left = mid+1;
    }
    return answer;
}
const n = 6;
const times = [7,10];
console.log(solution(n,times));