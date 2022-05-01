function solution(a, b) {
    var answer = '';
    let days = 0;
    const monthDay = [31,29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const yoil = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    for(let i=0; i<a-1; i++){
        days += monthDay[i];
    }
    days+=b;
    answer = yoil[(days-1)%7];
    return answer;
}
const a=5;
const b=24;
console.log(solution(a,b));