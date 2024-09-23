import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonThemes } from '../../../../shared/ui/Button/Button.types';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { useDynamicModuleLoader } from '@/shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { ReducersList } from '@/shared/hooks/useDynamicModuleLoader.types';
import { sendComment } from '../../model/services/sendComment/sendComment';

interface AddCommentFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);

  useDynamicModuleLoader({ reducers: initialReducers });

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendComment = useCallback(() => {
    dispatch(sendComment());
  }, [dispatch]);

  return (
    <div className={classNames(cls.addCommentForm, {}, [className])}>
      <Input
        className={cls.input}
        placeholder={t('Enter comment text')}
        value={text}
        onChange={onCommentTextChange}
      />
      <Button
        onClick={onSendComment}
        theme={ButtonThemes.OUTLINE}
      >
        {t('Send')}
      </Button>
    </div>
  );
});

export default AddCommentForm;
