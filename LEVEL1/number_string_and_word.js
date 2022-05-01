/*function solution(s) {
    var answer = '';
    var table = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    };
    //console.log(table.one);
    //console.log(Object.keys(table));

    //    console.log("s.length=",s.length);
    for (var index = 0; index < s.length; index++) {
        if (s[index] >= '0' && s[index] <= '9') // 숫자
        {
            answer += s[index];
            continue;
        }
        for (var k in table) {
            var a = s.indexOf(k, index);
            if (a != -1) {
                answer += table[k];
                index += k.length - 1;
                break;
            }
        }

    }


    return Number(answer);
}*/
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}

var s = "one2one345";
console.log("정답은" + solution(s));