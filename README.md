# Syphr


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

The keyboard is pretty self explanatory so let start with:

### The Plugboard
The plugboard was very much like old timey telephon operator switch boards. A user would take a wire with plugs on either end and put one plug into one charachter, and the other plug into another. If a charachter input into the plugboard is one of those charachters, that input character would be swaped with the other. For example, if a user put a plug into "A" and connected it to "Q", if "A" came into the board it would out put as "Q" and if a "Q" came into the board it would output as "A".

### The Rotors
The rotors are the key to how Enigma never encrypted the same character as the same thing twice. Early machines had slots for only three rotors, later machines had four. For our purposes, we will assume a three rotor machine. The user would choose three rotors from a selection of five labled 1-5 in roman numerals. The user would then choose which of the three slots their chosen rotors would go in. As the name implies, the rotors rotate.
