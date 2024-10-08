import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { type FC, useEffect, useMemo } from 'react';
import WebApp from '@twa-dev/sdk';

import { App } from '@/components/App.tsx';
import { ErrorBoundary } from '@/components/ErrorBoundary.tsx';
import { MaincontextProvider } from '@/context/MainContext';
import { OffCanvasModal } from './Modal/OverCanvas';
// import { initSwipeBehavior } from '@telegram-apps/sdk';

const ErrorBoundaryError: FC<{ error: unknown }> = ({ error }) => (
  <div>
    <p>An unhandled error occurred:</p>
    <blockquote>
      <code>
        {error instanceof Error
          ? error.message
          : typeof error === 'string'
            ? error
            : JSON.stringify(error)}
      </code>
    </blockquote>
  </div>
);

const Inner: FC = () => {
  const debug = WebApp.initDataUnsafe.start_param === 'debug';
  
  // const [swipeBehavior] = initSwipeBehavior();

  // WebApp.expand();

  // swipeBehavior.disableVerticalSwipe();

  const manifestUrl = useMemo(() => {
    return new URL('tonconnect-manifest.json', window.location.href).toString();
  }, []);

  // Enable debug mode to see all the methods sent and events received.
  useEffect(() => {
    if (debug) {
      import('eruda').then((lib) => lib.default.init());
    }
  }, [debug]);

  return (
    <MaincontextProvider>
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        <App />
        <OffCanvasModal />
      </TonConnectUIProvider>
    </MaincontextProvider>
  );
};

export const Root: FC = () => (
  <ErrorBoundary fallback={ErrorBoundaryError}>
    <Inner />
  </ErrorBoundary>
);
