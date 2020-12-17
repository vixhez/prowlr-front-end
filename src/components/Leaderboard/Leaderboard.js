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
                <section >
                    <div className="list">
                    <table className="table fixed_header">
                        <thead className="table-header">
                            <tr>
                                {/* <th scope="col">Position</th>
                                <th scope="col">Name</th> */}
                            </tr>
                        </thead>
                        <tbody className="tbody">
                            {runnersUp.map((animal, index) => (
                                <tr className="table-row" key={index}>
                                    <th scope="row">{index + 4}th</th>
                                    <td>{animal.name}</td>
                                </tr>
                            )
                            )}
                        </tbody>
                    </table>
                    </div>
                </section>
            </>
        )
    }
}


export default Leaderboard;