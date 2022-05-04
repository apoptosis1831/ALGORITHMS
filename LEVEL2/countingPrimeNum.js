function solution(n,k){
    function isPrime(num){
        if(num===1) return false;
        if(num===2) return true;
        for(let i=2; i<=Math.floor(Math.sqrt(num)); i++){
            if(num%i===0) return false;
        }
        return true;
    }

    let answer =0;
    n.toString(k).split('0').filter((el)=>el).forEach((el)=>{
        let number = +el;
        if(isPrime(number)) answer++;
    });
    return answer;
}
const n=110011;
const k=10;
console.log(solution(n,k));