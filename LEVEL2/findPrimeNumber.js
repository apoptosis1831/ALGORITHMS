function solution(numbers){
    let cnt=0;
    let splited = numbers.split('');
    const getPermutations = function(arr, selectNumber){
        const results= [];
        if(selectNumber === 1) return arr.map((el)=>[el]);
        arr.forEach((fixed,index,origin)=>{
            const rest = [...origin.slice(0,index), ...origin.slice(index+1)];
            const permutations = getPermutations(rest,selectNumber-1);
            const attached = permutations.map((el)=> [fixed, ...el]);
            results.push(...attached);
        });
        return results;
    }
    function isPrime(num){
        if(num<=1) return false;
        if(num%2===0) return num===2 ? true:false;
        const sqrt = parseInt(Math.sqrt(num));
        for(let divisor = 3 ; divisor <= sqrt ; divisor +=2 ){
            if(num%divisor===0) return false;
        }
        return true;
    }
    let permuNumbers = [];
    for(let i=1; i<=splited.length; i++){
        permuNumbers.push(...getPermutations(splited,i));
    }
    let filtered = new Set (permuNumbers.map((el)=>{
        return +el.join('');
    }));
    [...filtered].forEach((el)=>{
        if(isPrime(el)) cnt++
    })
    return cnt;
}
const n = "17";
console.log(solution(n));