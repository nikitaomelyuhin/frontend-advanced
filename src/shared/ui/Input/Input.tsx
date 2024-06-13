import React, {
  memo, useEffect, useMemo, useRef, useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { InputProps } from './Input.types';

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    autofocus,
    type = 'text',
    placeholder,
    readonly = false,
    onChange,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const isVisibleCaret = useMemo(() => {
    return isFocused && !readonly;
  }, [isFocused, readonly]);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  return (
    <div className={classNames(cls.input, {}, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={cls.fieldWrapper}>
        <input
          ref={ref}
          className={cls.field}
          type={type}
          readOnly={readonly}
          value={value}
          onChange={onChangeHandler}
          onSelect={onSelect}
          onFocus={onFocus}
          onBlur={onBlur}
          {...otherProps}
        />
        {isVisibleCaret && (
          <span
            style={{ left: `${caretPosition * 9}px` }}
            className={cls.caret}
          />
        )}
      </div>

    </div>
  );
});
