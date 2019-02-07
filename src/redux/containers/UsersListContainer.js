import { connect } from 'react-redux'
import UsersList from '../../components/UsersList'
import { getUsers } from '../actions'

const mapStateToProps = state => {
    return {
        users: state.users.data,
        loading: state.users.loading,
        error: state.users.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => {
            dispatch(
                getUsers() // make thunk
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)