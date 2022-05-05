function solution(fees, records){
    const [basicMin, basicFee, perMin, perFee] = fees;
    const parkingInfo = [];
    let carInfo = new Map();
    records.forEach((el)=>{
        const [clock, carNumber, state] = el.split(' ');
        if(state==='IN'){
            parkingInfo.push({clock,carNumber});
            if(!carInfo.has(carNumber)){
                carInfo.set(carNumber,0);
            }
        } else{
            const idx = parkingInfo.findIndex((info)=>
                info.carNumber === carNumber
            );            
            const inInfo = parkingInfo[idx];
            let usingMin = calcurateMin(clock, inInfo.clock);
            carInfo.set(carNumber, carInfo.get(carNumber)+usingMin);
            parkingInfo.splice(idx,1);
        }
    });
    parkingInfo.forEach((info)=>{
        let usingMin = calcurateMin('23:59',info.clock);
        carInfo.set(info.carNumber, carInfo.get(info.carNumber)+usingMin);
    });
    let answer = [];
    for(let [carNum, usingTime] of carInfo){
        let fee = basicFee;
        if(usingTime > basicMin) {
            fee += (Math.ceil((usingTime-basicMin) / perMin)) * perFee;
        }
        answer.push([carNum,fee]);
    }
    return answer.sort((a,b)=> +a[0] - +b[0]).map(([_,fee])=>fee);

    function calcurateMin(outClock, inClock){
        const [inH, inM]=inClock.split(':')
        const [outH, outM]=outClock.split(':')
        return (outH-inH)*60 + (outM-inM);
    }
}
const fees=[180, 5000, 10, 600];
const records =["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"];
console.log(solution(fees,records));