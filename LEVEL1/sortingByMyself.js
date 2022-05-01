function solution(strings, n) {
    var answer = [];
    let strObj=[];
    strings.sort().forEach(el=>{
        strObj.push({index:el[n], str:el});
    })
    strObj.sort((a,b)=>{
        if(a.index < b.index) return -1
        if(a.index > b.index) return 1;
        return 0;
    }).forEach((el)=>{
        answer.push(el.str);
    })
    return answer;
}
const str=["sun", "bed", "car"];
const n=1;
console.log(solution(str,n));