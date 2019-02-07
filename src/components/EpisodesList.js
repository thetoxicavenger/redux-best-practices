import React from 'react'
import Episode from './Episode';
import { Row } from 'reactstrap'

export default class EpisodesList extends React.Component {
    componentDidMount() {
        this.props.getEpisodes()
    }
    render() {
        const { episodes } = this.props
        if (episodes.length) {
            return (
                <>
                  <h1>Episodes</h1>
                  <Row>
                      {episodes.map(episode => <Episode key={episode.id} {...episode} />)}
                  </Row>
                </>
            )
        }
        return null
    }
}
