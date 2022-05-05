function solution(arr1, arr2) {
    let answer = Array.from(Array(arr1.length), ()=> new Array(arr2[0].length).fill(0));
    for(let i=0; i< arr1.length; i++){
        for(let k=0, j=0; k<arr2[0].length; k++){
            for(let j=0; j<arr2.length; j++){
                answer[i][k] += arr1[i][j] * arr2[j][k];
            }
        }
    }
    return answer;
}