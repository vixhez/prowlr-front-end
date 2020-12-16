import React from "react";

const Podium = ({ top3 }) => {
    const winner = top3[0];
    const secondPlace = top3[1];
    const thirdPlace = top3[2];

    return (
        <div class="podium">
            <table id="ladder">
                <tr>
                    <td>{winner.image_url}</td>
                    <td>{secondPlace.image_url}</td>
                    <td>{thirdPlace.image_url}</td>
                </tr>
                <tr>
                    <td>{winner.name}</td>
                    <td>{secondPlace.name}</td>
                    <td>{thirdPlace.name}</td>
                </tr>

                <tr>
                    <td><div id="podium1"></div></td>
                    <td><div id="podium0"></div></td>
                    <td><div id="podium2"></div></td>
                </tr>
            </table>
        </div>
    )

}

export default Podium;