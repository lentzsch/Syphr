


class Rotor:
    def __init__(self, name, position):
        self.name = name
        self.position = position
        self.base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        self.sequence = ''
        self.notch = ''
        self.set_rotor()

    
    def set_rotor(self):
        rotors = {
            "I":    ["EKMFLGDQVZNTOWYHXUSPAIBRCJ", ["R"], ["Q"]],
            "II":   ["AJDKSIRUXBLHWTMCQGZNPYFVOE", ["F"], ["E"]],
            "III":  ["BDFHJLCPRTXVZNYEIWGAKMUSQO", ["W"], ["V"]],
            "IV":   ["ESOVPZJAYQUIRHXLNFTGKDCMWB", ["K"], ["J"]],
            "V":    ["VZBRGITYUPSDNHLXAWMJQOFECK", ["A"], ["Z"]],
            "VI":   ["JPGVOUMFYQBENHZRDKASXLICTW", ["AN"], ["ZM"]],
            "VII":  ["NZJHGRCXMYSWBOUFAIVLPEKQDT", ["AN"], ["ZM"]],
            "VIII": ["FKQHTLXOCBJSPDZRAMEWNIUYGV", ["AN"], ["ZM"]]}

        rotor = rotors[self.name]
        self.sequence = rotor[0]
        self.notch = rotor[2]
        self.set_sequence()
    
       
    def set_sequence(self):
        for _ in range(self.position):
            self.rotate()


    def reset(self):
        self.position = 0
        self.set_rotor()
        self.base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    def rotate(self):
        self.base = self.base[1:] + self.base[:1]
        self.sequence = self.sequence[1:] + self.sequence[:1]

    def __repr__(self):
        return f"Rotor ({self.name}, {self.position}, {self.base}, {self.sequence}, {self.notch})"
