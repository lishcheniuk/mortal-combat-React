import React, { useCallback, useEffect, useRef, useState } from 'react';
import { varsusCodesIcons } from '../../consts';
import classes from './secondScreen.module.css'
import VersusCodesItem from './VersusCodesItem';
import VersusCodesModal from './VersusCodesModal';

const AVAILABLE_KEYS = Array.from('QWERTY');

function VersusCodes() {
    const [selectedIcons, setSelectedIcons] = useState(
        AVAILABLE_KEYS.map(key => ({ id: key, iconIndex: 0 })
        ));
    const codesModalRef = useRef();

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
        //проверяем ячейки на совпадение выиграшной комбинации
        codesModalRef.current.checkCode(selectedIcons);
    }, [selectedIcons]);

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
            <VersusCodesModal ref={codesModalRef} />
        </>
    )
}

export default React.memo(VersusCodes);
