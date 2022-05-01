function solution(cacheSize, cities){
    let cache = [];
    let time=0;
    if(cacheSize===0) return 5*cities.length;
    cities.forEach((name)=>{
        name = name.toUpperCase();
        let idx = cache.findIndex((el)=>el===name);
        if(idx===-1){
            if(cache.length >= cacheSize){
                cache.shift();
            }
            time+=5;
        } else{ 
            cache.splice(idx,1)
            time+=1;
        }
        cache.push(name);
    });
    return time;
}
// const n = 3;
// const c = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"];
const n=2;
const c =["Jeju", "Pangyo", "NewYork", "newyork"];
console.log(solution(n,c));