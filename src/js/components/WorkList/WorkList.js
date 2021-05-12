import React from 'react';
import { Work } from '..';
import { WORKS } from '../../app-data';

export const WorkList = () => (
  <section>
    <div className='container'>
      {WORKS.map((work) => (
        <Work key={work.id} work={work} />
      ))}
    </div>
  </section>
);
