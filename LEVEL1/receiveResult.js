function solution(id_list, report, k) {
    const filteredReport = [...new Set(report)];
    // 중복된 report 값 삭제
    
    const reportArray = filteredReport.map((el) => el.split(' '));
    // sender, receiver 분리
    
    const idList = reportArray.reduce((acc,[sender,receiver])=> {
        const index = acc.findIndex((item)=>item.name === receiver);
        // idList의 name과 reportArray의 두번째 값이 같을때 idList의 index
        if (index === -1) acc.push({name:receiver, count:1, send:[sender]})
        // idList 등록
        else {
            acc[index].count += 1;
            acc[index].send.push(sender);
        }
        // index를 찾으면 해당 idList count값 증가, send 배열에 보낸사람 추가
        return acc;
    },[]);
    // initial value = 빈 배열
    // initial value 없으면 acc에 reportArray[0]이 초기값으로 설정=> 0번째 검사못함
    
    const answer = new Array(id_list.length).fill(0);
    const ansArray = idList.map((obj)=> {
        if(obj.count >= k ) return obj.send;
        // idList 값 중 count가 k보다 크거나 같으면 send반환
    }).filter((item) => item).flatMap(send => send);
    // filter : undefined삭제
    // flatMap : 배열 풀어주기(2차배열->1차배열)
    
    ansArray.forEach((str) => {
        answer[id_list.indexOf(str)] += 1;
    });

    return answer; 
}
const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
const k = 2;
console.log(solution(id_list,report,k));