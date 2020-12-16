import React from "react";

const Podium = ({ top3 }) => {

    return (
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
                {top3.map((animal, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{animal.name}</td>
                        <td>{animal.image_url}</td>
                        <td>{animal.percentageOfLikes}</td>
                    </tr>
                )
                )}
            </tbody>
        </table>
    )

}

export default Podium;