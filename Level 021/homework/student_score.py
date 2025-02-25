midterm = float(input("Enter the midterm exam score (0-100): "))
while midterm < 0 or midterm > 100:
    print("Please enter a score between 0 and 100.")
    midterm = float(input("Enter the midterm exam score (0-100): "))

final = float(input("Enter the final exam score (0-100): "))
while final < 0 or final > 100:
    print("Please enter a score between 0 and 100.")
    final = float(input("Enter the final exam score (0-100): "))

project = float(input("Enter the project score (0-100): "))
while project < 0 or project > 100:
    print("Please enter a score between 0 and 100.")
    project = float(input("Enter the project score (0-100): "))

average = midterm + final + project
total_avg = average / 3

if total_avg >= 70:
    print("The student has passed the course.")
else:
    print("The student has failed the course.")

print("Average score:", int(total_avg))
