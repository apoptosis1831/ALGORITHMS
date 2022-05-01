function solution(line){
    // num이 정수인지 확인
    function isInteger(num)  {
    return num % 1 === 0;
    }
    let integerArr = []; // 정수 좌표
    for(let i=0; i<line.length; i++){
        for(let k=i+1; k<line.length; k++){
            let [a,b,e] = line[i];
            let [c,d,f] = line[k];
            let x = (b*f-e*d)/(a*d-b*c);
            let y = (e*c-a*f)/(a*d-b*c);
            if(isInteger(x)&&isInteger(y)){
                integerArr.push([x,y]);
            }
        }
    }
    if(integerArr.length===1) return ['*'];
    
    let minX=Number.MAX_SAFE_INTEGER;
    let minY=Number.MAX_SAFE_INTEGER;
    let maxX=-Number.MAX_SAFE_INTEGER;
    let maxY=-Number.MAX_SAFE_INTEGER;
    integerArr.forEach(([x,y])=>{
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
    });
    let answer = [];
    for(let i=0; i<maxY-minY+1 ; i++){
        let tmp=[];
        for(let k=0; k<maxX- minX+1; k++){
            tmp.push('.');
        }
        answer.push(tmp);
    }
    // 별 찍기
    integerArr.forEach(([x,y])=>{
        answer[maxY-y][x-minX] = '*'
    });
    return answer.map((_,i)=>answer[i].join(''));
}
const l = [[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]];
console.log(solution(l));