"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var treenode_1 = require("./treenode");
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (key) {
        this.root = this.insertData(this.root, key);
    };
    BinarySearchTree.prototype.insertData = function (node, key) {
        if (node === null) {
            return new treenode_1.default(key);
        }
        if (key < node.key) {
            node.left = this.insertData(node.left, key);
        }
        else if (key > node.key) {
            node.right = this.insertData(node.right, key);
        }
        return node;
    };
    BinarySearchTree.prototype.inOrderTraversal = function (node) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.key);
            this.inOrderTraversal(node.right);
        }
    };
    return BinarySearchTree;
}());
exports.default = BinarySearchTree;
