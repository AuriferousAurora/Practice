using System;

namespace BinaryTree 
{
	  class Node 
	  {
		    public int data;
		    public Node left, right;

		    public Node(int integer) 
			{
				data = integer;
				left = null;
				right = null;
			}
	  }

	class BinarySearchTree
	{
		public Node root;

		public BinarySearchTree()
		{
			root = null;
		}

		public BinarySearchTree(int data)
		{
			root = new Node(data);
		}

		public void Insert(int data)
		{
			Node newNode = new Node(data);

			if (root == null)
				root = newNode;
			else
				InsertNode(root, newNode);
		}

		public void InsertNode(Node node, Node newNode)
		{
			if (newNode.data < node.data) {
				if (node.left is null) {
					node.left = newNode;
				} else {
				InsertNode(node.left, newNode);
				}
			} else {
				if (node.right is null) {
					node.right = newNode;
				} else {
					this.InsertNode(node.right, newNode);
				}
			} 
		}

		public void Remove(int data) 
		{
			root = RemoveNode(root, data);
		}
		// Can I rewrite the remove method such that it does not return a node but still
		// removes the correct one?
		public Node RemoveNode(Node node, int data)
		{
			if (node == null)
				return null;

			if (data < node.data) {
				node.left = this.RemoveNode(node.left, data);
				return node;
			} else if (data > node.data) {
				node.right = RemoveNode(node.right, data);
				return node;
			} else {
				if (node.left is null && node.right is null) {
					node = null;
					return node;
				} else if (node.left is null) {
					node = node.right;
					return node;
				} else if (node.right is null) {
					node = node.left;
					return node;
				} else {
					Node auxiliary = this.FindMinNode(node.right);
					node.data = auxiliary.data;

					node.right = this.RemoveNode(node.right, auxiliary.data);
					return node;
				}
			}
		}

		// Helper methods

		public int size = 0;

		public int GetSize(Node node)
		{
			// Refactor to use virtual methods: one that sets size and one that gets size.

			if (!(node.left is null) || !(node.right is null))
				size = size + 1;
			if(!(node.left is null))
				GetSize(node.left);
			if(!(node.right is null))
				GetSize(node.right);
			return size;
		}

		public Node GetRootNode()
		{
			return root;
		}

		public Node FindMinNode(Node node) 
		{
			if (node.left is null)
				return node;
			return FindMinNode(node.left);
		}

		public void TraverseInOrder(Node node)
		{
			if (!(node is null)) {
				Console.WriteLine(node.data);
				// if (!(node.left is null))
					// Console.WriteLine("recur with " + node.data.ToString() + ".left : " + node.left.data.ToString());
				this.TraverseInOrder(node.left);
				Console.WriteLine("Actual log" + node.data.ToString());
				//if(!(node.right is null))
					//Console.WriteLine("recur with " + node.data.ToString() + ".left : " + node.right.data.ToString());
				this.TraverseInOrder(node.right);
			}
		}
	}
}