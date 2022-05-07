function solution(lines){
    const infoes = lines.map((info)=>{
        let [endDate, endTime, period] = info.split(' ');
        period = +period.substring(0, period.length-1);
        const endTmp = new Date(endDate + ' ' + endTime).getTime();
        const startTmp = endTmp-period*1000+1;
        return [startTmp, endTmp];
    });
    let maxCnt = 0;
    infoes.forEach(([start, end], idx)=>{
        const startEnd = start+999;
        const endEnd = end+999;
        let cnt = [1,1];
        for(let i=idx+1; i<infoes.length; i++){
            if(startEnd >= infoes[i][0]) cnt[0]++;
            if(endEnd >= infoes[i][0]) cnt[1]++;
        }
        maxCnt = Math.max(maxCnt,...cnt);
    })
    return maxCnt;
}
const l = [
    "2016-09-15 01:00:04.002 2.0s",
    "2016-09-15 01:00:07.000 2s"
    ];
console.log(solution(l));