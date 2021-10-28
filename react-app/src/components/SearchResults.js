import React from 'react';
import { useDispatch, useSelector } from  'react-redux';
import { getAllConversationsWith, currentConversation, searchedUser, clearSearch, createNewConvserstion } from '../store/conversation';


//TO DO:
    //Change cursor from text to arrow or finger.
const SearchResults = () => {
    const searchResults = useSelector(state => Object.values(state.conversation.searchResults));
    const searchedUser = useSelector(state => state.conversation.searchedUser);
    const userId = useSelector(state => state.session.user.id);
    const dispatch =useDispatch();
    
    const onNewConversationClick = () => {
        dispatch(createNewConvserstion(userId, searchedUser));
    }

    return (
        <div className="results-container">
            {searchResults.map((result) => (
                <SingleResult result={result} />
                ))}
            {searchedUser && <div className="conversation-search-codenames">
                <button className="new-conversation-button" onClick={onNewConversationClick}>Start a New Conversation</button>
            </div>}
        </div>
    )
}

function SingleResult({ result }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const onUserClick = () => {
        dispatch(getAllConversationsWith(result.id));
        dispatch(searchedUser(result.id));
    }

    const onConversationClick = () => {
        dispatch(currentConversation(result.id));
        dispatch(clearSearch());
    }

    if (result.code_name) {
        return (
            <div className="user-search-container"
                 key={result.code_name}
                 onClick={onUserClick}
                 >
                     {result.code_name}
            </div>
        )
    } else {
        return (
            <div className="conversation-search-container"
                 onClick={onConversationClick}>
                {result.users.map((user) => {
                    if (user.code_name !== sessionUser.code_name) {
                        return(
                        <div className="conversation-search-codenames" key={user.code_name}>
                            {user.code_name}
                        </div>
                        )
                    };
                })};
            </div>
        )
    };
};

export default SearchResults;