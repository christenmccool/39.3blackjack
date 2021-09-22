let deck = [];
const baseUrl = 'https://deckofcardsapi.com/static/img/';

const suits = ['H','D','S','C'];
const ranks = ['A','2','3','4','5','6','7','8','9','0','J','Q','K'];

suits.forEach(suit => ranks.forEach(rank => deck.push(`${rank}${suit}`)));

deck = deck.map(ele => {
  let points;

  if (ele[0]==='A') {
    points = 11;
  } else if (ele[0]==='0' || ele[0]==='J' || ele[0]==='Q' || ele[0]==='K') {
    points = 10;
  } else {
    points = +ele[0];
  }

  return (
    {card: ele, 
      img: `${baseUrl}${ele}.png`,
      pts: points
    }
  );
});

export default deck;