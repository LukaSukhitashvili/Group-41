weight = float(input("Enter your weight in kg: "))
height = float(input("Enter your height in m: "))

total = weight / (height ** 2)

if total < 18.5:
    print("You're: Underweight")
elif total >= 18.5 or 25.0:
    print("You're: Normal")
elif total >= 25.0 or 30.0:
    print("You're: Overweight")
elif total >= 30.0:
    print("You're: Obesity")