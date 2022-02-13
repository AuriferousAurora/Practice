const buildLinkedList = (n, x) => {
  class Node{
    constructor(value) {
      this.value = value;
      this.next = null;
    }

    getNext() {
      return this.next;
    }
  }

  let list = [];
  list.push(new Node(0));

  for (let i = 1; i < n; i++) {
    let prev = list[i - 1];
    prev.next = new Node(i);
    list.push(prev.next);
  }

  let last = list[list.length - 1];
  last.next = list[x - 1];

  return list;
}

const list = buildLinkedList(14, 4);

function loopSize(node){
  let nodes = [node];
  let a = node;
  
  while (!nodes.includes(a.next)) {
    a = a.next;
    nodes.push(a);
  }
  const x = a.next;
  const i = nodes.indexOf(x);
  const loop = nodes.length - i;
  return loop;
}

function loopSize2(node) {
  let nodes = [node];
  let a = node;

  while (!nodes.includes(a.next)){
    a = a.next;
    nodes.push(a);
  }
  return nodes.length - nodes.indexOf(a.next);
}

console.log(loopSize2(list[0]));


