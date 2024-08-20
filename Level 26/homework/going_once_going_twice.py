maxBid = int(input("Enter the maximum bid: "))

user_bid = int(input("Enter your bid: "))

while maxBid > user_bid:
    user_bid = int(input("Enter your bid: "))

if maxBid <= user_bid:
    print("Sold: " + str(user_bid))
