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
        idx = alpha.index(char)
        # begin encryption
        # first pass through plugboard
        idx = plugboard.plugboard_swap(idx)
        #first pass through rotors and rotation of rotors
        rotor_one.rotate()
        idx = rotor_one.rotor_in(idx)
        if rotor_one.alpha[0] in rotor_one.notch:
            rotor_two.rotate()
        idx = rotor_two.rotor_in(idx)
        if rotor_two.alpha[0] in rotor_two.notch:
            rotor_three.rotate()
        idx = rotor_three.rotor_in(idx)
        # reflector bounces "signal" back through machine
        idx = reflector.reflector_return(idx)
        # second run back through rotors with no rotation
        idx = rotor_three.rotor_out(idx)
        idx = rotor_two.rotor_out(idx)
        idx = rotor_one.rotor_out(idx)
        # second run through the plugboard and out the machine
        idx = plugboard.plugboard_swap(idx)

        new_message += alpha[idx]

    return new_message


print(encrypt('XKBADDNHL'))
