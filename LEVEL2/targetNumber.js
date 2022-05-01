function solution(numbers, target) {
    let result = [];
    let cnt=0;
    const dfs = (nums, depth, sum)=>{
        if(depth === nums.length){
            console.log(sum);
            if(sum===target) cnt++;
            return;
        }
        dfs(nums,depth+1,sum+nums[depth]);
        dfs(nums,depth+1,sum-nums[depth]);
    }
    dfs(numbers,0,0,target);
    return cnt;
}
const n = [1, 1, 1, 1, 1];
const t = 3;
console.log('답='+solution(n,t));