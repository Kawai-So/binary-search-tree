const { expect } = require('chai');
const binarySearchTree = require('./index');

describe('binarySearchTree tests', () => {
  const bst = binarySearchTree();

  describe('.insert(value)', () =>
    it('should insert nodes to the tree', () => {
      bst.insert(50);
      bst.insert(80);
      bst.insert(30);
      bst.insert(90);
      bst.insert(60);
      bst.insert(40);
      bst.insert(20);
      bst.insert(20); // should not be inserted.
      expect(bst.count()).to.be.equal(7);
      expect(bst.root().getValue()).to.equal(50);
      expect(bst.root().getRight().getValue()).to.equal(80);
      expect(bst.root().getLeft().getValue()).to.equal(30);
    }));

  describe('.min()', () =>
    it('should get the node with min value', () =>
      expect(bst.min().getValue(20))));

  describe('.max()', () =>
    it('should get the node with max value', () =>
      expect(bst.max().getValue(90))));

  describe('.root()', () =>
    it('should get the node with min value', () =>
      expect(bst.root().getValue(50))));

  describe('.find(value)', () =>
    it('should find a value in the tree', () => {
      expect(bst.find(40).getValue()).to.equal(40);
      expect(bst.find(100)).to.equal(null);
    }));

  describe('.traverse(cb, type)', () => {
    it('should traverse the tree in order', () => {
      const values = [];
      bst.traverse(node => values.push(node.getValue()), 'inOrder');
      expect(values).to.deep.equal([20, 30, 40, 50, 60, 80, 90]);
    });

    it('should traverse the tree pre order', () => {
      const values = [];
      bst.traverse(node => values.push(node.getValue()), 'preOrder');
      expect(values).to.deep.equal([50, 30, 20, 40, 80, 60, 90]);
    });

    it('should traverse the tree post order', () => {
      const values = [];
      bst.traverse(node => values.push(node.getValue()), 'postOrder');
      expect(values).to.deep.equal([20, 40, 30, 60, 90, 80, 50]);
    });

    it('should traverse the tree in order by default', () => {
      const values = [];
      bst.traverse(node => values.push(node.getValue()));
      expect(values).to.deep.equal([20, 30, 40, 50, 60, 80, 90]);
    });
  });

  describe('.remove(value)', () => {
    it('should remove a leaf node', () => {
      bst.remove(20);
      expect(bst.find(20)).to.equal(null);
      expect(bst.find(30).getLeft()).to.equal(null);
      expect(bst.count()).to.equal(6);
    });

    it('should remove a node with a right child only', () => {
      bst.remove(30);
      expect(bst.find(30)).to.equal(null);
      expect(bst.root().getLeft().getValue()).to.equal(40);
      expect(bst.count()).to.equal(5);
    });


    it('should remove a node with a left child only', () => {
      bst.insert(30);
      bst.remove(40);
      expect(bst.find(40)).to.equal(null);
      expect(bst.root().getLeft().getValue()).to.equal(30);
      expect(bst.count()).to.equal(5);
    });

    it('should remove a node with two children', () => {
      bst.remove(80);
      expect(bst.find(80)).to.equal(null);
      expect(bst.root().getRight().getValue()).to.equal(90);
      expect(bst.find(90).getRight()).to.equal(null);
      expect(bst.find(90).getLeft().getValue()).to.equal(60);
      expect(bst.count()).to.equal(4);
    });
  });

  describe('.clear()', () => {
    bst.clear();
    expect(bst.count()).to.equal(0);
    expect(bst.root()).to.equal(null);
    expect(bst.remove(10)).to.equal(undefined);
  });
});
