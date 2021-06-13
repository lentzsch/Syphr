import React, { useReducer } from 'react';
import { useDispatch, useSelector } from  'react-redux';
import { getAllConversationsWith, currentConversation, searchedUser, clearSearch } from '../store/conversation'

const SearchResults = () => {
    const searchResults = useSelector(state => Object.values(state.conversation.searchResults))
    const searchedUser = useSelector(state => state.conversation.searchedUser)

    return (
        <div className="results-container">
            {searchResults.map((result) => (
                <SingleResult result={result} />
                ))}
            {searchedUser && <div className="conversation-search-codenames">
                <button className="new-conversation-button">Start a New Conversation</button>
            </div>}
        </div>
    )
}

function SingleResult({ result }) {
    const dispatch = useDispatch();

    const onUserClick = () => {
        dispatch(getAllConversationsWith(result.id))
        dispatch(searchedUser(result.id))
    }

    const onConversationClick = () => {
        dispatch(currentConversation(result.id))
        dispatch(clearSearch())
    }

    if (result.code_name) {
        return (
            <div className="user-search-container"
                 onClick={onUserClick}
                 >
                     {result.code_name}
                </div>
        )
    } else {
        return (
            <div className="conversation-search-container"
                 onClick={onConversationClick}>
                {result.users.map((user) => (
                    <div className="conversation-search-codenames">
                        {user.code_name}
                    </div>
                ))}
            </div>
        )
    }
}

export default SearchResults;