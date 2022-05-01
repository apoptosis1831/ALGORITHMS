function solution(n) {
    let snailMap = [];
    for (let i = 0; i < n; i++) {
        let tmp = new Array(i + 1).fill(0);
        snailMap.push(tmp);
    } // 삼각형 모양 2차원 배열 생성

    // n일때 (x,y)에서 시작해서 smailMap 채우는 함수
    function fillMap(n, x, y, cnt){
        if(n===1){
            snailMap[x][y]=cnt;
            cnt++;
        } else if(n===2){
            snailMap[x][y]=cnt++;
            snailMap[x+1][y]=cnt++;
            snailMap[x+1][y+1]=cnt++;
        } else if(n===3){
            cnt = outLineFill(n,x,y,cnt);
        } else{
            cnt = outLineFill(n, x,y,cnt);
            fillMap(n-3,x+2,y+1,cnt);
            // n이 4이상일 떄 n-3으로 다시 fillMap 호출
        }
    }
    
    // snailMap의 테두리 채우는 함수
    function outLineFill(n, x,y,cnt){
        for(let i=x; i<x+n ; i++){
            snailMap[i][y]=cnt++;
        } // 아래로 채우기
        for(let i=y+1; i<y+n ; i++){
            snailMap[x+n-1][i]=cnt++;
        } // 오른쪽으로 채우기
        for(let i=x+n-2, k=y+n-2 ; i>x ;i--, k--){
            snailMap[i][k]=cnt++;
        } // 대각선(위+왼쪽)으로 채우기
        return cnt;
    }

    fillMap(n,0,0,1);
    return snailMap.flat();
}

const n = 6;
console.log(solution(n));