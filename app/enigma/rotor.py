


from operator import indexOf


class Rotor:
    def __init__(self, name, position):
        self.name = name
        self.position = position
        self.offset = 0
        self.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        self.sequence = ''
        self.notch = ''
        self.set_rotor()
        
        # print("NAME: ", self.name, " POSITION: ", self.position)
    # all eight rotors defined in case I want to expand to a four rotor enigma
    def set_rotor(self):
        rotors = {
                "I":    ["EKMFLGDQVZNTOWYHXUSPAIBRCJ", ["R"], ["Q"]],
                "II":   ["AJDKSIRUXBLHWTMCQGZNPYFVOE", ["F"], ["E"]],
                "III":  ["BDFHJLCPRTXVZNYEIWGAKMUSQO", ["W"], ["V"]],
                "IV":   ["ESOVPZJAYQUIRHXLNFTGKDCMWB", ["K"], ["J"]],
                "V":    ["VZBRGITYUPSDNHLXAWMJQOFECK", ["A"], ["Z"]],
                # Rotors for future expansion
                # "VI":   ["JPGVOUMFYQBENHZRDKASXLICTW", ["AN"], ["ZM"]],
                # "VII":  ["NZJHGRCXMYSWBOUFAIVLPEKQDT", ["AN"], ["ZM"]],
                # "VIII": ["FKQHTLXOCBJSPDZRAMEWNIUYGV", ["AN"], ["ZM"]]
                }

        rotor = rotors[self.name]
        self.sequence = rotor[0]
        self.notch = rotor[1]
        self.set_sequence()
      
    def set_sequence(self):
        for _ in range(self.position):
            self.rotate()


    def reset(self):
        self.position = 0
        self.set_rotor()
        self.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


    def rotate(self):
        self.alpha = self.alpha[1:] + self.alpha[:1]
        self.sequence = self.sequence[1:] + self.sequence[:1]
        self.offset += 1

    # movement of "signal" through the rotor from one side to another.
    def rotor_in(self, index):
        return self.alpha.index(self.sequence[index])

    def rotor_out(self, index):
        return self.sequence.index(self.alpha[index])
    

    def __repr__(self):
        return f"Rotor ({self.name}, {self.position}, {self.base}, {self.sequence}, {self.notch})"
