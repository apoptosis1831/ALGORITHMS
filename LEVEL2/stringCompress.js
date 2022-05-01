function solution(s) {
    if(s.length === 1) return 1;

    // 문자열 길이 num 만큼 압축하기
    function makingCompress(num){
        let ansString='';
        for(let idx=0; idx<s.length ; ){
            let ch = s.substr(idx,num);
            // idx부터 num개수 만큼 자르기
            let cnt=1;
            for(let i=idx+num; i<s.length; i+=num){
                if(ch===s.substr(i,num)){
                    cnt++;
                }
                else break;
            }
            // cnt 1 이상이면 정답문자열에 적어주고, 1이면 생략
            if(cnt > 1){
                ansString += cnt + ch;
            }
            else ansString += ch;
            idx+=cnt*num;
        }
        return ansString.length;
    }
    let n=1;
    let answer = 1000;
    while(n<s.length){
        let value = makingCompress(n);
        answer = Math.min(answer,value);
        n++;
    }
    return answer;
}

const str = "ababcdcdababcdcd";
console.log('정답=' +solution(str));