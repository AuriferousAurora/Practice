# Definition for singly-linked list.
class ListNode(object):
  def __init__(self, x):
    self.val = x
    self.next = next

class listBuilder()

class Solution(object):
  def merge_two_lists(self, l1, l2):

    head = ListNode(0)
    ptr = head

    while True:
      if l1 is None and l2 is None:
        break
      elif l1 is None:
        ptr.next = l2
        break
      elif l2 is None:
        ptr.next = l1
        break
      else:
        smaller_val = 0
        if l1.val < l2.val:
          smaller_val = l1.val
          l1 = l1.next
        else:
          smaller_val = l2.val
          l2 = l2.next
        
        new_node = ListNode(smaller_val)
        ptr.next = new_node
        ptr = ptr.next
    
    return head.next
      

