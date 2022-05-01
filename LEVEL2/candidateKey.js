function solution(relation) {
    let result = [];
    const attributeCnt = relation[0].length;
    for(let i=1; i<attributeCnt+1; i++){
        combination('', 0, i);
    }
    //console.log(result);

    function combination(items, index, pick) {
        if (items.length === pick) {
            result.push(items);
            return;
        }
        for (let i = index; i < relation[0].length; i++) {
            //combination(`${items}${list[i]}`, i + 1, pick);
            combination(`${items}${i}`, i+1, pick);
        }
    }
    let map={};
    result.forEach((canKeys)=>{
        let IndexArr = canKeys.split('');
        let flag=true;
        for(let j=0; j<relation.length; j++){
            let key='';
            IndexArr.forEach((idx)=>{
                key+=relation[j][idx];
            });
            if(map[key]){
                flag=false;
                break;
            }
            map[key]=true;
        }
        //if(flag)
    })
    
}
const r = [["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]];
console.log(solution(r));