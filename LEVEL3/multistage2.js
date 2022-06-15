function solution(enroll, referral, seller, amount){
    let employee = new Map();
    let childParent = new Map();
    enroll.forEach((name, idx)=>{
        childParent.set(name, referral[idx]);
        let index = seller.findIndex(el=>el===name);
        if(index===-1){
            employee.set(name, [[0], 0]);
        } else{
            employee.set(name, [[amount[index]*100], 0]);
            const set = new Set(seller);
            if(seller.length !== set.length){
                for(let i=index+1; i<seller.length; i++){
                    if(seller[i]===name){
                        //console.log(employee.get(name))
                        employee.get(name)[0].push(amount[i]*100);
                    }
                }
            }
        }
    });
    
    for(let i=0; i<seller.length; i++){
        let [name, profit] = [seller[i], amount[i]*100]
        
        while(Math.floor(profit/10) >= 1){
            const parent = childParent.get(name);
            employee.get(name)[1]-=Math.floor(profit/10);
            if(parent ==='-') break;
            employee.get(parent)[1]+= Math.floor(profit/10);
            // employee.find(([emName, , ])=>emName === parent)[2] += Math.floor(profit/10);
            profit = Math.floor(profit/10);
            if(profit < 10) break;
            name = parent;
        }
    }
    
    return Array.from(employee.values()).map(([arr,add])=>{
        return arr.reduce((prev,cur)=>prev+cur,0)+add;
    });
    // return employee.values().map(([arr, add])=>{
    //     return arr.reduce((prev,cur)=>prev+cur,0)+add;
    // })

}

const enroll=['a','b','c','d'];
const referral = ['-','a','a','-']
const seller = ['b','c','b']
const amount = [1,2,3]
console.log(solution(enroll,referral,seller,amount));