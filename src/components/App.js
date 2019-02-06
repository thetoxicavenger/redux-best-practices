import React from 'react';
import { Container, Row } from 'reactstrap'
import Episode from './Episode'
import { getEpisodes, getPosts } from '../redux/actions'
import { connect } from 'react-redux'

class App extends React.Component {
  componentDidMount = () => {
    this.props.getEpisodes()
    this.props.getPosts("http://localhost:9000/api/posts")
  }
  render = () => {
    const episodes = this.props.episodes.length ? this.props.episodes.map(episode => <Episode key={episode.id} {...episode} />) : null
    return (
      <Container fluid>
        <h1>Episodes</h1>
        <Row>
          {episodes}
        </Row>
        <Row>

        </Row>
      </Container>
    )
  }
}

const mapStateToProps = ({ episodes }) => ({
  episodes
})

const mapDispatchToProps = dispatch => ({
  getEpisodes: () => {
    dispatch(
      getEpisodes()
    )
  },
  getPosts: (url) => {
    dispatch(
      getPosts(url)
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)