function solution(s){
    let arr = s.split('');
    let i=0;
    while(i < arr.length){
        if(arr[i]===arr[i+1]){
            arr.splice(i,2);
            i--;
            if(i<0) i=0;
            continue;
        }
        i++;
    }
    console.log(arr);
    return arr.length === 0 ? 1:0;
    
}
const str='baabaa';
console.log(solution(str));