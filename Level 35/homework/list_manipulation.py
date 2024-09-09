temp =  [72, 68, 75, 70, 78, 74, 71]

max_temp = max(temp)
print("Max temperature:", max_temp)

min_temp = min(temp)
print("Min temperature:", min_temp)

average_temp = sum(temp) / len(temp)

print("Average temperature:", average_temp)

print("Temperatures above 70:")

for temperature in temp:
    if temperature > 70:
        print(temperature)
