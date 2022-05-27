import React from 'react'
import classes from './secondScreen.module.css'

export default function VersusCodesItem({ icon }) {

    return (
        <div className={classes['versus-codes__item']}
            style={{ backgroundPosition: icon.position }}
        ></div>
    )
}
