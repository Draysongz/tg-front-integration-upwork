import WebApp from '@twa-dev/sdk';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { type FC, } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter,
  Routes,
  // useLocation,
  // useNavigate,
} from 'react-router-dom';

import { routes } from '@/navigation/routes.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

// function BackButtonManipulator() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     function onClick() {
//       navigate(-1);
//     }
//     WebApp.BackButton.onClick(onClick);

//     return () => WebApp.BackButton.offClick(onClick);
//   }, [navigate]);

//   useEffect(() => {
//     if (location.pathname === '/') {
//       WebApp.BackButton.isVisible && WebApp.BackButton.hide();
//       WebApp.isClosingConfirmationEnabled = true;
//     } else {
//       !WebApp.BackButton.isVisible && WebApp.BackButton.show();
//     }
//   }, [location]);

//   return null;
// }

export const App: FC = () => (
  <AppRoot
    // appearance={WebApp.colorScheme}
    platform={['macos', 'ios'].includes(WebApp.platform) ? 'ios' : 'base'}
  >
    <BrowserRouter>
      {/* <BackButtonManipulator /> */}
      <Routes>
        {routes.map((route) => <Route key={route.path} {...route} />)}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  </AppRoot>
);
