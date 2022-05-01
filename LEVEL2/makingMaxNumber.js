solution = (number,k) =>{
    let numArr =number.split('').map((el)=>Number(el));
    let startIndex=0;
    let size = k;
    let del = new Array(numArr.length).fill(true);
    //console.log(del);
    
    while(size>0){
        if(size===1){
            let i=startIndex;
            for(; i<numArr.length; i++){
                if(numArr[i]<numArr[i+1]){
                    del[i]=false;
                    break;
                }
            }
            if(i===numArr.length-1){
                del[numArr.length-1]=false;
                break;
            }
            break;
        }
        let maxValue =0;
        let maxIndex = -1;
        for(let i=startIndex; i<startIndex+size; i++){
            if(maxValue<numArr[i]){
                maxIndex=i;
                maxValue = numArr[i];
            }
        }
        if(maxIndex===-1){
            size--;
            startIndex++;
            continue;
        }
        for(let i=startIndex; i<maxIndex; i++){
            del[i]=false;
        }
        size -= (maxIndex-startIndex);
        startIndex = maxIndex+1;
    }
    //console.log(del);
    let answer = '';
    del.forEach((el,idx)=>{
        if(el){
            answer+=numArr[idx];
        }
    });
    
    return answer;
}
const n = '4177252841';
const k = 4;
console.log(solution(n,k));