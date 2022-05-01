function solution(info, query) {
    let applicants = [];
    let queries = [];
    info.forEach((item)=>{
        const infoTmp = item.split(' ');
        applicants.push({lang : infoTmp[0], occ : infoTmp[1], career: infoTmp[2], soulFood: infoTmp[3], score: +infoTmp[4]});
    });
    applicants.sort((a,b)=>b.score-a.score);
    console.log(applicants);
    query.forEach((item)=>{
        const regex = / and /g;
        const queryTmp = item.replace(regex,' ').split(' ');
        queries.push({lang : queryTmp[0], occ : queryTmp[1], career : queryTmp[2], soulFood: queryTmp[3], score: +queryTmp[4]});
    });
    let answer =[];
    for(let i=0; i< queries.length ; i++){
        let count=0;
        for(let k=0; k< applicants.length; k++){
            if(queries[i].score > applicants[k].score) break;
            if(queries[i].lang !== '-' && queries[i].lang !== applicants[k].lang) continue;
            if(queries[i].occ !=='-' && queries[i].occ !== applicants[k].occ) continue;
            if(queries[i].career !=='-' && queries[i].career !== applicants[k].career) continue;
            if(queries[i].soulFood !=='-' && queries[i].soulFood !== applicants[k].soulFood) continue;
            count++;
        }
        answer.push(count);
    }
    return answer;
}
const i = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"];
const q = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"];
console.log(solution(i,q));