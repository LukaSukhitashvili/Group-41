print("Please register: ")
email = input("Enter your email: ")
password = input("Enter your password: ")

print("Registering is successful.")
print("Please log in")
login_email = input("Enter your email: ")
login_password = input("Enter your password: ")

print("Login is", email == login_email and password == login_password)
