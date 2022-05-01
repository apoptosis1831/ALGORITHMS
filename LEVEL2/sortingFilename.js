const solution = (files) =>
    files.map((file) => {
        const [_, head, number] = file.match(/(\D*)([0-9]{0,5})/);
        // const idxHead = file.search(/[0-9]/);
        // //const head = file.substr(0,idxHead);
        // file = file.substr(idxHead);
        // let idxNumber = file.search(/[^0-9]/);
        // if(idxNumber === -1){
        //     idxNumber = file.length;
        // }
        // if(idxNumber>5) {
        //     idxNumber=5;
        // }
        // const number = file.substr(0,idxNumber);
        // const tail = file.substr(idxNumber);
        return { head, number, file };
    }).sort((a, b) => {
        const aHead = a.head.toUpperCase();
        const bHead = b.head.toUpperCase();
        if (aHead !== bHead)
            return aHead.localeCompare(bHead);
        return +(a.number) - +(b.number);
    }).map((el) => el.file);
const f = ["img000009.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]
const a = ["a1", "MUZI1.txt", "muzi001.txt", "muzi1.TXT"]
console.log(solution(a));