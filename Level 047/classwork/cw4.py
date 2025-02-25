# შექმენი პროგრამა, რომელიც მიიღებს მომხმარებლის ასაკს და დააბრუნებს შეტყობინებას იმის მიხედვით, თუ რომელ ასაკობრივ კატეგორიაშია მომხმარებელი.

def age_category(age):
    if age <= 12:
        return "child"
    elif age <= 18:
        return "teenager"
    elif age <= 60:
        return "adult"
    else:
        return "senior"
