const BinarySearchTree = require("./binary-tree");

let br = function() { console.log("------ break -------"); }
let bst = new BinarySearchTree();
let starterData = [15, 25, 10, 7, 22, 17, 13, 5, 9, 27];

for(let i = 0; i < starterData.length; i++)
	bst.insert(starterData[i]);

let root = bst.getRootNode();
bst.inorder(root);
br();

// removing node with no children
bst.remove(5);

root = bst.getRootNode();
bst.inorder(root);
br();

// removing node with one child
bst.remove(7);

root = bst.getRootNode();
bst.inorder(root);
br();

root = bst.getRootNode();

console.log("\n" + "inorder traversal");
bst.inorder(root);

console.log("\n" + "postorder traversal");
bst.postorder(root);

console.log("\n" + "preorder traversal");
bst.preorder(root);