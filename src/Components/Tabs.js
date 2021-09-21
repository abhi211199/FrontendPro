import React, {useCallback, useEffect, useState} from 'react';
import {Badge, Card, Tabs} from '@shopify/polaris';
import Images from './Images';
import LikedImages from './LikedImages';
import Toast from './Toast';

export default function TabsWithBadgeExample(props) {

    const [selected, setSelected] = useState(0);
    const [imagesCount, setImagesCount] = useState(0);
    const [likedImagesCount, setLikedImagesCount] = useState(true);
    const [msg, setMsg] = useState(0);

    const getLikedImagesCount= () => {
        let likesList = window.localStorage.getItem("likesList");
        if(likesList==undefined)return;
        likesList = JSON.parse(likesList);
        var c=0;
        Object.keys(likesList).forEach(val=>{
            if(likesList[val]["isLiked"]) c++;
        });
        setLikedImagesCount(c);
    }

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        [],
    );

    useEffect(()=>{getLikedImagesCount()},[]);

    const tabs = [
        {
        id: 'all-customers-fitted-3',
        content: (
            <span>
            All Images <Badge status="new">{imagesCount}</Badge>
            </span>
        ),
        accessibilityLabel: 'All customers',
        panelID: 'all-customers-fitted-content-3',
        },
        {
        id: 'accepts-marketing-fitted-3',
        content: (
            <span>
            Liked Images <Badge status="new">{likedImagesCount}</Badge>
            </span>
        ),
        panelID: 'accepts-marketing-fitted-content-3',
        },
    ];

    return (
        <>
        <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
            <Card.Section >
            { selected==0? <Images count={(val)=>setImagesCount(val)} trigger={()=>getLikedImagesCount()} triggerAPI={props.triggerAPI} setMsg={(msg)=>setMsg(msg)} /> : <LikedImages count={(val)=>setLikedImagesCount(val)} trigger={()=>getLikedImagesCount()} setMsg={(msg)=>setMsg(msg)} /> }
            </Card.Section>
        </Tabs>
        </Card>
        {msg && <Toast message={msg} status={msg} />}

        </>
    );
}
