function solution(record) {
    record = record.map(el => {
        return el.split(' ');
    });
    // record를 띄어쓰기로 나눈다
    let ansArray= new Map();
    // Map오브젝트 생성
    record.forEach(([ins,id,nickName])=>{
        if(ins==='Enter' || ins === 'Change')
        ansArray.set(id,nickName);
    });
    // record의 첫번째 단어가 Enter 혹은 Change이면 map에 key-value 값 set
    const answer = record.map(([ins,id,_])=>{
        const nName = ansArray.get(id);
        // user id로 닉네임 가져오기
        if(ins==='Enter'){
            return nName+'님이 들어왔습니다.';
        }
        else if(ins === 'Leave'){
            return nName+'님이 나갔습니다.';
        }
    }).filter(item=>item);
    // answer 안에 비어있는 값 삭제
    return answer;
}
const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];
console.log(solution(record));