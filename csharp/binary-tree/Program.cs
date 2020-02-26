using System;

namespace BinaryTree
{
	class Program
	{
		static void Main(string[] args)
		{
			BinarySearchTree bst = new BinarySearchTree();
			// bst.Insert(15);
			// bst.Insert(25);
			// bst.Insert(10);
			// bst.Insert(7);
			// bst.Insert(22); 
			// bst.Insert(17);
			// bst.Insert(13); 
			// bst.Insert(5); 
			// bst.Insert(9); 
			// bst.Insert(27);

			// Node root = bst.GetRootNode();
			// bst.TraverseInOrder(root);

			// bst.Remove(5);
			// Console.WriteLine("-------Break-------");

			// root = bst.GetRootNode();
			// bst.TraverseInOrder(root);

			bst.Insert(15);
			bst.Insert(10);
			bst.Insert(39);
			bst.Insert(5);
			bst.Insert(50);
			bst.Insert(45);
			bst.Insert(36);
			bst.Insert(37);

			Node root = bst.GetRootNode();

			// bst.TraverseInOrder(root);
			Console.WriteLine(bst.GetSize(root));

		}
	}
}
