import Header from './components/header/Header';
import LikeButton from './components/like-button/Like-button';
import DislikeButton from './components/dislike-button/Dislike-button';
import Profile from './components/profile/Profile';
import Leaderboard from './components/leaderboard/Leaderboard';

const App = () => (
    <div>
      <Header />

      <LikeButton />

      <DislikeButton />

      <Profile />

      <Leaderboard />
    </div>
  );

export default App;
