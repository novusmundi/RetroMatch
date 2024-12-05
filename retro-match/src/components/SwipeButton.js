// src/components/SwipeButton.js
import React from 'react';
import { Replay } from '@material-ui/icons';
import { Close } from '@material-ui/icons';
import { StarRate } from '@material-ui/icons';
import { Favorite } from '@material-ui/icons';
import { FlashOn } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

function SwipeButton(props) {
    return (
        <div className="SwipeButtons">
            <IconButton className="SwipeButtons__repeat">
                <Replay fontSize="small" />
            </IconButton>
            <IconButton className="SwipeButtons__left">
                <Close fontSize="small" />
            </IconButton>
            <IconButton className="SwipeButtons__star">
                <StarRate fontSize="small" />
            </IconButton>
            <IconButton className="SwipeButtons__right">
                <Favorite fontSize="small" />
            </IconButton>
            <IconButton className="SwipeButtons__lightning">
                <FlashOn fontSize="small" />
            </IconButton>
        </div>
    );
}

export default SwipeButton;