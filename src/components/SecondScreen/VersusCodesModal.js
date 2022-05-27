import React from 'react'
import classes from './secondScreen.module.css';

function VersusCodesModal(_props, ref) {
    const [code, setCode] = React.useState(null);

    React.useImperativeHandle(
        ref,
        () => ({
            code, setCode
        }), [code]);

    if (!code) return null;

    return (
        <div className={classes['codes-modal']}>
            <p>Congratulation! You Win.<br />
                Your winning code is "{code}"</p>
        </div>
    )
}
export default React.forwardRef(VersusCodesModal);