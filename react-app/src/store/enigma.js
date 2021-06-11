const SET_PLUGBOARD = './enigma/SET_PLUGBOARD'

const setPlugboard = (settings) => ({
    type: SET_PLUGBOARD,
    payload: settings
})

const plugboardAlpha = 'QWERTZUIOASDFGHJKPYXCVBNML'.split('')
const initialState = {}


for (let char of plugboardAlpha) {
    initialState[char] = char
}


export default function plugboardReducer(state=initialState, action) {
    switch (action.type) {
        case SET_PLUGBOARD:
            return { ...state, setPlugboard: action.payload }
        default:
            return state;
    }
}