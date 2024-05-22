import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Counter.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonThemes } from '@/shared/ui/Button/Button.types';
import { getCounterValue } from '@/entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '@/entities/Counter/model/slice/counterSlice';

interface CounterProps {
  className?: string;
}

export const Counter = (props: CounterProps) => {
  const { className } = props;
  const counterValue = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(counterActions.increment());
  };

  const decrease = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className={classNames(cls.Counter, {}, [className])}>
      <h2 data-testid="counter-title">
        Count:
        {counterValue}
      </h2>
      <Button
        data-testid="counter-increment"
        theme={ButtonThemes.OUTLINE}
        onClick={increase}
      >
        increase
      </Button>
      <Button
        data-testid="counter-decrement"
        theme={ButtonThemes.OUTLINE}
        onClick={decrease}
      >
        decrease
      </Button>
    </div>
  );
};
