import React, { useCallback, useEffect, useState } from 'react';
import { varsusCodesIcons } from '../../consts';
import classes from './secondScreen.module.css'
import VersusCodesItem from './VersusCodesItem';

const AVAILABLE_KEYS = Array.from('QWERTY');

function VersusCodes(props) {
    const [winningCode, setWinningCode] = useState(null);
    const [selectedIcons, setSelectedIcons] = useState(
        AVAILABLE_KEYS.map(key => ({ id: key, iconIndex: 0 })
        ));

    const keyDownHandler = useCallback((e) => {
        const key = e.key.toUpperCase();
        if (!AVAILABLE_KEYS.includes(key)) return;

        setSelectedIcons(prev => prev.map(item => {
            if (item.id === key) {
                return {
                    ...item,
                    iconIndex: (item.iconIndex < varsusCodesIcons.length - 1) ? item.iconIndex + 1 : 0
                }
            }
            return item;
        }));
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', keyDownHandler);
        return () => document.removeEventListener('keydown', keyDownHandler);
    }, [keyDownHandler]);

    useEffect(() => {

        const codes = ['311111', '321111'];
        const newCode = selectedIcons.map((item) => varsusCodesIcons[item.iconIndex].id).join('');
        if (codes.includes(newCode)) {
            setWinningCode(newCode);
        } else if (winningCode) {
            setWinningCode(null);
        }
    }, [selectedIcons, winningCode]);

    return (
        <>
            <div className={classes['versus-codes']}>
                {AVAILABLE_KEYS.map((_, index) => (
                    <VersusCodesItem
                        key={index}
                        icon={varsusCodesIcons[selectedIcons[index].iconIndex]}
                    />
                ))}

            </div>
            {props.children({ code: winningCode })}
        </>
    )
}

export default React.memo(VersusCodes, (prev, next) => prev.children !== next.children);
