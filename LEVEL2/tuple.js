const solution = function(s){
    let inputArr = [];
    s.split('},{').forEach((el)=>{
        el = el.replace('{{','');
        el = el.replace('}}','');
        inputArr.push(el.split(',').map((el)=>Number(el)));
    });

    let map = new Map();
    inputArr.forEach((el)=>{
        el.forEach((num)=>{
            if(map.has(num)) map.set(num, map.get(num)+1);
            else map.set(num, 1);
        });
    });

    let mapArr = [...map].sort((a,b)=> b[1]-a[1]);

    return mapArr.map((el)=>el[0]);
}
const str = '{{2},{2,1},{2,1,3},{2,1,3,4}}';
console.log(solution(str));