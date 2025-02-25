supported = ["Lights off", "Lock the door", "Open the door", "Make coffee", "Shut down"]

commands = int(input("Enter the index of commands: "))

if commands == 0 and supported[0] in supported:
    print("OK")
elif commands == 1 and supported[1] in supported:
    print("OK")
elif commands == 2 and supported[2] in supported:
    print("OK")
elif commands == 3 and supported[3] in supported:
    print("OK")
elif commands == 4 and supported[4] in supported:
    print("OK")
else:
    print("Invalid command")
