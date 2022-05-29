import React from 'react'
import { varsusCodesIcons } from '../../consts';
import classes from './secondScreen.module.css';

const winningCodes = ['311111', '321111', '112111'];

function VersusCodesModal(_props, ref) {
    const [code, setCode] = React.useState(null);
    const winnerSound = React.useRef(new Audio('/sounds/9a8481d2760b50a.mp3'));

    const checkCode = React.useCallback((selectedIcons) => {
        const newCode = selectedIcons.map((item) => varsusCodesIcons[item.iconIndex].id).join('');
        if (winningCodes.includes(newCode)) {
            setCode(newCode);
            winnerSound.current.play();
        } else if (code) {
            setCode(null);
        }
    }, [code]);

    React.useImperativeHandle(ref, () => ({ checkCode }), [checkCode]);

    if (!code) return null;

    return (
        <div className={classes['codes-modal']}>
            <p>Congratulation! You Win.<br />
                Your winning code is "{code}"</p>
        </div>
    )
}
export default React.memo(React.forwardRef(VersusCodesModal));