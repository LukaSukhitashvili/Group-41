wins = int(input("Enter the number of wins: "))
ties = int(input("Enter the number of ties: "))

points = wins + (ties * 0.5)

print("Total points earned:", points)
