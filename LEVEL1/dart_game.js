function solution(dartResult) {
    var answer = 0;
    let myRe = /\d+[SDT][*#]*/g;
    let arr = dartResult.match(myRe);
    let answerArray=new Array(arr.size).fill('');
    arr.forEach((el,i)=>{
        let num = Number(el.match(/\d+/));
        let ch = el.match(/[SDT]/);
        let p= {'S':1, 'D':2, 'T':3};
        let option = el.match(/[*#]/);
        num = num ** p[ch];
        if(option=='*'){
            num *=2;
            if(i >= 1) answerArray[i-1] *= 2;
        }
        else if(option == '#'){
            num *= (-1);
        }
        answerArray[i]=num;
        //console.log(num);

    })
    console.log(answerArray);
    
    return answerArray.reduce((acc,cur)=>{
        return acc+cur;
    },0)
}
const str=	"1S2D*3T";
console.log(solution(str));