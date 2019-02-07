import { combineReducers } from 'redux'
import { RECEIVE_EPISODES, RECEIVE_POSTS, RECEIVE_USERS, USERS_LOADING, USERS_ERROR, POSTS_LOADING, POSTS_ERROR } from './actions'

const episodes = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_EPISODES:
            return action.episodes
        default:
            return state
    }
}

const initState = {
    data: [],
    error: false,
    loading: false
}
const posts = (state = initState, action) => {
    switch (action.type) {
        case POSTS_LOADING:
            return {
                ...state,
                loading: true
            }
        case POSTS_ERROR:
            return {
                ...state,
                error: true
            }
        case RECEIVE_POSTS:
            return {
                ...state,
                data: action.posts
            }
        default:
            return state
    }
}

const initialState = {
    data: [],
    error: false,
    loading: false
}
const users = (state = initialState, action) => {
    switch (action.type) {
        case USERS_LOADING:
            return {
                ...state,
                loading: true
            }
        case RECEIVE_USERS:
            return {
                error: false,
                loading: false,
                data: action.users
            }
        case USERS_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}

export default combineReducers({ episodes, posts, users })
/*
{
    episodes: [],
    users: [],
    posts: []
}
*/