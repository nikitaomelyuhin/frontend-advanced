import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';
import { Text } from '@/shared/ui/Text/Text';
import { TextAligns } from '@/shared/ui/Text/Text.types';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;

  return (
    <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
      <img
        src={block.src}
        className={cls.image}
        alt={block.title}
      />
      {block.title && (
        <Text
          text={block.title}
          textAlign={TextAligns.CENTER}
        />
      )}
    </div>
  );
});
