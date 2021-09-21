import React, { useEffect } from 'react';
import { useState } from 'react';
import {MediaCard, Icon, Tooltip, Button} from '@shopify/polaris';
import {
    ThumbsDownMajor,
    ThumbsUpMajor,
    ClipboardMinor
    } from '@shopify/polaris-icons';

function getLikes(id) {
    let likes = window.localStorage.getItem("likes");
    likes=JSON.parse(likes);
    return likes[id];
}

function setLikes(id) {
    let likes = window.localStorage.getItem("likes");
    likes=JSON.parse(likes);
    likes[id]=!likes[id];
    likes=JSON.stringify(likes);
    window.localStorage.setItem("likes",likes);
}

function setLikesList(id, val) {
    let likesList = window.localStorage.getItem("likesList");
    likesList=JSON.parse(likesList);
    likesList[id]=val;
    likesList[id]["isLiked"] = getLikes(id);
    likesList=JSON.stringify(likesList);
    window.localStorage.setItem("likesList",likesList);
}

export default function Card(props) {
    const [like, setLike] = useState(getLikes(props.date+props.title));
    
    return (
      <MediaCard
        title={props.title}
        primaryAction={{    
            content: like ? <Icon source={ThumbsDownMajor} color="base" /> : <Icon source={ThumbsUpMajor} color="base" />,
            onAction: () => {
                setLike(!like);
                setLikes(props.date+props.title);
                setLikesList(props.date+props.title,{...props});
                props.trigger();
            },
        }}
        secondaryAction={{    
            content: "Share!",
            onAction: () => {
                navigator.clipboard.writeText(props.url);
                props.setMsg(props.title+" copied to Clipboard!");
            },
        }}
        description={"Captured Date: "+props.date}
        // popoverActions={[{content: 'Share Pic', onAction: () => {navigator.clipboard.writeText(props.url);props.setMsg(props.title+" copied to Clipboard!");}}]}
    >
        <img
            alt=""
            width="100%"
            height="100%"
            style={{
            objectFit: 'cover',
            objectPosition: 'center',
            }}
            src={props.url}
        />
        </MediaCard>
    );
}
