def is_leap_year(year):
    if year % 400 == 0:
        return True
    if year % 100 == 0:
        return False
    return year % 4 == 0

print("Year 2000:", is_leap_year(2000))
print("Year 2100:", is_leap_year(2100))
print("Year 2024:", is_leap_year(2024))
print("Year 2023:", is_leap_year(2023))
