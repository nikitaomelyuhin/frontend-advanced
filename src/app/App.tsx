import { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { Header } from '@/widgets/Header';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/shared/providers/AppRouter';
import { SideBar } from '@/widgets/SideBar';

import '@/app/config/i18n/i18n';
// eslint-disable-next-line import/order
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from '@/entities/User';

const App = () => {
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app')}>
      <Suspense fallback="">
        <Header />
        <div className="content">
          <SideBar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
export default App;
