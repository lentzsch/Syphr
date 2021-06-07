

class Plugboard:
    def __init__(self, config):
        self.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        self.config = {}

        # create the alpha dict
        for char in range(len(self.alpha)):
            self.config[char] = char

        # map the alpha dict
        for chars in config:
            self.config[chars[0]] = chars[1]
            self.config[chars[1]] = chars[0]
    

    def plugboard_swap(self, char):
        return self.config[char]


    def __repr__(self):
        return f'Plugboard {self.config}'
