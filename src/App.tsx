import React from 'react';
import Card from './components/Card/Card';
// Setup
import { createBoard } from './setup';
import { shuffleArray } from './utils';
// Types
import { CardType } from './setup';
// Styles
import { Grid } from './App.styles';

const App = () => {
  const [cards, setCards] = React.useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = React.useState(false);
  const [matchedPairs, setMatchedPairs] = React.useState(0);
  const [clickedCard, setClickedCard] = React.useState<undefined | CardType>(undefined);

  const handleCardClick = () => {
    console.log("Click!");
  };

  return (
    <div>
      <Grid>
        {cards.map(card => (
          <Card key={card.id} card={card} callback={handleCardClick} />
        ))}
      </Grid>
    </div>
  );
};

export default App;