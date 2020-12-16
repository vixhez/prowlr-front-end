import { Component } from 'react';

import Header from '../Header/Header';
import LikeButton from '../LikeButton';
import DislikeButton from '../DislikeButton';
import Profile from '../Profile';

import Leaderboard from '../Leaderboard/Leaderboard';

// turn into a class to access didmount. 

class App extends Component {

  componentDidMount() {
    this.props.getAnimals();
  }

  render() {
    const { finished } = this.props;

    return !finished ? (
      
      <div>
        <Header />

        <LikeButton />

        <DislikeButton />

        { this.props.loaded ? <Profile /> : null}
      </div>
    ) : (
      <div>
        <Header />
        
        <Leaderboard /> 
      </div>
    );
  }
}

export default App;
