import React, { useState } from 'react';
import  ActivityCard  from './ActivityCard';
import  FilterButton  from './FilterButton';
import { mockActivities } from '../../../data/mockActivities';
import './Places.css';

const Places = () => {
  return (
    <section className="places_section">
      <FilterPlaces />
    </section>
  );
};

export const FilterPlaces = () => {
  const [favorites, setFavorites] = useState([]);

  const [filters, setFilters] = useState({
    price: [],
    languages: [],
    duration: [],
    time: [],
  });

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id]
    );
  };

  return (
    <div className="container">
      <h1 className="title">All activities</h1>

      <div className="filters-container">
        <div className="filters-group">
          <FilterButton
            label="Price"
            options={['Under ₱2000', '₱2000-₱5000', 'Over ₱5000']}
            selectedOptions={filters.price}
            onChange={(options) => setFilters({ ...filters, price: options })}
          />
          <FilterButton
            label="Languages"
            options={['English', 'Spanish', 'French', 'German']}
            selectedOptions={filters.languages}
            onChange={(options) => setFilters({ ...filters, languages: options })}
          />
          <FilterButton
            label="Duration"
            options={['Under 1 hour', '1-3 hours', '3-5 hours', 'Over 5 hours']}
            selectedOptions={filters.duration}
            onChange={(options) => setFilters({ ...filters, duration: options })}
          />
          <FilterButton
            label="Time"
            options={['Morning', 'Afternoon', 'Evening', 'Night']}
            selectedOptions={filters.time}
            onChange={(options) => setFilters({ ...filters, time: options })}
          />
        </div>
      </div>

      <div className="activities-header">
        <p className="activities-count">
          {mockActivities.length} activities found
        </p>
       <div className="sort-container">
          <span>Sort by:</span>
          <select className="sort-select">
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>
      </div>

      <div className="activities-grid">
        {mockActivities.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            onToggleFavorite={toggleFavorite}
            isFavorite={favorites.includes(activity.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Places;

