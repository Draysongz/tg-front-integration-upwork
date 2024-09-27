import WebApp from '@twa-dev/sdk';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { FC, useEffect, useState } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom';

import { routes } from '@/navigation/routes.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useUserLogin } from '@/hooks/useLoginUser';

export const App: FC = () => {
  const [hash, setHash] = useState('');
  const { userData } = useUserLogin(hash);

  useEffect(() => {
    WebApp.expand();
    const userHash = WebApp.initData;
    setHash(userHash);
  }, []);

  return (
    <AppRoot
      platform={['macos', 'ios'].includes(WebApp.platform) ? 'ios' : 'base'}
    >
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.Component userData={userData} />}
            />
          ))}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </AppRoot>
  );
};

