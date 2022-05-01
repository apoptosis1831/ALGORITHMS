function solution(s) {
    const sArray = [...s];
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        if (isRight(sArray)) answer++;
        let firstElement = sArray.shift();
        sArray.push(firstElement);
    }


    function isRight(arr) {
        let stack = [];
        let map = {};
        map['('] = ')';
        map['{'] = '}';
        map['['] = ']';
        for (let i = 0; i < arr.length; i++) {
            if (stack.length === 0) {
                stack.push(arr[i]);
                continue;
            }
            let top = stack[stack.length - 1];
            let insert = arr[i];
            if (map[top] === insert) stack.pop();
            else stack.push(insert);
        }
        if (stack.length === 0) return true;
        else return false;
    }

    return answer;
}
const s = '[](){}';
console.log(solution(s));