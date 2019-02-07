import { connect } from 'react-redux'
import PostsList from '../../components/PostsList'
import { getPosts } from '../actions'

const mapStateToProps = state => {
    return {
        posts: state.posts.data,
        loading: state.posts.loading,
        error: state.posts.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => {
            dispatch(
                getPosts()
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)