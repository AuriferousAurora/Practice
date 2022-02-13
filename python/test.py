camp_numbers = {}
camp_numbers[(1, 3, 5)] = 2
camp_numbers[(3, 2, 1)] = 6
camp_numbers[(1, 3)] = 10

sum = 0
for k in camp_numbers:
    sum += camp_numbers[k]

print(camp_numbers)
print(len(camp_numbers) + sum)