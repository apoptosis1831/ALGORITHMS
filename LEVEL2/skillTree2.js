function solution(skill, skill_trees){
    const answer = skill_trees.map((st)=>{
        let newSkill = [...skill];
        st = st.split('');
        for(let i=0, idx=0; i<st.length; i++){
            if(newSkill.findIndex(el=>el===st[i])===-1)
            continue;
            if(st[i]===newSkill[idx++])  continue;
            return false;
        }
        return true;
    });
    return answer.filter(el=>el).length;
}
const s = "CBD";
const st = ["BACDE", "CBADF", "AECB", "BDA"];
console.log(solution(s,st));