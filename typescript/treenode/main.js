"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var binarySearchTree_1 = require("./binarySearchTree");
var new1 = new binarySearchTree_1.default();
new1.insert(23);
new1.insert(123);
new1.insert(3);
new1.inOrderTraversal(new1.root);
