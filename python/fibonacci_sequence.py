import unittest

def fibonacci_sequence(index):
  if index < 0:
    return 'Incorrect input. Paramter must be positive number.'
  if index == 1 or index == 2:
    return index - 1
  first_index = 0
  second_index = 1
  return_value = 0
  for i in range(index - 1):
    return_value = first_index + second_index
    first_index = second_index
    second_index = return_value
  return return_value


class Test(unittest.TestCase):
  
  def test_9th(self):
    self.assertEqual(fibonacci_sequence(9), 34)
    
  def test_23rd(self):
    self.assertEqual(fibonacci_sequence(23), 28657)

unittest.main()