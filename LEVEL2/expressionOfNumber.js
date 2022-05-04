function solution(n) {
    let answer = 0;
    for (let i = 1; i < n; i++) {
        let sum = 0;
        let plus = i;
        while (sum <= n) {
            if (sum === n) {
                answer++;
                break;
            }
            sum += plus;
            plus++;
        }
    }
    return answer + 1;
}
const n = 15;
console.log(solution(n));