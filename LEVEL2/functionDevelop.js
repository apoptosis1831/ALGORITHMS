function solution(progresses, speeds) {
    let answer = [];
    let i=0;
    let cnt=1;
    const arr = progresses.map((progress,idx)=>{
         return Math.ceil((100-progress)/speeds[idx]);
    });
    // progress마다 끝나는 날짜 => arr
    console.log(arr);
    
    let k=1;
    while(k<arr.length){
        let first = arr[i];
        if(first >= arr[k]){
            k++;
            continue;
        } // 먼저 끝나는 업무가 뒤에 끝날 업무보다 늦으면
        
        answer.push(k-i);
        i=k;
        k++;
    }
    answer.push(k-i);
    console.log(answer);
    return answer;
}

const p=[93,30,55]
const s=[1,30,5]
solution(p,s);