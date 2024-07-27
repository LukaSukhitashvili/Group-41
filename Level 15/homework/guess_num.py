user_number = int(input("Enter number: "))
guess_number = int(input("Guess the number: "))

while guess_number != user_number:
    print("Wrong number try again!")
    guess_number = int(input("Guess the number: "))