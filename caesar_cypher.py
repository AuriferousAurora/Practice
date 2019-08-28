class CaesarCipher(object):
    def __init__(self, shift):
        self.shift = shift

    def encode(self, str):
        str = str.upper()
        str_list = list(str)
        new_list = []
        for char in str_list:
            ascii = ord(char)
            if 65 <= ascii <= 90:
                ascii = ascii + self.shift
            if ascii > 90:
                ascii = ascii - 26
            new_list.append(chr(ascii))
        return ''.join(new_list)
        
    def decode(self, str):
        str = str.upper()
        str_list = list(str)
        new_list = []
        for char in str_list:
            ascii = ord(char)
            if 65 <= ascii <= 90:
                ascii = ascii - self.shift
            if ascii < 65:
                ascii = ascii + 26
            new_list.append(chr(ascii))
        return ''.join(new_list)

c = CaesarCipher(5)

print(c.encode('Codewars'))
print(c.decode('HTIJBFWX'))