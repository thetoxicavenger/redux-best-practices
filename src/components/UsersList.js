import React from 'react'
import User from './User';
import { Row } from 'reactstrap'

export default class UsersList extends React.Component {
    componentDidMount() {
        this.props.getUsers()
    }
    render() {
        const { users, loading, error } = this.props
        if (error) {
            return <div>Error!</div>
        }
        if (loading) return <div>Loading...</div>
        if (users.length) {
            return (
                <>
                  <h1>Users</h1>
                  <Row>
                      {users.map(user => <User key={user.id} {...user} />)}
                  </Row>
                </>
            )
        }
        return null
    }
}
