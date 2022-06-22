function solution(n,k,cmd){
    const Node = function(index,prev){
        this.index = index;
        this.prev= prev;
        this.next = null
    }
    
    let prevNode = new Node(0);
    let select;

    for(let i=1; i<n; i++){
        const cntNode = new Node(i, prevNode);
        prevNode.next=cntNode;
        prevNode = cntNode;
        if(i===k){
            select = cntNode;
        }
    }

    let deleteArr = [];

    const moveSelectNode = (count, direction) =>{
        for(let i=0; i<count; i++){
            if(!select[direction]) break;
            select = select[direction];
        }
    }

    const deleteNode = () =>{
        const prev = select.prev;
        const next = select.next;

        deleteArr.push(select);

        select = next ? next : prev;

        if(prev) prev.next= next;
        if(next) next.prev = prev;
    }

    const recoverNode = () =>{
        const targetNode = deleteArr.pop();

        const prev = targetNode.prev;
        const next = targetNode.next;

        if(prev) prev.next = targetNode;
        if(next) next.prev = targetNode;
    }

    cmd.forEach((c)=>{
        switch(c[0]){
            case 'U':
                moveSelectNode(c.split(" ")[1], "prev");
                break;
            case 'D':
                moveSelectNode(c.split(" ")[1], "next");
                break;
            case "C":
                deleteNode();
                break;
            case "Z":
                recoverNode();
                break;
        }
    })

    let result = Array(n).fill("O");
    deleteArr.forEach((node)=>{
        result[node.index] = "X";
    });
    return result.join("");
}
const n=8;
const k=2;
const cmd = ["D 2","C","U 3","C","D 4","C","U 2","Z","Z"];
console.log(solution(n,k,cmd))