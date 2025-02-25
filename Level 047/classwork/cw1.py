def search(text, word):
    if word in text:
        return "Word found"
    else:
        return "Word not found"

text = "This is awesome"
word = "awesome"
print(search(text, word))