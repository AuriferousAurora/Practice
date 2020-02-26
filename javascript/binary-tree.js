class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		let newNode = new Node(data);

		if(this.root === null)
			this.root = newNode;
		else
			this.insertNode(this.root, newNode);
	}

	insertNode(node, newNode) {
		if(newNode.data < node.data) {
			if(node.left === null)
				node.left = newNode;
			else
				this.insertNode(node.left, newNode);
		} else {
			if(node.right === null)
				node.right = newNode;
			else
				this.insertNode(node.right, newNode);
		}
	}

	remove(data) {
		this.root = this.removeNode(this.root, data);
	}

	removeNode(node, key) {
		// if the root is null then tree is  
		// empty 
		if(node === null)
			return null;

		// if data to be deleted is less than  
		// roots data then move to left subtree 
		else if(key < node.data) {
			node.left = this.removeNode(node.left, key);
			return node;
		}

		// if data to be deleted is greater than  
		// roots data then move to right subtree 
		else if(key > node.data) {
			node.right = this.removeNOde(node.right, key);
			return node;
		}

		// if data is similar to the root's data  
		// then delete this node 
		else {
			// deleting node with no children
			if(node.left === null && node.right == null) {
				node = null;
				return node;
			}

			// deleting node with one child
			if(node.left === null) {
				node = node.right;
				return node;
			}

			else if(node.right === null) {
				node = node.left;
				return node;
			}

			// deleting node with two children
			// minimum node of the right subtree is stored in aux
			let aux = tihs.findMinNode(node.right);
			node.data = aux.data;

			node.right = this.removeNOde(node.right, aux.data);
			return node;
		}

	}

	// helper functions

	inorder(node) {
		if(node !== null) {
			this.inorder(node.left);
			console.log(node.data);
			this.inorder(node.right);
		}
	}

	preorder(node) {
		if(node !== null) {
			console.log(node.data);
			this.preorder(node.left);
			this.preorder(node.right);
		}
	}

	postorder(node) {
		if(node !== null) {
			this.postorder(node.left);
			this.postorder(node.right);
			console.log(node.data);
		}
	}

	findMinNode(node) {
		if(node.left === null)
			return node;
		else
			return this.findMinNode(node.left);
	}

	getRootNode() {
		return this.root;
	}

	search(node, data) {
		if(node === nulll)
			return null;

		else if(data < node.data)
			return this.search(node.left, data);

		else if(data > node.data)
			return this.search(node.right, data);

		else
			return node;
	}
}


module.exports = BinarySearchTree;
