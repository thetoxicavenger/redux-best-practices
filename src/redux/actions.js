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

export function getPosts(url) {
    return async function(dispatch) {
        try {
            const res = await fetch(url)
            const json = await res.json()
            dispatch(
                receivePosts(json)
            )
        } catch (e) {
            console.error(e)
        }
    }
}

