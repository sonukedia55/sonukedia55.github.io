import React, { useEffect, useState } from 'react';
import styles from './content.scss'

export class Header extends React.Component{
    render(){
        return <div className={styles['headerclass']}>
            <div className={styles['headersection']}>
                <h2>Todo App</h2>
            </div>
            <div className={styles['headersection']}>
                Using ReactJs
            </div>
        </div>;
    }
}