import React, { useContext, useEffect } from 'react'
import { RootContext } from '../../context/rootContext'
import SelectedCharacters from '../SelectedCharacters';
import classes from './secondScreen.module.css'
import VersusCodes from './VersusCodes';

export default function SecondScreen() {
    const { selectedPlayers, setActiveScreen } = useContext(RootContext);

    useEffect(() => {
        const timer = setTimeout(() => setActiveScreen(0), 4000);
        return () => clearTimeout(timer);
    }, [setActiveScreen])

    return (
        <div className={classes['second-screen']}>
            <div className={classes['second-screen__container']}>
                <h2 className={classes['second-screen__title']}>Battle <br />1</h2>
                <div className={[classes['second-screen__logo'], classes['left']].join(' ')}></div>
                <div className={[classes['second-screen__logo'], classes['right']].join(' ')}></div>
                <div className={classes['vs']}>
                    <span>v</span>
                    <span>s</span>
                </div>
                <SelectedCharacters
                    playerClasses={{
                        left: classes['player1'],
                        right: classes['player2']
                    }}
                    players={selectedPlayers}
                />
                <VersusCodes />
            </div>
        </div>
    )
}
