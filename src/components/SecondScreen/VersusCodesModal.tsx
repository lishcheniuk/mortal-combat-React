import React from 'react'
import { varsusCodesIcons } from '../../consts';
import classes from './secondScreen.module.css';
import { ICodeCell } from './VersusCodes';

const winningCodes = ['311111', '321111', '112111'];

interface IImperativeHandlers {
    checkCode: (icons: ICodeCell[]) => void
}

interface IVersusCodesModalProps { }

const VersusCodesModal: React.ForwardRefRenderFunction<IImperativeHandlers, IVersusCodesModalProps> = (_props, ref) => {
    const [code, setCode] = React.useState<string | null>(null);
    const winnerSound = React.useRef(new Audio('/sounds/9a8481d2760b50a.mp3'));

    const checkCode = React.useCallback((selectedIcons: ICodeCell[]) => {
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