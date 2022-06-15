import React from 'react';
import classes from "./firstScreen.module.css";

interface CharacterItemProps {
    imgUrl: string
    isActivePlayer1: boolean
    isActivePlayer2: boolean
    isSelectedPlayer1: boolean
    isSelectedPlayer2: boolean
}

export default function CharacterItem({ imgUrl, isActivePlayer1, isActivePlayer2, isSelectedPlayer1, isSelectedPlayer2 }: CharacterItemProps) {
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
            //@ts-ignore
            style={{ '--color': (isActivePlayer1 && !isActivePlayer2) || (isActivePlayer2 && !isSelectedPlayer1) ? 'red' : '#00ff04' }}
        >
            <img src={`images/${imgUrl}`} alt="Character" />

            {isActivePlayer1 && <div className={characterActiveClasses}>1</div>}
            {isSelectedPlayer1 && isActivePlayer2 && <div className={characterActiveClasses}>2</div>}
        </div>
    )
}
