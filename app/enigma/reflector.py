

class Reflector:
    def __init__(self, setting):
        self.setting = setting
        self.base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        self.sequence = ''

    def set_sequence(self):
        settings = {
                    "A":   "EJMZALYXVBWFCRQUONTSPIKHGD",
                    "B":    "YRUHQSLDPXNGOKMIEBFZCWVJAT",
                    "C":    "FVPJIAOYEDRZXWGCTKUQSBNMHL"
                    }
