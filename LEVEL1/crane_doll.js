function solution(board, moves) {
    var answer = 0;
    var array = [];
    var stack = [];

    // board -> array 로 옮기기
    var col_size = board[0].length;
    var row_size = board.length;
    for (var i = 0; i < col_size; i++) {
        var new_array = [];
        for (var j = row_size - 1; j >= 0; j--) {
            if (board[j][i] != 0) {
                new_array.push(board[j][i]);
            }
        }
        array.push(new_array);
    }

    // 크레인으로 인형 뽑기
    for (var move of moves) {
        if (array[move - 1].length === 0) continue; // 뽑을 인형 없으면 다음 move로 옮긴다

        var value = array[move - 1][array[move - 1].length - 1]; // 크레인으로 잡은 인형 -> value

        // 크레인으로 인형 잡았고, stack 비었으면
        if (stack.length === 0) {
            stack.push(value);
        }
        // 크레인으로 인형 잡았고, stack 에 인형 들어있으면
        else {
            var top = stack[stack.length - 1]; // stack.top
            if (top == value) {
                answer += 2;
                stack.pop();
            }
            else {
                stack.push(value);
            }
        }
        array[move - 1].pop(); // 뽑기게임에서 인형 없애기
    }

    return answer;
}

var board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
var moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));