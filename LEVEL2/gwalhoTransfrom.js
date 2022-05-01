function isRight(w) {
    const stack = [];
    let idx = 0;
    while (idx !== w.length) {
        if (stack.length === 0) {
            if (w[idx] === ')') return false;
        }
        else if (stack[stack.length - 1] !== w[idx]) {
            stack.pop();
            idx++;
            continue;
        }
        stack.push(w[idx]);
        idx++;
    }
    return stack.length===0 ? true : false;
}

function separate(w) {
    const Cnt = [0, 0];
    let idx = 0;
    for (idx = 0; idx < w.length; idx++) {
        if (w[idx] === '(') Cnt[0]++;
        else Cnt[1]++;
        if (Cnt[0] === Cnt[1]) break;
    }
    return [w.substr(0, idx+1), w.substr(idx+1)];
}

function splitStr(wo){
    const newStr = [...wo].map((w)=>{
        return w===')' ? '(':')';
    })
    return newStr.join('');
}

function recursive(wo) {
    if (wo.length === 0) return '';
    let [u, v] = separate(wo);
    if (isRight(u)) {
        return u+recursive(v);
    }
    else{
        let newStr = '(';
        newStr += recursive(v);
        newStr += ')';
        u = u.substring(1,u.length-1);
        newStr += splitStr(u);
        return newStr;
    }
}

function solution(word) {
    if(isRight(word)) return word;
    return(recursive(word));
}
const p = '()))((()'
console.log(solution(p));