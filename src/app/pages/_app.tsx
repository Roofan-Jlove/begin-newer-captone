import '../styles/globals.css';
import type { AppProps } from 'next/app';
// import { ClerkProvider } from '@clerk/nextjs';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ClerkProvider>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    // </ClerkProvider>
  );
}

export default MyApp;
