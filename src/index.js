import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { UseWalletProvider } from 'use-wallet';

import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import { CustomWalletProvider } from './context/CustomWalletContext';
import { ContractProvider } from './context/ContractContext';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <UseWalletProvider chainId={1} connectors={{}}>
      <CustomWalletProvider>
        <ContractProvider>
          <ChakraProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ChakraProvider>
        </ContractProvider>
      </CustomWalletProvider>
    </UseWalletProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
