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

# plugboard = Plugboard([(0, 2), (3, 5), (6, 1)])
rotor_one = Rotor('III', 0)
rotor_two = Rotor('II', 0)
rotor_three = Rotor('I', 0)
reflector = Reflector('B')
def encrypt():
    for _ in range(5):
        # char = plugboard.plugboard_swap(0)
        char = 0
        rotor_one.rotate()
        char = rotor_one.rotor_in(char)
        if rotor_one.alpha[0] in rotor_one.notch:
            rotor_two.rotate()
        char = rotor_two.rotor_in(char)
        if rotor_two.alpha[0] in rotor_two.notch:
            rotor_three.rotate()
        char = rotor_three.rotor_in(char)
        char = reflector.reflector_return(char)
        char = rotor_three.rotor_out(char)
        char = rotor_two.rotor_out(char)
        char = rotor_one.rotor_out(char)
        def final_form(index):
            alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            return alpha[index]
            
        final_char = final_form(char)
        print('FINAL CHAR ---------->', final_char)

encrypt()
