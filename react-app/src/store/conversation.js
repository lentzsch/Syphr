const CURRENT_CONVERSATION = "conversation/CURRENT_CONVERSATION";
const SEARCH_RESULTS = "conversation/SEARCH_RESULTS";
const CLEAR_SEARCH = "conversation/CLEAR_SEARCH";
const SEARCHED_USER = "conversation/SEARCHED_USER";
const HANDLE_MESSAGES = "conversation/HANDLE_MESSAGES";

export const currentConversation = (conversationId) => ({
    type: CURRENT_CONVERSATION,
    payload: conversationId
})


export const clearSearch = () => ({
    type: CLEAR_SEARCH
})

export const searchedUser = (userId) => ({
    type: SEARCHED_USER,
    payload: userId
})

export const handleMessages = (message) => ({
    type: HANDLE_MESSAGES,
    payload: message
})

const searchResults = (results) => ({
    type: SEARCH_RESULTS,
    payload: results
})


/**************************** SEARCH CODENAMES ******************************/
export const searchCodeNames = (codeName) => async (dispatch) => {
    const response = await fetch(`/api/users/${codeName}`)
    const data = await response.json()
    if (data.errors) {
        return data;
    }

    dispatch(searchResults(data))
}


/**************************** GET ALL CONVERSATIONS WITH ************************/
export const getAllConversationsWith = (userId) => async (dispatch) => {
    const response = await fetch(`/api/messages/${userId}`)
    const data = await response.json()
    if (data.errors) {
        return data;
    }

    dispatch(searchResults(data))
}

/***************************** HANDLE SOCKET MESSAGES ***************************/
// export const handleSocketMessages = (message) => async (dispatch) => {
//         socket = io();
//         socket.on('message', (message) => {

//         })
// }


const initialState = { current: null, searchResults: {}, searchedUser: null,  }

export default function conversationReducer(state=initialState, action) {
    switch (action.type) {
        case SEARCH_RESULTS:
            return { ...state, searchResults: action.payload }
        case CURRENT_CONVERSATION:
            return { ...state, current: state.searchResults[action.payload] }
        case CLEAR_SEARCH:
            return { ...state, searchResults: {}, searchedUser: null }
        case SEARCHED_USER:
            return { ...state, searchedUser: action.payload }
        case HANDLE_MESSAGES:
            return { ...state, current: { ...state.current, messages: [...state.current.messages,  action.payload] } }
        default:
            return state;
    }
}