function solution(enroll, referral, seller, amount){
    let employee = new Map();
    let childParent = new Map();
    enroll.forEach((name,idx)=>{
        employee.set(name,0);
        childParent.set(name, referral[idx]);
    });
    seller.forEach((name,idx)=>{
        employee.set(name, employee.get(name)+amount[idx]*100);
        let passing = amount[idx]*100;
        while(passing/10 > 1){
            employee.set(name, employee.get(name)-Math.floor(passing/10));
            let parent = childParent.get(name);
            if(parent==='-') break;
            employee.set(parent, employee.get(parent)+Math.floor(passing/10));
            passing = Math.floor(passing/10);
            name = parent;
        }
    })
    return Array.from(employee.values());
}
// const enroll = ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"];
// const referral = ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"];
// const seller = ["young", "john", "tod", "emily", "mary"];
// const amount = [12, 4, 2, 5, 10]
const enroll=['a','b','c','d'];
const referral = ['-','a','a','-']
const seller = ['b','c','b']
const amount = [1,2,3]
console.log(solution(enroll,referral,seller,amount));