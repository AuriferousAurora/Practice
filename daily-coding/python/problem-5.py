import unittest

# Fucntion cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. 
# For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

# Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair

# Implement car and cdr.
def car(pair):
  return pair[0]

def cdr(pair):
  return pair[1]


class TestCase(unittest.TestCase):

  pair = (1, 2)

  def test_car_returns_first(self):
    first = car(self.pair)
    self.assertEqual(first, self.pair[0])
    
  def test_cdr_returns_second(self):
    second = cdr(self.pair)
    self.assertEqual(second, self.pair[1])

unittest.main()