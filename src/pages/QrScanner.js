import React, {useState} from 'react'
import {Fab, TextareaAutosize} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import {QrReader} from "react-qr-reader";

function QRscanner() {

    const [data, setData] = useState('No result');
    const handleScan = data => {
        if (data) {
            setData(data)
        }
    }
    const handleError = err => {
    console.error(err)
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
  }
  
  export default QRscanner;