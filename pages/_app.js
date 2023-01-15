import React from 'react';
import '../styles/global.scss'

import { wrapper } from '../store/store'
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
      const { store, props } = wrapper.useWrappedStore(pageProps);

      return <Provider store={store}> <Component {...pageProps} /> </Provider>
       
    }
    
