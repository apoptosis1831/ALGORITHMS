function solution(grid) {
    let answer = [];
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    const board = new Array(grid.length);
    for (let i = 0; i < board.length; i++) {
        board[i] = new Array(grid[i].length);
    }

    grid.forEach((row, rowIndex) => {
        for (let i = 0; i < grid[rowIndex].length; i++) {
            board[rowIndex][i] = { direction: grid[rowIndex][i], dirBool: [false, false, false, false], dirIndex: -1 };
        }
    });

    for (let xx = 0; xx < board.length; xx++) {
        for (let yy = 0; yy < board[xx].length; yy++) {
            for (let d = 0; d < 4; d++) {
                const ansTmp = lightProgress(xx, yy, d);
                if (ansTmp != 0) answer.push(ansTmp);
            }
        }
    }

    function lightProgress(_x, _y, _dirIndex) {
        let cnt = 0;
        while (!board[_x][_y].dirBool[_dirIndex]) {
            board[_x][_y].dirBool[_dirIndex] = true;
            let index = calcurateIndex(board[_x][_y].direction, _dirIndex);
            board[_x][_y].dirIndex = index;
            _x = _x + dx[index];
            _y = _y + dy[index];
            [_x,_y] = exception(_x,_y);
            _dirIndex = index;
            cnt++;
        }
        return cnt;
    }

    function exception(x,y){
        if(x < 0) x=board.length-1;
        else if(x >= board.length) x=0;
        if(y < 0) y=board[0].length -1;
        else if(y >= board[0].length) y=0;
        return [x,y];
    }

    function calcurateIndex(d, dIndex) {
        if (d === 'S') return dIndex;
        if (d === 'L') return (dIndex + 3) % 4;
        if (d === 'R') return (dIndex + 1) % 4;
    }

    return answer.sort((a,b)=>a-b);
}
const g = ['S'];
console.log(solution(g));