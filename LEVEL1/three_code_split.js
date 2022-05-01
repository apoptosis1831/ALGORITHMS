function solution(n) {
    var answer = 0;
    let numArray;
    let nu = (n.toString(3).split("").reverse().join(""));
    answer = parseInt(nu,3);
    return answer;
}

console.log(solution(125));