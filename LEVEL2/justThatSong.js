function solution(m, musicinfos) {
    function transformMelody(melody) {
        return melody.replace(/[A-Z]#/g, m => m[0].toLowerCase());
    } // #붙은 멜로디 -> 소문자로 변환
    m = transformMelody(m);
    const result = musicinfos.map((info, idx) => {
        [startTime, endTime, title, songMelody] = info.split(',');
        songMelody = transformMelody(songMelody);
        [startH, startM] = startTime.split(':');
        [endH, endM] = endTime.split(':');
        const songLength = (+endH * 60 + +endM) - (+startH * 60 + +startM);
        // 곡 재생 시간
        if (songMelody.length < songLength) {
            songMelody = songMelody.repeat(Math.ceil(songLength / songMelody.length));
        } // 곡의 멜로디 길이 보다 곡 재생 시간이 길면 repeat으로 반복
        songMelody = songMelody.substr(0, songLength);
        if (songMelody.indexOf(m) !== -1) return { songLength: songLength, index: idx, title: title };
        // m 포함된 info -> result에 넣어주기
    }).filter(el => el);
    if (result.length === 0) return '(None)';
    if (result.length === 1) return result[0].title;
    return result.sort((a, b) => {
        if (b.songLength === a.songLength) return a.index - b.index;
        return b.songLength - a.songLength;
    })[0].title;
}
const m = "ABCDEFG";
const mi = ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"];
// const m="ABC";
// const mi=["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"];
// const m='ABC';
// const mi=["12:00,12:14,HELLO,CDEFGAB", "13:00,13:14,WORLD,ABCDEF"];
console.log(solution(m, mi));