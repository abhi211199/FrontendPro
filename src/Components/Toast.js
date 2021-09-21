import React, {useCallback, useEffect, useState} from 'react';
import {Button, Frame, Page, Toast} from '@shopify/polaris';

export default function ToastExample(props) {
    const [active, setActive] = useState(true);

    setTimeout(()=>{setActive(false)},5000);

    const toastMarkup = active ? (
        <Toast content={props.message} onDismiss={()=>setActive(false)} />
    ) : null;

    useEffect(()=>setActive(true),[props.status]);
    
    return (
        <div style={{height: '250px'}}>
        <Frame>
            {toastMarkup}
        </Frame>
        </div>
    );
}
