import React from 'react'
import Post from './Post';
import { Row } from 'reactstrap'

export default class PostsList extends React.Component {
    componentDidMount() {
        this.props.getPosts()
    }
    render() {
        const { posts, loading, error } = this.props
        if (error) return <div>Error!</div>
        if (loading) return <div>Loading...</div>
        if (posts.length) {
            return (
                <>
                  <h1>Posts</h1>
                  <Row>
                      {posts.map(post => <Post key={post._id} {...post} />)}
                  </Row>
                </>
            )
        }
        return null
    }
}
