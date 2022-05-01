function solution(n, lost, reserve) {
    const new_reserve = reserve.map(res => res-1);
    let new_lost = lost.map(l => l-1);
    let answer = n-lost.length;

    new_reserve.sort();
    new_lost.sort();

    // lost에 속한 학생들은 다른 학생에게 빌려줄 수 없다
    for(let i=0; i<new_lost.length; i++){
        let lost_student = new_lost[i];
        let index = new_reserve.indexOf(lost_student);
        if(index !== -1){ // 빌려줄 수 없는 상태
            new_lost.splice(i,1);
            new_reserve.splice(index,1);
            answer++;
            i--;
        }
    }

    for(let i=0; i<lost.length ; i++){
        let lost_student = new_lost[i];
        // 잃어버린 학생 번호보다 1 작은 학생 먼저 탐색
        let prev_student = new_reserve.indexOf(lost_student-1);
        if(prev_student !== -1){
            new_reserve.splice(prev_student,1);
            answer++;
            continue;
        }
        // 잃어버린 학생 번호보다 1 큰 학생 그 다음 탐색
        let next_student = new_reserve.indexOf(lost_student+1);
        if(next_student !== -1){
            new_reserve.splice(next_student,1);
            answer++;
            continue;
        }
    }

    return answer;
}

const n =5;
const lost = [1, 2,4,5];
const reserve = [2,3,4];      

//solution(n, lost, reserve);

console.log(solution(n,lost,reserve));