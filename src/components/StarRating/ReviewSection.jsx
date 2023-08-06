import React, { useState, useEffect } from "react";
import "firebase/firestore";
import "./ReviewSection.css";

import { firestore, storage } from "../../firebase";

const ReviewSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const testimonialRef = firestore.collection("reviews");

    testimonialRef.get().then((querySnapshot) => {
      const testimonials = [];
      querySnapshot.forEach((doc) => {
        testimonials.push(doc.data());
      });
      setTestimonials(testimonials);
    });
  }, []);

  const handlePrev = () => {
    setCurrentTestimonialIndex(currentTestimonialIndex - 1);
  };

  const handleNext = () => {
    setCurrentTestimonialIndex(currentTestimonialIndex + 1);
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];
  const testimonialCount = testimonials.length;

  function StarRating({ count }) {
    const stars = Array.from({ length: count }, (_, index) => (
      <i
        key={index}
        className="fa fa-star testimonial-star"
        aria-hidden="true"
      ></i>
    ));
    return <div>{stars}</div>;
  }

  return (
    <div className="testimonial-container shadow-md border border-dark border-2 mt-5 mb-5">
      <img
        className="testimonial-profile"
        src={currentTestimonial?.profile}
        alt="Profile Pic"
      />
      <StarRating count={currentTestimonial?.rating} />
      <div className="testimonial-text">{currentTestimonial?.name}</div>
      <div className="testimonial-author">
        {currentTestimonial?.review.substring(0, 500)}
      </div>
      <div className="testimonial-nav">
        <button
          className="btn btn-outline-primary"
          id="prev-btn"
          onClick={handlePrev}
          disabled={currentTestimonialIndex === 0}
        >
          Previous
        </button>
        <span className="testimonial-count">
          {testimonialCount > 0 &&
            `${currentTestimonialIndex + 1} of ${testimonialCount}`}
        </span>
        <button
          className="btn btn-outline-primary"
          id="next-btn"
          onClick={handleNext}
          disabled={currentTestimonialIndex === testimonialCount - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
