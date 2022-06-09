function solution(n,t,m,timetable){
    const changed = timetable.map((time)=>{
        const [hour,minute] = time.split(':');
        return +hour * 60 + +minute;
    }).sort((a,b)=>a-b);
    
    function transform(min){
        let hour = String(parseInt(min/60));
        let minute = String(min%60);
        return hour.padStart(2,'0')+":"+minute.padStart(2,'0');
    }

    if(n===1) {
        if(changed.length >= m && changed[m-1] <= 540)
            return transform(changed[m-1]-1);
        return "09:00";
    }
    let busSeat = [];
    let busIdx =0;
    for(let i=0; i<n; i++){
        for(let k=0; k<m; k++){
            busSeat.push(540 + t*i);
        }
    }

    for(let i=0; i<changed.length; i++){
        if(busIdx === busSeat.length-1){
            if(changed[i] <= busSeat[busIdx]){
                return transform((changed[i]-1));
            }
            break;
        }
        if(busSeat[busIdx] < changed[i]){
            busIdx++;
            i--;
            continue;
        }
        busIdx++;
    }
    return transform(busSeat[busIdx]);
    // objTime = 540 + t*(n-1);
    // if(changed[n*m-1] < objTime) return transform(changed[n*m-1]-1);
    // let i=0;
    // let busIdx=1;
    // let peopleCnt =0;
    // for(;i<changed.length; i++){
    //     if(busIdx === n) break;
        
    //     if(changed[i]<=540+t*(busIdx-1)) {
    //         peopleCnt++;
    //         if(peopleCnt===m){
    //             busIdx++;
    //             peopleCnt=0;
    //         }
    //     }
    //     else {
    //         busIdx++;
    //         peopleCnt=0;
    //         if(busIdx===n) break;
    //     }
    // }
    // console.log(i);
    // if(changed[i+m-1] <= objTime) return transform(changed[i+m-1]-1);
    // return transform(objTime);
}
const n=2;
const t=10;
const m=2;
//const tt = [ "09:00", "09:10" ,"09:20" ,"09:30" ,"09:40" ,"09:50","10:00", "10:10" ,"10:20" ,"10:30" ,"10:40" ,"10:50"]; // "10:29"
//const tt=["08:00", "08:00", "09:00", "09:10"]
// const tt=["09:10", "09:09", "08:00"];
const tt = ["09:10", "09:09", "08:00"]
console.log(solution(n,t,m,tt));