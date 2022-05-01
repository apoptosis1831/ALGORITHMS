function solution(msg){
    const dictionary = Array.from({length : 26},(_,i)=>String.fromCharCode(i+65));
    const answer = [];
    while(msg.length>1){
        let i=2;
        while(dictionary.findIndex((el)=>el ===msg.substr(0,i))!== -1){
            i++;
            if(i===msg.length+1) break;
        } // 사전에서 일치하는 가장 긴 문자열 찾기
        const w = msg.substr(0,i-1);
        const c = msg[i-1];
        answer.push(dictionary.findIndex((el)=>el===msg.substr(0,i-1))+1); // 출력
        msg = msg.substr(i-1); // msg에서 w 제거
        dictionary.push(w+c); // 새로운 단어 사전에 등록
    }
    if(msg!==''){
        answer.push(dictionary.findIndex((el)=>el===msg)+1);
    } // msg 남아있는 문자 있으면 마지막 출력
    return answer;
}
const m = 'TOBEORNOTTOBEORTOBEORNOT';
console.log(solution(m));