#შექმენი პროგრამა, რომელიც იფუნქციონირებს შემდეგნაირად: მომხმარებლის შეყვანილი რიცხვი იქნება დადებითი, უარყოფითი, ან ნულოვანი, და შესაბამისი შეტყობინება უნდა გამოიტანოს.

def number_type(number):
    if number > 0:
        return "Positive"
    elif number < 0:
        return "Negative"
    else:
        return "Zero"

