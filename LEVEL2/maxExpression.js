function solution(expression){
    const reg= /[\*\+\-]/g;
    const numbers = expression.split(reg);
    const ops = expression.match(reg);
    // expression -> 숫자와 연산자로 나누기

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
    // 순열 배열 구하기

    const tmpOps = new Set(ops); // ops에 속하는 연산자들
    const opsCase = getPermutations( [...tmpOps], tmpOps.size);
    // 연산자들로 순열 만들기
    
    function calc(num1, num2, op){
        switch(op){
            case '-': return num1-num2;
            case '+': return num1+num2;
            case '*': return num1*num2;
        }
        return 'error';
    }
    // num1과 num2를 op연산자로 연산

    const answerArr = [];
    opsCase.forEach((cs)=>{
        answerArr.push(calcurate(cs,Array.from(numbers),Array.from(ops)));
    })
    // 모든 case 계산 결과값 answerArr에 넣기
    
    function calcurate(casee,numbers,ops){
        casee.forEach((op)=>{
            for(let i=0; i<ops.length; i++){
                if(op === ops[i]){
                    const calcNum = calc(Number(numbers[i]),Number(numbers[i+1]),op);
                    numbers.splice(i,2,calcNum);
                    ops.splice(i,1);
                    i--;
                }
                // 해당되는 연산자 계산 후 numbers와 ops에서 삭제
            }
        });
        return numbers[0];
    }
    // casee(순열 결과값 들어가있는 배열)과 numbers, ops 로 계산하기
    
    return Math.max(...answerArr.map((answer)=>Math.abs(answer)));
    // 절대값으로 변환해서 최대값 return 해줌
}
const exp = '100-200*300-500+20';
console.log(solution(exp));