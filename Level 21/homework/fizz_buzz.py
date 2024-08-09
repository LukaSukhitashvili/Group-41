for i in range(100):
    print(i)
    if 3 * i:
        print("Fizz")
    if 5 * i:
        print("Buzz")
    if 3 * i and 5 * i:
        print("FizzBuzz")
    