weight = float(input("Enter your weight in kg: "))
height = float(input("Enter your height in m: "))

BMI = weight / (height ** 2)

if BMI < 18.5:
    print("You're: Underweight")
elif BMI >= 18.5 or 25.0:
    print("You're: Normal")
elif BMI >= 25.0 or 30.0:
    print("You're: Overweight")
elif BMI >= 30.0:
    print("You're: Obesity")