import React from 'react';
import { useEffect, useState } from 'react';
import Card from './Card';
import {AppProvider} from "@shopify/polaris";
import en from '@shopify/polaris/locales/en.json';

export default function LikedImages(props) {
    const [data, setData] = useState([]);

    useEffect(()=>{ 
        let likesList = window.localStorage.getItem("likesList");
        likesList=JSON.parse(likesList);
        console.log(likesList)
        let likesArray = [];
        Object.keys(likesList).forEach(key=>{
            if(likesList[key]["isLiked"])
            likesArray.push(likesList[key]);
        });
        setData(likesArray);
        props.count(likesArray.length);
    },[]);

    return(
        <AppProvider i18n={en} theme={{colorScheme: "light"}}>
            {
                data.map((val)=> {
                    if(val?.media_type==="image")
                    return(<Card {...val} trigger={()=>props.trigger()} setMsg={(val)=>props.setMsg(val)} />)
                })
            }
        </AppProvider>
    );
}