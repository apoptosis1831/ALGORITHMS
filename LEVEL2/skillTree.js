function solution(skill, skill_trees) {
    skill = skill.split('');
    let answer = skill_trees.map((st) => {
        let newSkill = [...skill];
        st = st.split('').filter(el => {
            if (newSkill.findIndex(sk => sk === el) === -1) {
                return false;
            } else return true;
        }); // skill tree 에서 skill 에 없는 값 삭제
        if (st.length === 0) return true;
        // 삭제 후 skill tree에 남는 값 없으면 무조건 true
        const firstIdx = newSkill.findIndex(el => el === st[st.length - 1]);
        // skill에서 skill tree의 마지막 값 어디있는지 검색
        newSkill = newSkill.slice(0, firstIdx);
        // 찾은 마지막 값 바로 앞까지 배열 잘라주기
        st.pop();
        // skill tree에서도 그 값 날려주기

        while (st.length !== 0) {
            const stTop = st[st.length - 1];
            const skTop = newSkill[newSkill.length - 1];
            if (stTop !== skTop) return false;
            // 순서대로 스킬을 배우지 않았을때
            st.pop();
            newSkill.pop();
        }
        if (newSkill.length === 0) return true;
        else return false;
    });
    return answer.filter(el => el).length;
}
const s = 'CBD';
const st = ["BACDE", "CBADF", "AECB", "BDA"];
console.log(solution(s, st));