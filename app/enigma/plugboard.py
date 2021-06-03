

class Plugboard:
    def __init__(self, config):
        self.base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        self.config = {}

        for char in self.base:
            self.config[char] = char

        for chars in config:
            self.config[chars[0]] = chars[1]
            self.config[chars[1]] = chars[0]

    
    def plugboard_encrypt(self, char):
        return self.config[char]

    def __repr__(self):
        return f'Plugboard {self.config}'
