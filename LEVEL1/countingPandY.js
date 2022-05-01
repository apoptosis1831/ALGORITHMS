function solution(s){
    let aArray = s.match(/p/gi);
    let bArray = s.match(/y/gi);
    if(aArray===null && bArray===null) return true;
    let aLength, bLength;
    aLength = aArray===null ? 0 : aArray.length;
    bLength = bArray === null ? 0 :bArray.length;
    return aLength===bLength;
}
const str="ddd";
console.log(solution(str));