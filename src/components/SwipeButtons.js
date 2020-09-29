import React from 'react';
import '../css/SwipeButtons.css';

import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

const SwipeButtons = () => {
  return (
    <div className='swipe-buttons'>
      <IconButton className='repeat'>
        <ReplayIcon fontSize='large' />
      </IconButton>
      <IconButton className='left'>
        <CloseIcon fontSize='large' />
      </IconButton>
      <IconButton className='star'>
        <StarRateIcon fontSize='large' />
      </IconButton>
      <IconButton className='right'>
        <FavoriteIcon fontSize='large' />
      </IconButton>
      <IconButton className='lightning'>
        <FlashOnIcon fontSize='large' />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
