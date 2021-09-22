import './Card.css'

const Card = ({card}) => {
  return (
    <div className="Card">
      <img src={card.img} alt={card.card} className="Card-image" />
    </div>
  )
}

export default Card;