import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '../../model/types/article';
import ListIcon from '@/shared/assets/icons/list.svg';
import TiledIcon from '@/shared/assets/icons/tiled.svg';
import { Button } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { ButtonThemes } from '@/shared/ui/Button/Button.types';
import cls from './ArticleListView.module.scss';

interface ArticleListViewProps {
  className?: string;
  view: ArticleView;
  onClickView: (view: ArticleView) => void;
}

const views = [
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
];

export const ArticleListView = memo((props: ArticleListViewProps) => {
  const {
    className,
    view,
    onClickView,
  } = props;

  const onClick = (view: ArticleView) => () => {
    onClickView(view);
  };

  return (
    <div className={classNames(cls.articleListView, {}, [className])}>
      {
        views.map((item) => (
          <Button
            key={item.view}
            onClick={onClick(item.view)}
            theme={ButtonThemes.CLEAR}
          >
            <Icon
              className={classNames('', { [cls.selected]: view === item.view })}
              Svg={item.icon}
            />
          </Button>
        ))
      }
    </div>
  );
});
