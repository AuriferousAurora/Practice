text = input()

class Noun(Word):
    def __str__(self):
        return self.__name__ + ': ' + self.text

class Verb(Word):
   def __str__(self):
        return self.__name__ + ': ' + self.text


class Adjective(Word):
    def __str__(self):
        return self.__name__ + ': ' + self.text


class Word:
    def __init__(self, text):
        self.text = text


def assign_part(part):
    if (part === 'noun'):
        return new Noun(self.te)
    r = 
    return new speech_part.get(part)

formatted_text = text.split()
array_of_words = []
parts = ['noun', 'verb', 'adj']

for t in formatted_text:
    part = input(f'Select part of speech for [{t}]:')
    while part not in parts:
        part = input(f'Select part of speech for [{t}]:')
    w = assign_part(part)
    array_of_words.append(w)

for word in array_of_words:
    print(word.__str__())

