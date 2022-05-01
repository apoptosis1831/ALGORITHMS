function solution(board){
    let check = Array.from(Array(board.length), ()=>Array(board[0].length).fill(false));
    let answer = 0;
    for(let i=0; i<board.length; i++){
        for(let k=0; k<board[0].length; k++){
            if(board[i][k]===1 && !check[i][k]){
                const area = findMaxSquare(i,k);
                answer = Math.max(answer, area);
            } else continue;
        }
    }
    function findMaxSquare(i,k){
        
        let width=0;
        let height=0;
        for(let q=k; q<board[0].length; q++){
            if(board[i][q]===1) width++;
            else break;
        }
        for(let w=i; w<board.length; w++){
            if(board[w][k]===1) height++;
            else break;
        }
        let sqareLength = Math.min(height, width);
        for(let q=i; q<i+sqareLength; q++){
            for(let w=k; w<k+sqareLength; w++){
                if(board[q][w]!==1) return 0;
            }
        }
        for(let q=i; q<i+sqareLength; q++){
            for(let w=k; w<k+sqareLength; w++){
                check[q][w]=true;
            }
        }
        return Math.pow(sqareLength,2);
    }
    return answer;
}
//const b = [[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]];
//const b=[[0,0,1,1],[1,1,1,1]];
const b = [[0,0,0,0]];
console.log(solution(b));