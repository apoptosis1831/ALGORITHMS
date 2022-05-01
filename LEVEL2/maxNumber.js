function solution(numbers){
    const numbersToString = numbers.map((num)=>{
        return num.toString();
    });
    numbersToString.sort((a,b)=>{
        return +(b+a)- +(a+b);
    })
    return numbersToString.join('');
}
const n = [3, 30, 34, 5, 9];
console.log(solution(n));