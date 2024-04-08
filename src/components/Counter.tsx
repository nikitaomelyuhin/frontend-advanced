import { useState } from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1)
    }
    return (
        <div className={classes.counter}>
            <h1>{count}</h1>
            <button className={classes.btn} onClick={increase}>increment</button>
        </div>
    );
};