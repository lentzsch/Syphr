# Syphr

## NOTE! This was my old capstone project and while it's not bad for a two week solo project to graduate App Academy, there are many issues with it from a realworld production standpoint. I plan on forking and refactoring creating a "before and after" to showcase my growth.

## Introduction
Welcome to Syphr! Syphr is my solo capstone project from my time at App Academy. It is a messaging app that is really just a thinly veiled excuse to build a historically accurate emulation of the Enigma Machine from WWII.

## A Very Brief History of Enigma
If you've seen the movie "The Imitation Game" you can skip this part. The Enigma Machine was used by the Nazi's to encrypt messages. Even though the method of encryption used by Enigma was basically just a Caesar Sypher on steriods, it was considered unbreakable as it had 158,962,555,217,826,360,000 (Just under 160 quintillion) different possible settings. That's difficult for even modern consumer level computers to fully brute force. To make matters worse it would never encrypt the same letter as the same thing twice. A user could imput "AAAAA" and they might bet back "TNDSK". This is why the father of modern computing, Alan Turing, was tapped to build a machine to crack it. "The Bombe" is that machine. It used a method called a "kown text attack" to help narrow down the potential combinations and ultimatly crack the code.


## How Enigma Worked
Enigma consisted of several components that worked together to scramble each character.
  * A keyboard (input)
  * A plugboard
  * Three to four rotors
  * A reflector
  * A lampboard (output)

Example of a vintage Enigma Machine and it's components:
![Labeled Enigma](https://github.com/lentzsch/Syphr/blob/main/react-app/public/images/1280px-EnigmaMachineLabeled.jpeg)

The keyboard is pretty self explanatory so lets start with:

### The Plugboard
The plugboard was very much like old timey telephon operator switch boards. A user would take a wire with plugs on either end and put one plug into one charachter, and the other plug into another. If a charachter input into the plugboard is one of those charachters, that input character would be swaped with the other. For example, if a user put a plug into "A" and connected it to "Q", if "A" came into the board it would out put as "Q" and if a "Q" came into the board it would output as "A". The machine came with eleven plug cables.

### The Rotors

![Rotor Example](https://github.com/lentzsch/Syphr/blob/main/react-app/public/images/640_enigma-rotors.jpeg?raw=true)

The rotors are the key to how Enigma never encrypted the same character as the same thing twice. Early machines had slots for only three rotors, later machines had four. For our purposes, we will assume a three rotor machine. The user would choose three rotors from a selection of five labled 1-5 in roman numerals. The user would then choose which of the three slots their chosen rotors would go in. The rotors had twenty-six positions representing the twenty-six letters of the alphabet. Each position had an electrical contact ond the left and on the right. A wire would connect the contact on one side of position with the contact on the other side of and other posiction. For example, the left contact of position 1 might be wired tot he right contact of position 15. As the signal passed through the rotor, this served to add one more change to the input character.

![Deconstructed Rotor](https://github.com/lentzsch/Syphr/blob/main/react-app/public/images/rotor_deconstructed.jpeg?raw=true)

As the name implies, the rotors rotate. The signal moved through the rotors from right to left. With each key press, the right most rotor would rotate by one position. Each rotor had a notch on it at a certain position so that would cause the rotor to its left to rotate by one position. This means that for every full turn of the rotor, the rotor to it's left would rotate, exactly like an odometer. This is how an input of "AAAAA" could come out as "TNDSK".

### The Reflector

The reflector is how no letter could be encoded as itself which ultimately proved to be the achilles heel of the Enigma Machine. Turing's Bombe exploited this fact by comparing text that would likly be in the message such as "weather report" to the message itself. This helped them narrow down the number of possible setting combinations to something more reasonable.

The reflector was very simpble. Much like the rotors, input charachters were mapped to output characters and as the name implies, the reflector reflected the signal back through the mechine all over again before lighting up the light board. There were three reflectors to choose from.

### The Lampboard

The lampboard displayed all twenty-six characters of the alphabet. With each key press, the light board would light up the encoded character and the operator would write it down.

### Bringing it all together

Each day, the operator would reacieve the settings for that day. They would set the plugbord, insert the chosen rotors, rotate the rotors to the appropriate position, insert the reflector, close the machine up, and get ready to type. to encode a message, they would type it letter by letter. With each keystroke, the right most rotor would rotate, then a signal would pass through the plugboard potentially changing the character, then through the first rotor changing that character, then the second changing again, the third, changing again, bounce off the reflector changing again, back through the third rotor changing again, the second rotor changing again, the first changing again, the plugboard potentially chaging again, and finally lighting up the final encrypted character on the lampboard. The operator would then write that character down. Decoding worked the same way. Because of the nature of how Enigma encrypted messages, you could decode the massage by puting it through the macine with the same settings it was encrypted in. So if you input "AAAAA" and got "TNDSK", inputting "TNDSK" would get you "AAAAA".


## Syphr Tutorial

To quickly get started, press the "Demo" button and you will be logged in as "a.turing@blecthleypark.gov", codename "Turing". When searching for users to send a messages to, you may see some other members from MI6's XX committee, but you are looking for "C", the codename for Stuart Menzies, the head of MI6. He has sent you instructions encrypted with the default enigma settings (the settings used when the site loads). Depending on whethere or not people have played with the site and how recently I've reset the database, you may see multiple options for a conversation with "C". The first conversation is the demo. If you want the full experience, you could retype the message into the input box yourself... but I just copy and paste. Because this message has already been encrypted, it's already correctly formated with only capital english alphabet characters. There was no space bar, numbers, or punctuation, so the "Format Message" button gets rid of any inappropriate characters and capitalizes the alpha characters present in the message. Once formatted, the format button changes to and "Encrypt/Decrypt" buton. Pressing this will send the message through the Enigma Machine, lighting up the lamps and printing the message character by character in the output box. Because of the way Enigma works, the process is the same for both encrypting and decrypting. You can then chooose to send the message in the output box. It's important to note that while you do not see the rotors rotating, they are, but they return to what ever position you set them to after you send each message.


![labled Syphr Screenshot](https://github.com/lentzsch/Syphr/blob/main/react-app/public/images/syphr_instruction.png?raw=true)
