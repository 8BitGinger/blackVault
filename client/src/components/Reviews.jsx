import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants'; // Assuming you have a motion utility for animations
import '../assets/css/reviews.css'; // Assuming you have a CSS file for styling

import reviews from '../utils/reviews'; // Importing the reviews data

const Reviews = () => {
  
      const renderStars = (rating) => {
    const stars = [];
    // Render filled stars
    for (let i = 0; i < rating; i++) {
      stars.push(
        <i key={`filled-${i}`} className="fas fa-star review-star filled"></i>
      );
    }
    // Render empty stars to complete a 5-star rating
    for (let i = rating; i < 5; i++) {
      stars.push(
        <i key={`empty-${i}`} className="far fa-star review-star empty"></i>
      );
    }
    return stars;
  };

  return (
    <>
      {/* Link to Font Awesome CDN for icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      
      <div className="review-container"
        
      >
        <motion.div className="review-wrapper"
        variants={fadeIn('down', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}>
          <h1 className="review-heading">Client Reviews</h1>
          
          {/*
            Map over the reviews array and render a review card for each object.
            Each card displays the customer's name, star rating, and review text.
          */}
          <div className="review-grid">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="review-card"
              >
                {/* Customer Name */}
                <h2 className="customer-name">{review.customerName}</h2>
                
                {/* Star Rating */}
                <div className="star-rating">
                  {renderStars(review.stars)}
                  <span className="rating-text">{review.stars} out of 5</span>
                </div>
                
                {/* Review Paragraph */}
                <p className="review-text">"{review.reviewPara}"</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Reviews;
