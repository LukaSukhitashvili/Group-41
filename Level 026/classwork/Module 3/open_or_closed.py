day = int(input("Enter a week day: "))
hour = int(input("Enter an hour: "))

if day >= 6 and hour >= 21:
    print("Closed")
if day >= 7 and hour >= 21:
    print("Closed")
else:
    print("Open")