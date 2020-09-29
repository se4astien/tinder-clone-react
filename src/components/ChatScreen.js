import React, { useState } from 'react';
import '../css/ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';
import faker from 'faker';

const ChatScreen = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Ellen',
      image: faker.image.avatar(),
      message: 'Hey whats up!',
    },
    {
      name: 'Ellen',
      image: faker.image.avatar(),
      message: 'I love you!',
    },
    {
      message: 'Hello :)',
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput('');
  };

  return (
    <div className='chatscreen'>
      <p className='matched'>You matched with Ellen on 21/10/20</p>
      {messages.map((message) => (
        <div className='details'>
          {message.name ? (
            <>
              <Avatar
                className='image'
                alt={message.name}
                src={message.image}
              />
              <p className='message'>{message.message}</p>
            </>
          ) : (
            <p className='message text-user'>{message.message}</p>
          )}
        </div>
      ))}

      <form className='form'>
        <input
          type='text'
          placeholder='Write a message...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </form>
    </div>
  );
};

export default ChatScreen;
