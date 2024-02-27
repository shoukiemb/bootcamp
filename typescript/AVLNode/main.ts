import AVLTree from "./avlTree";

let avl1 = new AVLTree();
avl1.insert(223);
avl1.insert(123);
avl1.insert(43);
avl1.insert(27);
avl1.insert(86);
avl1.insert(-68);
avl1.insert(1);

avl1.inOrderTraversal(avl1.root);
