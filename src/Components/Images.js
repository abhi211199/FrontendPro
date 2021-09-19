import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import {AppProvider} from "@shopify/polaris";
import en from '@shopify/polaris/locales/en.json';

export default function Images() {
    const [data, setData] = useState([]);

    useEffect(()=>{ 
        axios.get(`${process.env.REACT_APP_URL}&count=10`)
        .then(function (response) {
            setData(response.data)
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    },[]);

    return(
        <AppProvider i18n={en} theme={{colorScheme: "light"}}>
            {
                data.map((val)=> {
                    if(val?.media_type==="image")
                    return(<Card {...val}/>)
                })
            }
        </AppProvider>
    );
}