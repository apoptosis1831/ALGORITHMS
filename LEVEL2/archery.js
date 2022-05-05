function solution(n, info) {
    let lion = new Array(11).fill(0); // 라이언이 양궁을 쏜 결과
    let maxdiff = 0; // 라이언이 낼수있는 가장 큰 차이
    let answer = []; // maxdiff를 낼수있는 라이언의 양궁결과들

    function dfs(reserveCnt, index) {
        if (reserveCnt === 0 || index === 11) {
            if(reserveCnt!==0) lion[10]+=reserveCnt; // 쏠수있는 arrow 있을때 0점에 해당 arrow수 추가
            const [apeachScore, lionScore] = calcurateScore(lion);
            if (apeachScore < lionScore) { // 라이언의 총 점수가 높을때
                const scoreDiff = lionScore-apeachScore; // 라이언과 어피치의 점수 차이
                if (maxdiff <= scoreDiff) {
                    if(maxdiff<scoreDiff) answer = []; // 이번 점수차가 maxdiff보다 클때 기존 answer 삭제
                    maxdiff = scoreDiff;
                    answer.push([...lion]);
                }
            }
            if(reserveCnt!==0) lion[10]-=reserveCnt;
            return;
        }
        if (info[index] < reserveCnt) { // 라이언이 (10-index)점수를 얻을 수 있을때
            lion[index] += (info[index] + 1);
            dfs(reserveCnt - (info[index] + 1), index + 1);
            lion[index] -= (info[index] + 1);
        }
        dfs(reserveCnt, index + 1);
    }

    // 점수 계산해주는 함수
    function calcurateScore(lionInfo) {
        let apeachS = 0,lionS = 0;
        for (let i = 0; i < 11; i++) {
            if (info[i] === 0 && lionInfo[i] === 0) continue;
            if (info[i] >= lionInfo[i]) apeachS += (10 - i);
            else lionS += (10 - i);
        }
        return [apeachS, lionS];
    }
    
    // answer 여러개일때 answer 찾아주는 함수
    function compare(arr1, arr2){
        for(let i=10; i>=0 ; i--){
            if(arr1[i] > arr2[i]){
                return true;
            } else if(arr1[i]<arr2[i]){
                return false;
            }
        }
    }

    dfs(n, 0);
    if(answer.length===0) return [-1];
    if (answer.length === 1) return answer[0];
    let candiIdx = 0;
    for(let i=1; i<answer.length; i++){
        candiIdx = compare(answer[i],answer[candiIdx]) ? i : candiIdx;
    }
    return answer[candiIdx];
}
const n = 5;
const info = [2,1,1,1,0,0,0,0,0,0,0]
console.log(solution(n, info));