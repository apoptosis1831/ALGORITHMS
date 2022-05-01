function solution(s, n) {
    let answer = '';
    for(let i=0; i<s.length ;i++){
        let dem=s.charCodeAt(i);
        if(dem===32) {
            answer += ' ';
            continue;
        }
        let limit = (dem>=65 && dem <= 90) ? 90 : 122;
        let chNum = (dem+n > limit) ? dem+n-26 : dem+n;
        answer += String.fromCharCode(chNum);
    }
    return answer;
}

console.log(solution('a B z',4));