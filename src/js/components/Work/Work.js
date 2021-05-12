import React from 'react';

export const Work = ({ work }) => (
  <div className='work'>
    <img src={work.image} alt={work.title} />
    {/* <h2>{work.title}</h2> */}
    {/* <div>{work.description}</div> */}
    {/* <button>More {work.id}</button> */}
  </div>
);
