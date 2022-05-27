import React, { useCallback, useContext, useEffect, useState } from 'react'
import { characters } from '../../consts';
import { RootContext } from '../../context/rootContext';
import CharacterItem from './CharacterItem';

function CharactersList(props) {
    const { selectPlayer, setActiveScreen } = useContext(RootContext);
    const [player1, setPlayer1] = useState({ idx: 0, isSelected: false });
    const [player2, setPlayer2] = useState({ idx: 0, isSelected: false });

    const mouseEnterCharacter = (index) => {
        if (player2.isSelected) return;
        if (player1.isSelected) {
            return setPlayer2({ ...player2, idx: index });
        }
        setPlayer1({ ...player1, idx: index });
    }

    const selectCharacter = useCallback((item) => {
        if (player2.isSelected) return;
        let playerNumber = 1;
        if (player1.isSelected) {
            playerNumber = 2;
            setPlayer2(prev => ({ ...prev, isSelected: true }))
        } else {
            setPlayer1(prev => ({ ...prev, isSelected: true }))
        }
        selectPlayer(item, playerNumber);
    }, [player1, player2, selectPlayer])

    const keyPressHandler = useCallback((e) => {
        if (player2.isSelected) return;
        let index = !player1.isSelected ? player1.idx : player2.idx;

        switch (e.key) {
            case 'ArrowDown':
                index += 3;
                break;
            case 'ArrowUp':
                index -= 3;
                break;
            case 'ArrowLeft':
                index -= 1;
                break;
            case 'ArrowRight':
                index += 1;
                break;
            case 'Enter':
                selectCharacter(characters[index]);
                break;
            default:
        }

        if (characters[index]) {
            if (player1.isSelected) {
                setPlayer2(prev => ({ ...prev, idx: index }));
            } else {
                setPlayer1(prev => ({ ...prev, idx: index }));
            }
        }
    }, [player1, player2, selectCharacter]);

    useEffect(() => {
        document.addEventListener('keydown', keyPressHandler);
        return () => document.removeEventListener('keydown', keyPressHandler)
    }, [keyPressHandler]);

    useEffect(() => {
        let timer = null;
        if (player1.isSelected && player2.isSelected) {
            timer = setTimeout(() => {
                setActiveScreen(1);
            }, 2000)
        }
        return () => timer && clearTimeout(timer)
    }, [player1, player2, setActiveScreen])

    return <>
        {characters.map((item, index) => (
            <CharacterItem
                key={item.id}
                imgUrl={item.img}
                isActivePlayer1={player1.idx === index}
                isActivePlayer2={player2.idx === index}
                isSelectedPlayer1={player1.isSelected}
                isSelectedPlayer2={player2.isSelected}
                onEnter={() => mouseEnterCharacter(index)}
                onSelect={() => selectCharacter(item)}
            />
        ))}
        {props.children({ player1: characters[player1.idx], player2: characters[player2.idx] })}
    </>
}

export default React.memo(CharactersList);