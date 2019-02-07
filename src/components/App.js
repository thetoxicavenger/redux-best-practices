import React from 'react';
import { Container } from 'reactstrap'
import Episode from './Episode'
import { getEpisodes, getPosts } from '../redux/actions'
import { connect } from 'react-redux'
import EpisodesListContainer from '../redux/containers/EpisodesListContainer';
import Nav from './Nav';
import PostsListContainer from '../redux/containers/PostsListContainer';
import UsersListContainer from '../redux/containers/UsersListContainer';

class App extends React.Component {
  state = {
    currentView: "episodes"
  }
  handleNavChange = viewName => {
    this.setState({
      currentView: viewName
    })
  }
  render = () => {
    return (
      <Container fluid>
        <Nav 
          handleClick={this.handleNavChange}
          selected={this.state.currentView}
        />
        {this.state.currentView === "episodes" && <EpisodesListContainer />}
        {this.state.currentView === "posts" && <PostsListContainer />}
        {this.state.currentView === "users" && <UsersListContainer />}
      </Container>
    )
  }
}

export default App