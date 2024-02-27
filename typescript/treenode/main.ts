import BinarySearchTree from "./binarySearchTree"

const new1 = new BinarySearchTree();
new1.insert(23);
new1.insert(123);
new1.insert(3);

new1.inOrderTraversal(new1.root);