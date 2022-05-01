function solution(clothes){
    let map = {};
    clothes.forEach(([cloth,subject])=>{
        let key = subject;
        if(!map[key]) map[key]=[cloth];
        else map[key].push(cloth);
    });
    let mapArray = Object.entries(map);
    let clothInfo = [];
    mapArray.forEach(([_,arr])=>{
        clothInfo.push(arr.length+1);
    });
    return clothInfo.reduce((acc,cur)=>{ return acc* +cur},1 )-1;
    console.log(clothInfo);
    let num = 1<<clothInfo.length;
    let answer=0;
    for(let i=1; i<num; i++){
        let str = i.toString(2).split('');
        let tmpArr = [];
        str.forEach((el,idx)=>{
            let numberEl = +el;
            tmpArr.push(numberEl*clothInfo[clothInfo.length-idx-1] );

            console.log(numberEl,clothInfo[clothInfo.length-idx-1]);
        })
        //console.log(tmpArr)
       answer += tmpArr.reduce((acc,cur)=> acc * +cur, 1);
    }
    // console.log(answer);
    // console.log(clothInfo);
    return answer;
}
//const c = [['a','a'],['b','a'],['a','b'],['b','b'],['a','c'],['b','c']];
 const c = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];
console.log(solution(c));