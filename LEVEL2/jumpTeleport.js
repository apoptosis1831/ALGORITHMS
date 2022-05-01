function solution(number) {
    if (number === 1 || number === 2) return 1;
    if (number % 2) { // 홀수
        return solution(number - 1) + 1;
    } else {
        return solution(number / 2);
    }
}
let n = 5000;
console.log(solution(n));