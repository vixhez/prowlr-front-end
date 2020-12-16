import Podium from './Podium';
import { Component } from 'react';

class Leaderboard extends Component {
    componentDidMount() {
        this.props.getLeaderBoard();
    }

    render() {
        const { animals } = this.props;

        const animalsCopy = [...animals];
        animalsCopy.sort((a, b) => {
            if (a.percentageOfLikes > b.percentageOfLikes) {
                return -1;
            } else if (a.percentageOfLikes < b.percentageOfLikes) {
                return 1;
            } else {
                return 0;
            }
        })

        // Get top 3 of ranking
        const top3 = animalsCopy.slice(0, 3);

        // Get runner list
        const runnersUp = animalsCopy.slice(3,)

        return (
            // Insert subcomponent Podium - pass in top3 variable. 
            <>
                <Podium top3={top3} />
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">Position</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Liked</th>
                        </tr>
                    </thead>
                    <tbody>
                        {runnersUp.map((animal, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 4}</th>
                                <td>{animal.name}</td>
                                <td>{animal.image_url}</td>
                                <td>{animal.percentageOfLikes}</td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            </>
        )
    }
}


export default Leaderboard;