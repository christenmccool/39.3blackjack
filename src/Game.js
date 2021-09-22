import './Game.css'
import {choose, total} from './helpers.js'
import deck from './deck.js';

import Card from './Card';

const Game = () => {
  const [cards, remainingCards] = choose(deck, 2);
  const score = total(cards, 'pts');
  const winningMsg = "🎉🎉🎉🎉 You won! 🎉🎉🎉🎉";
  const winningMsgDiv = score===21 ? <div className="Game-win">{winningMsg}</div> : null;
  
  return (
    <div className="Game">
      <div className="Game-cards">
        <Card card={cards[0]}/>
        <Card card={cards[1]}/>
      </div>
      <h1 className="Game-score">Score: {score}</h1>
      {winningMsgDiv}
    </div>
  );
};

export default Game;