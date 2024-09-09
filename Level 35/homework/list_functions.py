numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]

print("Number list:", numbers)

numbers.append(100)
print("After append:", numbers)

numbers.insert(0, 5)
print("After insert:", numbers)

numbers.remove(30)
print("After remove:", numbers)

numbers.sort()
print("After sort:", numbers)

numbers.reverse()
print("After reverse:", numbers)

print("Index of 50:", numbers.index(50))

print("Count of 20:", numbers.count(20))

