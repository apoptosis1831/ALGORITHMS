function solution(s){
    const arr = [];
    for(let i=0; i<s.length; i++){
        if(i===0 && s[i]===')') return false;
        //if(arr.length > s.length-i) return false;
        if(arr.length===0) arr.push(s[i]);
        else{
            const top = arr[arr.length-1];
            if(top==='(' && s[i]===')'){
                arr.pop();
            } else{
                arr.push(s[i]);
            }
        }
    }
    return arr.length===0 ? true : false;
}
// function solution(s){
//     let result = s.match(/(\(|\))/g);
//     console.log(result);
// }
const s = "()()"
console.log(solution(s));