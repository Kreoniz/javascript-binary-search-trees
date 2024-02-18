import Tree, { prettyPrint } from './bst.js';

(function driver() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomArray() {
    const size = getRandomInt(5, 20);
    const array = [];
    for (let i = 0; i < size; i += 1) {
      array.push(getRandomInt(0, 100));
    }
    return array;
  }

  const array = getRandomArray();
  const tree = new Tree(array);

  console.log('An array for the binary tree:');
  console.log(array);
  console.log()

  console.log('Binary tree visualization:');
  prettyPrint(tree.root);
  console.log()

  console.log('Is the tree balanced?', tree.isBalanced());
  console.log();

  console.log('Preorder traversal:');
  console.log(tree.preOrder().toString());
  console.log();

  console.log('Inorder traversal:');
  console.log(tree.inOrder().toString());
  console.log();

  console.log('Postorder traversal:');
  console.log(tree.postOrder().toString());
  console.log();

  console.log('Adding several numbers to unbalance the tree:');
  for (let i = 0; i < 10; i += 1) {
    tree.insert(getRandomInt(0, 100));
  }
  prettyPrint(tree.root);
  console.log();

  console.log('Is the tree balanced?', tree.isBalanced());
  console.log();

  console.log('Rebalancing the tree:');
  tree.rebalance();
  prettyPrint(tree.root);
  console.log();

  console.log('Is the tree balanced?', tree.isBalanced());
  console.log();

  console.log('Preorder traversal:');
  console.log(tree.preOrder().toString());
  console.log();

  console.log('Inorder traversal:');
  console.log(tree.inOrder().toString());
  console.log();

  console.log('Postorder traversal:');
  console.log(tree.postOrder().toString());
})();
