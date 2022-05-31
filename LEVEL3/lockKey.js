function solution(key, lock){
    const zero = []; // lock에서 0 포함하는 좌표
    for(let i=0; i<lock.length; i++){
        for(let k=0; k<lock[0].length; k++){
            if(lock[i][k]===0) zero.push([i,k]);
        }
    }
    if(zero.length===0) return true; // lock 의 value 모두 1일때

    let [minX, maxX, minY, maxY] = [21,-1,21,-1];
    zero.forEach(([x,y])=>{
        if(x>maxX) maxX=x;
        if(y>maxY) maxY=y;
        if(x<minX) minX=x;
        if(y<minY) minY=y;
    }); 
    let tmpLock = [];
    for(let i=minX; i<maxX+1; i++){
        tmpLock.push(lock[i].splice(minY,maxY-minY+1));
    } // lock 에서 0을 모두 포함하는 제일 작은 크기의 2차원 배열 만들기
    
    for(let i=0; i<tmpLock.length; i++){
        for(let k=0; k<tmpLock[0].length ; k++){
            tmpLock[i][k] = (tmpLock[i][k]) ? 0 : 1;
        }
    } // tmpLock 값 0->1 , 1->0
    
    if(isCheck(tmpLock)) return true;
    // rotate 한번도 안한 tmpLock이 isCheck true인지 확인

    for(let i=0; i<3; i++){
        tmpLock = rotate(tmpLock);
        if(isCheck(tmpLock)) return true;
    }
    return false;
    // 세번 90도 rotate했는데도 isCheck false이면 답은 false

    // lock 90도 회전한 결과 return 
    function rotate(lock){
        let newMat = [];
        for(let i=0;i<lock[0].length; i++){
            let temp = [];
            for(let k=lock.length-1 ;k>=0; k--){
                temp.push(lock[k][i]);
            }
            newMat.push(temp);
        }
        return newMat;
    }

    // lock이 key에 포함되는지 체크
    function isCheck(lock){
        for(let i=0; i<=key.length-lock.length; i++){
            for(let k=0; k<=key[0].length-lock[0].length; k++){
                let flag = false;
                for(let ii=0; ii<lock.length; ii++){
                    for(let kk=0; kk<lock[0].length; kk++){
                        if(lock[ii][kk]!==key[i+ii][k+kk]){
                            flag =true;
                            break;
                        }
                    }
                    if(flag) break;
                }
                if(!flag) return true;
            }
        }
        return false;
    }
}
const k = [[0, 0, 0], [1, 0, 0], [0, 1, 1]];
const l = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
console.log(solution(k,l));