numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

first_half = numbers[:5]
second_half = numbers[5:]

squares = []

for num in numbers:
    squares.append(num ** 2)

print("First half:", first_half)
print("Second half:", second_half)
print("Squares:", squares)
