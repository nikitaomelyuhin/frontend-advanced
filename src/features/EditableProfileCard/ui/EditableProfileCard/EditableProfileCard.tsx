import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EditableProfileCard.module.scss';
import { ProfileCard } from '@/entities/Profile';

interface EditableProfileCardProps {
  className?: string;
}

export const EditableProfileCard = (props: EditableProfileCardProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.editableProfileCard, {}, [className])}>
      <ProfileCard />
    </div>
  );
};
