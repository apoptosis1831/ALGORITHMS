function solution(priorities, location) {
    let q = [];
    priorities.forEach((_, ind) => {
        q.push(ind);
    });
    function findMaxIndex(que) {
        let maxValue = 0;
        let maxIndex = -1;
        que.forEach((el) => {
            if (maxValue < priorities[el]) {
                maxValue = priorities[el];
                maxIndex = el;
            }
        });
        return maxIndex;
    }

    let ansArr = [];
    while (q.length !== 0) {
        let maxIndex = findMaxIndex(q);
        while (q[0] !== maxIndex) {
            q.push(q[0]);
            q.shift();
        }
        if (q[0] === location) return ansArr.length + 1;
        ansArr.push(q[0]);
        q.shift();
    }
}
const p = [1, 1, 9, 1, 1, 1];
const l = 0;
console.log(solution(p, l));