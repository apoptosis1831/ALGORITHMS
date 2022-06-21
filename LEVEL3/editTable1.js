function solution(n,k,cmd){
    let row = new Array(n).fill(false);
    let selected = k;
    let deleteList = [];
    cmd.forEach((line)=>{
        let [order,num]=line.split(' ');
        if(order==='D'){
            let tmpSelected = selected;
            for(let i=1; i<=num ; i++){
                if(selected+i >=n) break;
                if(row[selected+i]) {
                    tmpSelected++;
                    num++;
                }
                else tmpSelected++;
            }
            selected=tmpSelected;
        }
        if(order==='C'){
            row[selected]=true;
            deleteList.push(selected);
            if(selected!==n-1){
                let tmpSelected = selected+1;
                while(row[tmpSelected]){
                    tmpSelected++;
                    if(tmpSelected>=n-1) break;
                }
                selected=tmpSelected;
            } else{
                let tmpSelected=selected-1;
                while(row[tmpSelected]){
                    tmpSelected--;
                    if(tmpSelected===0) break;
                }
                selected=tmpSelected;
            }
        }
        if(order==='U'){
            let tmpSelected = selected;
            for(let i=1; i<=num; i++){
                if(selected-i <=0) break;
                if(row[selected-i]) {
                    tmpSelected--;
                    num++;
                }
                else tmpSelected--;
            }
            selected=tmpSelected;
        }
        if(order==='Z'){
            let index=deleteList.pop();
            row[index]=false;
        }
    })
    return row.map((el)=> el ? 'X' : 'O').join('')
}
const n=8;
const k=2;
const cmd = ["D 2","C","U 3","C","D 4","C","U 2","Z","Z"];
console.log(solution(n,k,cmd))