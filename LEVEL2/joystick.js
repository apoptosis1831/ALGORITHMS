function solution(name){
    let minNum = 100;
    let notAcnt = 0;
    let nameCnt=[];
    let answer=0;
    for(let i=0; i<name.length; i++){
        let moveCnt =name.charCodeAt(i)-65; 
        //console.log(moveCnt);
        if(moveCnt <= 13) nameCnt.push(moveCnt);
        else nameCnt.push(26-moveCnt);
        answer+=nameCnt[i];
        if(name[i]!=='A')
            notAcnt++;
    }
    console.log(notAcnt);
    function recurs(idx, cnt, ans){
        if(cnt === notAcnt){
            minNum=Math.min(minNum,ans);
            return;
        }
        if(arr[idx]!=='A'){
            ans++;
            recurs(idx, cnt, ans);
        }
        idx++;
    }
    recurs(0, )
}
const n='BBABAAAABBBAAAABABB'; //26
//const n = 'JAN';
console.log(solution(n));