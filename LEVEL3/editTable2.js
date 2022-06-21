function solution(n,k,cmd){
    let n1 = {
        data : 0
    }
    let n2 = {
        data : 1
    }
    let n3 = {
        data : 2
    }

    n1.next = n2;
    n2.next = n3;
    console.log(n1)
}
const n=8;
const k=2;
const cmd = ["D 2","C","U 3","C","D 4","C","U 2","Z","Z"];
console.log(solution(n,k,cmd))