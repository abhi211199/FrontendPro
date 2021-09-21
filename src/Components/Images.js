import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import {AppProvider, Spinner} from "@shopify/polaris";
import en from '@shopify/polaris/locales/en.json';

export default function Images(props) {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(()=>{
        let startDate=window.localStorage.getItem("startDate"), endDate=window.localStorage.getItem("endDate");
        let URL = `${process.env.REACT_APP_URL}`;
        if(startDate) URL+=`&start_date=${startDate}`;
        if(endDate) URL+=`&end_date=${endDate}`;
        setLoader(true);
        axios.get(URL)
        .then(function (response) {
            setData(response.data);
            props.count(response.data.length);
            setLoader(false);
        })
        .catch(function (error) {
            console.log(error);
        });
    },[props.triggerAPI]);

    return(
        <AppProvider i18n={en} theme={{colorScheme: "light"}}>
            {loader && <Spinner accessibilityLabel="Spinner example" size="large" />}
            {
                !loader && data.map((val)=> {
                    if(val?.media_type==="image")
                    return(<Card {...val} trigger={()=>props.trigger()} setMsg={(val)=>props.setMsg(val)} />)
                })
            }
        </AppProvider>
    );
}