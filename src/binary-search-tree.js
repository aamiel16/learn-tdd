function Node(key) {
  this.key = key;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.insert = function insert(key, node = this.root) {
  if (!this.root) {
    this.root = new Node(key);
  }

  if (!node) {
    return new Node(key);
  }

  if (key < node.key) {
    node.left = insert(key, node.left);
  }

  if (key > node.key) {
    node.right = insert(key, node.right);
  }

  return node;
}

module.exports.Node = Node;
module.exports.BinarySearchTree = BinarySearchTree;
