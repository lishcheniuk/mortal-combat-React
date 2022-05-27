import React, { useContext, useEffect } from 'react'
import { RootContext } from '../../context/rootContext'
import SelectedCharacters from '../SelectedCharacters';
import classes from './secondScreen.module.css'
import VersusCodes from './VersusCodes';
import VersusCodesModal from './VersusCodesModal'

export default function SecondScreen() {
    const { selectedPlayers, setActiveScreen } = useContext(RootContext);
    const [test, setTest] = React.useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setActiveScreen(0), 4000);
        return () => clearTimeout(timer);
    }, [setActiveScreen])

    return (
        <div className={classes['second-screen']}>
            <button onClick={() => setTest(!test)}>fgfgf</button>
            <div className={classes['second-screen__container']}>
                <h2 className={classes['second-screen__title']}>Battle <br />1</h2>
                <div className={[classes['second-screen__logo'], classes['left']].join(' ')}></div>
                <div className={[classes['second-screen__logo'], classes['right']].join(' ')}></div>
                <div className={classes['vs']}>
                    <span>v</span>
                    <span>s</span>
                </div>

                <VersusCodes>
                    {(props) => <VersusCodesModal {...props} />}
                </VersusCodes>

                <SelectedCharacters
                    playerClasses={{
                        left: classes['player1'],
                        right: classes['player2']
                    }}
                    players={selectedPlayers}
                />
            </div>
        </div>
    )
}
