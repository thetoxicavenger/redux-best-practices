import { combineReducers } from 'redux'
import { RECEIVE_EPISODES, RECEIVE_POSTS } from './actions'

const episodes = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_EPISODES:
            return action.episodes
        default:
            return state
    }
}

const posts = (state = [], action) => {
    switch(action.type) {
        case RECEIVE_POSTS:
            return action.posts
        default:
            return state
    }
}

export default combineReducers({ episodes, posts })

/* 
{
    episodes: [
        {
            id: 0,
            title: "Mitchs podcast"
        }
    ]
}
*/