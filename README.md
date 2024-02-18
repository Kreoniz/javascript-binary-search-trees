# Binary search tree JavaScript implementation
---

## Implementation details
The `bst.js` file exports a `Tree` class and a `prettyPrint` function.

The `Tree` class takes an array of numbers as an argument and generates a
binary search tree.

The `prettyPrint` function takes a node as an argument and visualizes the BST.

### Methods
The `Tree` class contains several methods:

- `buildTree(array)` method takes an array of dataand turns it into a balanced
  binary tree full of `Node` objects appropriately placed (sorting and removing
  duplicates in-place).
- `insert(value)` method inserts a given value in a tree (without rebalancing
  the tree).
- `delete(value)` method deletes a value from a tree.
- `find(value)` method returns the node with the given value.
- `levelOrder(callback)` accepts an optional callback function as its parameter
  and traverses the tree in breadth-first level order providing each node to
  the callback.
- `inOrder(callback=[], node=this.root)`, `preOrder(callback=[],
  node=this.root)`, `postOrder(callback=[], node=this.root)` accept an optional
  callback as a parameter. Each of these functions traverses the tree in their
  respective depth-first order and yield each node to the provided callback.
  The functions return an array of values if no callback is given as an
  argument.
- `height(node)` returns the given node's height or `-1` if an element is not
  in a tree.
- `depth(node)` returns the given node's depth or `-1` if an element is not in
  a tree.
- `isBalanced()` method checks if the tree is balanced and returns
  `true`/`false` accordingly.
- `rebalance` method rebalances the tree.
