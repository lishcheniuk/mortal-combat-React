import React from 'react'
import classes from './secondScreen.module.css';

export default function VersusCodesModal({ code }) {
    if (!code) return null;

    return (
        <div className={classes['codes-modal']}>
            <p>Congratulation! You Win.<br />
                Your winning code is "{code}"</p>
        </div>
    )
}
