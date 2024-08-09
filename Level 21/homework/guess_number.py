number = 37
guess = int(input("Guess the number: "))

while True:
    if number == guess:
        print("You guessed it right!")
        break
    else:
        print("You guessed it wrong try again!")
        guess = int(input("Guess the number: "))