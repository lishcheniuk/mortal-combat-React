import React from 'react'
import CharactersList from './CharactersList';
import SelectedCharacters from '../SelectedCharacters';
import classes from "./firstScreen.module.css";
import { IPlayers } from '../../context/rootContext';

export default function FirstScreen() {
    return (
        <div className={classes['first-screen']}>
            <div className={[classes['first-screen__container'], 'container'].join(' ')}>
                <h2 className={classes['first-screen__title']}>Select your fighter</h2>
                <div className={classes['first-screen__main']}>
                    <CharactersList>
                        {(players: IPlayers) => (
                            <SelectedCharacters
                                playerClasses={{
                                    left: classes['first-screen__player-1'],
                                    right: classes['first-screen__player-2']
                                }}
                                players={players}
                            />
                        )}
                    </CharactersList>
                </div>
                <h3 className={classes['first-screen__footer-title']}>Kombat zone: soul chamber</h3>
            </div>
        </div>
    )
}
