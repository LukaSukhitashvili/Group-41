def find_highest_grade(name1, grade1, name2, grade2, name3, grade3):
    if grade1 == grade2 == grade3:
        return "It's a draw! All students have the same grade."
    elif grade1 > grade2 and grade1 > grade3:
        return f"{name1} got the highest grade with {grade1}."
    elif grade2 > grade1 and grade2 > grade3:
        return f"{name2} got the highest grade with {grade2}."
    else:
        return f"{name3} got the highest grade with {grade3}."

student_a = input("Enter student name: ")
print(f"{student_a} is Student A")

student_b = input("Enter student name: ")
print(f"{student_b} is Student B")

student_c = input("Enter student name: ")
print(f"{student_c} is Student C")

print(f"Student A is {student_a}, Student B is {student_b}, and Student C is {student_c}")

grade_a = float(input(f"Enter grade for {student_a} (Student A): "))
grade_b = float(input(f"Enter grade for {student_b} (Student B): "))
grade_c = float(input(f"Enter grade for {student_c} (Student C): "))

average_grade = (grade_a + grade_b + grade_c) / 3
print(f"The average grade of all students is: {average_grade}")

result = find_highest_grade(student_a, grade_a, student_b, grade_b, student_c, grade_c)
print(result)


