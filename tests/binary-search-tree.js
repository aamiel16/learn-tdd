const mocha = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const { Node, BinarySearchTree } = require('../src/binary-search-tree');

describe('Node', function() {
  describe('constructor', function() {
    let node;

    before(function() {
      node = new Node(1);
    });

    it('should set instance.key from argument', function() {
      expect(node.key).to.be.equal(1);
    });

    it('should set instance.left to null', function() {
      expect(node.left).to.be.null;
    });

    it('should set instance.right to null', function() {
      expect(node.right).to.be.null;
    });
  });
});

describe('Binary Search Tree', function() {
  describe('constructor', function() {
    let bst;

    before(function() {
      bst = new BinarySearchTree();
    });

    it('should set instance.root to null', function() {
      expect(bst.root).to.be.null;
    });
  });

  describe('insert', function() {
    let bst;

    beforeEach(function() {
      bst = new BinarySearchTree();
    });

    it('should set a Node as root on first insert', function() {
      bst.insert(1);
      expect(bst.root).to.be.an.instanceof(Node);
      expect(bst.root.key).to.be.equal(1);
    });

    it('should insert to left if key is less than', function() {
      bst.insert(3);
      bst.insert(2);
      bst.insert(1);
      expect(bst.root.left).to.be.an.instanceof(Node);
      expect(bst.root.left.key).to.be.equal(2);
      expect(bst.root.left.left).to.be.an.instanceof(Node);
      expect(bst.root.left.left.key).to.be.equal(1);
    });

    it('should insert to right if key is greater than', function() {
      bst.insert(1);
      bst.insert(2);
      bst.insert(3);
      expect(bst.root.right).to.be.an.instanceof(Node);
      expect(bst.root.right.key).to.be.equal(2);
      expect(bst.root.right.right).to.be.an.instanceof(Node);
      expect(bst.root.right.right.key).to.be.equal(3);
    });
  });
});
