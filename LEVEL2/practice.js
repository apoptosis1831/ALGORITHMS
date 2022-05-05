function solution() {
    const answer = [[0, 0, 2, 3, 4, 1, 0, 0, 0, 0, 0], [8, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],[9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]];
    function compare(arr1, arr2){
        for(let i=10; i>=0 ; i--){
            if(arr1[i] > arr2[i]){
                return true;
            } else if(arr1[i]<arr2[i]){
                return false;
            }
        }
    }
    if (answer.length === 1) return answer[0];
    let candiIdx = compare(answer[0], answer[1]) ? 0 : 1;
    if(answer.length===2) return answer[candiIdx];
    for(let i=2; i<answer.length; i++){
        candiIdx = compare(answer[i],answer[candiIdx]) ? i : candiIdx;
    }
    return answer[candiIdx];
}
console.log(solution());