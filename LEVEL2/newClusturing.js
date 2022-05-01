function solution(str1, str2){
    // str1 = str1.toUpperCase();
    // str2 = str2.toUpperCase();
    // let strArr1=[];
    // let strArr2=[];
    // for(let i=0; i<str1.length-1 ; i++){
    //     strArr1.push({value : str1.substr(i,2), bool:false});
    // }
    // for(let i=0; i<str2.length-1 ; i++){
    //     strArr2.push({value : str2.substr(i,2), bool:false});
    // }    
    
    // //console.log(strArr1, strArr2);
    
    // const re = /[A-Z]{2,}/;
    // strArr1 = strArr1.filter(el=>{
    //     return re.test(el.value);
    // })
    // strArr2 = strArr2.filter(el=>{
    //     return re.test(el.value);
    // })

    // //console.log(strArr1, strArr2);

    // if(strArr1.length===0 || strArr2.length===0) return 65536;

    const s1 = [1,2,4,4,4];
    const s2 = [4,4,5,6,7,8,8];

    let strArr1=[];
    let strArr2=[];
    
    [...s1].forEach(el=>{
        strArr1.push({value:el, bool:false});
    });
    [...s2].forEach(el=>{
        strArr2.push({value:el, bool:false});
    });

    console.log(strArr1);
    console.log(strArr2);
    
    let interCnt=0;
    let min, max;
    if (strArr1.length < strArr2.length){
        min = strArr1;
        max = strArr2;
    } else{
        min = strArr2;
        max = strArr1;
    }
    for(let i=0; i<min.length; i++){
        for(let k=0; k<max.length; k++){
            if(min[i].value===max[k].value && max[k].bool===false){
                interCnt++;
                max[k].bool=true;
                break;
            }
        }
    }
    console.log(interCnt);
    interCnt=0;
    let unionCnt = strArr1.length+strArr2.length-interCnt;
    console.log(unionCnt);
    if(unionCnt===0) return 65536;
    return Math.floor(interCnt*65536/unionCnt);
}
const s1 = 'aaa';
const s2 = 'aaaa';
console.log(solution(s1,s2));