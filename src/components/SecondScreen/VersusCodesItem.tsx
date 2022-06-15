import React from 'react'
import { IVersusCode } from '../../consts';
import classes from './secondScreen.module.css'

const VersusCodesItem: React.FC<{ icon: IVersusCode }> = ({ icon }) => {

    return (
        <div className={classes['versus-codes__item']}
            style={{ backgroundPosition: icon.position }}
        ></div>
    )
}

export default VersusCodesItem;