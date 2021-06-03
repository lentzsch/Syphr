

class Reflector:
    def __init__(self, setting):
        self.setting = setting
        self.base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        self.sequence = ''
        self.set_sequence()

    def set_sequence(self):
        settings = {
                    "A":   "EJMZALYXVBWFCRQUONTSPIKHGD",
                    "B":   "YRUHQSLDPXNGOKMIEBFZCWVJAT",
                    "C":   "FVPJIAOYEDRZXWGCTKUQSBNMHL"
                    }
        self.sequence = settings[self.setting]


    def reflector_encrypt(self, char):
        return self.sequence[self.base.index(char)]

    def __repr__(self):
        return f'Reflector ({self.setting}, {self.base}, {self.sequence})'
