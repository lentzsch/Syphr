const SET_PLUGBOARD = './enigma/SET_PLUGBOARD'
const OUTPUT_MESSAGE = './enigma/OUTPUT_MESSAGE'
const SET_ROTOR_TO_SET = './enigma/SET_ROTOR_TO_SET'
const SET_ROTOR_1_NAME = './enigma/SET_ROTOR_1_NAME'
const SET_ROTOR_1_POSITION = './enigma/SET_ROTOR_1_POSITION'
const SET_ROTOR_2_NAME = './enigma/SET_ROTOR_2_NAME'
const SET_ROTOR_2_POSITION = './enigma/SET_ROTOR_2_POSITION'
const SET_ROTOR_3_NAME = './enigma/SET_ROTOR_3_NAME'
const SET_ROTOR_3_POSITION = './enigma/SET_ROTOR_3_POSITION'
const SET_REFLECTOR = './enigma/SET_REFLECTOR'
const SET_CURRENT_CHAR = './enigma/SET_CURRENT_CHAR'

export const setPlugboard = (char1, char2) => ({
    type: SET_PLUGBOARD,
    char1,
    char2
})

export const setRotorToSet = (name) => ({
    type: SET_ROTOR_TO_SET,
    payload: name
})

export const setRotor1name = (name) => ({
    type: SET_ROTOR_1_NAME,
    payload: name
})
export const setRotor1position = (position) => ({
    type: SET_ROTOR_1_POSITION,
    payload: position
})

export const setRotor2name = (name) => ({
    type: SET_ROTOR_2_NAME,
    payload: name
})
export const setRotor2position = (position) => ({
    type: SET_ROTOR_2_POSITION,
    payload: position
})

export const setRotor3name = (name) => ({
    type: SET_ROTOR_3_NAME,
    payload: name
})
export const setRotor3position = (position) => ({
    type: SET_ROTOR_3_POSITION,
    payload: position
})

export const setReflector = (setting) => ({
    type: SET_REFLECTOR,
    payload: setting
})

export const setCurrentChar = (char) => ({
    type: SET_CURRENT_CHAR,
    payload: char
})

const outputMessage = (message) => ({
    type: OUTPUT_MESSAGE,
    payload: message
})



 
/************************* ENCRYPT MESSAGE **************************/
export const encryptMessage = (message, settings) => async (dispatch) => {
    const response = await fetch ('/api/messages/encrypt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message, settings })
    });

    const { translatedMessage } = await response.json();
    dispatch(outputMessage(translatedMessage))
}

/*********************** PLUGBOARD DEFAULT ********************/
const plugboardAlpha = 'QWERTZUIOASDFGHJKPYXCVBNML'.split('')
const plugboard = {}
for (let char of plugboardAlpha) {
    plugboard[char] = char
}

const rotor1 = { name: 'III', position: 1 }
const rotor2 = { name: 'II', position: 1 }
const rotor3 = { name: 'I', position: 1 }

const reflector = 'B'

const initialState = { plugboard, rotorToSet: '', rotor1, rotor2, rotor3, reflector, currentChar: '', outputMessage: ''}

export default function plugboardReducer(state=initialState, action) {
    switch (action.type) {
        case SET_PLUGBOARD:
            state.plugboard[action.char1] = action.char2
            state.plugboard[action.char2] = action.char1
            return { ...state, plugboard: { ...state.plugboard } }
        case SET_ROTOR_TO_SET:
            return { ...state, rotorToSet: action.payload }
        case SET_ROTOR_1_NAME:
            return { ...state, rotor1: { ...state.rotor1, name: action.payload }}
        case SET_ROTOR_1_POSITION:
            return { ...state, rotor1: { ...state.rotor1, position: action.payload }}
        case SET_ROTOR_2_NAME:
            return { ...state, rotor2: { ...state.rotor2, name: action.payload }}
        case SET_ROTOR_2_POSITION:
            return { ...state, rotor2: { ...state.rotor2, position: action.payload }}
        case SET_ROTOR_3_NAME:
            return { ...state, rotor3: { ...state.rotor3, name: action.payload }}
        case SET_ROTOR_3_POSITION:
            return { ...state, rotor3: { ...state.rotor3, position: action.payload }}
        case SET_REFLECTOR:
            return { ...state, reflector: action.payload }
        case SET_CURRENT_CHAR:
            return { ...state, currentChar: action.payload }
        case OUTPUT_MESSAGE:
            return { ...state, outputMessage: action.payload }
        default:
            return state;
    }
}