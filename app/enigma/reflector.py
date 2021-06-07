

class Reflector:
    def __init__(self, setting):
        self.setting = setting
        self.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        self.sequence = ''
        self.set_sequence()


    def set_sequence(self):
        settings = {
                    "A":   "EJMZALYXVBWFCRQUONTSPIKHGD",
                    "B":   "YRUHQSLDPXNGOKMIEBFZCWVJAT",
                    "C":   "FVPJIAOYEDRZXWGCTKUQSBNMHL"
                    }
        self.sequence = settings[self.setting]


    def reflector_return(self, index):
        return self.sequence.index(self.alpha[index])


    def __repr__(self):
        return f'Reflector ({self.setting}, {self.base}, {self.sequence})'
