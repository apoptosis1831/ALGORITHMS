function solution(jobs){
    let waitingRoom = [];
    let now =0;
    let answer = [];
    jobs.sort((a,b)=>{
        if(a[0]!==b[0])
           return a[0]-b[0];
        return a[1]-b[1];
    })
    while(jobs.length!==0 || waitingRoom.length !==0){ 
        if(jobs.length===0){
            waitingRoom.sort((a,b)=>a[1]-b[1]);
            while(waitingRoom.length > 0){
                scheduling();
            }
            break;
        }
        let i=0;
        for(i; i<jobs.length; i++){
            if(now >= jobs[i][0]) waitingRoom.push([...jobs[i]]);
            else break;
        }
        if(waitingRoom.length===0){
            const job = jobs.shift();
            waitingRoom.push([job[0],job[1]]);    
        }
        waitingRoom.sort((a,b)=>a[1]-b[1]);
        scheduling();
        jobs.splice(0,i);
    }
    function scheduling(){
        const [startTime, workTime] = waitingRoom.shift();
        if(now < startTime) now = startTime;
        now+=workTime;
        answer.push(now-startTime);
    }
    //console.log(answer);
    return parseInt(answer.reduce((prev,cur)=>prev+cur,0)/answer.length);
}
const j = [[0, 10], [2, 10], [9, 10], [15, 2]]; // 14
console.log(solution(j))