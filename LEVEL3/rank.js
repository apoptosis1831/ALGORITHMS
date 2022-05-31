function solution(n, results){
    let tree = [];
    for(let i=0; i<n; i++){
        tree.push({
            parents : [],
            children : []
        });
    }
    results.forEach((result)=>{
        const [win, lose] = result;
        tree[win-1].children.push(lose);
        tree[lose-1].parents.push(win);
    });
    console.log(tree)
}
const n=5;
const results = [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]];
console.log(solution(n,results));