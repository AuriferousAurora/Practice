import math

def sieve_of_eratosthenes(n):
  if n <= 1:
    return false
  
  x = [True] * n

  for i in range(2, n // math.ceil(math.sqrt(n))):
    j = i * 2
    while j < n:
      x[j] = False
      j = j + i

  primes = []
  
  for i in range(0, len(x)):
    if x[i] is True:
      primes.append(i)

  return primes

def largest_prime(n):
  x = sieve_of_eratosthenes(n)
  return x[len(x) - 1]

all_primes = sieve_of_eratosthenes(30)
largest_prime = largest_prime(10000)

print(all_primes)
print(largest_prime)
