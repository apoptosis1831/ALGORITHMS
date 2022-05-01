function solution(new_id) {
    var answer = '';

    //1단계 (소문자로 치환)
    answer = new_id.toLowerCase();

    //2단계 (영문, 숫자, 빼기, 밑줄, 마침표 제외하고 모두 제거)
    answer = answer.replace(/[^\w-._]+/g, '');

    //3단계 (마침표 2번이상 연속되면 하나로 치환)
    answer = answer.replace(/\.+/g, '.');

    //4단계 (처음이나 끝에 마침표 위치하면 삭제)
    /*    if(answer[0]=='.') answer= answer.substring(1);
        if(answer.charAt(answer.length-1) == '.')
        answer = answer.substring(0,answer.length-1);
    */
    answer = answer.replace(/^\./g, '');
    answer = answer.replace(/\.$/g, '');

    //5단계 (빈 문자열이면 a삽입)
    if (answer.length == 0) //answer += 'a';
        return 'aaa';

    //6단계 (문자열 길이 16이상이면 첫 15개 문자로)
    if (answer.length >= 16) answer = answer.substring(0, 15);
    answer = answer.replace(/\.$/g, '');

    //7단계 (길이 2이하면 마지막문자를 길이가 3이 될때까지 끝에 붙인다)
    /*    if(answer.length <=2)
            answer += answer.charAt(answer.length-1).repeat(3-answer.length);
    */
    if (answer.length <= 2)
        answer = answer.padEnd(3, answer[answer.length - 1]);
    
    return answer;
}
//var ans = solution('...!@BaT#*..y.abcdefghijklm.');
var ans = solution('z-+.^.');
console.log(ans);
