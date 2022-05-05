function solution(s) {
    return s.split(' ').map((word)=>{
        if(word==='') return word;
        if(/[0-9]/.test(word[0])){
            return word.toLowerCase()
        } else{
            return word[0].toUpperCase()+word.substr(1).toLowerCase();
        }
    }).join(' ');
}
const s = "3people unFollowed  me";
console.log(solution(s));