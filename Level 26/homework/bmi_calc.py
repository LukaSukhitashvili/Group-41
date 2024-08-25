weight = float(input("Enter your weight in kg: "))
height = float(input("Enter your height in m: "))

BMI = weight / (height ** 2)

if BMI < 18.5:
    print("You're: Underweight")
elif BMI >= 18.5 and BMI < 25.0:
    print("You're: Normal")
elif BMI >= 25.0 and BMI < 30.0:
    print("You're: Overweight")
else:
    print("You're: Obesity")
