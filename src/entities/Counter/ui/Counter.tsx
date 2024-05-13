import { useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Counter.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonThemes } from '@/shared/ui/Button/Button.types';

interface CounterProps {
    className?: string;
}

export const Counter = (props: CounterProps) => {
    const { className } = props;
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrease = () => {
        setCount((prevCount) => prevCount - 1);
    };

    return (
        <div className={classNames(cls.Counter, {}, [className])}>
            <h2>
                Count:
                {count}
            </h2>
            <Button theme={ButtonThemes.OUTLINE} onClick={increase}>increase</Button>
            <Button theme={ButtonThemes.OUTLINE} onClick={decrease}>decrease</Button>
        </div>
    );
};
