


class Plugboard:
    def __init__(self, config):
        self.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        self.config = config
        self.indexConfig = {}
        # self.config = {} # For testing.

        # convert letters to indicies.
        for char in self.config:
            self.indexConfig[self.alpha.index(char)] = self.alpha.index(self.config[char])


#################### FUNCTIONS FOR TESTING PURPOSES ONLY ############
        # create the alpha dict
        # for char in range(len(self.alpha)):
        #     self.config[char] = char

        # # map the alpha dict
        # for chars in config:
        #     self.config[chars[0]] = chars[1]
        #     self.config[chars[1]] = chars[0]
    


    def plugboard_swap(self, char):
        return self.indexConfig[char]


    def __repr__(self):
        return f'Plugboard {self.config}'
