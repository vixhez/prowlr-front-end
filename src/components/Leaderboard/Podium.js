import React from "react";

const Podium = ({ top3 }) => {
    const winner = top3[0];
    const secondPlace = top3[1];
    const thirdPlace = top3[2];

    return (
        <section className="podium">
            <table className="podium__ladder">
                <tbody>
                    <tr>
                        <td className="podium__secondPlace__img">
                            <img className="card-img-top" src={process.env.PUBLIC_URL+secondPlace.image_url} alt={`${secondPlace.name} is a ${secondPlace.species}`} />
                        </td>
                        <td className="podium__firstPlace__img">
                            <img className="card-img-top" src={process.env.PUBLIC_URL+winner.image_url} alt={`${winner.name} is a ${winner.species}`} />
                        </td>
                        <td className="podium__thirdPlace__img">
                            <img className="card-img-top" src={process.env.PUBLIC_URL+thirdPlace.image_url} alt={`${thirdPlace.name} is a ${thirdPlace.species}`} />
                        </td>
                    </tr>
                    <tr>
                        <td className="podium__secondPlace">{secondPlace.name}</td>
                        <td className="podium__firstPlace">{winner.name}</td>
                        <td className="podium__thirdPlace">{thirdPlace.name}</td>
                    </tr>

                    <tr>
                        <td className="podium__stand"><div id="podium1"></div></td>
                        <td className="podium__stand"><div id="podium0"></div></td>
                        <td className="podium__stand"><div id="podium2"></div></td>
                    </tr>
                </tbody>
            </table>
        </section>
    )

}

export default Podium;