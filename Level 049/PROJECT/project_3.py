# Problem: Write a program that filters students' scores so that only those with more than 50 points remain.

def calculate(students):
    if students > 50:
        print(f"Congratulations! Score of {students} passes the filter.")
    else:
        print(f"Sorry, score of {students} does not meet the criteria.")
    



calculate(51)


