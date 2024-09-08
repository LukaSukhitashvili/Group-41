def simple_calculator():
    num1 = float(input("Enter first number: "))
    operation = input("Enter basic operation (+, -, *, /): ")
    num2 = float(input("Enter second number: "))
    
    if operation == "+":
        total = num1 + num2
    elif operation == "-":
        total = num1 - num2
    elif operation == "*":
        total = num1 * num2
    elif operation == "/":
        total = num1 / num2
    else:
        total = "Invalid operation."

    print("Result:", total)

simple_calculator()
