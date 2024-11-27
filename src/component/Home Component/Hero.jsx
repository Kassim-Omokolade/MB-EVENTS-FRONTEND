import React from 'react'
import ActionBtn from '../ActionBtn';

const Hero = () => {
  return (
    <div className="herosection">
      <div className="container h-100 w-100 d-flex justify-content-start align-items-center text-white">
        <div style={{ maxWidth: "583px" }}>
          <h1 className="mb-3 display-5 fw-bolder">
            Discover Unforgettable Experiences With Ease{" "}
          </h1>
          <p className="fs-5 fw-light">
            "Find, book, and manage tickets for concerts, workshops, and social
            gatherings with ease. Create events, connect with your audience, and
            start making lasting memories today!"
          </p>
          <ActionBtn content="Sign up" width="264px" className="herobtn" />
        </div>
      </div>
    </div>
  );
}

export default Hero