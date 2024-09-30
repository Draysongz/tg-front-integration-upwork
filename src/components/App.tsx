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
const queryString = window.location.search; // Get the query string
const urlParams = new URLSearchParams(queryString);

const referralId = urlParams.get("referralCode")!
console.log(referralId)
// alert(referralId)

// const hash = "query_id=AAElBO5_AAAAACUE7n8eruBr&user=%7B%22id%22%3A2146305061%2C%22first_name%22%3A%22Crypto%22%2C%22last_name%22%3A%22Dray%22%2C%22username%22%3A%22Habibilord%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1727623313&hash=c605d4a23ccba1229fd74147839364457d1086dc377d0c9a331c0c9a515a3173"
  const { userData } = useUserLogin(hash, referralId);

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

