def even_numbers(arr, n):
    even_nums = [num for num in arr if num % 2 == 0]
    return even_nums[-n:]
