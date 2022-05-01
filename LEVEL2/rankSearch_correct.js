function solution(info,query){
    let answer = [];
    let map = {};

    function combination(infos, score, map, start){
        let key = infos.join("");
        let value = map[key];

        if(value){ // 값이 있으면 push
            map[key].push(score)
        } else{
            map[key] = [score];
        }
        for(let i=start; i<infos.length; i++){
            let combiArr = [...infos];
            combiArr[i] = '-';

            combination(combiArr, score, map, i+1);
        }
    }

    function binarySearch(map2, key2, score2){
        let scoreArr =map2[key2];
        if(scoreArr){
            let start = 0;
            let end = scoreArr.length;

            while(start < end){
                let mid = Math.floor((start+end)/2);
                if(scoreArr[mid] >= score2){
                    end = mid;
                } else if(scoreArr[mid] < score2){
                    start = mid+1;
                }
            }
            return scoreArr.length - start;
        }
        else return 0;
    }


    for(let i=0; i<info.length ; i++){
        let infos = info[i].split(" ");
        let score = infos.pop();

        combination(infos, score, map, 0);
    }
    for(let key in map){
        map[key].sort((o1,o2)=> o1-o2);
    }
    for(let i=0; i<query.length ; i++){
        let queries = query[i].replace(/ and /g, "").split(" ");
        let score = Number(queries.pop());

        answer.push(binarySearch(map, queries.join(""),score));
    }

    return answer;
}
const i = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"];
const q = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"];
console.log(solution(i,q));