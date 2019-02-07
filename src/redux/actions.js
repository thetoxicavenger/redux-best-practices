export const RECEIVE_EPISODES = "RECEIVE_EPISODES"
export const receiveEpisodes = episodes => ({
    type: RECEIVE_EPISODES,
    episodes
})

export function getEpisodes() {
    return function(dispatch) {
        return fetch("http://localhost:9000/api/episodes")
        .then(res => res.json())
        .then(episodes => dispatch(receiveEpisodes(episodes.data)))
        .catch(e => console.error(e))
    }
}

export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
})

export const POSTS_LOADING = 'POSTS_LOADING'
export const postsLoading = () => {
    return {
        type: POSTS_LOADING
    }
}

export const POSTS_ERROR = 'POSTS_ERROR'
export const postsError = () => {
    return {
        type: POSTS_ERROR
    }
}

export function getPosts() {
    return async function(dispatch) {
        dispatch(
            postsLoading()
        )
        try {
            const res = await fetch("http://localhost:9000/api/posts")
            const json = await res.json()
            dispatch(
                receivePosts(json)
            )
        } catch (e) {
            // error
            console.error(e)
            dispatch(
                postsError()
            )
        }
    }
}
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const receiveUsers = payload => {
    return {
        type: RECEIVE_USERS,
        users: payload
    }
}


export const USERS_LOADING = 'USERS_LOADING'
export const usersLoading = () => {
    return {
        type: USERS_LOADING
    }
}
export const USERS_ERROR = 'USERS_ERROR'
export const usersError = () => {
    return {
        type: USERS_ERROR
    }
}
export const getUsers = () => dispatch => {
    // loading action creator
    dispatch(
        usersLoading()
    )
    return fetch('http://localhost:9000/api/users')
    .then(res => res.json())
    .then(users => {
        dispatch(
            receiveUsers(users.data) // set loading to false, error to fale
        )
    })
    .catch(e => {
        console.log(e)
        dispatch(
            usersError()
        )
        // dispatch an error action
    })
}

