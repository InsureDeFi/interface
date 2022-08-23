import '../styles/globals.css';

import type { AppProps } from 'next/app';
import AppContainer from '@components/Container/AppContainer';
import AppConfig from '@components/AppConfig/AppConfig';

function App({ Component, pageProps }: AppProps) {
  return (
    <AppConfig>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </AppConfig>
  );
}

export default App;
