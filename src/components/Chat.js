import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Chat.css';
import Avatar from '@material-ui/core/Avatar';

const Chat = ({ name, message, timestamp, profilePic }) => {
  return (
    <Link to={`/chat/${name}`}>
      <div className='chat'>
        <Avatar className='image' alt={name} src={profilePic} />
        <div className='details'>
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className='timestamp'>{timestamp}</p>
      </div>
    </Link>
  );
};

export default Chat;
