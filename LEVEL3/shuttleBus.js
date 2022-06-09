function solution(n,t,m,timetable){
    // timetable -> 분(minutes)으로 변경
    const changed = timetable.map((time)=>{
        const [hour,minute] = time.split(':');
        return +hour * 60 + +minute;
    }).sort((a,b)=>a-b);
    
    // 변경된 분(minutes) -> 시간 문자열로(ex 09:00) 변경
    function transform(min){
        let hour = String(parseInt(min/60));
        let minute = String(min%60);
        return hour.padStart(2,'0')+":"+minute.padStart(2,'0');
    }

    // 무조건 09:00 버스 타야하는 상황
    if(n===1) {
        if(changed.length >= m && changed[m-1] <= 540)
            return transform(changed[m-1]-1);
        return "09:00";
    }

    // 셔틀버스 2대 이상일 경우
    let busSeat = []; // bus좌석 (value = 버스 출발 시간)
    let busIdx =0;
    for(let i=0; i<n; i++){
        for(let k=0; k<m; k++){
            busSeat.push(540 + t*i);
        }
    }

    for(let i=0; i<changed.length; i++){
        if(busIdx === busSeat.length-1){ // busSeat 마지막까지 도달함
            if(changed[i] <= busSeat[busIdx]){ // 버스 타려는 사람이 버스 출발 시간보다 빨리 옴(탈 수 있는 상황)
                return transform((changed[i]-1)); // 버스 타려는 사람보다 1분 빠르게 오기
            }
            break; // 버스 타려는 사람이 버스보다 늦게온 경우 (마지막 버스 출발시간 맞춰서 오기)
        }
        if(busSeat[busIdx] < changed[i]){ // 버스 타려는 사람이 버스 출발 시간보다 늦게 옴 (해당 bus seat 아무도 못탐)
            busIdx++;
            i--;
            continue;
        }
        busIdx++;
    }
    return transform(busSeat[busIdx]); //(마지막 버스 출발시간 맞춰서 오기)
}
const n=2;
const t=10;
const m=2;
//const tt = [ "09:00", "09:10" ,"09:20" ,"09:30" ,"09:40" ,"09:50","10:00", "10:10" ,"10:20" ,"10:30" ,"10:40" ,"10:50"]; // "10:29"
//const tt=["08:00", "08:00", "09:00", "09:10"]
// const tt=["09:10", "09:09", "08:00"];
const tt = ["09:10", "09:09", "08:00"]
console.log(solution(n,t,m,tt));