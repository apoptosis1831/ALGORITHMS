function solution(bridgeLength, weight, truckWeights){
    let queBrdg = new Array(bridgeLength).fill(0);
    let passedTruck = [];
    let i=0;
    let upToBrdgWeight = 0;
    let answer =0;
    while(passedTruck.length !== truckWeights.length){
        const nextTruck = truckWeights[i];
        rotateBrdg();
        if(isAvailable(nextTruck)){
            if(upToBrdgWeight===0){
                queBrdg[bridgeLength-1]=nextTruck;
            }
            queBrdg[bridgeLength-1]=nextTruck;
            i++;
            upToBrdgWeight+=nextTruck;
        }
        answer++;
    }

    function isAvailable(nextTruck){
        if(upToBrdgWeight+nextTruck > weight) return false;
        return true;
    }

    function rotateBrdg(){
        let endTruck = queBrdg.shift();
        queBrdg.push(0);
        upToBrdgWeight -= endTruck;
        if(endTruck){
            passedTruck.push(endTruck);
        }
    }
    return answer;
}
const bL = 100;
const w = 100;
const tW = [10,10,10,10,10,10,10,10,10,10];
console.log(solution(bL,w,tW));