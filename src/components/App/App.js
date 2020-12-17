import { Component } from 'react';

import Header from '../Header/Header';
import LikeButton from '../LikeButton';
import DislikeButton from '../DislikeButton';
import Profile from '../Profile';
import Leaderboard from '../Leaderboard';
import LeaderboardButton from '../LeaderboardButton';
import ResetButton from '../ResetButton';

// turn into a class to access didmount. 

class App extends Component {

  componentDidMount() {
    this.props.getAnimals();
  }

  render() {
    const { finished } = this.props;

    return (
      <>
        <div className='fullpage'>
          <Header />

          {!finished ? (
            <>
              <LikeButton />

              <DislikeButton />

              {this.props.loaded ? <Profile /> : null}

              <LeaderboardButton />
            </>
          ) : (
              <>
                <Leaderboard />

                <ResetButton />
              </>
            )
          }
          <footer className='footer'>

          </footer>
        </div>
      </>
    )
  }
}

export default App;
