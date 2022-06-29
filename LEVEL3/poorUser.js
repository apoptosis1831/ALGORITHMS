function solution(user_id, banned_id) {
    function isMatch(uId, bId){
        if(uId.length !== bId.length) return false;
        for(let i=0; i<uId.length; i++){
            if(bId[i]==='*') continue;
            if(uId[i]!==bId[i]) return false;
        }
        return true;
    }
    
    let arr = [];
    function dfs(remain_users, banId, ban){
        if(banId.length===0) {
            arr.push(ban);
            return;
        } else{
            for(let idx=0; idx<remain_users.length ; idx++){
                if(isMatch(remain_users[idx],banId[0])){
                    dfs([...remain_users.slice(0,idx), ...remain_users.slice(idx+1)], banId.slice(1), [...ban, remain_users[idx]])
                }
            }
        }
    }
    dfs(user_id.slice(), banned_id.slice(), []);
    return Array.from(new Set(arr.map(i=>i.sort().join()))).length
}

const user_id=["frodo", "fradi", "crodo", "abc123", "frodoc"];
//const banned_id = ["fr*d*", "abc1**"]
const banned_id = ["*rodo", "*rodo", "******"];
console.log(solution(user_id,banned_id));