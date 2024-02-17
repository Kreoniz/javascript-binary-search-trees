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
    let tmp = this.root;
    let prev = null;

    while (tmp !== null && tmp.data !== value) {
      prev = tmp;
      if (value > tmp.data) {
        tmp = tmp.right;
      } else if (value < tmp.data) {
        tmp = tmp.left;
      }
    }

    if (tmp === null) {
      return;
    }

    else if (tmp.left === null || tmp.right === null) {
      let newTmp;

      if (tmp.left === null) {
        newTmp = tmp.right;
      } else if (tmp.right === null) {
        newTmp = tmp.left;
      }

      if (tmp === prev.left) {
        prev.left = newTmp;
      } else {
        prev.right = newTmp;
      }

      tmp = null;
    }

    else {
      let succ = tmp.right;
      let succPrev = tmp;
      while (succ.left !== null) {
        succPrev = succ;
        succ = succ.left;
      }

      succPrev.left = succ.right;
      succ.left = tmp.left;
      succ.right = tmp.right;

      if (prev === null) {
        this.root = succ;
      } else if (tmp === prev.right) {
        prev.right = succ;
      } else if (tmp === prev.left) {
        prev.left = succ;
      }
    }
  }

  find(value) {
    let tmp = this.root;
    while (tmp !== null && tmp.data !== value) {
      if (value > tmp.data) {
        tmp = tmp.right;
      } else if (value < tmp.data) {
        tmp = tmp.left;
      }
    }

    return tmp;
  }

  levelOrder(callback) {
    const queue = [this.root];

    while (queue.length > 0) {
      const tmp = queue.shift();
      if (tmp.left) {
        queue.push(tmp.left);
      }
      if (tmp.right) {
        queue.push(tmp.right);
      }

      callback(tmp);
    }
  }

  levelOrderRecursive(callback, node=this.root) {
    if (node === null) return;
    this.levelOrderRecursive(callback, node.left);
    callback(node);
    this.levelOrderRecursive(callback, node.right);

    return callback;
  }

  inOrder(callback=[], node=this.root) {
    if (node === null) return;
    this.inOrder(callback, node.left);
    if (Array.isArray(callback)) {
      callback.push(node.data);
    } else {
      callback(node);
    }
    this.inOrder(callback, node.right);

    return callback;
  }

  preOrder(callback=[], node=this.root) {
    if (node === null) return;
    if (Array.isArray(callback)) {
      callback.push(node.data);
    } else {
      callback(node);
    }
    this.preOrder(callback, node.left);
    this.preOrder(callback, node.right);

    return callback;
  }

  postOrder(callback=[], node=this.root) {
    if (node === null) return;
    this.postOrder(callback, node.left);
    this.postOrder(callback, node.right);
    if (Array.isArray(callback)) {
      callback.push(node.data);
    } else {
      callback(node);
    }

    return callback;
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

tree.insert(21);
console.log();
console.log('Number inserted:');
prettyPrint(tree.root);

tree.delete(8);
console.log();
console.log('Number deleted:');
prettyPrint(tree.root);

console.log();
console.log('Number found:');
console.log(tree.find(23));

console.log();
console.log('Each value multiplied');
tree.levelOrder((node) => {
  node.data = node.data * 2;
});
prettyPrint(tree.root);

console.log();
console.log('Each value divided (recursively)');
tree.levelOrderRecursive((node) => {
  node.data = node.data / 2;
});
prettyPrint(tree.root);

console.log();
console.log('Preorder:', tree.preOrder());
console.log();
console.log('Inorder:', tree.inOrder());
console.log();
console.log('Postorder:', tree.postOrder());
