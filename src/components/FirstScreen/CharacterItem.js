import React from 'react';
import classes from "./firstScreen.module.css";

export default function CharacterItem({ imgUrl, isActivePlayer1, isActivePlayer2, isSelectedPlayer1, isSelectedPlayer2, onEnter, onSelect }) {
    const characterItemClasses = [
        classes['first-screen__character'],
        (isActivePlayer1 && !isSelectedPlayer1) || (isActivePlayer2 && !isSelectedPlayer2 && isSelectedPlayer1) ? classes.active : '',
        (isActivePlayer1 && isSelectedPlayer1) || (isSelectedPlayer1 && isActivePlayer2) ? classes['selected-player1'] : ''
    ].join(' ');

    const characterActiveClasses = [
        classes['first-screen__character-player'],
        (isActivePlayer1 && !isSelectedPlayer1) || (isActivePlayer2 && !isSelectedPlayer2 && isSelectedPlayer1) ? classes['first-screen__character-player_number'] : ''
    ].join(' ');

    return (
        <div
            className={characterItemClasses}
            style={{ '--color': (isActivePlayer1 && !isActivePlayer2) || (isActivePlayer2 && !isSelectedPlayer1) ? 'red' : '#00ff04' }}
            onMouseEnter={onEnter}
            onClick={onSelect}
        >
            <img src={`images/${imgUrl}`} alt="Character" />

            {isActivePlayer1 && <div className={characterActiveClasses}>1</div>}
            {isSelectedPlayer1 && isActivePlayer2 && <div className={characterActiveClasses}>2</div>}
        </div>
    )
}
