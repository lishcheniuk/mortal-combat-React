import React from "react";

function SelectedCharacters({ players, playerClasses }) {
    return (
        <>
            <div className={playerClasses.left}>
                <img src={`images/${players.player1.imgFull}`} alt="Player1" />
            </div>
            <div className={playerClasses.right}>
                <img src={`images/${players.player2.imgFull}`} alt="Player2" />
            </div>
        </>
    )
}

export default React.memo(SelectedCharacters);