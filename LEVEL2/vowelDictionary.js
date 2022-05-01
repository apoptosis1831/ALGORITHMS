function solution(word){
    const words = ['A','E','I','O','U'];
    let tmp = "";
    let dictionary = [];
    function dfs(depth){
        dictionary.push(tmp);
        if(depth===5) return;
        for(let i=0; i<words.length; i++){
            tmp += words[i];
            dfs(depth+1);
            tmp = tmp.slice(0,-1);
        }
    }
    dfs(0);
    return dictionary.findIndex((el)=>el===word);
}
let word = 'AAAAE';
console.log(solution(word));