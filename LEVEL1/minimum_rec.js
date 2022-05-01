function solution(sizes) {
    var answer = 0;
    console.log(sizes.length);
    let maxArray = [];
    let minArray = [];
    sizes.forEach((size)=>{
        if(size[0]>size[1]){
            maxArray.push(size[0]);
            minArray.push(size[1]);
        }
        else{
            maxArray.push(size[1]);
            minArray.push(size[0]);
        }
    })
    answer = Math.max(...maxArray)*Math.max(...minArray);
    return answer;
}
const s=[[60, 50], [30, 70], [60, 30], [80, 40]];
console.log(solution(s));