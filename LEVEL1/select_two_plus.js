function solution(numbers) {
    let answer = new Set();
    for(let i=0; i<numbers.length-1; i++){
        for(let k=i+1; k<numbers.length;k++){
            answer.add(numbers[i]+numbers[k]);
        }
    }
    answer = [...answer].sort((a,b)=>a-b);
    return answer;
}
const numbers = [2,1,3,4,1];
console.log(solution(numbers));