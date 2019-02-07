import { connect } from 'react-redux'
import EpisodesList from '../../components/EpisodesList'
import { getEpisodes } from '../actions'

const mapStateToProps = state => {
    return {
        episodes: state.episodes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getEpisodes: () => {
            dispatch(
                getEpisodes()
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesList)