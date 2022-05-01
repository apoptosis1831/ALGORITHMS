function solution(n, arr1, arr2) {
    let answer = new Array(n).fill('');
    let arrString1 = [];
    let arrString2 = [];
    arr1.forEach(el =>{
        let a = el.toString(2);
        while(a.length < n){
            a= '0'+a;
        }
        arrString1.push(a);
    })
    arr2.forEach(el =>{
        let a = el.toString(2);
        while(a.length < n){
            a= '0'+a;
        }
        arrString2.push(a);
    })
    for(let i=0;i<n;i++){
        for(let k=0; k<n; k++){
            if(arrString1[i][k] | arrString2[i][k])
            answer[i]+='#';
            else
            answer[i]+=' ';
        }
    }

    return answer;
}
const n=5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];
console.log(solution(n,arr1,arr2));