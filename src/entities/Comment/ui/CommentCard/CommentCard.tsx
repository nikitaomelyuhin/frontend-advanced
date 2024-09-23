import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { AppRoutes, RoutePath } from '@/shared/constants/router';

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.commentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton
            width="30px"
            height="30px"
            border="50%"
          />
          <Skeleton
            className={cls.username}
            width="100px"
            height="30px"
          />
        </div>
        <Skeleton
          className={cls.text}
          width="100%"
          height="30px"
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.commentCard, {}, [className])}>
      <AppLink to={`/${AppRoutes.PROFILE}/${comment.user.id}`} className={cls.header}>
        {comment.user.avatar ? <Avatar size="xs" src={comment.user.avatar} /> : null}
        <Text
          className={cls.username}
          title={comment.user.username}
        />
      </AppLink>
      <Text
        className={cls.text}
        text={comment.text}
      />
    </div>
  );
});
