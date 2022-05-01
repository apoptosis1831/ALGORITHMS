// 구명보트 2명 타고 무게제한 있다
// people [70,50,80,50] 사람들 몸무게, limit 무게제한=100
// 모든 사람 구출하기 위해 필요한 구명보트 개수 최소값

function solution(people, limit) {
    let answer = people.length;
    people.sort();
    let start = 0;
    let end = people.length - 1;
    while (start < end) {
        if (people[start] + people[end] <= limit) {
            answer--;
            start++;
        }
        end--;
    }

    return answer;
}
const p = [70, 50, 80, 50];
const l = 100;
console.log(solution(p, l));