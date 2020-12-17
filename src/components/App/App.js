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

        return !finished ? (

            <div className="profile_section">
                <Header />

                <section className="main_profile">
                    <div className="dislike_button">
                        <DislikeButton />
                    </div>

                    {this.props.loaded ? <Profile /> : null}

                    <div className="like_button">
                        <LikeButton />
                    </div>
                </section>
                <section className="lower_profile">
                    <LeaderboardButton />
                </section>
               
            </div>
        ) : (
                <div>
                    <Header />

                    <Leaderboard />

                    <ResetButton />
                </div>
            );
    }
}

export default App;
