from app.enigma.plugboard import Plugboard
from app.enigma.rotor import Rotor
from app.enigma.reflector import Reflector



# plugboard = [(0, 3), (4, 5), (6, 7)]
# rotor_one = Rotor(json.loads("('III', 0)"))
# rotor_two = Rotor(json.loads("('II', 0)"))
# rotor_three = Rotor(json.loads("('I', 0)"))
# rotors = [('III', 0), ('II', 0), ('I', 0)]
# reflector = 'B'
def encrypt(message,):
    plugboard = Plugboard([(0, 3), (4, 5), (6, 7)])
    # rotor_one = Rotor(rotors[0])
    # rotor_two = Rotor(rotors[1])
    # rotor_three = Rotor(rotors[2])
    rotor_one = Rotor('III', 0)
    rotor_two = Rotor('II', 0)
    rotor_three = Rotor('I', 0)
    reflector = Reflector('B')

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
    
    print(new_message)
    return new_message


# encrypt("XKBADDMTDT")
