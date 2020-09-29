import React from 'react';
import Chat from './Chat';
import faker from 'faker';

const Chats = () => {
  return (
    <div className='chats'>
      <Chat
        name={faker.internet.userName()}
        message={faker.hacker.phrase()}
        timestamp='40 sec ago'
        profilePic={faker.image.avatar()}
      />
      <Chat
        name={faker.internet.userName()}
        message={faker.hacker.phrase()}
        timestamp='40 sec ago'
        profilePic={faker.image.avatar()}
      />
      <Chat
        name={faker.internet.userName()}
        message={faker.hacker.phrase()}
        timestamp='40 sec ago'
        profilePic={faker.image.avatar()}
      />
      <Chat
        name={faker.internet.userName()}
        message={faker.hacker.phrase()}
        timestamp='40 sec ago'
        profilePic={faker.image.avatar()}
      />
    </div>
  );
};

export default Chats;
