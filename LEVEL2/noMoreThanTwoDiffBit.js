function solution(numbers){
    // return numbers.map((el)=>{
    //     if(el%2===0) return el+1;
    //     let num=el+1;
    //     while(diffBit(el,num)>2){
    //         num=num+1;
    //     }
    //     return num;
    // });
    // function diffBit(num1,num2){
    //     // return parseInt(num1^num2,2).split('').filter((el)=>el==='1').length;
    //     return (BigInt(num1)^BigInt(num2)).toString(2).split('').filter((el)=>el==='1').length;
    // }

    return numbers.map((el)=>{
        if(el%2===0){
            return el+1;
        }
        // if(el.toString(2).substr(-2)==='01') return el+2;
        let strArr = el.toString(2).split('');
        let i=strArr.length-1;

        for(i; i>=0;i--){
            if(strArr[i]==='0'){
                strArr[i]='1';
                strArr[i+1]='0';
                console.log(strArr);
                return parseInt(strArr.join(''),2);
            }
        }
        if(i===-1){
            strArr[0]='0';
            strArr.unshift('1');
            //console.log(strArr);
            return parseInt(strArr.join(''),2);
        }
    })
}
const numbers = [2,7];
console.log(solution(numbers));

// let num1=7;
// let num2=11;
// let result =BigInt(num1)^BigInt(num2); 
// console.log(result.toString(2));