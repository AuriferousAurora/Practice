import unittest

# Given an array of integers, find the lowest positive integer that does not exist in the array.
# Examples: given array [3, 4, -1, 1] return the integer 2; given array [1, 2, 0] return the integer 3.

input_1 = [3, 4, -1, 1]
input_2 = [1, 2, 0]

def lowest_positive_int(array):
  positive_array = []
  for number in array:
    positive_array.append(abs(number))
  i = 1
  for number in positive_array:
    if i in positive_array:
      i = i + 1
  return i

class TestCase(unittest.TestCase):
  
  def test_succeed_input_one(self):
    result = lowest_positive_int(input_1)
    self.assertEqual(2, result)

  def test_success_input_two(self):
    result = lowest_positive_int(input_2)
    self.assertEqual(3, result)

unittest.main()