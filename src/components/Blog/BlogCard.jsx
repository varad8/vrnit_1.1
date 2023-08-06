import React from "react";

const BlogCard = () => {
  return (
    <div className="container">
      <h2 className="text-center text-white mb-5">
        <br />
        Latest Blog Posts
      </h2>
      <div className="row">
        <div className="col-sm-12 col-md-4 mb-3">
          <a
            href="/blog/python-chatbot-using-openai"
            style={{ textDecoration: "none" }}
          >
            <div className="card glassmorphism-card">
              <img
                src="https://via.placeholder.com/300x150"
                alt="Blog Post"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Python | OpenAi ChatBot </h5>
                <p className="card-text">
                  This code is an example of a simple chatbot using the OpenAI
                  GPT-3 language model.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
          <div className="card glassmorphism-card">
            <img
              src="https://via.placeholder.com/300x150"
              alt="Blog Post"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Blog Post Title</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                id nibh id elit suscipit rutrum.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
          <div className="card glassmorphism-card">
            <img
              src="https://via.placeholder.com/300x150"
              alt="Blog Post"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Blog Post Title</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                id nibh id elit suscipit rutrum.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 mb-3">
          <div className="card glassmorphism-card">
            <img
              src="https://via.placeholder.com/300x150"
              alt="Blog Post"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Blog Post Title</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                id nibh id elit suscipit rutrum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
