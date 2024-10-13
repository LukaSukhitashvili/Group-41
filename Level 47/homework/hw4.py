def separate_even_odd(numbers):
    even_numbers = [2, 4, 6, 8, 10]
    odd_numbers = [1, 3, 5, 7, 9]
    
    for num in numbers:
        if num % 2 == 0:
            even_numbers.append(num)
        else:
            odd_numbers.append(num)
    
    return even_numbers, odd_numbers

print(separate_even_odd([11, 12, 13, 14, 15]))




