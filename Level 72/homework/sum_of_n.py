def sum_of_n(n):
    result = []
    total = 0
    for i in range(abs(n) + 1):
        total += i
        if n < 0:
            result.append(-total)
        else:
            result.append(total)
    return result
