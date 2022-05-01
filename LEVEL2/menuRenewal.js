function solution(orders, course) {
    let answer = [];
    orders = orders.map((ord) => ord.split('').sort().join('')); // orders 문자열 오름차순 정렬

    function getCombinations(arr, selectNumber) {
        const result = [];
        if (selectNumber === 1) {
            return arr.map((value) => [value]);
        }
        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1);
            const combinations = getCombinations(rest, selectNumber - 1);
            const attached = combinations.map((combi) => [fixed, ...combi]);
            result.push(...attached);
        });
        return result;
    } // 조합 만들기(arr에서 selectNumber 수만큼 조합)

    function isContain(order, keyArr) {
        for (let key of keyArr) {
            if (!order.includes(key)) return false;
        }
        return true;
    } // order안에 keyArr가 모두 포함돼있으면 true, 아니면 false

    course.forEach((crs) => {
        let keyValue = new Map();
        let ansArr = [];
        orders.forEach((ord) => {
            ansArr = getCombinations([...ord], crs);
            ansArr.forEach((keyArr) => {
                let key = keyArr.toString();
                keyValue.set(key, 0);
            }) // keyValue map만들기
        })

        for (let k of keyValue.keys()) {
            const ks = k.split(',');
            orders.forEach((ord) => {
                if (isContain(ord, ks)) {
                    keyValue.set(k, keyValue.get(k) + 1);
                }
            })
        } // order에 keyValue 포함돼있으면 keyValue 값 count 올려주기

        let maxCnt = Math.max(...keyValue.values());
        // keyValue 의 값 중 최대값
        if (maxCnt !== 1) {
            keyValue = Array.from(keyValue); // map -> Array
            keyValue.sort((a, b) => b[1] - a[1]); // value로 내림차순 정렬
            for (let idx = 0; idx < keyValue.length; idx++) {
                if (maxCnt === keyValue[idx][1]) {
                    answer.push(keyValue[idx][0]);
                } // maxCnt와 keyValue의 value 같으면 answer에 push
                else break;
            }
        }
    })
    // 모든 course 돌아가면서 answer 넣어주기

    answer = answer.map((ans) => ans.split(',').join('')).sort(); // answer 오름차순 정렬

    return answer;
}
const o = ["XYZ", "XWY", "WXA"]
const c = [2, 3, 4];
console.log(solution(o, c));