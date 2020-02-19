class Node:

  def __init__(self, data):
    self.data = data
    self.left = None
    self.right = None


class BinarySearchTree:

  def __init__(self):
    self.root = None

  def insert(self, data):
    new_node = Node(data)

    if self.root is None:
      self.root = new_node
    else:
      self.insert_node(self.root, new_node)

  def insert_node(self, node, new_node):
    if new_node.data < node.data:
      if node.left is None:
        node.left = new_node
      else:
        self.insert_node(node.left, new_node)
    else:
      if node.right is None:
        node.right = new_node
      else:
        self.insert_node(node.right, new_node)

  def remove(self, data):
    self.root = self.remove_node(self.root, data)

  def remove_node(self, node, key):
    if node is None:
      return None
    elif key < node.data :
      node.left = self.remove_node(node.left, key)
      return node
    elif key > node.data:
      node.right = self.remove_node(node.right, key)
      return node
    else:
      if node.left is None and node.right is None:
        node = None
        return node
      elif node.left is None:
        node = node.right
        return node
      elif node.right is None:
        node = node.left
        return node
      else:
        aux = self.find_min_node(self.right)
        node.data = aux.data

        node.right = self.remove_node(node.right, aux.data)
        return node

  # helper methods

  def find_min_node(self, node):
    if node.left is None:
      return node
    else:
      return self.find_min_node(node.left)

  def traverse_in_order(self, node):
    if node is not None:
      self.traverse_in_order(node.left)
      print(node.data)
      self.traverse_in_order(node.right)

  def get_root_node(self):
    return self.root

bst = BinarySearchTree()
bst.insert(15) 
bst.insert(25) 
bst.insert(10) 
bst.insert(7) 
bst.insert(22) 
bst.insert(17) 
bst.insert(13) 
bst.insert(5) 
bst.insert(9) 
bst.insert(27)

root = bst.get_root_node()
bst.traverse_in_order(root)

bst.remove(5)

root = bst.get_root_node()
bst.traverse_in_order(root)