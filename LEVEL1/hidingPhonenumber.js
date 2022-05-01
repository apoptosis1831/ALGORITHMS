function solution(phone_number) {
    let ans = new Array(phone_number.length-4).fill('*').join('');
    ans += phone_number.slice(-4);
    return ans;
}
let pn = "01033334444";
console.log(solution(pn));