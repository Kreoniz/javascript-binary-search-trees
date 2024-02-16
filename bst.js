class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    if (array.length === 0) {
      return null;
    }

    const filtered = [...new Set(array.slice().sort((a, b) => a - b))];
    const mid = parseInt(filtered.length / 2);

    const root = new Node(filtered[mid]);
    root.left = this.buildTree(filtered.slice(0, mid));
    root.right = this.buildTree(filtered.slice(mid + 1, filtered.length));
    
    return root;
  }

  insert(value) {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
      return;
    }

    let tmp = this.root;
    let prev = null;
    while (tmp !== null) {
      if (value > tmp.data) {
        prev = tmp;
        tmp = tmp.right;
      } else if (value < tmp.data) {
        prev = tmp;
        tmp = tmp.left;
      } else if (value === tmp.data) {
        return;
      }
    }

    if (value > prev.data) {
      prev.right = node;
    } else {
      prev.left = node;
    }
  }

  delete(value) {
  }
}

 const prettyPrint = (node, prefix = "", isLeft = true) => {
   if (node === null) {
     return;
   }
   if (node.right !== null) {
     prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
   }
   console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
   if (node.left !== null) {
     prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
   }
 };


const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

prettyPrint(tree.root);
tree.insert(11);
console.log('Number inserted:');
prettyPrint(tree.root);
