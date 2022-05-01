function solution(relation) {
    let column = relation[0].length;
    let row = relation.length;
    let count = 0;
    let bitMaskList = [];
    console.log(15<<2);
    for(let i = 1; i < (1 << column); ++i) {
        let keySet = new Set();
        for(let j = 0; j < row; ++j) {
            let key = "";
            for(let k = 0; k < column; ++k) {
                if((i & (1 << k)) != 0) key += relation[j][k];
            }
            keySet.add(key);
        }
        if(keySet.size == row && duplcateCheck(bitMaskList, i)) ++count;
    }

    return count;
}

function duplcateCheck(list, key) {
    let size = list.length;
    for(let i=0; i<size; ++i) {
        if((list[i] & key) == list[i]) return false;
    }
    list.push(key);
    return true;
}

const r = [["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]];
console.log(solution(r));