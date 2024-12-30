import React, { useState } from 'react';
import './Destinations.css'
import { MdLocationPin } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillCreditCard2BackFill, BsFillCalendar2DateFill } from "react-icons/bs";
import Image_1 from '../../../assets/tours/tour-1.jpg'
import Image_2 from '../../../assets/tours/tour-2.jpg'
import Image_3 from '../../../assets/tours/tour-3.jpg'
import Image_4 from '../../../assets/tours/tour-4.jpg'
import Image_5 from '../../../assets/tours/tour-5.jpg'
const Destinations = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchCriteria, setSearchCriteria] = useState({
    location: '',
    budget: '',
    date: '',
  });
8
  const images = [
    { src: Image_1, category: 'Beach', location: 'Spain', rate: '4.9', budget: '1000', date: '2024-06-01' },
    { src: Image_2, category: 'Park', location: 'Italy', rate: '4.5', budget: '800', date: '2024-07-15' },
    { src: Image_3, category: 'Nature', location: 'Georgia', rate: '4.3', budget: '1200', date: '2024-05-20' },
    { src: Image_4, category: 'Mountain', location: 'France', rate: '4.8', budget: '1500', date: '2024-09-10' },
    { src: Image_5, category: 'Beach', location: 'Greece', rate: '4.7', budget: '1100', date: '2024-08-05' },
  ];

  const handleSearchChange = (e) => {
    setSearchCriteria({
      ...searchCriteria,
      [e.target.name]: e.target.value,
    });
  };

    const filteredImages = images.filter((image) => {
    const matchesLocation = !searchCriteria.location || image.location.toLowerCase().includes(searchCriteria.location.toLowerCase());
    const matchesBudget = !searchCriteria.budget || parseFloat(image.budget) <= parseFloat(searchCriteria.budget);
    const matchesDate = !searchCriteria.date || image.date >= searchCriteria.date;

    return matchesLocation && matchesBudget && matchesDate;
  });

  return (
    <section className="destination_section ">
      <span>EXPLORE NOW</span>
      <h2>Find Your Dream Place</h2>
      <p className="destination_section-p">Fill in the fields to find the best spot for your next tour.</p>
      <div className="destination_container container">
        <div className="destination_card">
          <MdLocationPin size={18} className="icon_destination" />
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={searchCriteria.location}
            onChange={handleSearchChange}
          />
        </div>
        <div className="destination_card">
          <BsFillCreditCard2BackFill size={18} className="icon_destination" />
          <input
            type="text"
            placeholder="Budget"
            name="budget"
            value={searchCriteria.budget}
            onChange={handleSearchChange}
          />
        </div>
        <div className="destination_card">
          <BsFillCalendar2DateFill size={18} className="icon_destination" />
          <input
            type="text"
            placeholder="Date"
            name="date"
            value={searchCriteria.date}
            onChange={handleSearchChange}
          />
        </div>
        <div className="destination_card">
          <BiSearchAlt color="black" size={18} />
          <button className="destination_button">Search</button>
        </div>
      </div>
      <Filtering selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <FilterImages images={filteredImages} selectedFilter={selectedFilter} />
    </section>
    
  )
}


export const Filtering = ({ selectedFilter, setSelectedFilter }) => {
    const filters = ['All', 'Recommended', 'Beach', 'Park', 'Nature', 'Mountain'];
  return (
    <div className='filtering_container container'>
    {filters.map((filter) => (
      <div
        key={filter}
        className={`filtering_card ${selectedFilter === filter ? 'filterActive' : ''}`}
        onClick={() => setSelectedFilter(filter)} 
      >
        <p className='destination_section-p'>{filter}</p>
      </div>
    ))}
  </div>
  )
}


export const FilterImages = ({ images, selectedFilter }) => {
    const filteredImages = selectedFilter === 'All'
    ? images
    : images.filter(image => image.category === selectedFilter);
  return (
    <div className='filter_images_container container'>
    {filteredImages.map((image, index) => (
      <div key={index} className="filter_images_card">
        <img src={image.src} alt={image.category} />
        <div className="filter_images_content">
            <div className="filter_images_content_card">
               
                <div className="filter_images_box">
                <MdLocationPin size={10}/>
                <p>{image.location}</p>
                </div>
            </div>
            <div className="filter_images_content_card">
                <p>{image.rate}</p>
            </div>
            </div>
      </div>
    ))}
  </div>
  )
}



export default Destinations

