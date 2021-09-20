import React, { useEffect } from 'react';
import { useState } from 'react';
import {MediaCard} from '@shopify/polaris';

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

export default function Card(props) {
    const [like, setLike] = useState(getLikes(props.date+props.title));
    
    return (
      <MediaCard
        title={props.title}
        primaryAction={{
            content: like ? "dislike":"like",
            onAction: () => {
                setLike(!like);
                setLikes(props.date+props.title);
            },
        }}
        description={props.date}
        popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
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
