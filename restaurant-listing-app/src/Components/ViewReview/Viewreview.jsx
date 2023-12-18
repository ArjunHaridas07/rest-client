import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';

function Viewreview({ reviews }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        Reviews
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
          {Array.isArray(reviews) && reviews.length > 0 ? (
            reviews.map((item) => (
              <div key={item.id}>
                <h2>{item.name}</h2>
                <h4>{item.date}</h4>
                <h4>{item.ratings}</h4>
              </div>
            ))
          ) : (
            <p>No reviews available</p>
          )}
        </div>
      </Fade>
    </div>
  );
}

export default Viewreview;
