function solution(id_list, report, k) {
    report = report.filter((val,idx)=>{
        return report.indexOf(val)===idx;
    })
    
    let reportArray = report.map((el) => el.split(" "));
    //console.log(reportArray);
    let idList = [];
    id_list.forEach((el)=>{
        idList.push({name:el, count:0, send:[]});
    })
    //console.log(idList);

    reportArray.forEach(rep =>{
        for(let index=0; index<id_list.length;index++){
            if(rep[1]===idList[index].name){
                idList[index].count++;
                idList[index].send.push(rep[0]);
                break;
            }
        }
    })
    //console.log(idList);
    let ansArray = [];
    let answer = new Array(id_list.length).fill(0);
    idList.forEach((ob)=>{
        if(ob.count >= k){
            ansArray.push(...ob.send);
        }
    })
    //console.log(ansArray);
    ansArray.forEach((str) => {
        id_list.forEach((id,i)=>{
            if(str === id){
                answer[i]++;
            }
        }
    )})

    return answer;
}

const id_list = ["muzi", "frodo", "apeach", "neo"];
//const id_list = ["con", "ryan"];
const report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
//const report = ["ryan con", "ryan con", "ryan con", "ryan con"];

const k = 2;

console.log(solution(id_list, report, k));