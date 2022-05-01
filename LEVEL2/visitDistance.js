function solution(dirs) {
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    const garo = Array.from(Array(11), ()=>new Array(10).fill(false));
    const sero = Array.from(Array(10), ()=>new Array(11).fill(false));

    const dirsNum = dirs.split('').map((el)=>{
        switch(el){
            case 'U': return 0;
            case 'D' : return 1;
            case 'L' : return 2;
            case 'R' : return 3;
        }
    });

    let x=5;
    let y=5;
    let answer=0;
    for(let i=0; i<dirsNum.length; i++){
        const dir = dirsNum[i];
        if(x+dx[dir]>10 || y+dy[dir]>10 || x+dx[dir]<0 || y+dy[dir]<0) continue;
        let garoXY= [];
        let seroXY = [];
        if(dir===0){
            seroXY = [x-1, y];
        } else if(dir===1){
            seroXY = [x,y];
        } else if(dir===2){
            garoXY = [x, y-1];
        } else{
            garoXY = [x,y];
        }
        x += dx[dir];
        y += dy[dir];
        if(dir===0 || dir===1){
            if(!sero[seroXY[0]][seroXY[1]]){
                sero[seroXY[0]][seroXY[1]]=true;
                answer++;
            }
        } else{
            if(!garo[garoXY[0]][garoXY[1]]){
                garo[garoXY[0]][garoXY[1]]=true;
                answer++;
            }
        }
    }
    return answer;
}
//const d = "ULURRDLLU";
const d = "DDDDDDDDDD";
console.log(solution(d));