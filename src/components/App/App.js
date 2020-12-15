import { Component } from 'react';

import Header from '../header/Header';
import LikeButton from '../LikeButton/LikeButton';
import DislikeButton from '../DislikeButton';
import Profile from '../profile';
import Leaderboard from '../Leaderboard/Leaderboard';

// turn into a class to access didmount. 

class App extends Component {

  componentDidMount() {
    console.log(this.props);
    this.props.getAnimals();
  }

  render() {
    return (
      <div>
        <Header />

        <LikeButton />

        <DislikeButton />

        { this.props.loaded ? <Profile id={1} /> : null}

        <Leaderboard />
      </div>
    );
  }
}

export default App;
