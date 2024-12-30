import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { formatCurrency } from '../../../utils/formatters';
import './styles/ActivityCard.css';

const ActivityCard = ({ activity, onToggleFavorite, isFavorite }) => {
  return (
    <div className="activity-card">
      <div className="activity-image-container">
        <img src={activity.imageUrl} alt={activity.title} className="activity-image" />
        <button
          onClick={() => onToggleFavorite(activity.id)}
          className="favorite-button"
        >
          {isFavorite ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
        </button>
        {activity.type === 'DAY TRIP' && (
          <div className="top-pick-badge">Top pick</div>
        )}
      </div>
      <div className="activity-content">
        <div className="activity-type">{activity.type}</div>
        <h3 className="activity-title">{activity.title}</h3>
        <div className="activity-rating">
          {'★'.repeat(Math.floor(activity.rating))}
          <span className="rating-text">
            {activity.rating} ({activity.reviews.toLocaleString()})
          </span>
        </div>
        <div className="activity-duration">{activity.duration}</div>
        {activity.isLikelyToSellOut && (
          <div className="sell-out-warning">Likely to sell out</div>
        )}
        <div className="price-container">
          {activity.originalPrice && (
            <div className="original-price">
              From {formatCurrency(activity.originalPrice)}
            </div>
          )}
          <div className="current-price">
            From {formatCurrency(activity.price)} per person
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
