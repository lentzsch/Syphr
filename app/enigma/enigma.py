from rotor import Rotor
from reflector import Reflector
from plugboard import Plugboard

# new_rotor = Rotor('I', 5)
# # new_rotor.set_rotor()
# print(new_rotor)
# print(new_rotor.rotor_encrypt('A'))

# new_reflector = Reflector("B")
# print(new_reflector)

# new_plugboard = Plugboard([('A', 'C'), ('D', 'F'), ('G', 'B')])
# print(new_plugboard)
# print(new_plugboard.plugboard_encrypt('D'))

plugboard = Plugboard([(0, 3), (4, 5), (6, 7)])
rotor_one = Rotor('III', 0)
rotor_two = Rotor('II', 0)
rotor_three = Rotor('I', 0)
reflector = Reflector('B')
def encrypt(message):
    # set the reference alphabet and new message.
    alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    new_message = ''

    for char in message:
        # get the index for the character in the alphabet
        char = alpha.index(char)
        # begin encryption
        # first pass through plugboard
        char = plugboard.plugboard_swap(char)
        #first pass through rotors and rotation of rotors
        rotor_one.rotate()
        char = rotor_one.rotor_in(char)
        if rotor_one.alpha[0] in rotor_one.notch:
            rotor_two.rotate()
        char = rotor_two.rotor_in(char)
        if rotor_two.alpha[0] in rotor_two.notch:
            rotor_three.rotate()
        char = rotor_three.rotor_in(char)
        # reflector bounces "signal" back through machine
        char = reflector.reflector_return(char)
        # second run back through rotors with no rotation
        char = rotor_three.rotor_out(char)
        char = rotor_two.rotor_out(char)
        char = rotor_one.rotor_out(char)
        # second run through the plugboard and out the machine
        char = plugboard.plugboard_swap(char)

        new_message += alpha[char]

    return new_message


print(encrypt('XKBADDNHL'))
