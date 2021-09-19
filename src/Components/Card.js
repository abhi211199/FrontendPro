import React from 'react';
import { useState } from 'react';
import {MediaCard} from '@shopify/polaris';

export default function Card(props) {
    const [like, setLike] = useState(false);

    return (
      <MediaCard
        title={props.title}
        primaryAction={{
            content:  "like" ,
            onAction: () => {},
        }}
        description={props.explanation.substr(0, 200)+"..."}
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
