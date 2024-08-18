import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Icon } from '../Icon/Icon';
import CopyCodeIcon from '@/shared/assets/icons/copy-code.svg';
import { Button } from '../Button/Button';
import { ButtonThemes } from '../Button/Button.types';

interface CodeProps {
  className?: string;
  codeText: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, codeText } = props;

  const onCopy = () => {
    navigator.clipboard.writeText(codeText);
  };

  return (
    <div className={classNames(cls.code, {}, [className])}>
      <Button
        className={cls.icon}
        theme={ButtonThemes.CLEAR}
        onClick={onCopy}
      >
        <Icon
          Svg={CopyCodeIcon}
        />
      </Button>

      <pre>
        <code className={cls.codeBlock}>
          {codeText}
        </code>
      </pre>
    </div>
  );
});
