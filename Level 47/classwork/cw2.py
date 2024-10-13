# შექმენი ფუნქცია, რომელიც მიიღებს ტექსტს და გამოითვლის, რამდენი სიტყვაა ამ ტექსტში.

def count_words(text):
    words = text.split()
    return len(words)

text = "Test sentence"
print(count_words(text)) 

