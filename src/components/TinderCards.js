import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import '../css/TinderCards.css';
import database from '../database/firebase';

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  // Piece of code which runs based on a condition
  useEffect(() => {
    // Anytime the databse changed, re-renders the page
    const unsubscribe = database
      .collection('people')
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      // this is the cleanup
      unsubscribe();
    };
  }, [people]);

  return (
    <div>
      <div className='tinder-cards_container'>
        {people.map((person) => (
          <TinderCard
            className='tinder-cards_swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
          >
            <div
              className='tinder-cards_card'
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
