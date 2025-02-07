'use client'

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
// import '@/styles/globals.css'; // Adjust the path if necessary

interface LayoutProps {
  children: ReactNode;
}

const StoreProvider: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StoreProvider;
