import Header from './components/header/Header';
import LikeButton from './components/like-button/Like-button';
import DislikeButton from './components/dislike-button/Dislike-button';
import Profile from './components/profile';
import Leaderboard from './components/Leaderboard/Leaderboard';

// turn into a class to access didmount. 

const App = () => (
  <div>
    <Header />

    <LikeButton />

    <DislikeButton />

    <Profile id={1} />

    <Leaderboard />
  </div>
);

export default App;
