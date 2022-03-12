import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
  // Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import {QrReader} from "react-qr-reader";


import './App.css';
import React, { useEffect, useState } from 'react';
import QRscan from './pages/QrScanner'

const App = (props) => {
  const [data, setData] = useState('No result');
  const handleScan = data =>{
    if (data){

      <Route>
        <Redirect to={{pathname: setData}}/>
      </Route>
    }
  }

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
    </>
  );
};

export default App;