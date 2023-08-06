import React from "react";
import "./readmore.css";
const ReadMore = () => {
  return (
    <section className="read-more-section">
      <h2>Read More</h2>
      <ul className="post-list">
        <li className="post-item">
          <a href="#" className="post-link">
            <h3 className="post-title">Post 1 Title</h3>
            <p className="post-excerpt">Post 1 excerpt goes here...</p>
          </a>
        </li>
        <li className="post-item">
          <a href="#" className="post-link">
            <h3 className="post-title">Post 2 Title</h3>
            <p className="post-excerpt">Post 2 excerpt goes here...</p>
          </a>
        </li>
        <li className="post-item">
          <a href="#" className="post-link">
            <h3 className="post-title">Post 3 Title</h3>
            <p className="post-excerpt">Post 3 excerpt goes here...</p>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ReadMore;
