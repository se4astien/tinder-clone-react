import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../css/Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Header = ({ backButton }) => {
  const history = useHistory();

  return (
    <header className='header'>
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className='icon' fontSize='large' />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className='icon' fontSize='large' />
        </IconButton>
      )}

      <Link to='/'>
        <img
          src='https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png'
          alt='tinder logo'
        />
      </Link>
      <Link to='/chat'>
        <IconButton>
          <ForumIcon className='icon' fontSize='large' />
        </IconButton>
      </Link>
    </header>
  );
};

export default Header;
